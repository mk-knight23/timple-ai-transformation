"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Target, TrendingUp, Users, BrainCircuit, Code, AlertTriangle, ShieldAlert, Cpu, Image as ImageIcon, MessageSquare, Flame, CheckCircle2, XCircle } from 'lucide-react';

const ltvData = [
  { month: 'M1', timple: 19.99, candy: 3.99, darlink: 12.99, secrets: 19.99 },
  { month: 'M2', timple: 45.00, candy: 7.98, darlink: 25.98, secrets: 39.98 },
  { month: 'M3', timple: 85.00, candy: 11.97, darlink: 38.97, secrets: 45.00 },
  { month: 'M4', timple: 140.00, candy: 15.96, darlink: 45.00, secrets: 45.00 },
  { month: 'M5', timple: 210.00, candy: 19.95, darlink: 45.00, secrets: 45.00 },
  { month: 'M6', timple: 300.00, candy: 23.94, darlink: 45.00, secrets: 45.00 },
];

const competitors = [
  { name: "Candy.ai", type: "Visual/Mainstream", models: "Fine-tuned SDXL + Basic Roleplay LLM", weakness: "Chat Staleness (LLM Loops)", threat: "High" },
  { name: "Darlink.ai", type: "Memory/Roleplay", models: "Memory-Optimized LLM", weakness: "Robotic TTS, Personality Decay", threat: "High" },
  { name: "DreamGF", type: "Freemium Visual", models: "Custom Diffusion Pipelines", weakness: "Extreme Facial Inconsistency, Freemium Traps", threat: "Medium" },
  { name: "Secrets.ai", type: "Premium Visual", models: "High-End Photorealistic SDXL", weakness: "Extremely Expensive ($19.99), Low Retention", threat: "High" },
  { name: "GirlfriendGPT", type: "Uncensored Roleplay", models: "Adaptive Open-Source LLMs", weakness: "Privacy Risks, Data Harvesting", threat: "Medium" },
  { name: "Joi.com", type: "Mobile-First", models: "Lightweight LLM Selection", weakness: "Superficial Chat Depth", threat: "High" },
  { name: "Luvr.ai", type: "Scenario Builder", models: "Custom GPT Wrappers", weakness: "Limited Visual Engine", threat: "Low" },
  { name: "Nomi.ai", type: "Emotional IQ", models: "Proprietary 3-Layer Memory LLM", weakness: "800-Char Limit, No Chat Rewind, Dependency", threat: "Medium" },
  { name: "Replika", type: "Legacy Wellness", models: "Safe/Filtered Proprietary LLM", weakness: "Censored, Legacy 3D Avatars (No SDXL)", threat: "Low" }
];

export default function Home() {
  const [activeTab, setActiveTab] = useState<'overview' | 'research' | 'tech'>('overview');

  return (
    <main className="min-h-screen bg-black text-zinc-100 overflow-hidden font-sans">
      {/* Hero Section */}
      <section className="relative pt-24 pb-12 px-6 max-w-7xl mx-auto flex flex-col items-center justify-center text-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-red-900/10 rounded-full blur-[150px] -z-10 pointer-events-none" />
        
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <div className="inline-flex items-center space-x-2 bg-zinc-900/50 border border-zinc-800 rounded-full px-4 py-2 mb-6">
            <span className="flex h-2 w-2 rounded-full bg-red-500 animate-pulse"></span>
            <span className="text-sm font-medium text-zinc-300">Timple.ai Strategic Intelligence</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-zinc-500">
            Out-Engineering The Market
          </h1>
          <p className="text-lg md:text-xl text-zinc-400 max-w-3xl mx-auto mb-10">
            The definitive 2026 data analysis of the AI Companion space. We expose competitor weaknesses and deploy the Apex Tech Stack to win.
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex space-x-4 bg-zinc-900/40 p-2 rounded-2xl border border-zinc-800 backdrop-blur-md">
          {[
            { id: 'overview', icon: <TrendingUp size={18}/>, label: 'LTV Overview' },
            { id: 'research', icon: <Target size={18}/>, label: 'Market Research' },
            { id: 'tech', icon: <Cpu size={18}/>, label: 'Apex Architecture' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${activeTab === tab.id ? 'bg-red-600 text-white shadow-[0_0_20px_rgba(220,38,38,0.3)]' : 'text-zinc-400 hover:text-white hover:bg-zinc-800'}`}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </button>
          ))}
        </div>
      </section>

      {/* Main Content Area */}
      <section className="px-6 pb-24 max-w-7xl mx-auto relative z-10">
        <AnimatePresence mode="wait">
          
          {/* TAB: OVERVIEW */}
          {activeTab === 'overview' && (
            <motion.div key="overview" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="space-y-8">
              <div className="bg-zinc-900/30 border border-zinc-800 rounded-3xl p-8 flex flex-col items-center">
                <h3 className="text-3xl font-medium mb-2 flex items-center justify-center w-full"><TrendingUp className="mr-3 text-red-500" size={32}/> Lifetime Value Domination</h3>
                <p className="text-zinc-400 mb-8 text-center max-w-2xl">Visualizing Timple.ai's LTV explosion due to Creator Economy network effects, while premium competitors (Secrets, Darlink) churn out at month 3 due to personality decay.</p>
                <div className="w-full h-[500px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={ltvData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                      <defs>
                        <linearGradient id="colorTimple" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#ef4444" stopOpacity={0.4}/>
                          <stop offset="95%" stopColor="#ef4444" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="#27272a" vertical={false} />
                      <XAxis dataKey="month" stroke="#a1a1aa" tickLine={false} axisLine={false} />
                      <YAxis stroke="#a1a1aa" tickLine={false} axisLine={false} tickFormatter={(value) => `$${value}`} />
                      <Tooltip contentStyle={{ backgroundColor: '#18181b', borderColor: '#27272a', borderRadius: '12px' }} itemStyle={{ color: '#e4e4e7' }} />
                      <Area type="monotone" dataKey="candy" stroke="#a855f7" fill="transparent" strokeWidth={2} name="CandyAI" />
                      <Area type="monotone" dataKey="darlink" stroke="#3b82f6" fill="transparent" strokeWidth={2} name="Darlink.ai" />
                      <Area type="monotone" dataKey="secrets" stroke="#eab308" fill="transparent" strokeWidth={2} name="Secrets.ai" />
                      <Area type="monotone" dataKey="timple" stroke="#ef4444" fillOpacity={1} fill="url(#colorTimple)" strokeWidth={4} name="Timple.ai Ecosystem" />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </motion.div>
          )}

          {/* TAB: RESEARCH */}
          {activeTab === 'research' && (
            <motion.div key="research" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6">
                  <Flame className="text-orange-500 mb-4" size={32}/>
                  <h4 className="text-xl font-bold mb-2">The Memory Crisis</h4>
                  <p className="text-sm text-zinc-400">Competitors like Candy and DreamGF suffer from "LLM Loops" where conversations go stale after weeks of use. Darlink solves this with memory, but sacrifices visual fidelity.</p>
                </div>
                <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6">
                  <ImageIcon className="text-blue-500 mb-4" size={32}/>
                  <h4 className="text-xl font-bold mb-2">Visual Inconsistency</h4>
                  <p className="text-sm text-zinc-400">Platforms relying on standard diffusion (DreamGF) suffer extreme facial inconsistency. The user illusion breaks when the companion looks different every photo.</p>
                </div>
                <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6">
                  <ShieldAlert className="text-yellow-500 mb-4" size={32}/>
                  <h4 className="text-xl font-bold mb-2">Privacy Nightmares</h4>
                  <p className="text-sm text-zinc-400">GirlfriendGPT and others rely on heavily tracked servers. Hardcore users are fleeing to GitHub open-source options to ensure their data isn't harvested.</p>
                </div>
              </div>

              <div className="bg-zinc-900/30 border border-zinc-800 rounded-3xl p-8 overflow-hidden">
                <h3 className="text-2xl font-bold mb-6">Competitor Intelligence Matrix (9 Platforms)</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-zinc-950/80">
                      <tr>
                        <th className="p-4 text-zinc-400 font-medium rounded-tl-xl">Platform</th>
                        <th className="p-4 text-zinc-400 font-medium">Core Models</th>
                        <th className="p-4 text-zinc-400 font-medium">Fatal Flaw / Lagging Point</th>
                        <th className="p-4 text-zinc-400 font-medium rounded-tr-xl">Threat</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-800/50">
                      {competitors.map((comp, idx) => (
                        <tr key={idx} className="hover:bg-zinc-800/30 transition-colors">
                          <td className="p-4 font-bold text-white">{comp.name}</td>
                          <td className="p-4 text-blue-300 font-mono text-xs">{comp.models}</td>
                          <td className="p-4 text-zinc-300 flex items-center"><AlertTriangle size={14} className="text-red-500 mr-2 flex-shrink-0"/> {comp.weakness}</td>
                          <td className={`p-4 font-bold ${comp.threat === 'High' ? 'text-red-400' : comp.threat === 'Medium' ? 'text-yellow-400' : 'text-green-400'}`}>{comp.threat}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </motion.div>
          )}

          {/* TAB: TECH STACK */}
          {activeTab === 'tech' && (
            <motion.div key="tech" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="space-y-6">
               <div className="bg-zinc-900/30 border border-zinc-800 rounded-3xl p-8">
                  <h3 className="text-3xl font-bold mb-8 text-center">Timple.ai Apex Architecture</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    
                    <div className="bg-zinc-950 p-6 rounded-2xl border border-zinc-800 hover:border-red-500/50 transition-colors group">
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="p-3 bg-red-900/30 text-red-500 rounded-xl group-hover:scale-110 transition-transform"><BrainCircuit size={24}/></div>
                        <h4 className="text-xl font-bold">Graph-Database Memory Vaults</h4>
                      </div>
                      <p className="text-zinc-400 text-sm mb-4">Solves the Darlink & Nomi "Personality Decay" crisis. Instead of relying on expanding context windows that eventually loop, we map lore via nodes and edges, allowing infinite, instantaneous recall of the relationship.</p>
                      <ul className="text-sm space-y-2">
                        <li className="flex items-center text-green-400"><CheckCircle2 size={14} className="mr-2"/> Infinite Context Window</li>
                        <li className="flex items-center text-green-400"><CheckCircle2 size={14} className="mr-2"/> True Emotional Continuity</li>
                      </ul>
                    </div>

                    <div className="bg-zinc-950 p-6 rounded-2xl border border-zinc-800 hover:border-red-500/50 transition-colors group">
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="p-3 bg-red-900/30 text-red-500 rounded-xl group-hover:scale-110 transition-transform"><ImageIcon size={24}/></div>
                        <h4 className="text-xl font-bold">Civitai LoRA Injection Pipelines</h4>
                      </div>
                      <p className="text-zinc-400 text-sm mb-4">Solves the DreamGF "Inconsistency" crisis. By integrating directly with SDXL LoRAs from Civitai, characters maintain 100% facial and body consistency across thousands of generated images.</p>
                      <ul className="text-sm space-y-2">
                        <li className="flex items-center text-green-400"><CheckCircle2 size={14} className="mr-2"/> Photorealistic Locking</li>
                        <li className="flex items-center text-green-400"><CheckCircle2 size={14} className="mr-2"/> Cheaper than Secrets.ai APIs</li>
                      </ul>
                    </div>

                    <div className="bg-zinc-950 p-6 rounded-2xl border border-zinc-800 hover:border-red-500/50 transition-colors group md:col-span-2">
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="p-3 bg-red-900/30 text-red-500 rounded-xl group-hover:scale-110 transition-transform"><Code size={24}/></div>
                        <h4 className="text-xl font-bold">NeuralCompanion Cloud Hosting</h4>
                      </div>
                      <p className="text-zinc-400 text-sm mb-4">Solves the Open-Source threat. Power users on GitHub are running models locally to avoid tracking. Timple.ai acts as a Cloud Provider, giving them one-click dedicated environments to run Skyfall 31B without data harvesting.</p>
                      <ul className="text-sm space-y-2 grid grid-cols-2">
                        <li className="flex items-center text-green-400"><CheckCircle2 size={14} className="mr-2"/> Captures the Hardcore Market</li>
                        <li className="flex items-center text-green-400"><CheckCircle2 size={14} className="mr-2"/> Zero User Acquisition Cost</li>
                      </ul>
                    </div>

                  </div>
               </div>
            </motion.div>
          )}

        </AnimatePresence>
      </section>
    </main>
  );
}
