import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Table, TableBody, TableCell, TableHeader, TableRow, TableHead } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { FileText, User, Search, Filter } from 'lucide-react';
import { cn } from '@/lib/utils';

const TrainingRecordsTable = ({ className }) => {
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
    },
    { 
      id: 4, 
      name: '陈明', 
      department: '财务部',
      education: '本科', 
      progress: 45,
      middleClass: '未参加',
      managementTraining: '未参加',
      emtClass: '未参加',
      level: '三级干部',
      internalPrograms: [
        { name: '财务管理专题班', duration: 12, type: '专业教育', department: '财务处' }
      ]
    },
    { 
      id: 5, 
      name: '刘芳', 
      department: '市场部',
      education: '硕士', 
      progress: 38,
      middleClass: '未参加',
      managementTraining: '已参加',
      emtClass: '未参加',
      level: '四级干部',
      internalPrograms: [
        { name: '市场营销创新班', duration: 8, type: '专业教育', department: '市场部' }
      ]
    }
  ]);

  // 筛选状态
  const [selectedLevel, setSelectedLevel] = useState('全部');
  const [selectedDepartment, setSelectedDepartment] = useState('全部');
  const [searchName, setSearchName] = useState('');

  // 弹窗状态
  const [selectedPrograms, setSelectedPrograms] = useState([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // 筛选后的数据
  const filteredRecords = trainingRecords.filter(record => {
    if (selectedLevel !== '全部' && record.level !== selectedLevel) return false;
    if (selectedDepartment !== '全部' && record.department !== selectedDepartment) return false;
    if (searchName && !record.name.includes(searchName)) return false;
    return true;
  });

  const getProgressColor = (progress) => {
    if (progress >= 80) return 'text-green-400';
    if (progress >= 60) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getProgressBg = (progress) => {
    if (progress >= 80) return 'bg-green-500/20 border-green-500/40';
    if (progress >= 60) return 'bg-yellow-500/20 border-yellow-500/40';
    return 'bg-red-500/20 border-red-500/40';
  };

  const showProgramDetails = (programs) => {
    setSelectedPrograms(programs);
    setIsDialogOpen(true);
  };

  return (
    <div className={cn("space-y-4", className)}>
      {/* 筛选栏 */}
      <div 
        className="p-4 rounded-lg border border-gray-700/50 backdrop-blur-sm"
        style={{ background: 'rgba(19, 25, 47, 0.6)' }}
      >
        <div className="flex flex-wrap gap-4 items-center">
          <div className="flex items-center space-x-2">
            <Search className="h-4 w-4 text-cyan-300" />
            <Input
              placeholder="搜索姓名..."
              value={searchName}
              onChange={(e) => setSearchName(e.target.value)}
              className="w-32 bg-gray-800/50 border-gray-600 text-cyan-100 placeholder-gray-400"
            />
          </div>
          
          <div className="flex items-center space-x-2">
            <Filter className="h-4 w-4 text-cyan-300" />
            <Select value={selectedLevel} onValueChange={setSelectedLevel}>
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

          <Select value={selectedDepartment} onValueChange={setSelectedDepartment}>
            <SelectTrigger className="w-32 bg-gray-800/50 border-gray-600 text-cyan-100">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="bg-gray-800 border-gray-600">
              <SelectItem value="全部">全部部门</SelectItem>
              <SelectItem value="技术部">技术部</SelectItem>
              <SelectItem value="人事部">人事部</SelectItem>
              <SelectItem value="安监部">安监部</SelectItem>
              <SelectItem value="财务部">财务部</SelectItem>
              <SelectItem value="市场部">市场部</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* 表格 */}
      <div 
        className="rounded-lg border border-gray-700/50 overflow-hidden backdrop-blur-sm"
        style={{ background: 'rgba(19, 25, 47, 0.6)' }}
      >
        <Table className="cyber-table">
          <TableHeader>
            <TableRow className="border-b border-cyan-400/30">
              <TableHead className="text-cyan-100 font-semibold">姓名</TableHead>
              <TableHead className="text-cyan-100 font-semibold">单位(部门)</TableHead>
              <TableHead className="text-cyan-100 font-semibold">层级</TableHead>
              <TableHead className="text-cyan-100 font-semibold">教育背景</TableHead>
              <TableHead className="text-cyan-100 font-semibold">进度</TableHead>
              <TableHead className="text-cyan-100 font-semibold">中青班</TableHead>
              <TableHead className="text-cyan-100 font-semibold">管理教育培训班</TableHead>
              <TableHead className="text-cyan-100 font-semibold">网公司EMT班</TableHead>
              <TableHead className="text-cyan-100 font-semibold">已参培项目(内部)</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredRecords.map((record) => (
              <TableRow 
                key={record.id} 
                className="border-b border-gray-700/30 hover:bg-cyan-400/5 transition-colors"
              >
                <TableCell className="text-cyan-100 font-medium">
                  <div className="flex items-center space-x-2">
                    <User className="h-4 w-4 text-cyan-300" />
                    <span>{record.name}</span>
                  </div>
                </TableCell>
                <TableCell className="text-gray-300">{record.department}</TableCell>
                <TableCell>
                  <Badge 
                    variant="outline" 
                    className={cn(
                      "border-cyan-400/50 text-cyan-300",
                      record.level === '三级干部' && "bg-blue-500/20",
                      record.level === '四级干部' && "bg-purple-500/20"
                    )}
                  >
                    {record.level}
                  </Badge>
                </TableCell>
                <TableCell className="text-gray-300">{record.education}</TableCell>
                <TableCell>
                  <div className="flex items-center space-x-2">
                    <div className={cn("px-2 py-1 rounded text-sm font-semibold", getProgressBg(record.progress))}>
                      <span className={getProgressColor(record.progress)}>{record.progress}%</span>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge 
                    variant={record.middleClass === '已参加' ? 'default' : 'secondary'}
                    className={cn(
                      record.middleClass === '已参加' 
                        ? 'bg-green-500/20 text-green-300 border-green-500/40' 
                        : 'bg-gray-500/20 text-gray-300 border-gray-500/40'
                    )}
                  >
                    {record.middleClass}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Badge 
                    variant={record.managementTraining === '已参加' ? 'default' : 'secondary'}
                    className={cn(
                      record.managementTraining === '已参加' 
                        ? 'bg-blue-500/20 text-blue-300 border-blue-500/40' 
                        : 'bg-gray-500/20 text-gray-300 border-gray-500/40'
                    )}
                  >
                    {record.managementTraining}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Badge 
                    variant={record.emtClass === '已参加' ? 'default' : 'secondary'}
                    className={cn(
                      record.emtClass === '已参加' 
                        ? 'bg-purple-500/20 text-purple-300 border-purple-500/40' 
                        : 'bg-gray-500/20 text-gray-300 border-gray-500/40'
                    )}
                  >
                    {record.emtClass}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => showProgramDetails(record.internalPrograms)}
                    className="border-cyan-400/50 text-cyan-300 hover:bg-cyan-400/10"
                  >
                    查看详情
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* 内部项目详情弹窗 */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent 
          className="max-w-4xl border border-cyan-400/30 backdrop-blur-sm"
          style={{ background: 'rgba(19, 25, 47, 0.9)' }}
        >
          <DialogHeader className="border-b border-cyan-400/30 pb-4">
            <DialogTitle className="text-xl font-semibold flex items-center text-cyan-100">
              <FileText className="mr-2 h-6 w-6 text-cyan-300" />
              已参培项目详情
            </DialogTitle>
          </DialogHeader>
          <div className="rounded-lg border border-gray-700/50 overflow-hidden">
            <Table className="cyber-table">
              <TableHeader>
                <TableRow className="border-b border-cyan-400/30">
                  <TableHead className="text-cyan-100 font-semibold">项目名称</TableHead>
                  <TableHead className="text-cyan-100 font-semibold">培训时长</TableHead>
                  <TableHead className="text-cyan-100 font-semibold">培训类型</TableHead>
                  <TableHead className="text-cyan-100 font-semibold">主办部门</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {selectedPrograms.map((program, index) => (
                  <TableRow key={index} className="border-b border-gray-700/30 hover:bg-cyan-400/5">
                    <TableCell className="text-cyan-100 font-medium">{program.name}</TableCell>
                    <TableCell className="text-gray-300">{program.duration} 学时</TableCell>
                    <TableCell className="text-gray-300">{program.type}</TableCell>
                    <TableCell className="text-gray-300">{program.department}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default TrainingRecordsTable;
