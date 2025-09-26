// File: packages/nextjs/components/ui/Card.tsx
import { HTMLAttributes, forwardRef } from "react";
import { cn } from "~~/utils/scaffold-eth";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "glass" | "gradient";
  children: React.ReactNode;
}

const Card = forwardRef<HTMLDivElement, CardProps>(({ className, variant = "default", children, ...props }, ref) => {
  const variants = {
    default: "bg-slate-900/50 border border-slate-700/50",
    glass: "bg-white/5 backdrop-blur-xl border border-white/10",
    gradient: "bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/20",
  };

  return (
    <div
      ref={ref}
      className={cn(
        "rounded-2xl p-6 shadow-2xl transition-all duration-300 hover:shadow-purple-500/10 hover:border-purple-500/30",
        variants[variant],
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
});

Card.displayName = "Card";

const CardHeader = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("flex flex-col space-y-2", className)} {...props} />
));
CardHeader.displayName = "CardHeader";

const CardTitle = forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3 ref={ref} className={cn("text-xl font-bold tracking-tight text-white", className)} {...props} />
  ),
);
CardTitle.displayName = "CardTitle";

const CardContent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("pt-4", className)} {...props} />
));
CardContent.displayName = "CardContent";

export { Card, CardHeader, CardTitle, CardContent };
