import React, { useState } from 'react';
import { X, AlertTriangle, Users, Code2 } from 'lucide-react';

const INITIAL_STUDENTS = [
  { id: 1, rollNo: 'IT-101', name: 'Aarav Sharma', present: true, attendanceCount: 28, totalSessions: 30 },
  { id: 2, rollNo: 'IT-102', name: 'Bhavna Patel', present: true, attendanceCount: 29, totalSessions: 30 },
  { id: 3, rollNo: 'IT-103', name: 'Chetan Deshmukh', present: false, attendanceCount: 21, totalSessions: 30 },
  { id: 4, rollNo: 'IT-104', name: 'Divya Kulkarni', present: true, attendanceCount: 27, totalSessions: 30 },
  { id: 5, rollNo: 'IT-105', name: 'Eknath Patil', present: false, attendanceCount: 19, totalSessions: 30 },
  { id: 6, rollNo: 'IT-106', name: 'Farhan Shaikh', present: true, attendanceCount: 26, totalSessions: 30 },
];

export default function AttendanceSimulatorModal({ isOpen, onClose }) {
  const [students, setStudents] = useState(INITIAL_STUDENTS);
  const [selectedSubject, setSelectedSubject] = useState('Python & Django Architecture');
  const [showCode, setShowCode] = useState(false);

  if (!isOpen) return null;

  const toggleStatus = (id) => {
    setStudents(prev => prev.map(s => {
      if (s.id === id) {
        const nextState = !s.present;
        const countDiff = nextState ? 1 : -1;
        return {
          ...s,
          present: nextState,
          attendanceCount: Math.max(0, s.attendanceCount + countDiff)
        };
      }
      return s;
    }));
  };

  const markAll = (status) => {
    setStudents(prev => prev.map(s => ({
      ...s,
      present: status,
      attendanceCount: status ? Math.min(30, s.attendanceCount + 1) : Math.max(0, s.attendanceCount - 1)
    })));
  };

  const presentCount = students.filter(s => s.present).length;
  const overallPercentage = Math.round((presentCount / students.length) * 100);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="bg-white w-full max-w-3xl rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh] animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-slate-900 via-emerald-950 to-slate-900 p-5 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center text-emerald-300">
              <Users className="w-5 h-5 text-emerald-300" />
            </div>
            <div>
              <div className="text-base font-bold font-heading flex items-center gap-2">
                <span>Attendance Management System — Faculty Portal</span>
                <span className="text-[10px] bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded-full border border-amber-400/30 font-mono-code">
                  Internship Project
                </span>
              </div>
              <p className="text-xs text-slate-300 font-mono-code">
                Developed during 3-Month Internship @ Passion Software Solutions, Jalgaon
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-300 hover:text-white rounded-xl hover:bg-white/10 transition-colors"
            aria-label="Close Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6 text-slate-800">
          {/* Controls Strip */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200">
            <div>
              <label className="block text-[11px] font-mono-code uppercase tracking-wider text-slate-500 font-bold mb-1">
                Subject Module:
              </label>
              <select
                value={selectedSubject}
                onChange={(e) => setSelectedSubject(e.target.value)}
                className="text-xs font-semibold bg-white border border-slate-300 rounded-lg px-3 py-1.5 focus:outline-hidden focus:border-emerald-600"
              >
                <option>Python & Django Architecture</option>
                <option>Object-Oriented Programming (Java)</option>
                <option>Database Management Systems (SQL)</option>
              </select>
            </div>

            {/* Quick Stats */}
            <div className="flex items-center gap-3">
              <div className="px-3 py-1.5 rounded-xl bg-white border border-slate-200 text-center">
                <span className="text-[10px] text-slate-400 block font-mono-code">Present Today</span>
                <span className="text-base font-bold text-emerald-600">{presentCount} / {students.length}</span>
              </div>

              <div className="px-3 py-1.5 rounded-xl bg-white border border-slate-200 text-center">
                <span className="text-[10px] text-slate-400 block font-mono-code">Session Rate</span>
                <span className={`text-base font-bold ${overallPercentage >= 75 ? 'text-emerald-600' : 'text-amber-600'}`}>
                  {overallPercentage}%
                </span>
              </div>

              <button
                onClick={() => setShowCode(!showCode)}
                className="p-2 text-xs font-semibold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 rounded-xl border border-emerald-200 transition-colors flex items-center gap-1.5"
              >
                <Code2 className="w-4 h-4" />
                <span className="hidden sm:inline">{showCode ? 'Hide Model' : 'View Django Model'}</span>
              </button>
            </div>
          </div>

          {/* Code Viewer */}
          {showCode && (
            <div className="bg-slate-900 text-slate-200 p-4 rounded-2xl font-mono-code text-xs border border-slate-800 animate-in fade-in duration-150">
              <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800 text-[11px] text-slate-400">
                <span>attendance/models.py</span>
                <span className="text-emerald-400">Django ORM / PostgreSQL & SQLite</span>
              </div>
              <pre className="overflow-x-auto text-emerald-300">
{`class AttendanceRecord(models.Model):
    student = models.ForeignKey(Student, on_delete=models.CASCADE)
    subject = models.ForeignKey(Subject, on_delete=models.CASCADE)
    date = models.DateField(auto_now_add=True)
    is_present = models.BooleanField(default=True)
    marked_by = models.ForeignKey(Faculty, on_delete=models.SET_NULL, null=True)

    def calculate_percentage(self):
        total = AttendanceRecord.objects.filter(student=self.student).count()
        present = AttendanceRecord.objects.filter(student=self.student, is_present=True).count()
        return round((present / total) * 100, 2) if total > 0 else 0`}
              </pre>
            </div>
          )}

          {/* Interactive Roster */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 font-mono-code">
                Interactive Student Roster (Click status button to toggle Present / Absent):
              </h4>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => markAll(true)}
                  className="text-[11px] text-emerald-700 font-semibold hover:underline"
                >
                  Mark All Present
                </button>
                <span className="text-slate-300">•</span>
                <button
                  onClick={() => markAll(false)}
                  className="text-[11px] text-slate-500 hover:text-slate-800"
                >
                  Clear All
                </button>
              </div>
            </div>

            <div className="divide-y divide-slate-100 rounded-2xl border border-slate-200 overflow-hidden bg-white shadow-2xs">
              {students.map((student) => {
                const pct = Math.round((student.attendanceCount / student.totalSessions) * 100);
                const isDefaulter = pct < 75;

                return (
                  <div
                    key={student.id}
                    className="p-3.5 flex items-center justify-between gap-4 hover:bg-slate-50/80 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <span className="font-mono-code text-xs text-slate-400 w-16">
                        {student.rollNo}
                      </span>
                      <div>
                        <span className="text-xs font-semibold text-slate-900 block">
                          {student.name}
                        </span>
                        <span className="text-[11px] text-slate-500 font-mono-code">
                          {student.attendanceCount}/{student.totalSessions} sessions ({pct}%)
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      {isDefaulter && (
                        <span className="hidden sm:inline-flex items-center gap-1 text-[10px] font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200">
                          <AlertTriangle className="w-3 h-3 text-amber-600" />
                          &lt; 75% Defaulter Alert
                        </span>
                      )}

                      <button
                        onClick={() => toggleStatus(student.id)}
                        className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all shadow-2xs ${
                          student.present
                            ? 'bg-emerald-600 text-white hover:bg-emerald-700'
                            : 'bg-rose-100 text-rose-700 border border-rose-200 hover:bg-rose-200'
                        }`}
                      >
                        {student.present ? '✓ Present' : '✗ Absent'}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-slate-50 p-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <span>
            Automated faculty solution built with <strong>Django & SQLite</strong> at <strong>Passion Software Solutions</strong>.
          </span>
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold transition-colors"
          >
            Close Simulator
          </button>
        </div>
      </div>
    </div>
  );
}
