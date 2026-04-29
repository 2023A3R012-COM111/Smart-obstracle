/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  TrendingUp, 
  ShieldAlert, 
  Lightbulb, 
  Zap, 
  AlertTriangle, 
  CheckCircle2, 
  BarChart3,
  ChevronRight,
  Info,
  Calendar,
  Lock,
  ArrowUpRight
} from "lucide-react";

const SWOT_DATA = [
  {
    title: "Strengths",
    icon: <Zap className="w-5 h-5 text-emerald-400" />,
    items: [
      "Proprietary Edge-AI sensor fusion (<20ms latency)",
      "Ultra-low power custom silicon (RISC-V)",
      "Modular hardware integration standards",
      "Early-mover in 2026 decentralized IoT mesh"
    ],
    className: "md:col-span-2 bg-slate-900 border-slate-800 text-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.12)]",
    iconBg: "bg-emerald-500/10 border-emerald-500/20"
  },
  {
    title: "Weaknesses",
    icon: <AlertTriangle className="w-5 h-5 text-rose-400" />,
    items: [
      "High initial component R&D overhead",
      "Lower brand resonance vs. Tech Giants",
      "Urban density processing bottlenecks",
      "Supply chain sensitivity for custom ASIC"
    ],
    className: "bg-white border-slate-200 text-slate-800",
    iconBg: "bg-rose-50 border-rose-100"
  },
  {
    title: "Opportunities",
    icon: <TrendingUp className="w-5 h-5 text-indigo-500" />,
    items: [
      "Aging global population mobility needs",
      "Smart-city infrastructure (6G V2X)",
      "Robotics: Last-mile delivery expansion",
      "Government accessibility subsidies"
    ],
    className: "bg-white border-slate-200 text-slate-800",
    iconBg: "bg-indigo-50 border-indigo-100"
  },
  {
    title: "Threats",
    icon: <ShieldAlert className="w-5 h-5 text-amber-500" />,
    items: [
      "Aggressive Big Tech market entry",
      "New spatial data mapping regulations",
      "Rapid hardware commoditization",
      "Public skepticism of automated safety"
    ],
    className: "md:col-span-2 bg-indigo-600 border-indigo-500 text-white shadow-xl shadow-indigo-200",
    iconBg: "bg-white/20 border-white/30"
  }
];

const RISK_DATA = [
  {
    risk: "Safety-Critical System Failure",
    impact: "High",
    likelihood: "Med",
    mitigation: "Triple-redundant sensor arrays & fail-safe physical buffers. Level 4 safety certification protocols.",
    color: "bg-rose-500"
  },
  {
    risk: "Spatial Privacy Regulation Shift",
    impact: "Med",
    likelihood: "High",
    mitigation: "Edge-only processing (Zero-Trust). End-to-end telemetry encryption & GDPR 2.0 compliance.",
    color: "bg-indigo-500"
  },
  {
    risk: "Component Cost Inflation",
    impact: "High",
    likelihood: "Low",
    mitigation: "Vertical sensor manufacturing. Safety-as-a-Service (SaaS) recurring revenue pivot.",
    color: "bg-amber-500"
  }
];

export default function App() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans selection:bg-indigo-100 text-slate-900 border-t-4 border-indigo-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        
        {/* Top Navbar Context */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-12 border-b border-slate-200 pb-6">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-indigo-600 font-bold uppercase tracking-[0.2em] text-xs">
              <BarChart3 className="w-4 h-4" />
              Strategic Intelligence Hub
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Project <span className="text-indigo-600">Smart Obstacle</span>
            </h1>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-100 border border-slate-200 rounded-md text-[11px] font-mono font-medium text-slate-500">
              <Calendar className="w-3 h-3" />
              APRIL 2026
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 bg-rose-50 border border-rose-100 rounded-md text-[11px] font-mono font-bold text-rose-600 uppercase tracking-wider">
              <Lock className="w-3 h-3" />
              CONFIDENTIAL
            </div>
          </div>
        </div>

        {/* Narrative Box */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16"
        >
          <div className="lg:col-span-2 bg-white p-8 rounded-3xl border border-slate-200 shadow-sm relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
              <BarChart3 className="w-32 h-32" />
            </div>
            <div className="flex gap-4 items-start relative z-10">
              <div className="p-3 bg-indigo-50 text-indigo-600 rounded-2xl">
                <Info className="w-6 h-6" />
              </div>
              <div className="space-y-3">
                <h2 className="text-xl font-bold text-slate-800">2026 Strategic Landscape</h2>
                <p className="text-slate-600 text-lg leading-relaxed">
                  The mobility tech sector is entering a phase of <span className="font-semibold text-slate-900 underline decoration-indigo-200 decoration-2 underline-offset-4">radical edge automation</span>. Smart Obstacle is positioned to disrupt traditional navigation by merging sub-millimeter LiDAR precision with decentralized mesh communication. 
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {['Edge-AI', 'Privacy-First', 'Industry 5.0', 'Scalability'].map(tag => (
                    <span key={tag} className="px-2.5 py-1 bg-slate-50 border border-slate-100 rounded-lg text-xs font-medium text-slate-500">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-slate-900 text-white p-8 rounded-3xl shadow-2xl relative overflow-hidden">
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-indigo-500/20 rounded-full blur-3xl"></div>
            <h3 className="text-indigo-400 font-bold uppercase tracking-widest text-[10px] mb-4">Core Objective</h3>
            <p className="text-2xl font-medium leading-[1.3] mb-6">
              Establish the gold standard for real-time spatial awareness.
            </p>
            <div className="space-y-4">
              <div className="flex justify-between items-end border-b border-white/10 pb-2">
                <span className="text-slate-400 text-xs">Market Potential</span>
                <span className="font-mono text-xl font-bold">$12.4B</span>
              </div>
              <div className="flex justify-between items-end border-b border-white/10 pb-2">
                <span className="text-slate-400 text-xs">Growth Index</span>
                <span className="font-mono text-xl font-bold text-emerald-400">+24%</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* SWOT Bento Grid */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="w-8 h-1 bg-indigo-600 rounded-full"></div>
              <h2 className="text-2xl font-extrabold tracking-tight">SWOT Analysis</h2>
            </div>
            <p className="text-slate-400 text-sm font-medium">Environmental Scanning Protocol 7.2</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SWOT_DATA.map((box, index) => (
              <motion.div
                key={box.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`p-8 rounded-[2.5rem] border ${box.className} group flex flex-col justify-between`}
              >
                <div>
                  <div className={`w-12 h-12 flex items-center justify-center rounded-2xl border ${box.iconBg} mb-6 transition-transform group-hover:scale-110`}>
                    {box.icon}
                  </div>
                  <h3 className="text-xl font-black uppercase tracking-tighter mb-6">{box.title}</h3>
                  <ul className="space-y-4">
                    {box.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm md:text-base opacity-80 group-hover:opacity-100 transition-opacity">
                        <ArrowUpRight className={`w-4 h-4 mt-0.5 flex-shrink-0 ${box.title === 'Strengths' ? 'text-emerald-400' : 'opacity-40'}`} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Risk Mitigation Strategy */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-1 bg-rose-600 rounded-full"></div>
            <h2 className="text-2xl font-extrabold tracking-tight">Technical Risk Framework</h2>
          </div>
          
          <div className="bg-white border border-slate-200 rounded-[2rem] shadow-sm overflow-hidden">
            <div className="p-8 border-b border-slate-100 bg-slate-50/50 flex flex-col md:flex-row justify-between gap-4">
              <h3 className="font-bold text-slate-800">Critical Risks & Mitigation Strategies</h3>
              <div className="flex gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-rose-500"></div>
                  <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">High Impact</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-indigo-500"></div>
                  <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Strategic</span>
                </div>
              </div>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-slate-100">
                    <th className="px-8 py-5 text-[10px] uppercase font-bold text-slate-400 tracking-[0.2em] w-1/3">Core Risk Factor</th>
                    <th className="px-8 py-5 text-[10px] uppercase font-bold text-slate-400 tracking-[0.2em]">Impact/Likelihood</th>
                    <th className="px-8 py-5 text-[10px] uppercase font-bold text-slate-400 tracking-[0.2em]">Strategic Counter-Measures</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {RISK_DATA.map((row, i) => (
                    <tr key={i} className="hover:bg-slate-50/80 transition-colors group">
                      <td className="px-8 py-8 align-top">
                        <div className="flex items-start gap-4">
                          <div className={`w-1.5 h-12 rounded-full ${row.color} mt-1`} />
                          <div className="space-y-1">
                            <span className="text-xs font-mono font-medium text-slate-400">0{i+1}</span>
                            <h4 className="text-lg font-bold text-slate-800 tracking-tight">{row.risk}</h4>
                          </div>
                        </div>
                      </td>
                      <td className="px-8 py-8 align-top">
                        <div className="flex gap-2">
                          <div className="px-3 py-1 bg-slate-100 rounded-lg text-[10px] font-mono font-bold text-slate-600 flex items-center gap-1.5">
                            <div className={`w-1.5 h-1.5 rounded-full ${row.impact === 'High' ? 'bg-rose-500' : 'bg-indigo-500'}`} />
                            IMP: {row.impact}
                          </div>
                          <div className="px-3 py-1 bg-slate-100 rounded-lg text-[10px] font-mono font-bold text-slate-600">
                            LIK: {row.likelihood}
                          </div>
                        </div>
                      </td>
                      <td className="px-8 py-8 align-top">
                        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 group-hover:bg-white transition-colors">
                          <p className="text-slate-600 text-sm leading-relaxed font-medium">
                            {row.mitigation}
                          </p>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Action Call */}
        <div className="mt-20 flex flex-col items-center justify-center space-y-6">
          <div className="h-px w-20 bg-slate-200"></div>
          <p className="text-slate-400 font-mono text-[10px] uppercase tracking-[0.3em]">Authorized Personnel Only</p>
          <div className="flex gap-4">
             <button className="px-8 py-4 bg-indigo-600 text-white rounded-2xl font-bold tracking-tight shadow-xl shadow-indigo-200 hover:bg-indigo-700 hover:-translate-y-1 transition-all active:scale-95 cursor-pointer">
              Export Full Intelligence Report
            </button>
            <button className="px-8 py-4 bg-white border border-slate-200 text-slate-600 rounded-2xl font-bold tracking-tight hover:bg-slate-50 transition-all cursor-pointer">
              Contact Analyst
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
