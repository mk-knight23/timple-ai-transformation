"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Target, TrendingUp, Users, BrainCircuit, Code, AlertTriangle, ShieldAlert, Cpu, Image as ImageIcon, MessageSquare, Flame, CheckCircle2, XCircle, Database, Layers, Infinity, Lock, Unlock, Server } from 'lucide-react';

const competitors = [
  { name: "Candy.ai", pricing: "$13.99/mo (Fake)", trueCost: "$50+/mo (Tokens)", models: "SDXL + Base LLM", flaw: "Chat Staleness & Token Traps" },
  { name: "Darlink.ai", pricing: "$12.99/mo", trueCost: "$49.99/mo (Memory)", models: "Memory-Wrapped LLM", flaw: "Robotic TTS, Hostage Subs" },
  { name: "DreamGF", pricing: "$9.99/mo", trueCost: "$30+/mo", models: "Custom Diffusion", flaw: "Extreme Facial Inconsistency" },
  { name: "Secrets.ai", pricing: "$19.99/mo", trueCost: "$19.99/mo", models: "Premium SDXL", flaw: "High Churn, Low Emotional IQ" },
  { name: "GirlfriendGPT", pricing: "$13.00/mo", trueCost: "$13.00/mo", models: "Adaptive LLM", flaw: "Data Harvesting / Privacy" },
  { name: "Joi.com", pricing: "$2.38/mo", trueCost: "$25+/mo (Video)", models: "Mirror LLM", flaw: "Illusion of Agency (Yes-Bot)" },
  { name: "Nomi.ai", pricing: "Freemium", trueCost: "$15.00/mo", models: "High EQ LLM", flaw: "Memory Drift & UI Limits" },
  { name: "Replika", pricing: "Freemium", trueCost: "$19.99/mo", models: "Filtered Proprietary", flaw: "The Lobotomy (Censorship)" },
  { name: "NeuralCompanion", pricing: "FREE", trueCost: "$0 + Hardware", models: "Local / BYO API", flaw: "High Friction Setup" }
];

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 300, damping: 24 } }
};

export default function Home() {
  return (
    <main className="min-h-screen bg-[#05050a] text-zinc-100 overflow-hidden font-sans relative selection:bg-indigo-500/30">
      
      {/* Immersive Glassmorphic Background */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] w-[70vw] h-[70vw] rounded-full bg-indigo-900/20 blur-[120px] opacity-60 mix-blend-screen animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-rose-900/20 blur-[100px] opacity-60 mix-blend-screen animate-pulse" style={{ animationDuration: '12s' }} />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-24">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-24"
        >
          <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 rounded-full px-5 py-2 mb-8 backdrop-blur-md">
            <span className="flex h-2 w-2 rounded-full bg-indigo-500 shadow-[0_0_10px_#6366f1] animate-pulse"></span>
            <span className="text-sm font-medium tracking-wide text-zinc-300">Classified Market Intelligence 2026</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter mb-8 text-transparent bg-clip-text bg-gradient-to-br from-white via-zinc-200 to-zinc-600 drop-shadow-sm">
            The Apex Ecosystem.
          </h1>
          <p className="text-xl md:text-2xl text-zinc-400 max-w-3xl mx-auto font-light leading-relaxed">
            The era of amnesic bots and freemium traps is over. Timple.ai leverages <strong className="text-white font-semibold">Graph-Memory</strong> and <strong className="text-white font-semibold">Open-Source Hosting</strong> to systematically dismantle the competition.
          </p>
        </motion.div>

        {/* Section 1: The Threat Matrix (Pricing & Tech) */}
        <div className="mb-24">
          <div className="flex items-center space-x-4 mb-8">
            <div className="p-3 bg-white/5 rounded-xl border border-white/10 backdrop-blur-md">
              <Target className="text-rose-400" size={28} />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-white tracking-tight">The 2026 Threat Matrix</h2>
              <p className="text-zinc-400">Exposing the Bait-and-Switch Pricing and LLM Failures of the Top 9 Platforms.</p>
            </div>
          </div>

          <motion.div 
            variants={staggerContainer} initial="hidden" animate="show"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {competitors.map((comp, idx) => (
              <motion.div key={idx} variants={staggerItem} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
                <div className="relative h-full bg-[#0a0a0f]/80 backdrop-blur-xl border border-white/10 rounded-3xl p-6 hover:border-white/20 transition-all duration-300">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-white">{comp.name}</h3>
                    {comp.name === 'NeuralCompanion' ? (
                      <span className="px-2 py-1 bg-indigo-500/20 text-indigo-300 text-[10px] uppercase font-bold tracking-wider rounded border border-indigo-500/30">Open Source</span>
                    ) : (
                      <span className="px-2 py-1 bg-white/5 text-zinc-400 text-[10px] uppercase font-bold tracking-wider rounded border border-white/10">Commercial</span>
                    )}
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <p className="text-[10px] text-zinc-500 uppercase tracking-widest font-semibold mb-1">Marketed Price vs True Cost</p>
                      <div className="flex items-center space-x-2">
                        <span className="text-zinc-400 line-through text-sm">{comp.pricing}</span>
                        <span className="text-rose-400 font-bold">{comp.trueCost}</span>
                      </div>
                    </div>
                    
                    <div className="h-[1px] w-full bg-gradient-to-r from-white/10 via-white/5 to-transparent"></div>
                    
                    <div>
                      <p className="text-[10px] text-zinc-500 uppercase tracking-widest font-semibold mb-1">Architecture</p>
                      <p className="text-sm text-zinc-300 font-mono bg-white/5 inline-block px-2 py-1 rounded">{comp.models}</p>
                    </div>

                    <div className="pt-2">
                      <p className="text-[10px] text-red-500/80 uppercase tracking-widest font-bold mb-1 flex items-center"><AlertTriangle size={12} className="mr-1"/> Fatal Flaw</p>
                      <p className="text-sm text-zinc-300 font-medium">{comp.flaw}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Section 2: Timple.ai Arsenal vs Market Failures */}
        <div className="mb-24">
          <div className="flex items-center space-x-4 mb-8">
            <div className="p-3 bg-white/5 rounded-xl border border-white/10 backdrop-blur-md">
              <ShieldAlert className="text-indigo-400" size={28} />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-white tracking-tight">The Arsenal</h2>
              <p className="text-zinc-400">How Timple.ai systematically exploits competitor weaknesses.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Memory Card */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-gradient-to-b from-[#0a0a0f] to-[#05050a] border border-white/10 rounded-3xl p-8 shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity"><Database size={100} /></div>
              <h3 className="text-2xl font-bold text-white mb-2 relative z-10">Graph-Memory Vaults</h3>
              <p className="text-rose-400 text-sm font-medium mb-6 relative z-10">Killing Nomi & Darlink</p>
              <ul className="space-y-4 relative z-10">
                <li className="flex items-start">
                  <XCircle size={16} className="text-zinc-600 mt-1 mr-3 flex-shrink-0"/>
                  <span className="text-zinc-400 text-sm"><strong className="text-zinc-300">Competitor Flaw:</strong> Context windows degrade. "Personality Decay" ruins immersion after month 3.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 size={16} className="text-indigo-400 mt-1 mr-3 flex-shrink-0"/>
                  <span className="text-white text-sm"><strong className="text-indigo-300">Timple Solution:</strong> Nodes and edges map relationship lore permanently. Infinite recall with zero hallucination.</span>
                </li>
              </ul>
            </motion.div>

            {/* Visual Card */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-gradient-to-b from-[#0a0a0f] to-[#05050a] border border-white/10 rounded-3xl p-8 shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity"><ImageIcon size={100} /></div>
              <h3 className="text-2xl font-bold text-white mb-2 relative z-10">Civitai LoRA Injection</h3>
              <p className="text-rose-400 text-sm font-medium mb-6 relative z-10">Killing DreamGF & Candy</p>
              <ul className="space-y-4 relative z-10">
                <li className="flex items-start">
                  <XCircle size={16} className="text-zinc-600 mt-1 mr-3 flex-shrink-0"/>
                  <span className="text-zinc-400 text-sm"><strong className="text-zinc-300">Competitor Flaw:</strong> Diffusion pipelines cause extreme facial inconsistency across images.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 size={16} className="text-indigo-400 mt-1 mr-3 flex-shrink-0"/>
                  <span className="text-white text-sm"><strong className="text-indigo-300">Timple Solution:</strong> We hook directly into Civitai SDXL models, ensuring 100% photorealistic character locking.</span>
                </li>
              </ul>
            </motion.div>

            {/* Open Source Card */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="bg-gradient-to-b from-[#0a0a0f] to-[#05050a] border border-white/10 rounded-3xl p-8 shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity"><Server size={100} /></div>
              <h3 className="text-2xl font-bold text-white mb-2 relative z-10">Open-Source Hosting</h3>
              <p className="text-rose-400 text-sm font-medium mb-6 relative z-10">Absorbing NeuralCompanion</p>
              <ul className="space-y-4 relative z-10">
                <li className="flex items-start">
                  <XCircle size={16} className="text-zinc-600 mt-1 mr-3 flex-shrink-0"/>
                  <span className="text-zinc-400 text-sm"><strong className="text-zinc-300">Competitor Flaw:</strong> Power users flee commercial apps due to data harvesting and censorship.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 size={16} className="text-indigo-400 mt-1 mr-3 flex-shrink-0"/>
                  <span className="text-white text-sm"><strong className="text-indigo-300">Timple Solution:</strong> We offer 1-click cloud hosting for open-source frameworks. Absolute privacy, zero censorship.</span>
                </li>
              </ul>
            </motion.div>

          </div>
        </div>

      </div>
    </main>
  );
}
