'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';

type GradientButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
};

export function GradientButton({
  children,
  className,
  ...props
}: GradientButtonProps) {
  // #D5B3FF
  // #7326B7
  return (
    <button
      type={props.type ?? 'button'}
      className={cn(
        ' shadow-sm border-transparent',
        'bg-gradient-to-r from-[#D5B3FF] to-[#7326B7] hover:cursor-pointer',
        'text-white font-medium ',
        'flex items-center justify-center',
        'transition-opacity hover:opacity-90 disabled:opacity-60',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
