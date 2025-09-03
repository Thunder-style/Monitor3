import React from "react";
import { cn } from "@/lib/utils";

const ChartContainer = ({ 
  title, 
  children, 
  className, 
  icon,
  tools,
  height = "h-96",
  ...props 
}) => {
  return (
    <div 
      className={cn(
        "relative overflow-hidden rounded-lg border border-gray-700/50",
        "bg-gradient-to-br from-slate-900/80 to-slate-800/60",
        "backdrop-blur-sm transition-all duration-300",
        "hover:border-cyan-400/50 hover:shadow-lg",
        height,
        className
      )}
      style={{
        background: 'rgba(19, 25, 47, 0.6)',
        boxShadow: '0 0 20px rgba(71, 218, 232, 0.1)',
      }}
      {...props}
    >
      {/* 标题栏 */}
      {(title || icon || tools) && (
        <div className="flex items-center justify-between p-4 border-b border-gray-700/30">
          <div className="flex items-center space-x-2">
            {icon && (
              <span className="text-cyan-300 text-lg">
                {icon}
              </span>
            )}
            {title && (
              <h3 className="text-lg font-bold text-cyan-100">
                {title}
              </h3>
            )}
          </div>
          
          {tools && (
            <div className="flex items-center space-x-2">
              {tools}
            </div>
          )}
        </div>
      )}
      
      {/* 图表内容区域 */}
      <div className="relative p-4 h-full">
        <div className="w-full h-full">
          {children}
        </div>
      </div>
      
      {/* 装饰性边框发光效果 */}
      <div className="absolute inset-0 rounded-lg pointer-events-none">
        <div className="absolute top-0 left-1/4 w-1/2 h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent"></div>
        <div className="absolute bottom-0 left-1/4 w-1/2 h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent"></div>
        <div className="absolute left-0 top-1/4 w-px h-1/2 bg-gradient-to-b from-transparent via-cyan-400/30 to-transparent"></div>
        <div className="absolute right-0 top-1/4 w-px h-1/2 bg-gradient-to-b from-transparent via-cyan-400/30 to-transparent"></div>
      </div>
    </div>
  );
};

export default ChartContainer;
