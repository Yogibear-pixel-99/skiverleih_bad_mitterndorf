import React from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const glassContainerVariants = cva(
  "relative rounded-2xl border shadow-[0_8px_30px_rgba(0,0,0,0.08)]",
  {
    variants: {
      variant: {
        low: "bg-white/40 backdrop-blur-sm border-white/10",
        med: "bg-white/50 backdrop-blur-md border-white/20",
        high: "bg-white/60 backdrop-blur-xl border-white/30",
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
