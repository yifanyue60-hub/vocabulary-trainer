import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, User } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#F9FAFB] p-6 font-sans">
      <div className="w-full max-w-md bg-white rounded-3xl p-8 shadow-sm border border-gray-100 text-center">
        <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <span className="text-4xl">🚀</span>
        </div>
        <h1 className="text-3xl font-bold text-gray-800 mb-2">单词挑战系统</h1>
        <p className="text-gray-500 mb-8">请选择您的身份进入系统</p>
        
        <div className="space-y-4">
          <Link 
            to="/teacher" 
            className="w-full py-4 bg-blue-50 text-blue-600 rounded-2xl font-bold border-2 border-blue-100 hover:bg-blue-100 transition-colors flex items-center justify-center gap-3"
          >
            <GraduationCap size={24} /> 进入教师后台
          </Link>
          
          <Link 
            to="/student/张悦晨" 
            className="w-full py-4 bg-[#FF8A00] text-white rounded-2xl font-bold shadow-[0_4px_0_0_#E67A00] hover:bg-[#F97316] active:translate-y-[4px] active:shadow-none transition-all flex items-center justify-center gap-3 mb-4"
          >
            <User size={24} /> 体验学生端 (张悦晨 - 第50页)
          </Link>
          <Link 
            to="/student/秦一涵" 
            className="w-full py-4 bg-blue-600 text-white rounded-2xl font-bold shadow-[0_4px_0_0_#2563EB] hover:bg-blue-700 active:translate-y-[4px] active:shadow-none transition-all flex items-center justify-center gap-3 mb-4"
          >
            <User size={24} /> 体验学生端 (秦一涵 - 第33页)
          </Link>
          <Link 
            to="/student/尹亦诚" 
            className="w-full py-4 bg-purple-600 text-white rounded-2xl font-bold shadow-[0_4px_0_0_#9333EA] hover:bg-purple-700 active:translate-y-[4px] active:shadow-none transition-all flex items-center justify-center gap-3 mb-4"
          >
            <User size={24} /> 体验学生端 (尹亦诚 - 第15页)
          </Link>
          <Link 
            to="/student/李华" 
            className="w-full py-4 bg-green-600 text-white rounded-2xl font-bold shadow-[0_4px_0_0_#16A34A] hover:bg-green-700 active:translate-y-[4px] active:shadow-none transition-all flex items-center justify-center gap-3 mb-4"
          >
            <User size={24} /> 体验学生端 (李华 - 第1页)
          </Link>
          <Link 
            to="/student/张伟" 
            className="w-full py-4 bg-red-600 text-white rounded-2xl font-bold shadow-[0_4px_0_0_#DC2626] hover:bg-red-700 active:translate-y-[4px] active:shadow-none transition-all flex items-center justify-center gap-3"
          >
            <User size={24} /> 体验学生端 (张伟 - 第88页)
          </Link>
        </div>
      </div>
    </div>
  );
}
