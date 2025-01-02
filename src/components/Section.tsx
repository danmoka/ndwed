import { LucideIcon } from 'lucide-react';
import React from 'react';

interface SectionProps {
  icon?: LucideIcon;
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export function Section({ icon: Icon, title, children, className = '' }: SectionProps) {
  return (
    <section className={`p-6 ${className}`}>
      {(Icon || title) && (
        <div className="flex items-center gap-4 mb-4">
          <div className="h-px bg-white/30 flex-1"></div>
          {Icon && <Icon className="w-8 h-8 text-gray-200" />}
          {title && <h2 className="text-2xl font-light">{title}</h2>}
          <div className="h-px bg-white/30 flex-1"></div>
        </div>
      )}
      {children}
    </section>
  );
}