import { cn } from '@/lib/utils';
import { VariantProps, cva } from 'class-variance-authority';
import { HTMLAttributes } from 'react';

const cellVariants = cva(
  'relative flex min-h-16 w-screen min-w-full max-w-112 flex-col justify-center md:w-96 md:min-w-96 md:max-w-96',
  {
    variants: {
      height: {
        small: 'h-24',
        large: 'h-144 md:h-144',
      },
      background: {
        lightest: 'bg-background border-background-100 divide-background-100',
        lighter: 'bg-background-50',
        light: 'bg-background-100',
        medium: 'bg-background-600 text-background',
        mediumDark: 'bg-background-700 text-background',
        dark: 'bg-background-800 text-background',
        darker: 'bg-background-900 text-background',
        darkest: 'bg-background-950 text-background',
      },
    },
    defaultVariants: {
      height: 'small',
      background: 'lightest',
    },
  },
);

type Props = HTMLAttributes<HTMLDivElement> & VariantProps<typeof cellVariants>;

export default function Cell({
  className,
  height,
  background,
  children,
  ...props
}: Props) {
  return (
    <div
      className={cn(cellVariants({ height, background, className }))}
      {...props}
    >
      {children}
    </div>
  );
}
