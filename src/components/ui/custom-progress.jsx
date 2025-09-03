import React from "react";
import { cn } from "@/lib/utils";

const CustomProgress = ({ 
  value = 0, 
  className, 
  indicatorClassName,
  ...props 
}) => {
  return (
    <div
      className={cn(
        "relative h-2 w-full overflow-hidden rounded-full bg-gray-800/50",
        className
      )}
      {...props}
    >
      <div
        className={cn(
          "h-full w-full flex-1 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-500 ease-out",
          indicatorClassName
        )}
        style={{
          transform: `translateX(-${100 - (value || 0)}%)`,
        }}
      />
    </div>
  );
};

export { CustomProgress };
