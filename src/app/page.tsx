import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { AnalysisPanel } from '@/components/analysis-panel';
import { FileImage, Video } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 container mx-auto py-8 px-4">
        <div className="text-center mb-12">
          <h1 className="font-headline text-4xl md:text-6xl font-bold tracking-tighter mb-4">
            Unveil the Truth
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Upload an image or video to detect digital manipulations and AI-generated content with our advanced analysis tools.
          </p>
        </div>

        <Tabs defaultValue="image" className="w-full max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="image">
              <FileImage className="mr-2" />
              Image Analysis
            </TabsTrigger>
            <TabsTrigger value="video">
              <Video className="mr-2" />
              Video Analysis
            </TabsTrigger>
          </TabsList>
          <TabsContent value="image">
            <AnalysisPanel
              analysisType="image"
              acceptedFileTypes={{ 'image/jpeg': [], 'image/png': [] }}
              title="Image Deepfake Detection"
              description="Upload a JPG or PNG file to check for signs of AI generation or manipulation."
            />
          </TabsContent>
          <TabsContent value="video">
            <AnalysisPanel
              analysisType="video"
              acceptedFileTypes={{ 'video/mp4': [] }}
              title="Video Deepfake Detection"
              description="Upload an MP4 video to analyze its frames for temporal inconsistencies and artifacts."
            />
          </TabsContent>
        </Tabs>
      </main>
      <Footer />
    </div>
  );
}
