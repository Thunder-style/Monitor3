import React, { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { UserPlus, RefreshCw, Calendar, User, Building } from 'lucide-react';
import { cn } from '@/lib/utils';

const NewTransferCadresComponent = ({ className }) => {
  // 新任干部数据
  const [newExperts] = useState([
    { id: 1, name: '周婷', department: '创新中心', appointmentDate: '2024-03-15', level: '四级干部', status: '待安排', urgency: '高' },
    { id: 2, name: '吴军', department: '数字化部', appointmentDate: '2024-01-22', level: '三级干部', status: '进行中', urgency: '中' },
    { id: 3, name: '林敏', department: '研发中心', appointmentDate: '2024-04-08', level: '四级干部', status: '待安排', urgency: '高' }
  ]);

  // 转岗干部数据
  const [transferredExperts] = useState([
    { id: 1, name: '郑华', department: '调度中心', transferDate: '2024-04-10', level: '四级干部', status: '已完成', urgency: '低' },
    { id: 2, name: '黄伟', department: '检修公司', transferDate: '2024-05-05', level: '三级干部', status: '进行中', urgency: '中' },
    { id: 3, name: '李强', department: '营销部', transferDate: '2024-06-01', level: '四级干部', status: '待安排', urgency: '高' }
  ]);

  const getStatusColor = (status) => {
    switch (status) {
      case '待安排': return 'text-red-400 bg-red-500/20 border-red-500/40';
      case '进行中': return 'text-yellow-400 bg-yellow-500/20 border-yellow-500/40';
      case '已完成': return 'text-green-400 bg-green-500/20 border-green-500/40';
      default: return 'text-gray-400 bg-gray-500/20 border-gray-500/40';
    }
  };

  const getUrgencyColor = (urgency) => {
    switch (urgency) {
      case '高': return 'text-red-400';
      case '中': return 'text-yellow-400';
      case '低': return 'text-green-400';
      default: return 'text-gray-400';
    }
  };

  const calculateDaysFromDate = (dateStr) => {
    const date = new Date(dateStr);
    const now = new Date();
    const diffTime = now - date;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const CadreCard = ({ person, type, dateField, icon: Icon }) => (
    <div
      className={cn(
        "p-4 rounded-lg border backdrop-blur-sm transition-all duration-300 hover:scale-105",
        "border-cyan-400/30 bg-gradient-to-br from-cyan-500/10 to-blue-600/5"
      )}
      style={{ 
        boxShadow: '0 0 15px rgba(71, 218, 232, 0.1)',
      }}
    >
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center space-x-2">
          <Icon className="h-4 w-4 text-cyan-300" />
          <span className="font-semibold text-cyan-100">{person.name}</span>
        </div>
        <Badge 
          variant="outline" 
          className={cn("text-xs", getStatusColor(person.status))}
        >
          {person.status}
        </Badge>
      </div>

      <div className="space-y-2 text-sm">
        <div className="flex justify-between">
          <span className="text-gray-300">单位:</span>
          <span className="text-cyan-100">{person.department}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-300">级别:</span>
          <Badge 
            variant="outline" 
            className={cn(
              "text-xs border-cyan-400/50 text-cyan-300",
              person.level === '三级干部' && "bg-blue-500/20",
              person.level === '四级干部' && "bg-purple-500/20"
            )}
          >
            {person.level}
          </Badge>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-300">{type === 'new' ? '任职日期:' : '转岗日期:'}</span>
          <span className="text-cyan-100">{person[dateField]}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-300">天数:</span>
          <span className="text-cyan-400 font-semibold">
            {calculateDaysFromDate(person[dateField])}天
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-300">紧急度:</span>
          <span className={cn("font-semibold", getUrgencyColor(person.urgency))}>
            {person.urgency}
          </span>
        </div>
      </div>
    </div>
  );

  return (
    <div className={cn("space-y-4", className)}>
      <div className="flex items-center space-x-3">
        <div 
          className="p-3 rounded-lg"
          style={{ 
            background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
            boxShadow: '0 0 20px rgba(16, 185, 129, 0.3)'
          }}
        >
          <UserPlus className="h-6 w-6 text-white" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-cyan-100">新任/转岗干部管理</h3>
          <p className="text-gray-400 text-sm">新任职和转岗干部培训安排</p>
        </div>
      </div>

      <Tabs defaultValue="new" className="w-full">
        <TabsList 
          className="grid w-full grid-cols-2 bg-gray-800/50 border border-gray-700"
        >
          <TabsTrigger 
            value="new" 
            className="data-[state=active]:bg-cyan-500/20 data-[state=active]:text-cyan-300 text-gray-400"
          >
            <UserPlus className="h-4 w-4 mr-2" />
            新任干部 ({newExperts.length})
          </TabsTrigger>
          <TabsTrigger 
            value="transfer" 
            className="data-[state=active]:bg-cyan-500/20 data-[state=active]:text-cyan-300 text-gray-400"
          >
            <RefreshCw className="h-4 w-4 mr-2" />
            转岗干部 ({transferredExperts.length})
          </TabsTrigger>
        </TabsList>

        <TabsContent value="new" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {newExperts.map((expert) => (
              <CadreCard 
                key={expert.id} 
                person={expert} 
                type="new" 
                dateField="appointmentDate"
                icon={UserPlus}
              />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="transfer" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {transferredExperts.map((expert) => (
              <CadreCard 
                key={expert.id} 
                person={expert} 
                type="transfer" 
                dateField="transferDate"
                icon={RefreshCw}
              />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default NewTransferCadresComponent;
