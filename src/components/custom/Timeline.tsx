
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface TimelineProps {
  children: ReactNode;
  className?: string;
}

interface TimelineItemProps {
  children: ReactNode;
  className?: string;
}

interface TimelineHeadingProps {
  children: ReactNode;
  className?: string;
}

interface TimelineDescriptionProps {
  children: ReactNode;
  className?: string;
}

export function Timeline({ children, className }: TimelineProps) {
  return (
    <div className={cn("space-y-6", className)}>
      {children}
    </div>
  );
}

export function TimelineItem({ children, className }: TimelineItemProps) {
  return (
    <div className={cn("relative pl-8 pb-4 last:pb-0 after:absolute after:left-[0.6rem] after:top-8 after:h-[calc(100%-2rem)] after:w-[1px] after:bg-border last:after:hidden", className)}>
      <div className="absolute left-0 top-1 h-5 w-5 rounded-full border-2 border-primary bg-background"></div>
      <div>
        {children}
      </div>
    </div>
  );
}

export function TimelineHeading({ children, className }: TimelineHeadingProps) {
  return (
    <h3 className={cn("mb-1 font-medium leading-snug", className)}>
      {children}
    </h3>
  );
}

export function TimelineDescription({ children, className }: TimelineDescriptionProps) {
  return (
    <p className={cn("text-sm text-muted-foreground", className)}>
      {children}
    </p>
  );
}
