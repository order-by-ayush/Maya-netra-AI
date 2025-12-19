'use client';

import { useState } from 'react';
import type { Accept } from 'react-dropzone';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { FileUploadZone } from '@/components/file-upload-zone';
import { ResultsDisplay, type AnalysisResult } from '@/components/results-display';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';

type AnalysisStatus = 'idle' | 'analyzing' | 'complete' | 'error';
type AnalysisType = 'image' | 'video';

const ANALYSIS_STEPS = [
  'Initializing analysis...',
  'Extracting features...',
  'Analyzing for face manipulation...',
  'Scanning for GAN artifacts...',
  'Checking for temporal inconsistencies...',
  'Aggregating scores...',
  'Finalizing report...',
];

interface AnalysisPanelProps {
  analysisType: AnalysisType;
  acceptedFileTypes: Accept;
  title: string;
  description: string;
}

export function AnalysisPanel({ analysisType, acceptedFileTypes, title, description }: AnalysisPanelProps) {
  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState<AnalysisStatus>('idle');
  const [progress, setProgress] = useState(0);
  const [progressStep, setProgressStep] = useState('');
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleFileSelect = (selectedFile: File) => {
    setFile(selectedFile);
    handleAnalysis(selectedFile);
  };

  const runSimulation = (duration: number) => {
    let currentProgress = 0;
    const interval = (duration * 1000) / (ANALYSIS_STEPS.length * 10);
    
    return new Promise<void>((resolve) => {
      const progressInterval = setInterval(() => {
        currentProgress += 1;
        const stepIndex = Math.floor((currentProgress / 100) * ANALYSIS_STEPS.length);
        setProgress(currentProgress);
        setProgressStep(ANALYSIS_STEPS[stepIndex] || 'Finalizing report...');

        if (currentProgress >= 100) {
          clearInterval(progressInterval);
          setProgress(100);
          resolve();
        }
      }, interval);
    });
  };

  const handleAnalysis = async (analysisFile: File) => {
    if (!analysisFile) return;
    setStatus('analyzing');
    setError(null);
    setProgress(0);
    setResult(null);

    const inferenceTime = parseFloat((Math.random() * 5 + 2).toFixed(2)); // 2-7 seconds
    
    try {
      await runSimulation(inferenceTime);

      // Simulate API call result
      const confidence = Math.floor(Math.random() * 101);
      const label = confidence > 60 ? 'AI-Generated' : 'Real';
      
      setResult({
        confidence,
        label,
        inferenceTime,
      });
      setStatus('complete');
    } catch (e) {
      setError('An unexpected error occurred during analysis.');
      setStatus('error');
    }
  };

  const handleReset = () => {
    setFile(null);
    setStatus('idle');
    setProgress(0);
    setProgressStep('');
    setResult(null);
    setError(null);
  };

  const renderContent = () => {
    switch (status) {
      case 'idle':
        return (
          <FileUploadZone
            onFileSelect={handleFileSelect}
            accept={acceptedFileTypes}
            analysisType={analysisType}
          />
        );
      case 'analyzing':
        return (
          <div className="text-center flex flex-col items-center justify-center h-64">
            <div className="w-full max-w-md">
              <p className="font-headline text-lg mb-4">{progressStep}</p>
              <Progress value={progress} className="w-full" />
              <p className="text-muted-foreground text-sm mt-2">{progress.toFixed(0)}%</p>
            </div>
          </div>
        );
      case 'complete':
        return (
          result && file && <ResultsDisplay result={result} file={file} onReset={handleReset} analysisType={analysisType} />
        );
      case 'error':
        return (
          <div className="text-center flex flex-col items-center justify-center h-64">
             <p className="text-destructive mb-4">{error}</p>
             <Button onClick={handleReset}>Try Again</Button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-headline">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        {renderContent()}
      </CardContent>
    </Card>
  );
}
