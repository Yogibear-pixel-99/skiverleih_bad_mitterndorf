import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils'; 

type ContainerVariantProps = VariantProps<typeof containerVariants>;

type ContainerProps = React.PropsWithChildren<ContainerVariantProps> & {
  className?: string;
};

const containerVariants = cva(cn('flex flex-col'), {
  variants: {
    variant: {
      small: 'gap-2',
      medium: 'gap-4',
      large: 'gap-10',
    },
    pad: {
      small: 'py-1 px-2',
      medium: 'py-2 px-3',
      large: 'py-4 px-8',
    },
  },
  defaultVariants: {
    variant: 'medium',
  },
});

function FlexContainer({ children, variant, pad, className }: ContainerProps) {
  return <div className={cn(containerVariants({ variant, pad }), className)}>{children}</div>;
}

export { FlexContainer };
