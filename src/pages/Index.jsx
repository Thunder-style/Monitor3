
import React, { useState } from 'react';
import DashboardLayout from '@/components/ui/dashboard-layout';
import GlowCard from '@/components/ui/glow-card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { CardContent, CardHeader, Card, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHeader, TableRow, TableHead } from '@/components/ui/table';
import { SelectItem, Select, SelectContent, SelectValue, SelectTrigger } from '@/components/ui/select';
import { Brain, UserPlus, TrendingUp, GraduationCap, BookOpen, Calendar, Users, FileText, Clock, AlertTriangle } from 'lucide-react';
import { Legend, Bar, PieChart, Sector, Tooltip, BarChart, CartesianGrid, ResponsiveContainer, Pie, Cell, XAxis, YAxis } from 'recharts';
import { DialogContent, DialogTitle, Dialog, DialogHeader, DialogTrigger } from '@/components/ui/dialog';
import { CustomProgress } from '@/components/ui/custom-progress';
import { Button } from '@/components/ui/button';

const Index = () => {
  // 核心数据总览
  const coreData = {
    annualProjects: {
      planned: 25,
      completed: 18,
      progress: 72
    },
    trainingTypes: [
      { type: '综合教育', completed: 120, target: 150, progress: 80 },
      { type: '管理教育', completed: 95, target: 120, progress: 79 },
      { type: '专业教育', completed: 210, target: 240, progress: 88 },
      { type: '党性教育', completed: 65, target: 80, progress: 81 }
    ],
    totalParticipants: 1245,
    overallProgress: 82,
    departmentLevelProgress: 85,
    sectionLevelProgress: 78,
    warningCount: 23
  };

  // 干部培训档案数据
  const [trainingRecords] = useState([
    { 
      id: 1, 
      name: '张伟', 
      department: '技术部',
      education: '硕士', 
      progress: 85,
      middleClass: '已参加',
      managementTraining: '已参加',
      emtClass: '未参加',
      level: '三级干部',
      internalPrograms: [
        { name: '新型电力系统专项班', duration: 16, type: '专业教育', department: '办公室' },
        { name: '数字化转型专题研讨', duration: 8, type: '综合教育', department: '信息中心' }
      ]
    },
    { 
      id: 2, 
      name: '李娜', 
      department: '人事部',
      education: '博士', 
      progress: 65,
      middleClass: '未参加',
      managementTraining: '已参加',
      emtClass: '未参加',
      level: '四级干部',
      internalPrograms: [
        { name: '领导干部能力提升班', duration: 24, type: '管理教育', department: '组织部' },
        { name: '党性教育专题班', duration: 12, type: '党性教育', department: '党委办公室' }
      ]
    },
    { 
      id: 3, 
      name: '王强', 
      department: '安监部',
      education: '本科', 
      progress: 92,
      middleClass: '已参加',
      managementTraining: '已参加',
      emtClass: '已参加',
      level: '三级干部',
      internalPrograms: [
        { name: '安全生产管理培训', duration: 20, type: '专业教育', department: '安监局' },
        { name: '应急管理专题研讨', duration: 10, type: '综合教育', department: '应急办' }
      ]
    }
  ]);

  // 学时预警干部数据
  const [warningExperts] = useState([
    { id: 1, name: '陈明', department: '财务部', progress: 45, missingHours: 15, level: '三级干部' },
    { id: 2, name: '刘芳', department: '市场部', progress: 38, missingHours: 22, level: '四级干部' },
    { id: 3, name: '赵磊', department: '运维部', progress: 29, missingHours: 31, level: '三级干部' },
    { id: 4, name: '孙丽', department: '规划部', progress: 52, missingHours: 18, level: '四级干部' }
  ]);

  // 新任/转岗干部数据
  const [newExperts] = useState([
    { id: 1, name: '周婷', department: '创新中心', appointmentDate: '2024-03-15', level: '四级干部' },
    { id: 2, name: '吴军', department: '数字化部', appointmentDate: '2024-01-22', level: '三级干部' }
  ]);

  const [transferredExperts] = useState([
    { id: 1, name: '郑华', department: '调度中心', transferDate: '2024-04-10', level: '四级干部' },
    { id: 2, name: '黄伟', department: '检修公司', transferDate: '2024-05-05', level: '三级干部' }
  ]);

  // 课程占比分析数据
  const courseDistributionData = [
    { name: '综合教育', value: 30 },
    { name: '管理教育', value: 25 },
    { name: '专业教育', value: 35 },
    { name: '党性教育', value: 10 }
  ];

  // 干部参与培训类型差异数据
  const expertTrainingComparisonData = [
    { category: '综合教育', level3: 28, level4: 32 },
    { category: '管理教育', level3: 22, level4: 25 },
    { category: '专业教育', level3: 40, level4: 35 },
    { category: '党性教育', level3: 10, level4: 8 }
  ];

  // AI培养规划建议
  const aiRecommendations = [
    "本年度党性教育占比已达35%，符合要求。但科级干部专业教育时长不足，建议下年度新增2期'新型电力系统'专项班，预计可覆盖150人，弥补此缺口。",
    "但科级干部专业教育时长不足，建议下年度新增2期'新型电力系统'专项班，预计可覆盖150人，弥补此缺口。",
    "本年度综合教育占比不足，不符合要求。建议下年度新增专项班，弥补此缺口。"
  ];

  // 筛选状态
  const [selectedLevel, setSelectedLevel] = useState('全部');
  const [selectedDepartment, setSelectedDepartment] = useState('全部');
  const [searchName, setSearchName] = useState('');
  // 新增预警干部筛选状态
  const [warningLevelFilter, setWarningLevelFilter] = useState('全部');

  // 筛选后的数据
  const filteredRecords = trainingRecords.filter(record => {
    if (selectedLevel !== '全部' && record.level !== selectedLevel) return false;
    if (selectedDepartment !== '全部' && record.department !== selectedDepartment) return false;
    if (searchName && !record.name.includes(searchName)) return false;
    return true;
  });

  // 筛选后的预警干部数据
  const filteredWarningExperts = warningExperts.filter(expert => {
    if (warningLevelFilter !== '全部' && expert.level !== warningLevelFilter) return false;
    return true;
  });

  // 颜色映射
  const COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444'];
  const getProgressColor = (progress) => {
    if (progress >= 80) return 'bg-emerald-500';
    if (progress >= 60) return 'bg-amber-500';
    return 'bg-red-500';
  };

  // 内部项目详情弹窗组件
  const [selectedPrograms, setSelectedPrograms] = useState([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const showProgramDetails = (programs) => {
    setSelectedPrograms(programs);
    setIsDialogOpen(true);
  };

  // 智能推荐名单弹窗
  const [isRecommendationDialogOpen, setIsRecommendationDialogOpen] = useState(false);
  const [recommendationList, setRecommendationList] = useState([]);

  // 模拟推荐名单数据
  const mockRecommendationData = {
    middleClass: [
      { id: 1, name: '张伟', department: '技术部', level: '三级干部', reason: '专业背景匹配，学时进度良好' },
      { id: 2, name: '王强', department: '安监部', level: '三级干部', reason: '管理经验丰富，适合提升' }
    ],
    managementTraining: [
      { id: 1, name: '李娜', department: '人事部', level: '四级干部', reason: '人事管理背景，急需管理培训' },
      { id: 2, name: '周婷', department: '创新中心', level: '四级干部', reason: '新任干部，需加强管理能力' }
    ],
    emtClass: [
      { id: 1, name: '王强', department: '安监部', level: '三级干部', reason: '综合表现优秀，具备高层培养潜力' }
    ]
  };

  const showRecommendationList = (type) => {
    setRecommendationList(mockRecommendationData[type] || []);
    setIsRecommendationDialogOpen(true);
  };

  return (
    <DashboardLayout title="干部培养数据详情" showNav={true}>
      <div className="space-y-6">
        {/* 核心数据总览 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <GlowCard className="text-center">
            <div className="flex items-center justify-center space-x-4">
              <div className="p-3 rounded-full bg-gradient-to-r from-blue-500/20 to-indigo-500/20">
                <Calendar className="h-8 w-8 text-blue-400" />
              </div>
              <div>
                <h3 className="text-2xl font-bold gradient-text">{coreData.annualProjects.completed}</h3>
                <p className="text-cyan-100/80">已完成项目</p>
                <p className="text-xs data-highlight">/ {coreData.annualProjects.planned} 总计划</p>
              </div>
            </div>
          </GlowCard>

          <GlowCard className="text-center">
            <div className="flex items-center justify-center space-x-4">
              <div className="p-3 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20">
                <Users className="h-8 w-8 text-green-400" />
              </div>
              <div>
                <h3 className="text-2xl font-bold gradient-text">{coreData.totalParticipants}</h3>
                <p className="text-cyan-100/80">总参与人数</p>
                <p className="text-xs data-highlight">活跃培训中</p>
              </div>
            </div>
          </GlowCard>

          <GlowCard className="text-center">
            <div className="flex items-center justify-center space-x-4">
              <div className="p-3 rounded-full bg-gradient-to-r from-purple-500/20 to-violet-500/20">
                <TrendingUp className="h-8 w-8 text-purple-400" />
              </div>
              <div>
                <h3 className="text-2xl font-bold gradient-text">{coreData.overallProgress}%</h3>
                <p className="text-cyan-100/80">整体进度</p>
                <p className="text-xs data-highlight">超预期完成</p>
              </div>
            </div>
          </GlowCard>

          <GlowCard className="text-center">
            <div className="flex items-center justify-center space-x-4">
              <div className="p-3 rounded-full bg-gradient-to-r from-red-500/20 to-pink-500/20">
                <AlertTriangle className="h-8 w-8 text-red-400" />
              </div>
              <div>
                <h3 className="text-2xl font-bold gradient-text">{coreData.warningCount}</h3>
                <p className="text-cyan-100/80">预警人数</p>
                <p className="text-xs data-highlight">需关注</p>
              </div>
            </div>
          </GlowCard>
        </div>

        {/* 剩余的内容将在下一步继续 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">

        {/* 核心数据总览 */}
        <Card className="mb-8 bg-white/70 backdrop-blur-sm shadow-xl border-0 ring-1 ring-slate-200/50">
          <CardHeader className="pb-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-t-lg">
            <CardTitle className="flex items-center text-xl font-semibold">
              <div className="p-2 bg-white/20 rounded-lg mr-3">
                <BookOpen className="h-6 w-6" />
              </div>
              干部培养核心数据总览
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gradient-to-br from-white to-blue-50 border border-blue-100 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center justify-between mb-3">
                  <div className="text-sm font-medium text-slate-600">年度培训项目总数</div>
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <TrendingUp className="h-4 w-4 text-blue-600" />
                  </div>
                </div>
                <div className="flex items-baseline mb-3">
                  <span className="text-3xl font-bold text-slate-800">{coreData.annualProjects.completed}</span>
                  <span className="text-slate-400 mx-2">/</span>
                  <span className="text-slate-500 text-lg">{coreData.annualProjects.planned}</span>
                </div>
                <Progress value={coreData.annualProjects.progress} className="h-3 mb-2 bg-blue-100" />
                <div className="text-sm font-medium text-blue-600">{coreData.annualProjects.progress}% 完成</div>
              </div>
              
              <div className="bg-gradient-to-br from-white to-emerald-50 border border-emerald-100 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center justify-between mb-3">
                  <div className="text-sm font-medium text-slate-600">参与培训总人次</div>
                  <div className="p-2 bg-emerald-100 rounded-lg">
                    <Users className="h-4 w-4 text-emerald-600" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-slate-800 mb-3">{coreData.totalParticipants}</div>
                <div className="text-sm font-medium text-emerald-600 flex items-center">
                  <TrendingUp className="h-4 w-4 mr-1" />
                  较去年增长 12%
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-white to-amber-50 border border-amber-100 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center justify-between mb-3">
                  <div className="text-sm font-medium text-slate-600">学时完成进度</div>
                  <div className="p-2 bg-amber-100 rounded-lg">
                    <Clock className="h-4 w-4 text-amber-600" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-slate-800 mb-3">{coreData.overallProgress}%</div>
                <div className="flex justify-between text-sm font-medium">
                  <span className="text-blue-600">处级: {coreData.departmentLevelProgress}%</span>
                  <span className="text-indigo-600">科级: {coreData.sectionLevelProgress}%</span>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-white to-red-50 border border-red-100 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center justify-between mb-3">
                  <div className="text-sm font-medium text-slate-600">学时预警干部人数</div>
                  <div className="p-2 bg-red-100 rounded-lg">
                    <AlertTriangle className="h-4 w-4 text-red-600" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-red-600 mb-3">{coreData.warningCount}</div>
                <div className="text-sm font-medium text-red-500">需重点关注</div>
              </div>
            </div>
            
            {/* 培训类型进度 */}
            <div className="mt-8">
              <h3 className="font-semibold text-slate-700 mb-4 text-lg">培训类型进度详情</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {coreData.trainingTypes.map((type, index) => (
                  <div key={index} className="bg-gradient-to-br from-white to-slate-50 border border-slate-200 rounded-lg p-4 shadow-md hover:shadow-lg transition-all duration-300">
                    <div className="flex items-center justify-between mb-2">
                      <div className="text-sm font-semibold text-slate-700">{type.type}</div>
                      <div className={`w-2 h-2 rounded-full ${type.progress >= 80 ? 'bg-green-400' : type.progress >= 60 ? 'bg-yellow-400' : 'bg-red-400'}`}></div>
                    </div>
                    <div className="text-xs text-slate-500 mb-2 font-medium">
                      {type.completed} / {type.target} 学时
                    </div>
                    <Progress value={type.progress} className="h-2 mb-2" />
                    <div className="text-xs font-semibold text-slate-600 text-right">{type.progress}%</div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 干部培训档案基本信息 */}
        <Card className="mb-8 bg-white/70 backdrop-blur-sm shadow-xl border-0 ring-1 ring-slate-200/50">
          <CardHeader className="pb-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-t-lg">
            <CardTitle className="flex items-center justify-between text-xl font-semibold">
              <div className="flex items-center">
                <div className="p-2 bg-white/20 rounded-lg mr-3">
                  <FileText className="h-6 w-6" />
                </div>
                干部培训档案基本信息
              </div>
              <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
                <Input 
                  placeholder="搜索姓名" 
                  value={searchName}
                  onChange={(e) => setSearchName(e.target.value)}
                  className="w-full sm:w-36 bg-white/90 border-white/30 text-slate-800 placeholder:text-slate-500"
                />
                <Select value={selectedLevel} onValueChange={setSelectedLevel}>
                  <SelectTrigger className="w-full sm:w-36 bg-white/90 border-white/30 text-slate-800">
                    <SelectValue placeholder="层级" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="全部">全部层级</SelectItem>
                    <SelectItem value="三级干部">三级干部</SelectItem>
                    <SelectItem value="四级干部">四级干部</SelectItem>
                  </SelectContent>
                </Select>
                <Select value={selectedDepartment} onValueChange={setSelectedDepartment}>
                  <SelectTrigger className="w-full sm:w-36 bg-white/90 border-white/30 text-slate-800">
                    <SelectValue placeholder="部门" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="全部">全部部门</SelectItem>
                    <SelectItem value="技术部">技术部</SelectItem>
                    <SelectItem value="人事部">人事部</SelectItem>
                    <SelectItem value="安监部">安监部</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="rounded-xl border border-slate-200 overflow-hidden shadow-lg bg-white">
              <Table>
                <TableHeader className="bg-gradient-to-r from-slate-50 to-blue-50">
                  <TableRow className="border-b border-slate-200">
                    <TableHead className="text-slate-700 font-semibold py-4">姓名</TableHead>
                    <TableHead className="text-slate-700 font-semibold">单位(部门)</TableHead>
                    <TableHead className="text-slate-700 font-semibold">教育背景</TableHead>
                    <TableHead className="text-slate-700 font-semibold">学时进度</TableHead>
                    <TableHead className="text-slate-700 font-semibold">中青班</TableHead>
                    <TableHead className="text-slate-700 font-semibold">管理教育培训班</TableHead>
                    <TableHead className="text-slate-700 font-semibold">网公司EMT班</TableHead>
                    <TableHead className="text-slate-700 font-semibold">已参培项目(内部)</TableHead>
                    <TableHead className="text-slate-700 font-semibold">层级</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredRecords.map((record) => (
                    <TableRow key={record.id} className="hover:bg-blue-50/50 transition-colors border-b border-slate-100">
                      <TableCell className="font-semibold text-slate-800 py-4">{record.name}</TableCell>
                      <TableCell className="text-slate-600 font-medium">{record.department}</TableCell>
                      <TableCell className="text-slate-600">{record.education}</TableCell>
                      <TableCell>
                        <div className="flex items-center space-x-3">
                          <Progress value={record.progress} className="w-24 h-3" />
                          <span className="text-sm font-semibold text-slate-700 min-w-[2.5rem]">{record.progress}%</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge 
                          variant={record.middleClass === '已参加' ? 'default' : 'secondary'}
                          className={record.middleClass === '已参加' ? 'bg-green-100 text-green-700 border-green-200' : 'bg-slate-100 text-slate-600 border-slate-200'}
                        >
                          {record.middleClass}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Badge 
                          variant={record.managementTraining === '已参加' ? 'default' : 'secondary'}
                          className={record.managementTraining === '已参加' ? 'bg-blue-100 text-blue-700 border-blue-200' : 'bg-slate-100 text-slate-600 border-slate-200'}
                        >
                          {record.managementTraining}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Badge 
                          variant={record.emtClass === '已参加' ? 'default' : 'secondary'}
                          className={record.emtClass === '已参加' ? 'bg-purple-100 text-purple-700 border-purple-200' : 'bg-slate-100 text-slate-600 border-slate-200'}
                        >
                          {record.emtClass}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Button 
                          variant="link" 
                          className="p-0 h-auto text-blue-600 hover:text-blue-800 font-semibold"
                          onClick={() => showProgramDetails(record.internalPrograms)}
                        >
                          查看详情
                        </Button>
                      </TableCell>
                      <TableCell className="text-slate-600 font-medium">{record.level}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>

        {/* 干部学时预警 */}
        <Card className="mb-8 bg-white/70 backdrop-blur-sm shadow-xl border-0 ring-1 ring-slate-200/50">
          <CardHeader className="pb-4 bg-gradient-to-r from-red-500 to-rose-600 text-white rounded-t-lg">
            <CardTitle className="flex items-center text-xl font-semibold">
              <div className="p-2 bg-white/20 rounded-lg mr-3">
                <AlertTriangle className="h-6 w-6" />
              </div>
              干部学时预警
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="mb-6 flex justify-end">
              <Select value={warningLevelFilter} onValueChange={setWarningLevelFilter}>
                <SelectTrigger className="w-40 bg-white border-slate-200 shadow-sm">
                  <SelectValue placeholder="层级筛选" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="全部">全部层级</SelectItem>
                  <SelectItem value="三级干部">三级干部</SelectItem>
                  <SelectItem value="四级干部">四级干部</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="rounded-xl border border-slate-200 overflow-hidden shadow-lg bg-white">
              <Table>
                <TableHeader className="bg-gradient-to-r from-red-50 to-rose-50">
                  <TableRow className="border-b border-slate-200">
                    <TableHead className="text-slate-700 font-semibold py-4">姓名</TableHead>
                    <TableHead className="text-slate-700 font-semibold">单位(部门)</TableHead>
                    <TableHead className="text-slate-700 font-semibold">层级</TableHead>
                    <TableHead className="text-slate-700 font-semibold">总学时进度</TableHead>
                    <TableHead className="text-slate-700 font-semibold">所缺时长</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredWarningExperts.map((expert) => (
                    <TableRow key={expert.id} className="hover:bg-red-50/50 transition-colors border-b border-slate-100">
                      <TableCell className="font-semibold text-slate-800 py-4">{expert.name}</TableCell>
                      <TableCell className="text-slate-600 font-medium">{expert.department}</TableCell>
                      <TableCell className="text-slate-600">{expert.level}</TableCell>
                      <TableCell>
                        <div className="flex items-center space-x-3">
                          <Progress 
                            value={expert.progress} 
                            className="w-24 h-3" 
                            indicatorClassName={getProgressColor(expert.progress)}
                          />
                          <span className="text-sm font-semibold text-slate-700 min-w-[2.5rem]">{expert.progress}%</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge className="bg-red-100 text-red-700 border-red-200 font-semibold">{expert.missingHours} 学时</Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>

        {/* 智能推荐 */}
        <Card className="mb-8 bg-white/70 backdrop-blur-sm shadow-xl border-0 ring-1 ring-slate-200/50">
          <CardHeader className="pb-4 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-t-lg">
            <CardTitle className="flex items-center text-xl font-semibold">
              <div className="p-2 bg-white/20 rounded-lg mr-3">
                <Brain className="h-6 w-6" />
              </div>
              AI智能推荐系统
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <Button 
                onClick={() => showRecommendationList('middleClass')} 
                className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <GraduationCap className="mr-2 h-5 w-5" />
                推荐中青班干部
              </Button>
              <Button 
                onClick={() => showRecommendationList('managementTraining')} 
                className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <Users className="mr-2 h-5 w-5" />
                推荐管理培训干部
              </Button>
              <Button 
                onClick={() => showRecommendationList('emtClass')} 
                className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <Brain className="mr-2 h-5 w-5" />
                推荐EMT班干部
              </Button>
            </div>
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-4 border border-blue-200">
              <p className="text-slate-700 font-medium">
                🤖 基于干部当前学时进度、专业背景和培养要求，AI智能分析推荐最适合参加特定培训班的干部名单
              </p>
            </div>
          </CardContent>
        </Card>

        {/* 新任/转岗干部 */}
        <Card className="mb-8 bg-white/70 backdrop-blur-sm shadow-xl border-0 ring-1 ring-slate-200/50">
          <CardHeader className="pb-4 bg-gradient-to-r from-teal-600 to-cyan-600 text-white rounded-t-lg">
            <CardTitle className="flex items-center text-xl font-semibold">
              <div className="p-2 bg-white/20 rounded-lg mr-3">
                <UserPlus className="h-6 w-6" />
              </div>
              新任/转岗干部管理
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-white to-teal-50 rounded-xl p-6 border border-teal-100 shadow-lg">
                <h3 className="font-semibold text-slate-700 mb-4 text-lg flex items-center">
                  <div className="w-3 h-3 bg-teal-500 rounded-full mr-2"></div>
                  新任干部名单
                </h3>
                <div className="rounded-lg border border-teal-200 overflow-hidden shadow-md bg-white">
                  <Table>
                    <TableHeader className="bg-gradient-to-r from-teal-50 to-cyan-50">
                      <TableRow>
                        <TableHead className="text-slate-700 font-semibold py-3">姓名</TableHead>
                        <TableHead className="text-slate-700 font-semibold">单位(部门)</TableHead>
                        <TableHead className="text-slate-700 font-semibold">任职时间</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {newExperts.map((expert) => (
                        <TableRow key={expert.id} className="hover:bg-teal-50/50 transition-colors">
                          <TableCell className="font-semibold text-slate-800">{expert.name}</TableCell>
                          <TableCell className="text-slate-600 font-medium">{expert.department}</TableCell>
                          <TableCell className="text-slate-600">{expert.appointmentDate}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-white to-cyan-50 rounded-xl p-6 border border-cyan-100 shadow-lg">
                <h3 className="font-semibold text-slate-700 mb-4 text-lg flex items-center">
                  <div className="w-3 h-3 bg-cyan-500 rounded-full mr-2"></div>
                  转岗干部名单（两月内）
                </h3>
                <div className="rounded-lg border border-cyan-200 overflow-hidden shadow-md bg-white">
                  <Table>
                    <TableHeader className="bg-gradient-to-r from-cyan-50 to-blue-50">
                      <TableRow>
                        <TableHead className="text-slate-700 font-semibold py-3">姓名</TableHead>
                        <TableHead className="text-slate-700 font-semibold">单位(部门)</TableHead>
                        <TableHead className="text-slate-700 font-semibold">转岗时间</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {transferredExperts.map((expert) => (
                        <TableRow key={expert.id} className="hover:bg-cyan-50/50 transition-colors">
                          <TableCell className="font-semibold text-slate-800">{expert.name}</TableCell>
                          <TableCell className="text-slate-600 font-medium">{expert.department}</TableCell>
                          <TableCell className="text-slate-600">{expert.transferDate}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 培训复盘与规划 */}
        <Card className="mb-8 bg-white/70 backdrop-blur-sm shadow-xl border-0 ring-1 ring-slate-200/50">
          <CardHeader className="pb-4 bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-t-lg">
            <CardTitle className="flex items-center text-xl font-semibold">
              <div className="p-2 bg-white/20 rounded-lg mr-3">
                <TrendingUp className="h-6 w-6" />
              </div>
              培训复盘与智能规划
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mb-8">
              <div className="bg-gradient-to-br from-white to-amber-50 p-6 rounded-xl border border-amber-100 shadow-lg">
                <h3 className="font-semibold text-slate-700 mb-4 text-lg flex items-center">
                  <div className="w-3 h-3 bg-amber-500 rounded-full mr-2"></div>
                  课程类别占比分析
                </h3>
                <div className="h-72 bg-white rounded-lg p-4 shadow-inner">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={courseDistributionData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={90}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      >
                        {courseDistributionData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-white to-orange-50 p-6 rounded-xl border border-orange-100 shadow-lg">
                <h3 className="font-semibold text-slate-700 mb-4 text-lg flex items-center">
                  <div className="w-3 h-3 bg-orange-500 rounded-full mr-2"></div>
                  干部培训类别差异详情
                </h3>
                <div className="h-72 bg-white rounded-lg p-4 shadow-inner">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={expertTrainingComparisonData}
                      margin={{ top: 20, right: 30, left: 20, bottom: 50 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                      <XAxis dataKey="category" stroke="#64748b" />
                      <YAxis label={{ value: '参与人数', angle: -90, position: 'insideLeft' }} stroke="#64748b" />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: 'white', 
                          border: '1px solid #e2e8f0', 
                          borderRadius: '8px',
                          boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                        }} 
                      />
                      <Legend />
                      <Bar dataKey="level3" name="三级干部" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                      <Bar dataKey="level4" name="四级干部" fill="#10b981" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold text-slate-700 mb-6 text-xl flex items-center">
                <div className="p-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg mr-3">
                  <Brain className="h-5 w-5 text-white" />
                </div>
                AI干部培养智能规划建议
              </h3>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {aiRecommendations.map((recommendation, index) => (
                  <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                        {index + 1}
                      </div>
                      <p className="text-slate-700 leading-relaxed font-medium">{recommendation}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* 内部项目详情弹窗 */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-4xl bg-white shadow-2xl border-0 ring-1 ring-slate-200">
          <DialogHeader className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6 -m-6 mb-6 rounded-t-lg">
            <DialogTitle className="text-xl font-semibold flex items-center">
              <FileText className="mr-2 h-6 w-6" />
              已参培项目详情
            </DialogTitle>
          </DialogHeader>
          <div className="rounded-xl border border-slate-200 overflow-hidden shadow-lg bg-white">
            <Table>
              <TableHeader className="bg-gradient-to-r from-slate-50 to-blue-50">
                <TableRow>
                  <TableHead className="text-slate-700 font-semibold py-4">项目名称</TableHead>
                  <TableHead className="text-slate-700 font-semibold">培训时长</TableHead>
                  <TableHead className="text-slate-700 font-semibold">培训类型</TableHead>
                  <TableHead className="text-slate-700 font-semibold">主办部门</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {selectedPrograms.map((program, index) => (
                  <TableRow key={index} className="hover:bg-blue-50/50 transition-colors">
                    <TableCell className="font-semibold text-slate-800 py-4">{program.name}</TableCell>
                    <TableCell className="text-slate-600 font-medium">{program.duration} 学时</TableCell>
                    <TableCell className="text-slate-600">{program.type}</TableCell>
                    <TableCell className="text-slate-600">{program.department}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </DialogContent>
      </Dialog>

      {/* 智能推荐名单弹窗 */}
      <Dialog open={isRecommendationDialogOpen} onOpenChange={setIsRecommendationDialogOpen}>
        <DialogContent className="max-w-4xl bg-white shadow-2xl border-0 ring-1 ring-slate-200">
          <DialogHeader className="bg-gradient-to-r from-violet-600 to-purple-600 text-white p-6 -m-6 mb-6 rounded-t-lg">
            <DialogTitle className="text-xl font-semibold flex items-center">
              <Brain className="mr-2 h-6 w-6" />
              AI推荐干部名单
            </DialogTitle>
          </DialogHeader>
          <div className="rounded-xl border border-slate-200 overflow-hidden shadow-lg bg-white">
            <Table>
              <TableHeader className="bg-gradient-to-r from-violet-50 to-purple-50">
                <TableRow>
                  <TableHead className="text-slate-700 font-semibold py-4">姓名</TableHead>
                  <TableHead className="text-slate-700 font-semibold">单位(部门)</TableHead>
                  <TableHead className="text-slate-700 font-semibold">层级</TableHead>
                  <TableHead className="text-slate-700 font-semibold">推荐理由</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {recommendationList.map((person, index) => (
                  <TableRow key={index} className="hover:bg-violet-50/50 transition-colors">
                    <TableCell className="font-semibold text-slate-800 py-4">{person.name}</TableCell>
                    <TableCell className="text-slate-600 font-medium">{person.department}</TableCell>
                    <TableCell className="text-slate-600">{person.level}</TableCell>
                    <TableCell className="text-slate-600">{person.reason}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </DialogContent>
      </Dialog>
      </div>
    </DashboardLayout>
  );
};

export default Index;
