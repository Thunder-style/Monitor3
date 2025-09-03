import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend, BarChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts';
import { TrendingUp, PieChart as PieChartIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

const CourseAnalysisComponent = ({ className }) => {
  // 课程占比分析数据
  const courseDistributionData = [
    { name: '综合教育', value: 30, color: '#47dae8' },
    { name: '管理教育', value: 25, color: '#89e5ff' },
    { name: '专业教育', value: 35, color: '#50e3c2' },
    { name: '党性教育', value: 10, color: '#67a1e5' }
  ];

  // 干部参与培训类型差异数据
  const expertTrainingComparisonData = [
    { category: '综合教育', level3: 28, level4: 32 },
    { category: '管理教育', level3: 22, level4: 25 },
    { category: '专业教育', level3: 40, level4: 35 },
    { category: '党性教育', level3: 10, level4: 8 }
  ];

  const COLORS = ['#47dae8', '#89e5ff', '#50e3c2', '#67a1e5'];

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div 
          className="p-3 rounded-lg border border-cyan-400/30 backdrop-blur-sm"
          style={{ background: 'rgba(19, 25, 47, 0.9)' }}
        >
          <p className="text-cyan-100 font-medium">{label}</p>
          {payload.map((entry, index) => (
            <p key={index} className="text-gray-300">
              <span style={{ color: entry.color }}>{entry.dataKey}: </span>
              {entry.value}{entry.dataKey.includes('level') ? '人' : '%'}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  const CustomPieTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const data = payload[0];
      return (
        <div 
          className="p-3 rounded-lg border border-cyan-400/30 backdrop-blur-sm"
          style={{ background: 'rgba(19, 25, 47, 0.9)' }}
        >
          <p className="text-cyan-100 font-medium">{data.name}</p>
          <p className="text-gray-300">
            占比: <span style={{ color: data.payload.color }}>{data.value}%</span>
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className={cn("space-y-6", className)}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* 课程类别占比分析 */}
        <div 
          className="p-6 rounded-lg border border-cyan-400/30 backdrop-blur-sm"
          style={{ background: 'rgba(19, 25, 47, 0.6)' }}
        >
          <div className="flex items-center space-x-3 mb-4">
            <div 
              className="p-2 rounded-lg"
              style={{ 
                background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
                boxShadow: '0 0 15px rgba(245, 158, 11, 0.3)'
              }}
            >
              <PieChartIcon className="h-5 w-5 text-white" />
            </div>
            <h3 className="text-lg font-bold text-cyan-100">课程类别占比分析</h3>
          </div>
          
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={courseDistributionData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={120}
                  paddingAngle={5}
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  labelLine={false}
                >
                  {courseDistributionData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip content={<CustomPieTooltip />} />
              </PieChart>
            </ResponsiveContainer>
          </div>
          
          {/* 统计详情 */}
          <div className="grid grid-cols-2 gap-4 mt-4">
            {courseDistributionData.map((item, index) => (
              <div 
                key={index}
                className="p-3 rounded-lg border border-gray-700/50"
                style={{ background: 'rgba(19, 25, 47, 0.4)' }}
              >
                <div className="flex items-center space-x-2">
                  <div 
                    className="w-3 h-3 rounded-full"
                    style={{ background: item.color }}
                  />
                  <span className="text-cyan-100 font-medium">{item.name}</span>
                </div>
                <div className="mt-1">
                  <span className="text-2xl font-bold" style={{ color: item.color }}>
                    {item.value}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 干部培训类别差异详情 */}
        <div 
          className="p-6 rounded-lg border border-cyan-400/30 backdrop-blur-sm"
          style={{ background: 'rgba(19, 25, 47, 0.6)' }}
        >
          <div className="flex items-center space-x-3 mb-4">
            <div 
              className="p-2 rounded-lg"
              style={{ 
                background: 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)',
                boxShadow: '0 0 15px rgba(249, 115, 22, 0.3)'
              }}
            >
              <TrendingUp className="h-5 w-5 text-white" />
            </div>
            <h3 className="text-lg font-bold text-cyan-100">干部培训类别差异详情</h3>
          </div>
          
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={expertTrainingComparisonData}
                margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(71, 218, 232, 0.2)" />
                <XAxis 
                  dataKey="category" 
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#bcdcff', fontSize: 12 }}
                />
                <YAxis 
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#bcdcff', fontSize: 12 }}
                  label={{ value: '参与人数', angle: -90, position: 'insideLeft', style: { textAnchor: 'middle', fill: '#bcdcff' } }}
                />
                <Tooltip content={<CustomTooltip />} />
                <Legend 
                  wrapperStyle={{ color: '#bcdcff' }}
                />
                <Bar 
                  dataKey="level3" 
                  name="三级干部" 
                  fill="#47dae8" 
                  radius={[4, 4, 0, 0]}
                />
                <Bar 
                  dataKey="level4" 
                  name="四级干部" 
                  fill="#89e5ff" 
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
          
          {/* 对比分析 */}
          <div className="mt-4 space-y-2">
            {expertTrainingComparisonData.map((item, index) => (
              <div 
                key={index}
                className="flex items-center justify-between p-2 rounded border border-gray-700/30"
                style={{ background: 'rgba(19, 25, 47, 0.3)' }}
              >
                <span className="text-cyan-100 text-sm">{item.category}</span>
                <div className="flex items-center space-x-4 text-sm">
                  <span className="text-cyan-300">三级: {item.level3}人</span>
                  <span className="text-blue-300">四级: {item.level4}人</span>
                  <span className="text-gray-400">
                    差值: {Math.abs(item.level3 - item.level4)}人
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseAnalysisComponent;
