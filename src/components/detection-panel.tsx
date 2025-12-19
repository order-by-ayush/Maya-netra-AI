
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

interface DetectionPanelProps {
  isEmbedded?: boolean;
}

export const DetectionPanel = ({ isEmbedded = false }: DetectionPanelProps) => {
  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState<'idle' | 'analyzing' | 'complete'>('idle');
  const [progress, setProgress] = useState(0);
  const { toast } = useToast();
  const inputRef = useRef<HTMLInputElement>(null);
  const [result, setResult] = useState<AnalysisResult | null>(null);

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

    const analysisSteps = [
      { name: 'Uploading file', duration: 10 },
      { name: 'Preprocessing media', duration: 15 },
      { name: 'Running neural analysis', duration: 50 },
      { name: 'Compiling results', duration: 25 },
    ];
    
    let cumulativeProgress = 0;
    for (const step of analysisSteps) {
      cumulativeProgress += step.duration;
      await new Promise(resolve => setTimeout(resolve, Math.random() * 500 + 200));
      setProgress(cumulativeProgress / analysisSteps.reduce((acc, s) => acc + s.duration, 0) * 100);
    }
    
    const confidence = Math.floor(Math.random() * 40) + 60; // 60-99% for AI, or low for real
    const isAi = Math.random() > 0.3; // 70% chance of being AI
    
    const finalResult = {
      confidence: isAi ? confidence : 100 - confidence,
      label: isAi ? 'AI-Generated' : 'Real' as 'AI-Generated' | 'Real',
      inferenceTime: parseFloat((Math.random() * 2 + 0.5).toFixed(2)),
    };
    
    setResult(finalResult);
    setStatus('complete');
  };

  const handleReset = () => {
    setFile(null);
    setStatus('idle');
    setProgress(0);
    setResult(null);
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
            <CardTitle>Upload media</CardTitle>
            <CardDescription>Supported: JPG, PNG, MP4 (UI-only simulation)</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div 
              className="relative border-2 border-dashed border-border rounded-lg h-64 flex flex-col items-center justify-center text-center cursor-pointer hover:border-primary transition-colors"
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

            <div className="text-xs text-muted-foreground">
              <p className="font-semibold">Tip:</p>
              <p>Try both an image and a short MP4 to see different explanation copy.</p>
            </div>

            <Button size="lg" className="w-full" onClick={handleRunDetection} disabled={status === 'analyzing'}>
              {status === 'analyzing' ? 'Analyzing...' : 'Run detection'}
            </Button>
          </CardContent>
        </Card>

        {/* Right Panel */}
        <Card className="bg-card/50">
          <CardHeader className="flex flex-row justify-between items-start">
            <div>
              <CardTitle>Result</CardTitle>
              <CardDescription>Confidence score, verdict badge, inference time, and summary.</CardDescription>
            </div>
            <Badge variant={status === 'idle' ? 'outline' : 'default'}>{status === 'idle' ? 'Awaiting analysis' : status === 'analyzing' ? 'In progress' : 'Complete'}</Badge>
          </CardHeader>
          <CardContent>
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
            {status === 'analyzing' && (
              <div className="h-full flex flex-col justify-center items-center text-center">
                <p className="font-headline text-lg mb-4">Analyzing...</p>
              </div>
            )}
            {status === 'complete' && result && file && (
              <ResultsDisplay result={result} file={file} onReset={handleReset} analysisType={file.type.startsWith('image') ? 'image' : 'video'} />
            )}
            
            <div className="mt-auto pt-8">
               <Separator className="mb-4" />
              <p className="text-sm text-muted-foreground mb-2">Pipeline</p>
              <Progress value={progress} />
               <p className="text-right text-sm mt-1 text-muted-foreground">{progress.toFixed(0)}%</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};
