import React from 'react';
import { Leaf } from 'lucide-react';

export function Delimiter() {
  return (
    <div className="text-center mb-12">
      <div className="flex items-center justify-center gap-4">
        <div className="h-px bg-white/30 flex-1"></div>
        <Leaf className="w-6 h-6 text-sage-300" />
        <div className="h-px bg-white/30 flex-1"></div>
      </div>
    </div>
  );
}