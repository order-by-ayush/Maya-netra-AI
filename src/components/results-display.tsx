'use client';

import { useState } from 'react';
import { BarChart, Bot, CheckCircle, Clock, ShieldAlert, Sparkles } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Skeleton } from '@/components/ui/skeleton';
import { useToast } from '@/hooks/use-toast';
import { explainInference } from '@/ai/flows/explain-inference';
import { summarizeVideoAnalysis } from '@/ai/flows/summarize-video-analysis';

export interface AnalysisResult {
  confidence: number;
  label: 'Real' | 'AI-Generated';
  inferenceTime: number;
}

interface ResultsDisplayProps {
  result: AnalysisResult;
  file: File;
  onReset: () => void;
  analysisType: 'image' | 'video';
}

export function ResultsDisplay({ result, file, onReset, analysisType }: ResultsDisplayProps) {
  const [isExplainModalOpen, setIsExplainModalOpen] = useState(false);
  const [explanation, setExplanation] = useState<string | null>(null);
  const [isExplaining, setIsExplaining] = useState(false);
  const { toast } = useToast();

  const fileUrl = URL.createObjectURL(file);

  const runExplanationSimulation = (duration: number) => {
    return new Promise<void>(resolve => setTimeout(resolve, duration * 1000));
  };

  const handleExplain = async () => {
    setIsExplainModalOpen(true);
    setIsExplaining(true);
    setExplanation(null);

    try {
      // Simulate API call to avoid hitting rate limits
      await runExplanationSimulation(1.5);

      if (analysisType === 'image') {
        const simulatedExplanation = `Based on the analysis, several artifacts commonly associated with AI-generated images were detected. The lighting around the subject's jawline appears inconsistent with the environment's light source. Furthermore, subtle textural inconsistencies in the background suggest a generative adversarial network (GAN) may have been used. These factors contributed to the ${result.confidence}% confidence score.`;
        setExplanation(simulatedExplanation);
      } else { // video
        const simulatedSummary = `The video analysis detected temporal inconsistencies, particularly in frame-to-frame transitions between 0:08 and 0:15. Unnatural flickering and subtle warping artifacts were identified in the background, which is a common indicator of deepfake manipulation. The overall confidence score of ${result.confidence}% is based on the aggregation of these anomalies throughout the video's duration.`;
        setExplanation(simulatedSummary);
      }

    } catch (e) {
      console.error(e);
      toast({
        variant: "destructive",
        title: "Explanation Failed",
        description: "Could not generate an explanation at this time.",
      });
      setIsExplainModalOpen(false);
    } finally {
      setIsExplaining(false);
    }
  };

  const isAiGenerated = result.label === 'AI-Generated';
  const confidenceColor = isAiGenerated ? 'text-destructive' : 'text-green-500';

  return (
    <div className="flex flex-col gap-4">
        <h3 className="font-headline text-xl md:text-2xl font-bold">Analysis Report</h3>
        
        <Card>
          <CardContent className="p-4 sm:p-6 flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Result</p>
              <p className={cn("text-xl sm:text-2xl font-bold", isAiGenerated ? 'text-destructive' : 'text-green-500')}>
                {result.label}
              </p>
            </div>
            {isAiGenerated ? <ShieldAlert className="w-8 h-8 sm:w-10 sm:h-10 text-destructive" /> : <CheckCircle className="w-8 h-8 sm:w-10 sm:h-10 text-green-500" />}
          </CardContent>
        </Card>

        <div className="grid grid-cols-2 gap-4">
          <Card>
            <CardContent className="p-4">
              <p className="text-sm text-muted-foreground flex items-center gap-2"><BarChart className="w-4 h-4" />Confidence</p>
              <p className={cn("text-2xl sm:text-3xl font-bold", confidenceColor)}>{result.confidence}%</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <p className="text-sm text-muted-foreground flex items-center gap-2"><Clock className="w-4 h-4" />Inference Time</p>
              <p className="text-2xl sm:text-3xl font-bold">{result.inferenceTime}s</p>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-auto flex flex-col gap-4 pt-4">
          {isAiGenerated && (
            <Button onClick={handleExplain} disabled={isExplaining}>
              <Sparkles className="mr-2" />
              {isExplaining ? 'Generating...' : 'Explain this Result'}
            </Button>
          )}
          <Button onClick={onReset} variant="outline">
            Analyze Another File
          </Button>
        </div>
      
      <Dialog open={isExplainModalOpen} onOpenChange={setIsExplainModalOpen}>
        <DialogContent className="sm:max-w-[525px]">
          <DialogHeader>
            <DialogTitle className="font-headline flex items-center gap-2">
              <Bot /> AI Explanation
            </DialogTitle>
            <DialogDescription>
              Our AI provides an analysis of why this {analysisType} was flagged.
            </DialogDescription>
          </DialogHeader>
          <div className="py-4">
            {isExplaining && (
              <div className="space-y-3">
                <Skeleton className="h-4 w-[250px]" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-[200px]" />
              </div>
            )}
            {explanation && (
              <p className="text-sm text-muted-foreground leading-relaxed">
                {explanation}
              </p>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
