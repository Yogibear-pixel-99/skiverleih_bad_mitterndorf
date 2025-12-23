import React from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const glassContainerVariants = cva(
  "relative rounded-lg shadow-md",
  {
    variants: {
      variant: {
        low: "bg-white/20 backdrop-blur-sm border-white/10",
        med: "bg-white/30 backdrop-blur-md border-white/20",
        high: "bg-white/40 backdrop-blur-lg border-white/30",
      },
    },
    defaultVariants: {
      variant: "med",
    },
  }
);

interface GlassContainerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof glassContainerVariants> {
  children: React.ReactNode;
}

export default function GlassContainer({
  children,
  variant,
  className,
  ...props
}: GlassContainerProps) {
  return (
    <section className={cn(glassContainerVariants({ variant }), className)} {...props}>
      {children}
    </section>
  );
}