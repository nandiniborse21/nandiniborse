import React, { useState } from 'react';
import { X, Sparkles, Check, AlertCircle, RefreshCw, Code2 } from 'lucide-react';

const YOGA_DATABASE = [
  {
    condition: 'back-pain',
    conditionLabel: 'Lower Back & Spinal Stiffness',
    recommendedAsana: 'Bhujangasana (Cobra Pose)',
    sanskritName: 'भुजङ्गासन',
    difficulty: 'Beginner Friendly',
    duration: '3–5 Breaths (3 Repetitions)',
    benefits: [
      'Strengthens the spinal column and relieves lower back fatigue',
      'Opens chest and stimulates abdominal organs',
      'Improves posture after long hours of seated desk work'
    ],
    precautions: 'Avoid if pregnant or recovering from recent spinal/abdominal injury.',
    codeSnippet: `# Django Recommendation Query Logic
def get_recommendations(condition, fitness_level):
    return Asana.objects.filter(
        target_symptoms__icontains=condition,
        difficulty_level=fitness_level
    ).order_by('-therapeutic_score')[:3]`
  },
  {
    condition: 'stress-anxiety',
    conditionLabel: 'Mental Stress & Exam Anxiety',
    recommendedAsana: 'Balasana (Child\'s Pose)',
    sanskritName: 'बालासन',
    difficulty: 'All Levels',
    duration: '1–3 Minutes Mindful Rest',
    benefits: [
      'Calms the nervous system and relieves mental tension',
      'Gently stretches hips, thighs, and ankles',
      'Promotes rhythmic breathing and mindful relaxation'
    ],
    precautions: 'Use a pillow under knees if experiencing knee discomfort.',
    codeSnippet: `# Django Mental Wellness Query
def filter_calming_asanas(user_stress_level):
    return Asana.objects.filter(
        category='Restorative',
        nervous_system_impact='Parasympathetic'
    )`
  },
  {
    condition: 'neck-shoulder',
    conditionLabel: 'Desk Neck & Shoulder Strain',
    recommendedAsana: 'Gomukhasana Arms (Cow Face Stretch)',
    sanskritName: 'गोमुखासन',
    difficulty: 'Beginner to Intermediate',
    duration: '30 Seconds per side',
    benefits: [
      'Releases deep tension in trapezius and shoulder deltoids',
      'Expands lung capacity and improves upper body alignment',
      'Ideal micro-break stretch during coding sessions'
    ],
    precautions: 'Do not force hand clasps; use a strap or towel if shoulders are tight.',
    codeSnippet: `# Django Symptom Mapper
class AsanaMapper:
    SYMPTOM_MAP = {
        'cervical_strain': ['Gomukhasana', 'Garudasana Arms'],
        'desk_posture': ['Tadasana', 'Bhujangasana']
    }`
  },
  {
    condition: 'digestion',
    conditionLabel: 'Sluggish Digestion & Metabolism',
    recommendedAsana: 'Vajrasana (Thunderbolt Pose)',
    sanskritName: 'वज्रासन',
    difficulty: 'Beginner',
    duration: '5–10 Minutes post-meal',
    benefits: [
      'The only asana that can be safely practiced immediately after meals',
      'Redirects blood flow to digestive tract to accelerate digestion',
      'Strengthens pelvic muscles and prevents acid reflux'
    ],
    precautions: 'Avoid if suffering from severe knee arthritis or foot ligament tears.',
    codeSnippet: `# Django Post-Meal Filter
def get_post_meal_asanas():
    return Asana.objects.filter(
        can_practice_post_meal=True
    ).values('name', 'recommended_minutes')`
  }
];

export default function YogaSimulatorModal({ isOpen, onClose }) {
  const [selectedCondition, setSelectedCondition] = useState('back-pain');
  const [fitnessLevel, setFitnessLevel] = useState('Beginner');
  const [isSimulating, setIsSimulating] = useState(false);
  const [showCode, setShowCode] = useState(false);

  if (!isOpen) return null;

  const currentPose = YOGA_DATABASE.find(item => item.condition === selectedCondition) || YOGA_DATABASE[0];

  const handleRunAlgorithm = () => {
    setIsSimulating(true);
    setTimeout(() => {
      setIsSimulating(false);
    }, 450);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="bg-white w-full max-w-3xl rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh] animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 p-5 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-indigo-500/20 border border-indigo-400/30 flex items-center justify-center text-indigo-300">
              <Sparkles className="w-5 h-5 text-amber-300" />
            </div>
            <div>
              <div className="text-base font-bold font-heading flex items-center gap-2">
                <span>Yoga Recommendation System — Live Interactive Engine</span>
                <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded-full border border-emerald-400/30 font-mono-code">
                  Capstone Project
                </span>
              </div>
              <p className="text-xs text-slate-300 font-mono-code">
                Simulating Nandini's Python & Django Recommendation Algorithm
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

        {/* Body content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6 text-slate-800">
          {/* Controls Bar */}
          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2 font-mono-code">
                1. Select User Symptoms / Health Objective:
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {YOGA_DATABASE.map((item) => (
                  <button
                    key={item.condition}
                    onClick={() => {
                      setSelectedCondition(item.condition);
                      handleRunAlgorithm();
                    }}
                    className={`px-3 py-2.5 rounded-xl text-xs font-semibold text-left transition-all border ${
                      selectedCondition === item.condition
                        ? 'bg-indigo-600 text-white border-indigo-600 shadow-sm scale-[1.02]'
                        : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    {item.conditionLabel}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-slate-200/80">
              <div className="flex items-center gap-2">
                <span className="text-xs font-medium text-slate-600">User Fitness Level:</span>
                {['Beginner', 'Intermediate'].map((lvl) => (
                  <button
                    key={lvl}
                    onClick={() => {
                      setFitnessLevel(lvl);
                      handleRunAlgorithm();
                    }}
                    className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-all ${
                      fitnessLevel === lvl
                        ? 'bg-slate-900 text-white'
                        : 'bg-white border border-slate-200 text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    {lvl}
                  </button>
                ))}
              </div>

              <button
                onClick={() => setShowCode(!showCode)}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-600 hover:text-indigo-800 px-3 py-1 rounded-lg bg-indigo-50 hover:bg-indigo-100 transition-colors"
              >
                <Code2 className="w-3.5 h-3.5" />
                <span>{showCode ? 'Hide Django Code' : 'View Django Logic'}</span>
              </button>
            </div>
          </div>

          {/* Code Snippet Drawer */}
          {showCode && (
            <div className="bg-slate-900 text-slate-200 p-4 rounded-2xl font-mono-code text-xs border border-slate-800 animate-in fade-in duration-150">
              <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800 text-[11px] text-slate-400">
                <span>backend/recommendation_engine.py</span>
                <span className="text-emerald-400">Python 3.x / Django ORM</span>
              </div>
              <pre className="overflow-x-auto text-emerald-300">
                {currentPose.codeSnippet}
              </pre>
            </div>
          )}

          {/* Recommendation Output Display */}
          <div className="relative">
            {isSimulating ? (
              <div className="h-64 flex flex-col items-center justify-center text-center p-8 bg-slate-50 rounded-2xl border border-slate-200">
                <RefreshCw className="w-8 h-8 text-indigo-600 animate-spin mb-3" />
                <span className="text-sm font-semibold text-slate-800 font-heading">
                  Running Django Recommendation Filter...
                </span>
                <span className="text-xs text-slate-400 font-mono-code mt-1">
                  Querying symptom database & validating contraindications
                </span>
              </div>
            ) : (
              <div className="bg-white rounded-2xl border border-indigo-100 shadow-md p-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50 rounded-full blur-2xl -z-10" />

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 mb-4 border-b border-slate-100">
                  <div>
                    <div className="text-xs font-mono-code text-indigo-600 font-semibold uppercase tracking-wider mb-1">
                      Matched Asana Recommendation
                    </div>
                    <h3 className="text-2xl font-bold font-heading text-slate-900 flex items-baseline gap-2">
                      <span>{currentPose.recommendedAsana}</span>
                      <span className="text-sm text-slate-400 font-normal">
                        ({currentPose.sanskritName})
                      </span>
                    </h3>
                  </div>

                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                      {currentPose.difficulty}
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-mono-code bg-slate-100 text-slate-700">
                      ⏱️ {currentPose.duration}
                    </span>
                  </div>
                </div>

                {/* Key Benefits */}
                <div className="space-y-3 mb-5">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 font-mono-code">
                    Therapeutic & Physical Benefits:
                  </h4>
                  <div className="space-y-2">
                    {currentPose.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Precautions */}
                <div className="p-3.5 rounded-xl bg-amber-50/80 border border-amber-200 flex items-start gap-2.5 text-xs text-amber-900">
                  <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="font-semibold">Safety Precaution: </strong>
                    <span>{currentPose.precautions}</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="bg-slate-50 p-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <span>
            Designed & developed by <strong>Nandini Borse</strong> as her Diploma Capstone Project.
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
