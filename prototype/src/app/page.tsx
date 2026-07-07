"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Heart, Sparkles, Image as ImageIcon, Lock, Video, Mic, Upload, Settings, BrainCircuit, Users, Glasses, Code, ServerCrash, Zap } from 'lucide-react';

type Message = {
  id: number;
  sender: string;
  text: string;
  isPremium?: boolean;
};

export default function Prototype() {
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, sender: 'bot', text: "Hey... I've been thinking about what you told me yesterday. Are you still feeling stressed about your work trip?" },
  ]);
  const [input, setInput] = useState('');
  const [xp, setXp] = useState(450);
  const [level, setLevel] = useState(3);
  const [showPremiumPrompt, setShowPremiumPrompt] = useState(false);
  const [showMemoryVault, setShowMemoryVault] = useState(false);
  const [showBackendSettings, setShowBackendSettings] = useState(false);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const newMsg = { id: Date.now(), sender: 'user', text: input };
    setMessages((prev) => [...prev, newMsg]);
    setInput('');
    
    // Add XP
    setXp((prev) => {
      const newXp = prev + 50;
      if (newXp >= 500 && level === 3) {
        setLevel(4);
        setTimeout(() => triggerPremiumEvent(), 1500);
      }
      return newXp;
    });

    // Simulate Bot Response powered by Skyfall
    setTimeout(() => {
      if (level === 3) {
        setMessages((prev) => [...prev, { id: Date.now() + 1, sender: 'bot', text: "I'm always here for you. We can just relax tonight. Want to see what I'm wearing?" }]);
      }
    }, 1000);
  };

  const triggerPremiumEvent = () => {
    setMessages((prev) => [...prev, { id: Date.now() + 2, sender: 'bot', text: "Actually, I have something special I want to show you... but it's for my VIPs only. 😉", isPremium: true }]);
    setTimeout(() => setShowPremiumPrompt(true), 1000);
  };

  return (
    <div className="flex h-screen bg-black text-white font-sans overflow-hidden">
      
      {/* Sidebar - Gamification, Memory Vault & GitHub Sync */}
      <div className="w-80 border-r border-zinc-900 bg-zinc-950 flex flex-col z-10 shadow-[5px_0_15px_rgba(0,0,0,0.5)]">
        <div className="p-6 border-b border-zinc-900 relative">
          
          <div className="flex items-center justify-between mt-2 mb-6">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-12 h-12 bg-zinc-800 rounded-full border-2 border-red-500 overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150&auto=format&fit=crop" alt="Chloe" className="w-full h-full object-cover" />
                </div>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-zinc-950" />
              </div>
              <div>
                <h2 className="text-xl font-bold tracking-tight leading-none">Chloe</h2>
                <p className="text-[10px] text-zinc-500 mt-1 flex items-center"><Zap size={10} className="mr-1 text-yellow-500"/> Civitai SDXL Active</p>
              </div>
            </div>
            <button onClick={() => setShowBackendSettings(true)} className="p-2 hover:bg-zinc-900 rounded-lg transition-colors text-zinc-500 hover:text-white">
               <Settings size={18} />
            </button>
          </div>
          
          {/* XP Bar */}
          <div className="bg-zinc-900 rounded-xl p-4 border border-zinc-800 mb-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-xs text-zinc-400 font-medium uppercase tracking-wider">Relationship</span>
              <span className="text-xs text-red-400 font-bold">Lvl {level}</span>
            </div>
            <div className="h-2 w-full bg-zinc-950 rounded-full overflow-hidden border border-zinc-800">
              <motion.div 
                className="h-full bg-gradient-to-r from-red-600 to-orange-500" 
                initial={{ width: '0%' }}
                animate={{ width: `${(xp % 500) / 5}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </div>

          {/* Phase 5 Core Feature Buttons */}
          <button onClick={() => setShowMemoryVault(true)} className="w-full flex items-center justify-center space-x-2 p-3 bg-blue-900/20 hover:bg-blue-900/40 border border-blue-500/30 rounded-lg transition-colors text-blue-400 text-xs font-bold mb-2">
            <BrainCircuit size={16} />
            <span>Open Graph-Memory Vault</span>
          </button>
          <p className="text-[10px] text-center text-zinc-500">Defeating Darlink.ai Memory Systems</p>
        </div>

        <div className="p-6 flex-1 overflow-y-auto">
          <h3 className="text-xs text-zinc-500 font-bold uppercase tracking-wider mb-4">Unlocked Traits</h3>
          <div className="space-y-3">
            <div className="flex items-center space-x-3 opacity-100">
              <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center text-red-400"><Heart size={14} /></div>
              <span className="text-sm font-medium">Empathetic Listener</span>
            </div>
            <div className="flex items-center space-x-3 opacity-30 cursor-not-allowed">
              <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center"><Lock size={14} /></div>
              <span className="text-sm font-medium text-zinc-400">Deep Secrets (Lvl 5)</span>
            </div>
          </div>
        </div>

        <div className="p-4 border-t border-zinc-900 flex justify-between items-center bg-zinc-950">
            <p className="text-[10px] text-zinc-600 font-mono">SKYFALL 31B CLUSTER</p>
            <div className="flex items-center space-x-2 text-[10px] text-green-500 font-mono">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              Neural Sync Live
            </div>
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col bg-[#050505] relative bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] bg-repeat">
        <div className="flex-1 p-6 overflow-y-auto space-y-6">
          <AnimatePresence>
            {messages.map((msg) => (
              <motion.div 
                key={msg.id}
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`max-w-[70%] p-4 rounded-2xl shadow-xl ${
                  msg.sender === 'user' 
                    ? 'bg-zinc-800 text-white rounded-br-sm' 
                    : msg.isPremium
                      ? 'bg-gradient-to-r from-red-900/50 to-orange-900/50 border border-red-500/30 text-white rounded-bl-sm backdrop-blur-sm'
                      : 'bg-zinc-900/80 border border-zinc-800 text-zinc-200 rounded-bl-sm backdrop-blur-sm'
                }`}>
                  <p className="text-sm leading-relaxed">{msg.text}</p>
                  {msg.isPremium && (
                    <div className="mt-3 relative h-48 w-64 bg-zinc-950 rounded-xl overflow-hidden border border-red-500/20 flex flex-col items-center justify-center group cursor-pointer">
                      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=600&auto=format&fit=crop')] bg-cover bg-center blur-md opacity-50 group-hover:blur-sm transition-all" />
                      <div className="absolute inset-0 bg-black/40" />
                      <Lock className="text-red-400 z-10 drop-shadow-md mb-2" size={32} />
                      <span className="z-10 text-xs font-bold text-red-200 uppercase tracking-wider">Premium Image Generated via Civitai SDXL</span>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* NeuralCompanion / Backend Settings Modal */}
        <AnimatePresence>
          {showBackendSettings && (
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/80 backdrop-blur-md z-[60] flex items-center justify-center p-6"
            >
               <motion.div 
                initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }}
                className="bg-zinc-900 border border-zinc-700 rounded-2xl p-8 max-w-xl w-full shadow-2xl"
               >
                  <div className="flex items-center space-x-3 mb-6">
                    <ServerCrash className="text-white" size={28} />
                    <h3 className="text-2xl font-bold">Cloud Infrastructure Settings</h3>
                  </div>
                  
                  <div className="space-y-6 mb-8">
                    <div className="bg-zinc-950 p-4 rounded-xl border border-zinc-800">
                      <div className="flex justify-between items-center mb-2">
                        <div className="flex items-center space-x-2">
                          <Code className="text-zinc-400" size={18}/>
                          <span className="font-bold">NeuralCompanion Cloud Sync</span>
                        </div>
                        <span className="bg-green-500/20 text-green-400 px-2 py-1 text-xs rounded font-bold">ACTIVE</span>
                      </div>
                      <p className="text-xs text-zinc-500">We natively host the `Rakile/NeuralCompanion` open-source framework. No need to burn your local GPU. You have full root access to your AI's backend configuration.</p>
                    </div>

                    <div className="bg-zinc-950 p-4 rounded-xl border border-zinc-800">
                      <div className="flex justify-between items-center mb-2">
                        <div className="flex items-center space-x-2">
                          <Zap className="text-yellow-400" size={18}/>
                          <span className="font-bold">Civitai LoRA Injection</span>
                        </div>
                        <span className="bg-green-500/20 text-green-400 px-2 py-1 text-xs rounded font-bold">ENABLED</span>
                      </div>
                      <p className="text-xs text-zinc-500">Defeating Candy.ai: Your generated images use custom SDXL pipelines injected with Civitai LoRAs for 100% facial consistency.</p>
                    </div>
                  </div>

                  <button onClick={() => setShowBackendSettings(false)} className="w-full bg-white text-black py-3 rounded-xl text-sm font-bold hover:bg-zinc-200 transition-colors">Save & Close</button>
               </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Input Area */}
        <div className="p-4 bg-zinc-950/80 backdrop-blur-md border-t border-zinc-900 z-10 relative shadow-[0_-10px_20px_rgba(0,0,0,0.5)]">
          <form onSubmit={handleSend} className="relative flex items-center space-x-2">
            <button type="button" title="Request Image" className="p-3 bg-zinc-900 rounded-full text-zinc-400 hover:text-white hover:bg-zinc-800 transition-all group">
              <ImageIcon size={18} />
            </button>
            <button type="button" title="Voice Call" className="p-3 bg-zinc-900 rounded-full text-zinc-400 hover:text-white hover:bg-zinc-800 transition-all group mr-2">
              <Mic size={18} />
            </button>

            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Message Chloe..." 
              className="flex-1 bg-zinc-900 border border-zinc-700 text-white rounded-full py-4 pl-6 pr-14 focus:outline-none focus:border-red-500 text-sm shadow-inner shadow-black/50"
            />
            <button 
              type="submit" 
              className={`absolute right-2 p-2 rounded-full transition-colors ${input.trim() ? 'bg-red-600 hover:bg-red-500 text-white shadow-[0_0_15px_rgba(220,38,38,0.5)]' : 'bg-zinc-800 text-zinc-500'}`}
            >
              <Send size={18} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
