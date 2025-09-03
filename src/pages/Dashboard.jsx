import React, { useState } from 'react';
import DashboardLayout from '@/components/ui/dashboard-layout';
import GlowCard from '@/components/ui/glow-card';
import FlowStyleCard from '@/components/ui/flow-style-card';
import ChartContainer from '@/components/ui/chart-container';
import TrainingRecordsTable from '@/components/ui/training-records-table';
import WarningExpertsTable from '@/components/ui/warning-experts-table';
import AIRecommendationComponent from '@/components/ui/ai-recommendation';
import AIPlanningComponent from '@/components/ui/ai-planning';
import NewTransferCadresComponent from '@/components/ui/new-transfer-cadres';
import CourseAnalysisComponent from '@/components/ui/course-analysis';
import { CustomProgress } from '@/components/ui/custom-progress';
import { Badge } from '@/components/ui/badge';
import { 
  Brain, 
  UserPlus, 
  TrendingUp, 
  GraduationCap, 
  BookOpen, 
  Calendar, 
  Users, 
  FileText, 
  Clock, 
  AlertTriangle,
  Target,
  Award,
  BarChart3,
  Database
} from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line
} from 'recharts';

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
    departmentLevelProgress: 85,
    sectionLevelProgress: 78,
    warningCount: 23
  };

  // 月度培训趋势数据
  const monthlyTrend = [
    { month: '1月', 完成率: 65, 参与人数: 120 },
    { month: '2月', 完成率: 72, 参与人数: 135 },
    { month: '3月', 完成率: 68, 参与人数: 145 },
    { month: '4月', 完成率: 75, 参与人数: 160 },
    { month: '5月', 完成率: 82, 参与人数: 175 },
    { month: '6月', 完成率: 78, 参与人数: 158 },
  ];

  // 部门培训完成情况
  const departmentData = [
    { name: '技术部', value: 85 },
    { name: '人事部', value: 92 },
    { name: '财务部', value: 78 },
    { name: '市场部', value: 88 },
    { name: '运维部', value: 76 },
    { name: '安监部', value: 94 },
  ];

  const COLORS = ['#47dae8', '#89e5ff', '#50e3c2', '#67a1e5', '#ff6b6b', '#51cf66'];

  return (
    <DashboardLayout title="干部培养驾驶舱">
      <div className="space-y-6">
        {/* 核心指标卡片区域 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <FlowStyleCard
            title="年度培训项目总数"
            value={coreData.annualProjects.completed}
            unit={`/ ${coreData.annualProjects.planned}`}
            iconType="target"
            trend="up"
            trendValue={`${coreData.annualProjects.progress}%`}
            description="计划完成率"
            glowColor="#47dae8"
          />
          
          <FlowStyleCard
            title="参与培训总人次"
            value={coreData.totalParticipants}
            unit="人"
            iconType="users"
            trend="up"
            trendValue="+12%"
            description="较上月增长"
            glowColor="#89e5ff"
          />
          
          <FlowStyleCard
            title="学时完成进度"
            value={coreData.overallProgress}
            unit="%"
            iconType="chart"
            trend="up"
            trendValue="+5%"
            description="目标达成度"
            glowColor="#50e3c2"
          />
          
          <FlowStyleCard
            title="学时预警干部人数"
            value={coreData.warningCount}
            unit="人"
            iconType="warning"
            trend="down"
            trendValue="-3"
            description="需要关注"
            glowColor="#ff6b6b"
          />
        </div>

        {/* 主要内容区域 - 重新布局 */}
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

          {/* 第二行：干部培训档案 */}
          <ChartContainer
            title="干部培训档案"
            icon={<Database />}
            height="h-auto"
          >
            <TrainingRecordsTable />
          </ChartContainer>

          {/* 第三行：学时预警管理 */}
          <ChartContainer
            title="学时预警管理"
            icon={<AlertTriangle />}
            height="h-auto"
          >
            <WarningExpertsTable />
          </ChartContainer>

          {/* 第四行：新任/转岗干部管理 */}
          <ChartContainer
            title="新任/转岗干部管理"
            icon={<UserPlus />}
            height="h-auto"
          >
            <NewTransferCadresComponent />
          </ChartContainer>

          {/* 第五行：智能推荐名单 */}
          <AIRecommendationComponent />

          {/* 第六行：课程分析组件 */}
          <CourseAnalysisComponent />

          {/* 第七行：AI智能培养规划建议 */}
          <ChartContainer
            title="AI智能培养规划建议"
            icon={<Brain />}
            height="h-auto"
          >
            <AIPlanningComponent />
          </ChartContainer>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default DashboardPage;
