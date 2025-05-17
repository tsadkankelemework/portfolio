// components/download-button.tsx
'use client';

import { Download } from 'lucide-react';
import { Button } from './ui/button';

export function DownloadButton() {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/Tsadkan-Kelemework-RESUME.pdf';
    link.download = 'Tsadkan-Kelemework-RESUME.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Button variant="outline" onClick={handleDownload}>
      <Download className="mr-2 h-4 w-4" /> Download RESUME
    </Button>
  );
}