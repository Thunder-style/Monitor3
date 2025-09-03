import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Brain, Lightbulb, Users, Target, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';

const AIRecommendationComponent = ({ className }) => {
  // 智能推荐名单数据
  const [isRecommendationDialogOpen, setIsRecommendationDialogOpen] = useState(false);
  const [recommendationList, setRecommendationList] = useState([]);
  const [recommendationType, setRecommendationType] = useState('');

  const mockRecommendationData = {
    middleClass: [
      { id: 1, name: '张伟', department: '技术部', level: '三级干部', reason: '专业背景匹配，学时进度良好', score: 95 },
      { id: 2, name: '王强', department: '安监部', level: '三级干部', reason: '管理经验丰富，适合提升', score: 92 }
    ],
    managementTraining: [
      { id: 1, name: '李娜', department: '人事部', level: '四级干部', reason: '人事管理背景，急需管理培训', score: 88 },
      { id: 2, name: '周婷', department: '创新中心', level: '四级干部', reason: '新任干部，需加强管理能力', score: 85 }
    ],
    emtClass: [
      { id: 1, name: '王强', department: '安监部', level: '三级干部', reason: '综合表现优秀，具备高层培养潜力', score: 98 }
    ],
    specializedTraining: [
      { id: 1, name: '张伟', department: '技术部', level: '三级干部', reason: '技术专业强，适合深度专业培训', score: 94 },
      { id: 2, name: '陈明', department: '财务部', level: '三级干部', reason: '财务背景，需要专业技能提升', score: 82 }
    ]
  };

  const showRecommendationList = (type, typeName) => {
    setRecommendationList(mockRecommendationData[type] || []);
    setRecommendationType(typeName);
    setIsRecommendationDialogOpen(true);
  };

  const getScoreColor = (score) => {
    if (score >= 95) return 'text-green-400';
    if (score >= 85) return 'text-cyan-400';
    if (score >= 75) return 'text-yellow-400';
    return 'text-orange-400';
  };

  return (
    <div className={cn("space-y-6", className)}>
      {/* 智能推荐操作区 */}
      <div 
        className="p-6 rounded-lg border border-cyan-400/30 backdrop-blur-sm"
        style={{ background: 'rgba(19, 25, 47, 0.6)' }}
      >
        <div className="flex items-center space-x-3 mb-4">
          <Zap className="h-5 w-5 text-yellow-400" />
          <h4 className="text-lg font-semibold text-cyan-100">智能推荐名单</h4>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Button
            variant="outline"
            onClick={() => showRecommendationList('middleClass', '中青班推荐')}
            className="border-cyan-400/50 text-cyan-300 hover:bg-cyan-400/10 h-auto py-4 flex flex-col space-y-2"
          >
            <Users className="h-5 w-5" />
            <span>中青班推荐</span>
            <span className="text-xs text-gray-400">2人符合条件</span>
          </Button>

          <Button
            variant="outline"
            onClick={() => showRecommendationList('managementTraining', '管理教育推荐')}
            className="border-cyan-400/50 text-cyan-300 hover:bg-cyan-400/10 h-auto py-4 flex flex-col space-y-2"
          >
            <Target className="h-5 w-5" />
            <span>管理教育推荐</span>
            <span className="text-xs text-gray-400">2人符合条件</span>
          </Button>

          <Button
            variant="outline"
            onClick={() => showRecommendationList('emtClass', 'EMT班推荐')}
            className="border-cyan-400/50 text-cyan-300 hover:bg-cyan-400/10 h-auto py-4 flex flex-col space-y-2"
          >
            <Brain className="h-5 w-5" />
            <span>EMT班推荐</span>
            <span className="text-xs text-gray-400">1人符合条件</span>
          </Button>

          <Button
            variant="outline"
            onClick={() => showRecommendationList('specializedTraining', '专业培训推荐')}
            className="border-cyan-400/50 text-cyan-300 hover:bg-cyan-400/10 h-auto py-4 flex flex-col space-y-2"
          >
            <Lightbulb className="h-5 w-5" />
            <span>专业培训推荐</span>
            <span className="text-xs text-gray-400">2人符合条件</span>
          </Button>
        </div>
      </div>

      {/* 推荐名单弹窗 */}
      <Dialog open={isRecommendationDialogOpen} onOpenChange={setIsRecommendationDialogOpen}>
        <DialogContent 
          className="max-w-3xl border border-cyan-400/30 backdrop-blur-sm"
          style={{ background: 'rgba(19, 25, 47, 0.9)' }}
        >
          <DialogHeader className="border-b border-cyan-400/30 pb-4">
            <DialogTitle className="text-xl font-semibold flex items-center text-cyan-100">
              <Brain className="mr-2 h-6 w-6 text-cyan-300" />
              {recommendationType} - AI智能推荐
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-4">
            {recommendationList.map((person) => (
              <div
                key={person.id}
                className={cn(
                  "p-4 rounded-lg border border-cyan-400/30 backdrop-blur-sm",
                  "bg-gradient-to-r from-cyan-500/5 to-blue-500/5"
                )}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <Users className="h-5 w-5 text-cyan-300" />
                    <span className="font-semibold text-cyan-100">{person.name}</span>
                    <Badge 
                      variant="outline"
                      className="border-cyan-400/50 text-cyan-300"
                    >
                      {person.department}
                    </Badge>
                    <Badge 
                      variant="outline"
                      className={cn(
                        "border-cyan-400/50 text-cyan-300",
                        person.level === '三级干部' && "bg-blue-500/20",
                        person.level === '四级干部' && "bg-purple-500/20"
                      )}
                    >
                      {person.level}
                    </Badge>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-gray-400 text-sm">匹配度:</span>
                    <span className={cn("font-bold", getScoreColor(person.score))}>
                      {person.score}分
                    </span>
                  </div>
                </div>
                <p className="text-gray-300 text-sm">{person.reason}</p>
              </div>
            ))}
          </div>

          <div className="flex justify-end space-x-3 pt-4 border-t border-cyan-400/30">
            <Button
              variant="outline"
              onClick={() => setIsRecommendationDialogOpen(false)}
              className="border-gray-600 text-gray-300"
            >
              关闭
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AIRecommendationComponent;
