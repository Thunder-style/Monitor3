import React, { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { AlertTriangle, User, Clock, Filter } from 'lucide-react';
import { cn } from '@/lib/utils';

const WarningExpertsTable = ({ className }) => {
  // 学时预警干部数据
  const [warningExperts] = useState([
    { id: 1, name: '陈明', department: '财务部', progress: 45, missingHours: 15, level: '三级干部' },
    { id: 2, name: '刘芳', department: '市场部', progress: 38, missingHours: 22, level: '四级干部' },
    { id: 3, name: '赵磊', department: '运维部', progress: 29, missingHours: 31, level: '三级干部' },
    { id: 4, name: '孙丽', department: '规划部', progress: 52, missingHours: 18, level: '四级干部' },
    { id: 5, name: '周建', department: '生产部', progress: 35, missingHours: 28, level: '三级干部' },
    { id: 6, name: '张敏', department: '质检部', progress: 48, missingHours: 20, level: '四级干部' }
  ]);

  const [warningLevelFilter, setWarningLevelFilter] = useState('全部');

  // 筛选后的预警数据
  const filteredWarningExperts = warningExperts.filter(expert => {
    if (warningLevelFilter !== '全部' && expert.level !== warningLevelFilter) return false;
    return true;
  });

  const getWarningLevel = (progress) => {
    if (progress < 30) return { level: '严重', color: 'text-red-400', bg: 'bg-red-500/20 border-red-500/40' };
    if (progress < 50) return { level: '警告', color: 'text-yellow-400', bg: 'bg-yellow-500/20 border-yellow-500/40' };
    return { level: '注意', color: 'text-orange-400', bg: 'bg-orange-500/20 border-orange-500/40' };
  };

  return (
    <div className={cn("space-y-4", className)}>
      {/* 标题和筛选器 */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <AlertTriangle className="h-5 w-5 text-red-400" />
          <h3 className="text-lg font-bold text-cyan-100">学时预警干部</h3>
          <Badge 
            variant="outline" 
            className="bg-red-500/20 text-red-300 border-red-500/40"
          >
            {filteredWarningExperts.length}人
          </Badge>
        </div>
        
        <div className="flex items-center space-x-2">
          <Filter className="h-4 w-4 text-cyan-300" />
          <Select value={warningLevelFilter} onValueChange={setWarningLevelFilter}>
            <SelectTrigger className="w-32 bg-gray-800/50 border-gray-600 text-cyan-100">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="bg-gray-800 border-gray-600">
              <SelectItem value="全部">全部级别</SelectItem>
              <SelectItem value="三级干部">三级干部</SelectItem>
              <SelectItem value="四级干部">四级干部</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* 预警列表 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredWarningExperts.map((expert) => {
          const warning = getWarningLevel(expert.progress);
          return (
            <div
              key={expert.id}
              className={cn(
                "p-4 rounded-lg border backdrop-blur-sm transition-all duration-300 hover:scale-105",
                "border-red-500/30 bg-gradient-to-br from-red-500/10 to-red-600/5"
              )}
              style={{ 
                boxShadow: '0 0 15px rgba(239, 68, 68, 0.1)',
              }}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center space-x-2">
                  <User className="h-4 w-4 text-cyan-300" />
                  <span className="font-semibold text-cyan-100">{expert.name}</span>
                </div>
                <Badge 
                  variant="outline" 
                  className={cn("text-xs", warning.bg)}
                >
                  <span className={warning.color}>{warning.level}</span>
                </Badge>
              </div>

              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-300">部门:</span>
                  <span className="text-cyan-100">{expert.department}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">级别:</span>
                  <Badge 
                    variant="outline" 
                    className={cn(
                      "text-xs border-cyan-400/50 text-cyan-300",
                      expert.level === '三级干部' && "bg-blue-500/20",
                      expert.level === '四级干部' && "bg-purple-500/20"
                    )}
                  >
                    {expert.level}
                  </Badge>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">进度:</span>
                  <span className={warning.color}>{expert.progress}%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">缺少学时:</span>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-3 w-3 text-red-400" />
                    <span className="text-red-400 font-semibold">{expert.missingHours}h</span>
                  </div>
                </div>
              </div>

              {/* 进度条 */}
              <div className="mt-4">
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-gray-400">完成进度</span>
                  <span className={warning.color}>{expert.progress}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div
                    className={cn(
                      "h-2 rounded-full transition-all duration-500",
                      expert.progress < 30 && "bg-gradient-to-r from-red-500 to-red-600",
                      expert.progress >= 30 && expert.progress < 50 && "bg-gradient-to-r from-yellow-500 to-orange-500",
                      expert.progress >= 50 && "bg-gradient-to-r from-orange-500 to-red-500"
                    )}
                    style={{ width: `${expert.progress}%` }}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WarningExpertsTable;
