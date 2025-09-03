import React from "react";
import { cn } from "@/lib/utils";

const StatCard = ({ 
  title, 
  value, 
  unit = "", 
  icon, 
  trend, 
  trendValue,
  description,
  className,
  glowColor = "#47dae8",
  ...props 
}) => {
  return (
    <div 
      className={cn(
        "relative overflow-hidden rounded-lg border border-gray-700/50 p-4",
        "bg-gradient-to-br from-slate-900/80 to-slate-800/60",
        "backdrop-blur-sm transition-all duration-300",
        "hover:border-cyan-400/50 hover:shadow-lg group",
        className
      )}
      style={{
        background: 'rgba(19, 25, 47, 0.8)',
        boxShadow: '0 0 20px rgba(71, 218, 232, 0.1)',
      }}
      {...props}
    >
      {/* 发光效果 */}
      <div 
        className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `linear-gradient(135deg, transparent, ${glowColor}15, transparent)`,
        }}
      />
      
      <div className="relative z-10 flex items-center justify-between">
        {/* 左侧图标和标题 */}
        <div className="flex items-center space-x-3">
          {icon && (
            <div 
              className="p-2 rounded-lg"
              style={{
                background: `${glowColor}20`,
                border: `1px solid ${glowColor}40`,
              }}
            >
              <span className="text-xl" style={{ color: glowColor }}>
                {icon}
              </span>
            </div>
          )}
          <div>
            <h3 className="text-sm font-medium text-cyan-100/80">
              {title}
            </h3>
            {description && (
              <p className="text-xs text-gray-400 mt-1">
                {description}
              </p>
            )}
          </div>
        </div>

        {/* 右侧数值 */}
        <div className="text-right">
          <div className="flex items-baseline space-x-1">
            <span 
              className="text-2xl font-bold"
              style={{
                background: 'linear-gradient(to bottom, #fff, #4db6e5)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              {value}
            </span>
            {unit && (
              <span className="text-sm text-cyan-300">
                {unit}
              </span>
            )}
          </div>
          
          {/* 趋势指示器 */}
          {trend && (
            <div className={cn(
              "flex items-center justify-end text-xs mt-1",
              trend === 'up' && "text-green-400",
              trend === 'down' && "text-red-400",
              trend === 'stable' && "text-yellow-400"
            )}>
              <span className="mr-1">
                {trend === 'up' && '↗'}
                {trend === 'down' && '↘'}
                {trend === 'stable' && '→'}
              </span>
              {trendValue && <span>{trendValue}</span>}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StatCard;
