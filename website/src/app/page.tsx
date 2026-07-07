"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area, BarChart, Bar } from 'recharts';
import { ArrowRight, Bot, Zap, TrendingUp, Users, Target, Activity, MessageSquare, Download, Server, Cpu, Brain, Coins, Glasses, Code, AlertTriangle } from 'lucide-react';

const ltvData = [
  { month: 'M1', timple: 19.99, candy: 3.99, darlink: 12.99, secrets: 19.99 },
  { month: 'M2', timple: 45.00, candy: 7.98, darlink: 25.98, secrets: 39.98 },
  { month: 'M3', timple: 85.00, candy: 11.97, darlink: 38.97, secrets: 45.00 }, // Secrets churns out
  { month: 'M4', timple: 140.00, candy: 15.96, darlink: 45.00, secrets: 45.00 }, // Darlink churns out
  { month: 'M5', timple: 210.00, candy: 19.95, darlink: 45.00, secrets: 45.00 },
  { month: 'M6', timple: 300.00, candy: 23.94, darlink: 45.00, secrets: 45.00 }, // Timple explodes via Creator Tipping
];

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-zinc-100 overflow-hidden font-sans">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 max-w-7xl mx-auto flex flex-col items-center justify-center text-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-900/20 rounded-full blur-[120px] -z-10 pointer-events-none" />
        
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <div className="inline-flex items-center space-x-2 bg-zinc-900/50 border border-zinc-800 rounded-full px-4 py-2 mb-8">
            <span className="flex h-2 w-2 rounded-full bg-red-500 animate-pulse"></span>
            <span className="text-sm font-medium text-zinc-300">Timple.ai The Apex Ecosystem</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white to-zinc-500">
            Out-Engineering <br /> The Competition
          </h1>
          
          <p className="text-xl md:text-2xl text-zinc-400 max-w-3xl mx-auto mb-12">
            "A chatbot that forgets your name an hour later is a toy." We are building the definitive All-in-One companion platform for 2026.
          </p>
        </motion.div>
      </section>

      {/* 10-Competitor Matrix & Dashboard */}
      <section className="py-24 px-6 relative border-t border-zinc-900 bg-zinc-950/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">2026 Threat Landscape Analysis</h2>
            <p className="text-zinc-400 text-lg">Consolidating the fragmented market through feature supremacy.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            
            {/* The Matrix Table */}
            <div className="bg-zinc-900/30 border border-zinc-800 rounded-2xl p-8 overflow-hidden flex flex-col">
              <h3 className="text-xl font-medium mb-6 flex items-center"><Target className="mr-3 text-red-500"/> Competitor Intel Matrix</h3>
              <div className="flex-1 overflow-y-auto pr-2">
                <table className="w-full text-left text-sm">
                  <thead className="bg-zinc-900 sticky top-0 z-10">
                    <tr>
                      <th className="p-3 text-zinc-400 font-medium rounded-tl-lg">Platform</th>
                      <th className="p-3 text-zinc-400 font-medium">True Cost</th>
                      <th className="p-3 text-zinc-400 font-medium">Key Threat</th>
                      <th className="p-3 text-zinc-400 font-medium rounded-tr-lg">Timple Counter</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-800/50">
                    <tr className="hover:bg-zinc-800/20 transition-colors">
                      <td className="p-3 font-bold">Candy.ai</td>
                      <td className="p-3 text-green-400">$3.99/mo</td>
                      <td className="p-3 text-zinc-300">Video/Voice</td>
                      <td className="p-3 text-red-400">SDXL Pipelines</td>
                    </tr>
                    <tr className="hover:bg-zinc-800/20 transition-colors">
                      <td className="p-3 font-bold">Darlink.ai</td>
                      <td className="p-3 text-yellow-400">$12.99/mo</td>
                      <td className="p-3 text-zinc-300">Deep Memory</td>
                      <td className="p-3 text-red-400">Graph Database</td>
                    </tr>
                    <tr className="hover:bg-zinc-800/20 transition-colors">
                      <td className="p-3 font-bold">Secrets.ai</td>
                      <td className="p-3 text-red-400">$19.99/mo</td>
                      <td className="p-3 text-zinc-300">Visual Fidelity</td>
                      <td className="p-3 text-red-400">Civitai Imports</td>
                    </tr>
                    <tr className="hover:bg-zinc-800/20 transition-colors">
                      <td className="p-3 font-bold">GirlfriendGPT</td>
                      <td className="p-3 text-yellow-400">$13.00/mo</td>
                      <td className="p-3 text-zinc-300">Adaptive Roleplay</td>
                      <td className="p-3 text-red-400">Skyfall 31B</td>
                    </tr>
                    <tr className="hover:bg-zinc-800/20 transition-colors">
                      <td className="p-3 font-bold">Joi.com</td>
                      <td className="p-3 text-green-400">$2.38/mo</td>
                      <td className="p-3 text-zinc-300">Mobile Dominance</td>
                      <td className="p-3 text-red-400">Anubis 8B Edge</td>
                    </tr>
                    <tr className="hover:bg-zinc-800/20 transition-colors bg-red-900/10">
                      <td className="p-3 font-bold text-red-400 flex items-center"><Code size={14} className="mr-2"/> NeuralCompanion</td>
                      <td className="p-3 text-green-400">FREE (Open Source)</td>
                      <td className="p-3 text-red-300 font-bold">Existential Threat</td>
                      <td className="p-3 text-red-400 font-bold">Cloud Hosting</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* LTV Chart */}
            <div className="bg-zinc-900/30 border border-zinc-800 rounded-2xl p-8 flex flex-col">
              <h3 className="text-xl font-medium mb-6 flex items-center"><TrendingUp className="mr-3 text-red-500"/> Lifetime Value Destruction</h3>
              <p className="text-sm text-zinc-400 mb-6">Visualizing Timple.ai's LTV explosion due to Creator Economy network effects, while premium competitors (Secrets, Darlink) churn out at month 3.</p>
              <div className="flex-1 min-h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={ltvData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <defs>
                      <linearGradient id="colorTimple" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#ef4444" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#ef4444" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#27272a" vertical={false} />
                    <XAxis dataKey="month" stroke="#a1a1aa" tickLine={false} axisLine={false} />
                    <YAxis stroke="#a1a1aa" tickLine={false} axisLine={false} tickFormatter={(value) => `$${value}`} />
                    <Tooltip contentStyle={{ backgroundColor: '#18181b', borderColor: '#27272a', borderRadius: '8px' }} itemStyle={{ color: '#e4e4e7' }} />
                    <Area type="monotone" dataKey="candy" stroke="#a855f7" fill="transparent" strokeWidth={2} name="CandyAI" />
                    <Area type="monotone" dataKey="darlink" stroke="#3b82f6" fill="transparent" strokeWidth={2} name="Darlink.ai" />
                    <Area type="monotone" dataKey="secrets" stroke="#eab308" fill="transparent" strokeWidth={2} name="Secrets.ai" />
                    <Area type="monotone" dataKey="timple" stroke="#ef4444" fillOpacity={1} fill="url(#colorTimple)" strokeWidth={3} name="Timple.ai Ecosystem" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-900 py-12 text-center text-zinc-500">
        <p>The next generation of market leaders will operate as AI-powered ecosystems.</p>
        <p className="mt-2 text-sm">© 2026 Timple.ai Apex Engine</p>
      </footer>
    </main>
  );
}
