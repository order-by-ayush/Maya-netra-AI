
'use client';
import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Plus } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { ResultsDisplay } from '@/components/results-display';
import type { AnalysisResult } from '@/components/results-display';
import { Separator } from '@/components/ui/separator';
import { detectManipulation } from '@/ai/flows/detect-manipulation';

interface DetectionPanelProps {
  isEmbedded?: boolean;
}

export const DetectionPanel = ({ isEmbedded = false }: DetectionPanelProps) => {
  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState<'idle' | 'analyzing' | 'complete' | 'error'>('idle');
  const [progress, setProgress] = useState(0);
  const { toast } = useToast();
  const inputRef = useRef<HTMLInputElement>(null);
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleFileSelect = (selectedFile: File) => {
    if (selectedFile.size > 50 * 1024 * 1024) {
      toast({
        variant: 'destructive',
        title: 'File too large',
        description: 'Please upload a file smaller than 50MB.',
      });
      return;
    }
    setFile(selectedFile);
  };
  
  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      handleFileSelect(e.target.files[0]);
    }
  };

  const runSimulation = (duration: number, onProgress: (p: number) => void) => {
    let currentProgress = 0;
    const intervalTime = 50; 
    const steps = (duration * 1000) / intervalTime;
    const increment = 100 / steps;

    return new Promise<void>((resolve) => {
      const progressInterval = setInterval(() => {
        currentProgress += increment;
        onProgress(Math.min(currentProgress, 100));

        if (currentProgress >= 100) {
          clearInterval(progressInterval);
          resolve();
        }
      }, intervalTime);
    });
  };

  const handleRunDetection = async () => {
    if (!file) {
      toast({
        variant: "destructive",
        title: "No file selected",
        description: "Please upload a file to start the detection.",
      });
      return;
    }

    setStatus('analyzing');
    setProgress(0);
    setResult(null);
    setError(null);
    const startTime = Date.now();

    try {
      const analysisPromise = new Promise<AnalysisResult>(async (resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = async () => {
          try {
            const mediaDataUri = reader.result as string;
            const res = await detectManipulation({ mediaDataUri });
            const endTime = Date.now();
            const inferenceTime = parseFloat(((endTime - startTime) / 1000).toFixed(2));
            resolve({ ...res, inferenceTime });
          } catch(e) {
            reject(e);
          }
        };
        reader.onerror = (err) => {
          reject(new Error("Failed to read the file."));
        }
      });
      
      const simulationPromise = runSimulation(5, setProgress);

      const [apiResult] = await Promise.all([analysisPromise, simulationPromise]);

      setResult(apiResult);
      setStatus('complete');
      setProgress(100);

    } catch (e: any) {
      console.error(e);
      const errorMessage = e.message || "An unexpected error occurred during analysis.";
      setError(errorMessage);
      setStatus('error');
      toast({
        variant: "destructive",
        title: "Analysis Failed",
        description: errorMessage,
      });
    }
  };

  const handleReset = () => {
    setFile(null);
    setStatus('idle');
    setProgress(0);
    setResult(null);
    setError(null);
  };

  return (
    <>
      {!isEmbedded && (
         <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-3xl font-bold">Detection</h2>
              <p className="text-muted-foreground">
                Upload a file to preview the full experience: drag-and-drop, scanning animation, progress, and results.
              </p>
            </div>
            <Button variant="ghost" onClick={handleReset}>Reset</Button>
          </div>
      )}

      <div className="grid md:grid-cols-2 gap-8">
        {/* Left Panel */}
        <Card className="bg-card/50">
          <CardHeader>
            <div className="flex justify-between items-start">
              <div>
                <CardTitle>Upload media</CardTitle>
                <CardDescription>Supported: JPG, PNG, MP4</CardDescription>
              </div>
              <Badge variant="outline">max ~50MB</Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div 
              className="relative border-2 border-dashed border-border rounded-lg h-64 flex flex-col items-center justify-center text-center cursor-pointer hover:border-primary transition-colors"
              onDragOver={(e) => e.preventDefault()}
              onDrop={(e) => {
                e.preventDefault();
                if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
                  handleFileSelect(e.dataTransfer.files[0]);
                }
              }}
              onClick={() => inputRef.current?.click()}
            >
              {file ? (
                <p className='font-medium'>{file.name}</p>
              ) : (
                <>
                  <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center mb-4">
                    <Plus className="text-muted-foreground" />
                  </div>
                  <p className="font-semibold">Drag & drop your file here</p>
                  <p className="text-sm text-muted-foreground">or click to browse (JPG/PNG/MP4)</p>
                </>
              )}
               <input
                ref={inputRef}
                type="file"
                onChange={onFileChange}
                accept="image/jpeg,image/png,video/mp4"
                className="hidden"
              />
            </div>

            <div className="flex justify-between items-end">
              <div className="text-xs text-muted-foreground">
                <p className="font-semibold">Tip:</p>
                <p>Try both an image and a short MP4 to see different<br/>explanation copy.</p>
              </div>
              <Button onClick={handleRunDetection} disabled={status === 'analyzing' || !file}>
                {status === 'analyzing' ? 'Analyzing...' : 'Run detection'}
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Right Panel */}
        <Card className="bg-card/50 flex flex-col">
          <CardHeader className="flex flex-row justify-between items-start">
            <div>
              <CardTitle>Result</CardTitle>
              <CardDescription>Confidence score, verdict badge, inference time, and summary.</CardDescription>
            </div>
            <Badge variant={status === 'idle' ? 'outline' : status === 'error' ? 'destructive' : 'default'}>
              {status === 'idle' && 'Awaiting analysis'}
              {status === 'analyzing' && 'In progress'}
              {status === 'complete' && 'Complete'}
              {status === 'error' && 'Error'}
            </Badge>
          </CardHeader>
          <CardContent className="flex-grow flex flex-col">
            {status === 'idle' && (
              <div className="h-full flex flex-col justify-center">
                <h3 className="font-semibold mb-2">No result yet</h3>
                <p className="text-muted-foreground text-sm mb-6">
                  Upload an image or MP4 and click Run detection. You'll see an animated scan, step-wise progress, and a result card with confidence and verdict.
                </p>
                <ul className="space-y-3 text-sm">
                  <li className="flex justify-between items-center text-muted-foreground"><span>Face manipulation</span><span>-</span></li>
                  <li className="flex justify-between items-center text-muted-foreground"><span>GAN artifacts</span><span>-</span></li>
                  <li className="flex justify-between items-center text-muted-foreground"><span>Temporal consistency (video)</span><span>-</span></li>
                </ul>
              </div>
            )}
            {(status === 'analyzing' || (status === 'complete' && !result)) && (
              <div className="h-full flex flex-col justify-center items-center text-center">
                <p className="font-headline text-lg mb-4">Analyzing...</p>
                 <Progress value={progress} className="w-full max-w-sm" />
                 <p className="text-right text-sm mt-1 text-muted-foreground w-full max-w-sm">{progress.toFixed(0)}%</p>
              </div>
            )}
            {status === 'complete' && result && file && (
              <ResultsDisplay result={result} file={file} onReset={handleReset} analysisType={file.type.startsWith('image') ? 'image' : 'video'} />
            )}
             {status === 'error' && (
              <div className="h-full flex flex-col justify-center items-center text-center text-destructive">
                <p className="font-semibold mb-2">Analysis Failed</p>
                <p className="text-sm">{error}</p>
              </div>
            )}
            
            <div className="mt-auto pt-8">
               <Separator className="mb-4" />
              <p className="text-sm text-muted-foreground mb-2">Pipeline</p>
              <Progress value={status === 'complete' || status === 'analyzing' ? progress : 0} />
               <p className="text-right text-sm mt-1 text-muted-foreground">
                {status === 'complete' || status === 'analyzing' ? progress.toFixed(0) : 0}%
               </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};
