import React, { useState, useEffect } from 'react';
import { Users, BarChart3, Link as LinkIcon, Download, Plus, Edit2, Library } from 'lucide-react';

export default function TeacherDashboard() {
  const [activeTab, setActiveTab] = useState('students');
  const [students, setStudents] = useState<any[]>([]);

  useEffect(() => {
    fetch('/api/students')
      .then(res => res.json())
      .then(data => setStudents(data))
      .catch(err => console.error('Failed to fetch students:', err));
  }, []);

  const vocabBooks: any[] = [];

  return (
    <div className="min-h-screen bg-[#F3F4F6] flex font-sans">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-sm border-r border-gray-100 flex flex-col">
        <div className="p-6 border-b border-gray-100 flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">
            T
          </div>
          <span className="text-xl font-bold text-gray-800">教师后台</span>
        </div>
        <nav className="p-4 space-y-2 flex-1">
          <button onClick={() => setActiveTab('students')} className={`w-full flex items-center gap-3 p-3 rounded-xl font-medium transition-colors ${activeTab === 'students' ? 'bg-blue-50 text-blue-600' : 'text-gray-500 hover:bg-gray-50 hover:text-gray-800'}`}>
            <Users size={20} /> 学生管理
          </button>
          <button onClick={() => setActiveTab('vocabulary')} className={`w-full flex items-center gap-3 p-3 rounded-xl font-medium transition-colors ${activeTab === 'vocabulary' ? 'bg-blue-50 text-blue-600' : 'text-gray-500 hover:bg-gray-50 hover:text-gray-800'}`}>
            <Library size={20} /> 词库管理
          </button>
          <button onClick={() => setActiveTab('dashboard')} className={`w-full flex items-center gap-3 p-3 rounded-xl font-medium transition-colors ${activeTab === 'dashboard' ? 'bg-blue-50 text-blue-600' : 'text-gray-500 hover:bg-gray-50 hover:text-gray-800'}`}>
            <BarChart3 size={20} /> 学情看板
          </button>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8 overflow-y-auto">
        {activeTab === 'students' && (
          <div className="max-w-5xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800">学生管理</h2>
              <div className="flex gap-3">
                <button className="px-4 py-2 bg-white border border-gray-200 text-gray-600 rounded-xl font-medium flex items-center gap-2 hover:bg-gray-50 transition-colors">
                  <Download size={18} /> 导出名单
                </button>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-xl font-medium flex items-center gap-2 hover:bg-blue-700 transition-colors shadow-sm shadow-blue-600/20">
                  <Plus size={18} /> 导入学生名单
                </button>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-50/50 text-gray-500 text-sm uppercase tracking-wider">
                    <th className="p-4 font-medium">姓名</th>
                    <th className="p-4 font-medium">当前进度</th>
                    <th className="p-4 font-medium">专属免密链接 (Magic Link)</th>
                    <th className="p-4 font-medium text-right">操作</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {students.map(s => (
                    <tr key={s.id} className="hover:bg-gray-50/50 transition-colors">
                      <td className="p-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-sm">
                            {s.name[0]}
                          </div>
                          <span className="font-medium text-gray-800">{s.name}</span>
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="flex items-center gap-2 group cursor-pointer">
                          <span className="font-bold text-gray-700">第 {s.currentPage} 页</span>
                          <button className="text-gray-400 hover:text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity">
                            <Edit2 size={14} />
                          </button>
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="flex items-center gap-2 text-gray-500 text-sm bg-gray-50 px-3 py-1.5 rounded-lg w-fit font-mono">
                          {window.location.origin}/student/{s.name}
                        </div>
                      </td>
                      <td className="p-4 text-right">
                        <button 
                          onClick={() => {
                            navigator.clipboard.writeText(`${window.location.origin}/student/${s.name}`);
                            alert(`已复制 ${s.name} 的专属链接！\n\n您可以直接粘贴发送给该学生。`);
                          }}
                          className="text-blue-600 hover:text-blue-800 font-medium flex items-center gap-1.5 ml-auto bg-blue-50 px-3 py-1.5 rounded-lg transition-colors"
                        >
                          <LinkIcon size={16}/> 复制发送
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}



        {activeTab === 'vocabulary' && (
          <div className="max-w-5xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800">词库管理</h2>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-xl font-medium flex items-center gap-2 hover:bg-blue-700 transition-colors shadow-sm shadow-blue-600/20">
                <Plus size={18} /> 导入词汇书 (Excel/CSV)
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {vocabBooks.length > 0 ? (
                vocabBooks.map(book => (
                  <div key={book.id} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group cursor-pointer">
                    <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Library size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{book.name}</h3>
                    <div className="space-y-2 text-sm text-gray-500 mb-6">
                      <div className="flex justify-between">
                        <span>总词汇量</span>
                        <span className="font-medium text-gray-700">{book.wordCount} 词</span>
                      </div>
                      <div className="flex justify-between">
                        <span>总页数 (20词/页)</span>
                        <span className="font-medium text-gray-700">{book.pages} 页</span>
                      </div>
                      <div className="flex justify-between">
                        <span>正在学习</span>
                        <span className="font-medium text-gray-700">{book.activeStudents} 人</span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button className="flex-1 py-2 bg-gray-50 text-gray-600 rounded-lg font-medium hover:bg-gray-100 transition-colors">编辑</button>
                      <button className="flex-1 py-2 bg-blue-50 text-blue-600 rounded-lg font-medium hover:bg-blue-100 transition-colors">分配给学生</button>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-span-full py-12 flex flex-col items-center justify-center bg-white rounded-2xl border border-dashed border-gray-300 text-gray-500">
                  <Library size={48} className="text-gray-300 mb-4" />
                  <p className="text-lg font-medium mb-2">暂无词汇书</p>
                  <p className="text-sm text-gray-400">点击右上角按钮导入您的词汇数据</p>
                </div>
              )}
            </div>
          </div>
        )}

        {activeTab === 'dashboard' && (
          <div className="max-w-5xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">学情看板</h2>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-50/50 text-gray-500 text-sm uppercase tracking-wider">
                    <th className="p-4 font-medium">学生姓名</th>
                    <th className="p-4 font-medium">目前进度</th>
                    <th className="p-4 font-medium">上次完成日期</th>
                    <th className="p-4 font-medium">正确率</th>
                    <th className="p-4 font-medium">错词列表</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {students.map(s => (
                    <tr key={s.id} className="hover:bg-gray-50/50 transition-colors">
                      <td className="p-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-sm">
                            {s.name[0]}
                          </div>
                          <span className="font-medium text-gray-800">{s.name}</span>
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="flex flex-col gap-1">
                          <span className="text-sm font-bold text-gray-700">第 {s.currentPage} 页</span>
                          {s.completed ? (
                            <span className="inline-flex items-center gap-1.5 text-green-700 bg-green-50 px-2 py-0.5 rounded-full text-xs font-medium border border-green-200/50 w-fit">
                              <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span> 已完成
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1.5 text-red-700 bg-red-50 px-2 py-0.5 rounded-full text-xs font-medium border border-red-200/50 w-fit">
                              <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span> 未完成
                            </span>
                          )}
                        </div>
                      </td>
                      <td className="p-4 text-gray-500 text-sm font-medium">{s.lastCompletedDate}</td>
                      <td className="p-4 font-medium text-gray-700">{s.accuracy}</td>
                      <td className="p-4">
                        {s.wrongWords.length > 0 ? (
                          <div className="flex flex-wrap gap-2">
                            {s.wrongWords.map((w, i) => (
                              <span key={i} className="text-red-600 bg-red-50 px-2.5 py-1 rounded-lg text-sm font-medium border border-red-100">
                                {w}
                              </span>
                            ))}
                          </div>
                        ) : (
                          <span className="text-gray-400">-</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
