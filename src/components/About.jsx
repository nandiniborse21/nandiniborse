import React from 'react';
import { Code2, BookOpen, Compass, Briefcase, Award } from 'lucide-react';

export default function About() {
  const corePillars = [
    {
      title: "Strong Computing Fundamentals",
      desc: "Deep focus on Object-Oriented Programming (Java & C++), Data Structures, DBMS, and Operating Systems.",
      icon: Code2
    },
    {
      title: "Python & Django Full-Stack",
      desc: "Practical experience building backend architectures, data models, and dynamic web apps with Django.",
      icon: BookOpen
    },
    {
      title: "Hands-on Industry Internship",
      desc: "Completed a 3-month internship at Passion Software Solutions, delivering an Attendance Management System.",
      icon: Briefcase
    },
    {
      title: "Consistent Academic Rigor",
      desc: "91.00% in SSC and 88.65% First Class with Distinction in Diploma Computer Engineering.",
      icon: Award
    }
  ];

  return (
    <section id="about" className="py-20 md:py-28 border-t border-stone-200/80">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-4">
          <span className="font-mono-code text-xs font-semibold text-stone-500 uppercase tracking-widest">
            01 / Background & Narrative
          </span>
          <div className="h-px bg-stone-200 flex-1" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Narrative Column */}
          <div className="lg:col-span-7">
            <h2 className="text-3xl sm:text-4xl font-editorial font-bold text-stone-900 leading-tight mb-6">
              A journey rooted in technical curiosity, academic rigor, and real-world implementation.
            </h2>

            <div className="space-y-4 text-stone-600 text-base leading-relaxed">
              <p>
                My foundation in computing began with an outstanding <span className="text-stone-900 font-semibold">91.00% in SSC</span> and flourished during my <span className="text-stone-900 font-medium">Diploma in Computer Engineering</span> at <span className="text-stone-900 font-medium">SMDR Government Polytechnic Dhule</span>, where I graduated with <span className="text-stone-900 font-semibold">88.65% First Class with Distinction</span>. There, I mastered foundational programming in C, C++, and Java, and spearheaded my diploma capstone project: a full-featured <span className="text-stone-900 font-medium">Yoga Recommendation System</span> built using Python and Django.
              </p>
              <p>
                To translate theory into industry practice, I completed a <span className="text-stone-900 font-medium">3-month curriculum internship at Passion Software Solutions, Jalgaon</span>. Working hands-on with the Django framework, I developed a comprehensive <span className="text-stone-900 font-medium">Attendance Management System</span> enabling faculty to record, calculate, and manage student attendance seamlessly.
              </p>
              <p>
                Currently, I am pursuing my <span className="text-stone-900 font-medium">B.Tech in Information Technology at R. C. Patel Institute of Technology, Shirpur</span>. I actively practice competitive programming on CodeChef, delve into Data Structures & Algorithms, and explore modern web technologies to engineer clean, maintainable, and high-impact digital solutions.
              </p>
            </div>

            {/* Quote block */}
            <div className="mt-8 p-5 bg-stone-100/70 rounded-xl border-l-4 border-stone-800">
              <p className="font-editorial text-lg text-stone-800 italic mb-2">
                "Gained practical experience through academic projects and internships, and continuously working to improve programming, web development, and problem-solving skills."
              </p>
              <span className="text-xs font-mono-code text-stone-500 uppercase tracking-wider">
                — Nandini Borse (Resume Summary)
              </span>
            </div>
          </div>

          {/* Pillars & Quick Specs Column */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-xs">
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-stone-100">
                <Compass className="w-4 h-4 text-stone-700" />
                <h3 className="font-semibold text-stone-900 text-sm uppercase tracking-wider">
                  Core Engineering Strengths
                </h3>
              </div>

              <div className="space-y-4">
                {corePillars.map((pillar, idx) => {
                  const Icon = pillar.icon;
                  return (
                    <div key={idx} className="flex gap-3">
                      <div className="p-2 rounded-lg bg-stone-100 text-stone-800 h-fit mt-0.5">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-stone-900 mb-0.5">
                          {pillar.title}
                        </h4>
                        <p className="text-xs text-stone-500 leading-normal">
                          {pillar.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Quick Specs */}
            <div className="bg-stone-900 text-[#FAF9F5] p-6 rounded-2xl shadow-sm">
              <h3 className="font-editorial text-xl font-bold mb-3 text-stone-100">
                Quick Snapshot
              </h3>
              <ul className="space-y-2 text-xs text-stone-300">
                <li className="flex justify-between py-1 border-b border-stone-800">
                  <span className="text-stone-400">Current Program</span>
                  <span className="font-medium text-stone-200">B.Tech IT (2026 - Present)</span>
                </li>
                <li className="flex justify-between py-1 border-b border-stone-800">
                  <span className="text-stone-400">College</span>
                  <span className="font-medium text-stone-200">RCPIT Shirpur</span>
                </li>
                <li className="flex justify-between py-1 border-b border-stone-800">
                  <span className="text-stone-400">Diploma Merit</span>
                  <span className="font-medium text-emerald-400">88.65% Distinction</span>
                </li>
                <li className="flex justify-between py-1 border-b border-stone-800">
                  <span className="text-stone-400">SSC Merit</span>
                  <span className="font-medium text-emerald-400">91.00%</span>
                </li>
                <li className="flex justify-between py-1 border-b border-stone-800">
                  <span className="text-stone-400">Internship</span>
                  <span className="font-medium text-stone-200">Passion Software Solutions (3 Mo)</span>
                </li>
                <li className="flex justify-between pt-1">
                  <span className="text-stone-400">Open For</span>
                  <span className="font-medium text-stone-200">Internships & Dev Roles</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
