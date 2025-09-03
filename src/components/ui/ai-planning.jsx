import React from 'react';
import { Brain, Target, TrendingUp } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';

const AIPlanningComponent = ({ className }) => {
  // AI培养规划建议
  const aiRecommendations = [
    {
      id: 1,
      title: "专业教育优化建议",
      content: "本年度党性教育占比已达35%，符合要求。但科级干部专业教育时长不足，建议下年度新增2期'新型电力系统'专项班，预计可覆盖150人，弥补此缺口。",
      priority: "高",
      category: "专业培训",
      impact: "150人受益"
    },
    {
      id: 2,
      title: "综合教育补充方案",
      content: "本年度综合教育占比不足，不符合要求。建议下年度新增专项班，重点加强领导力和创新思维培训，预计需要增加80学时。",
      priority: "中",
      category: "综合教育",
      impact: "80学时增加"
    },
    {
      id: 3,
      title: "个性化培养路径",
      content: "基于大数据分析，建议为技术背景干部增设数字化转型课程，为管理岗位干部强化战略思维训练，实现精准培养。",
      priority: "高",
      category: "个性化",
      impact: "精准匹配"
    }
  ];

  const getPriorityColor = (priority) => {
    switch (priority) {
      case '高': return 'text-red-400 bg-red-500/20 border-red-500/40';
      case '中': return 'text-yellow-400 bg-yellow-500/20 border-yellow-500/40';
      case '低': return 'text-green-400 bg-green-500/20 border-green-500/40';
      default: return 'text-gray-400 bg-gray-500/20 border-gray-500/40';
    }
  };

  return (
    <div className={cn("space-y-6", className)}>
      {/* AI推荐标题 */}
      <div className="flex items-center space-x-3">
        <div 
          className="p-3 rounded-lg"
          style={{ 
            background: 'linear-gradient(135deg, #47dae8 0%, #89e5ff 100%)',
            boxShadow: '0 0 20px rgba(71, 218, 232, 0.3)'
          }}
        >
          <Brain className="h-6 w-6 text-white" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-cyan-100">AI智能培养规划建议</h3>
          <p className="text-gray-400 text-sm">基于大数据分析的个性化推荐</p>
        </div>
      </div>

      {/* AI建议卡片 */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {aiRecommendations.map((recommendation, index) => (
          <div
            key={recommendation.id}
            className={cn(
              "p-6 rounded-lg border backdrop-blur-sm transition-all duration-300",
              "hover:scale-105 hover:shadow-lg cursor-pointer",
              "border-cyan-400/30 bg-gradient-to-br from-cyan-500/10 to-blue-600/5"
            )}
            style={{ 
              boxShadow: '0 0 15px rgba(71, 218, 232, 0.1)',
            }}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-2">
                <div 
                  className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm"
                  style={{ 
                    background: 'linear-gradient(135deg, #47dae8 0%, #89e5ff 100%)'
                  }}
                >
                  {index + 1}
                </div>
                <span className="font-semibold text-cyan-100">{recommendation.title}</span>
              </div>
              <Badge 
                variant="outline" 
                className={cn("text-xs", getPriorityColor(recommendation.priority))}
              >
                {recommendation.priority}优先级
              </Badge>
            </div>

            <p className="text-gray-300 leading-relaxed mb-4 text-sm">
              {recommendation.content}
            </p>

            <div className="flex items-center justify-between text-xs">
              <div className="flex items-center space-x-2">
                <Target className="h-3 w-3 text-cyan-400" />
                <span className="text-gray-400">类别:</span>
                <span className="text-cyan-300">{recommendation.category}</span>
              </div>
              <div className="flex items-center space-x-2">
                <TrendingUp className="h-3 w-3 text-green-400" />
                <span className="text-green-400">{recommendation.impact}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AIPlanningComponent;
