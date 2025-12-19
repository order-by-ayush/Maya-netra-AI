'use client';

import { useState, useCallback, useRef } from 'react';
import type { Accept } from 'react-dropzone';
import { UploadCloud } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import placeholderImages from '@/lib/placeholder-images.json';

interface FileUploadZoneProps {
  onFileSelect: (file: File) => void;
  accept: Accept;
  analysisType: 'image' | 'video';
}

export function FileUploadZone({ onFileSelect, accept, analysisType }: FileUploadZoneProps) {
  const [isDragging, setIsDragging] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const handleFile = useCallback((file: File) => {
    const fileType = file.type;
    const acceptedTypes = Object.keys(accept);

    if (file && acceptedTypes.some(type => file.type.startsWith(type.replace('*', '')))) {
      onFileSelect(file);
    } else {
      toast({
        variant: "destructive",
        title: "Invalid File Type",
        description: `Please upload one of the supported file types: ${acceptedTypes.join(', ')}`,
      });
    }
  }, [accept, onFileSelect, toast]);

  const onDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const onDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
  };
  
  const onDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault(); // Necessary to allow drop
  };

  const onDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFile(e.dataTransfer.files[0]);
      e.dataTransfer.clearData();
    }
  };

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      handleFile(e.target.files[0]);
    }
  };

  const onAreaClick = () => {
    inputRef.current?.click();
  };

  const placeholderImage = analysisType === 'image' ? placeholderImages.placeholderImages[0] : placeholderImages.placeholderImages[1];

  return (
    <div
      onClick={onAreaClick}
      onDragEnter={onDragEnter}
      onDragLeave={onDragLeave}
      onDragOver={onDragOver}
      onDrop={onDrop}
      className={cn(
        "relative group w-full h-64 border-2 border-dashed rounded-lg transition-colors duration-300 cursor-pointer flex flex-col items-center justify-center text-center p-4",
        isDragging ? "border-primary bg-primary/10" : "border-border hover:border-primary/50"
      )}
    >
      <div className="absolute inset-0 overflow-hidden rounded-lg">
        <Image 
          src={placeholderImage.imageUrl} 
          alt={placeholderImage.description}
          fill
          className="object-cover opacity-10 group-hover:opacity-20 transition-opacity duration-300"
          data-ai-hint={placeholderImage.imageHint}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent"></div>
      </div>
      <div className="relative z-10 flex flex-col items-center">
        <UploadCloud className="w-12 h-12 text-muted-foreground group-hover:text-primary transition-colors duration-300 mb-4" />
        <p className="font-semibold text-foreground">
          Drag & drop your {analysisType} here, or <span className="text-primary">click to browse</span>
        </p>
        <p className="text-sm text-muted-foreground mt-1">
          Supported formats: {Object.keys(accept).map(key => key.split('/')[1].toUpperCase()).join(', ')}
        </p>
      </div>
      <input
        ref={inputRef}
        type="file"
        onChange={onFileChange}
        accept={Object.keys(accept).join(',')}
        className="hidden"
      />
    </div>
  );
}
