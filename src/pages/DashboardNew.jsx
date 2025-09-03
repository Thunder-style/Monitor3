import React, { useState } from 'react';
import DashboardLayout from '@/components/ui/dashboard-layout';
import FlowStyleCard from '@/components/ui/flow-style-card';
import ChartContainer from '@/components/ui/chart-container';
import TrainingRecordsTable from '@/components/ui/training-records-table';
import WarningExpertsTable from '@/components/ui/warning-experts-table';
import AIRecommendationComponent from '@/components/ui/ai-recommendation';
import NewTransferCadresComponent from '@/components/ui/new-transfer-cadres';
import CourseAnalysisComponent from '@/components/ui/course-analysis';
import { CustomProgress } from '@/components/ui/custom-progress';
import { 
  GraduationCap, 
  Target,
  BarChart3,
  Database
} from 'lucide-react';

const DashboardPage = () => {
  // 核心数据总览
  const coreData = {
    annualProjects: {
      planned: 25,
      completed: 18,
      progress: 72
    },
    trainingTypes: [
      { type: '综合教育', completed: 120, target: 150, progress: 80, color: '#47dae8' },
      { type: '管理教育', completed: 95, target: 120, progress: 79, color: '#89e5ff' },
      { type: '专业教育', completed: 210, target: 240, progress: 88, color: '#50e3c2' },
      { type: '党性教育', completed: 65, target: 80, progress: 81, color: '#67a1e5' }
    ],
    totalParticipants: 1245,
    overallProgress: 82,
    warningCount: 23
  };

  return (
    <DashboardLayout title="干部培养驾驶舱">
      <div className="space-y-6">
        {/* 核心指标卡片区域 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <FlowStyleCard
            title="年度培训项目"
            value={coreData.annualProjects.completed}
            unit={`/ ${coreData.annualProjects.planned}`}
            iconType="target"
            trend="up"
            trendValue={`${coreData.annualProjects.progress}%`}
            description="计划完成率"
            glowColor="#47dae8"
          />
          
          <FlowStyleCard
            title="培训总参与人数"
            value={coreData.totalParticipants}
            unit="人"
            iconType="users"
            trend="up"
            trendValue="+12%"
            description="较上月增长"
            glowColor="#89e5ff"
          />
          
          <FlowStyleCard
            title="整体完成进度"
            value={coreData.overallProgress}
            unit="%"
            iconType="chart"
            trend="up"
            trendValue="+5%"
            description="目标达成度"
            glowColor="#50e3c2"
          />
          
          <FlowStyleCard
            title="预警干部数量"
            value={coreData.warningCount}
            unit="人"
            iconType="warning"
            trend="down"
            trendValue="-3"
            description="需要关注"
            glowColor="#ff6b6b"
          />
        </div>

        {/* 主要内容区域 */}
        <div className="space-y-6">
          {/* 第一行：培训类型完成情况 */}
          <ChartContainer
            title="培训类型完成情况"
            icon={<GraduationCap />}
            height="h-64"
          >
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {coreData.trainingTypes.map((type, index) => (
                <div key={index} className="space-y-3">
                  <div className="text-center">
                    <span className="text-cyan-100 font-medium text-sm">{type.type}</span>
                  </div>
                  <div className="relative">
                    <CustomProgress 
                      value={type.progress} 
                      className="h-3 cyber-progress"
                    />
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-400">{type.completed}/{type.target}</span>
                    <span className="gradient-text font-semibold">{type.progress}%</span>
                  </div>
                </div>
              ))}
            </div>
          </ChartContainer>

          {/* 第二行：课程分析组件 */}
          <CourseAnalysisComponent />

          {/* 第三行：干部培训档案 */}
          <ChartContainer
            title="干部培训档案"
            icon={<Database />}
            height="h-auto"
          >
            <TrainingRecordsTable />
          </ChartContainer>

          {/* 第四行：学时预警和新任/转岗干部管理 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <ChartContainer
              title="学时预警管理"
              height="h-auto"
            >
              <WarningExpertsTable />
            </ChartContainer>
            
            <ChartContainer
              title="新任/转岗干部管理"
              height="h-auto"
            >
              <NewTransferCadresComponent />
            </ChartContainer>
          </div>

          {/* 第五行：AI智能推荐 */}
          <AIRecommendationComponent />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default DashboardPage;
