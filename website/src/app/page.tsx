"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Target, TrendingUp, Users, BrainCircuit, Code, AlertTriangle, ShieldAlert, Cpu, Image as ImageIcon, MessageSquare, Flame, CheckCircle2, XCircle, Database, Server, Compass, BarChart3, Activity, ArrowRight, Table as TableIcon, LayoutList, Check, X } from 'lucide-react';

const competitors = [
  { name: "Candy.ai", type: "Visual/Roleplay", pricing: "$13.99/mo + Token Trap", trueCost: "$50-$100/mo", models: "SDXL + Base Llama", flaw: "Chat Staleness, Predatory Pricing", memory: "Basic (4k Context)" },
  { name: "Character.AI", type: "Mainstream Chat", pricing: "$9.99/mo (c.ai+)", trueCost: "$9.99/mo", models: "Proprietary LLM (Heavy)", flaw: "Draconian NSFW Filters, Amnesia", memory: "Poor (High Churn)" },
  { name: "Replika", type: "Wellness/Legacy", pricing: "$19.99/mo", trueCost: "$19.99/mo + MicroTX", models: "Blended Proprietary", flaw: "The Lobotomy, Extreme Censorship", memory: "Basic (Looping)" },
  { name: "Kindroid", type: "High EQ / Memory", pricing: "$12.00/mo", trueCost: "$12.00/mo", models: "Custom RAG LLM", flaw: "Complex Onboarding, UX Friction", memory: "Advanced (Vector DB)" },
  { name: "Nomi.ai", type: "Relationship", pricing: "$15.00/mo", trueCost: "$15.00/mo", models: "Custom EQ Model", flaw: "Image Censorship, Memory Drift", memory: "Multi-layer (Drifts)" },
  { name: "Dream Companion", type: "Visual NSFW", pricing: "$14.99/mo", trueCost: "$40+/mo (Tokens)", models: "Custom Diffusion", flaw: "Facial Inconsistency, Weak Chat", memory: "Very Poor" },
  { name: "CrushOn.AI", type: "Uncensored RP", pricing: "$5.99 - $29.99/mo", trueCost: "$29.99/mo", models: "API Router (OpenAI/Local)", flaw: "API Reliance, UI Clutter", memory: "Variable" },
  { name: "Joyland AI", type: "Storytelling", pricing: "$9.99/mo", trueCost: "$15+/mo", models: "Base Llama Fine-tune", flaw: "Generic Responses, Repetitive", memory: "Basic" },
  { name: "Janitor AI", type: "Custom Personas", pricing: "Free (API BYO)", trueCost: "API Costs ($10-$50)", models: "BYO API (OpenAI/Kobold)", flaw: "High Technical Barrier to Entry", memory: "Dependent on API" },
  { name: "Chub AI", type: "Advanced RP", pricing: "$5.00 - $15.00/mo", trueCost: "$15.00/mo", models: "Abliterated Models", flaw: "Niche UI, Overwhelming Options", memory: "Advanced Parameters" },
];

export default function Home() {
  const [activeSection, setActiveSection] = useState<'matrix' | 'research' | 'execution'>('matrix');

  return (
    <main className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-200">
      
      {/* Clinical Header */}
      <header className="border-b border-slate-200 bg-white sticky top-0 z-50">
        <div className="max-w-[1400px] mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="h-8 w-8 bg-slate-900 rounded-md flex items-center justify-center">
              <Cpu className="text-white" size={18} />
            </div>
            <span className="text-xl font-bold tracking-tight">Timple.ai</span>
            <span className="px-2 py-0.5 bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider rounded border border-blue-200 ml-4">Technical Co-Founder Dashboard</span>
          </div>
          <div className="flex space-x-1 bg-slate-100 p-1 rounded-lg border border-slate-200">
            {[
              { id: 'matrix', label: 'Threat Matrix', icon: <TableIcon size={14} /> },
              { id: 'research', label: 'Deep Research', icon: <LayoutList size={14} /> },
              { id: 'execution', label: 'Execution Strategy', icon: <Compass size={14} /> }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveSection(tab.id as any)}
                className={`flex items-center space-x-2 px-4 py-1.5 text-sm font-semibold rounded-md transition-all ${
                  activeSection === tab.id 
                    ? 'bg-white text-slate-900 shadow-sm border border-slate-200' 
                    : 'text-slate-500 hover:text-slate-700 hover:bg-slate-200/50'
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </header>

      <div className="max-w-[1400px] mx-auto px-6 py-12">
        
        {/* Title Area */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-4">
            Market Intelligence & Execution Blueprint
          </h1>
          <p className="text-lg text-slate-600 max-w-4xl leading-relaxed">
            A comprehensive, data-driven analysis of the top 10 AI Companion platforms. This dashboard exposes their critical architectural flaws, pricing traps, and presents the definitive technical execution strategy for Timple.ai to capture market share.
          </p>
        </div>

        <AnimatePresence mode="wait">
          
          {/* TAB: THREAT MATRIX (ALL 10 COMPETITORS) */}
          {activeSection === 'matrix' && (
            <motion.div key="matrix" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-8">
              
              <div className="flex justify-between items-end mb-4">
                <div>
                  <h2 className="text-2xl font-bold flex items-center"><Target className="mr-2 text-rose-600"/> The Top 10 Threat Matrix</h2>
                  <p className="text-sm text-slate-500">Raw data extraction covering pricing models, tech stacks, and critical user complaints.</p>
                </div>
                <div className="text-sm font-medium text-slate-500 bg-slate-50 px-3 py-1 rounded border border-slate-200">
                  Data Accuracy: 2026 Q3
                </div>
              </div>

              <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm whitespace-nowrap">
                    <thead className="bg-slate-50 border-b border-slate-200">
                      <tr>
                        <th className="p-4 font-semibold text-slate-700">Platform</th>
                        <th className="p-4 font-semibold text-slate-700">Category</th>
                        <th className="p-4 font-semibold text-slate-700">Marketed Price</th>
                        <th className="p-4 font-semibold text-rose-600">True ARPU / Cost</th>
                        <th className="p-4 font-semibold text-slate-700">Architecture / Models</th>
                        <th className="p-4 font-semibold text-slate-700">Memory System</th>
                        <th className="p-4 font-semibold text-slate-700">Fatal Flaw / Complaint</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {competitors.map((comp, idx) => (
                        <tr key={idx} className="hover:bg-slate-50 transition-colors">
                          <td className="p-4 font-bold text-slate-900">{comp.name}</td>
                          <td className="p-4 text-slate-600"><span className="bg-slate-100 px-2 py-1 rounded text-xs">{comp.type}</span></td>
                          <td className="p-4 text-slate-500">{comp.pricing}</td>
                          <td className="p-4 font-bold text-rose-600">{comp.trueCost}</td>
                          <td className="p-4 text-slate-700 font-mono text-xs">{comp.models}</td>
                          <td className="p-4 text-slate-600">{comp.memory}</td>
                          <td className="p-4 text-slate-800 flex items-center"><AlertTriangle size={14} className="text-amber-500 mr-2 flex-shrink-0"/> {comp.flaw}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="bg-slate-50 border border-slate-200 p-6 rounded-xl">
                  <h3 className="font-bold text-slate-900 mb-2 flex items-center"><Database className="mr-2 text-blue-600" size={18}/> The Amnesia Pattern</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">70% of the top 10 platforms suffer from severe memory degradation. They rely on standard expanding context windows, resulting in "Personality Decay" after 3-4 weeks of use, driving massive churn.</p>
                </div>
                <div className="bg-slate-50 border border-slate-200 p-6 rounded-xl">
                  <h3 className="font-bold text-slate-900 mb-2 flex items-center"><ShieldAlert className="mr-2 text-rose-600" size={18}/> The Censorship Pivot</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">Character.AI and Replika proved that aggressive corporate censorship ("The Lobotomy") instantly alienates the core user base. However, fully uncensored platforms face payment processor bans.</p>
                </div>
                <div className="bg-slate-50 border border-slate-200 p-6 rounded-xl">
                  <h3 className="font-bold text-slate-900 mb-2 flex items-center"><BarChart3 className="mr-2 text-emerald-600" size={18}/> The Token Economy Scam</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">Platforms like Candy.ai mask their true cost. The $13.99 subscription is a bait-and-switch; heavy media generation drains "tokens" instantly, pushing the true ARPU above $50/month.</p>
                </div>
              </div>

            </motion.div>
          )}

          {/* TAB: DEEP RESEARCH */}
          {activeSection === 'research' && (
            <motion.div key="research" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-12">
              <div className="border-b border-slate-200 pb-4">
                <h2 className="text-2xl font-bold flex items-center"><LayoutList className="mr-2 text-indigo-600"/> Aggressive Market Intelligence Dumps</h2>
                <p className="text-sm text-slate-500">Unfiltered research gathered by autonomous data agents regarding market failures and consumer psychology.</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                
                {/* Dump 1 */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <span className="w-6 h-6 bg-slate-900 text-white rounded flex items-center justify-center font-bold text-xs">01</span>
                    <h3 className="text-xl font-bold text-slate-900">The Character.AI & Replika Exodus</h3>
                  </div>
                  <div className="bg-white border border-slate-200 p-6 rounded-xl shadow-sm text-sm text-slate-700 leading-relaxed space-y-4">
                    <p><strong>The Core Problem:</strong> Replika built the emotional companion market, but destroyed it with "The Lobotomy"—a sudden, drastic censorship update that erased established AI personalities. Character.AI is facing a similar revolt over its draconian NSFW filters that inadvertently block completely benign romantic or violent roleplay (e.g., standard fantasy combat).</p>
                    <p><strong>Consumer Psychology:</strong> Users view these companions as intimate confidants. When a filter blocks a message and scolds the user, it immediately shatters the "illusion of humanity." It reminds the user they are talking to a sanitized corporate algorithm.</p>
                    <p><strong>The Market Gap:</strong> Users are desperate for emotional continuity without moralizing guardrails. They are migrating to Janitor AI and Chub AI, but these platforms have massive technical barriers to entry (requiring API keys or local LLM setup).</p>
                  </div>
                </div>

                {/* Dump 2 */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <span className="w-6 h-6 bg-slate-900 text-white rounded flex items-center justify-center font-bold text-xs">02</span>
                    <h3 className="text-xl font-bold text-slate-900">Visual Inconsistency in Diffusion Pipelines</h3>
                  </div>
                  <div className="bg-white border border-slate-200 p-6 rounded-xl shadow-sm text-sm text-slate-700 leading-relaxed space-y-4">
                    <p><strong>The Core Problem:</strong> Dream Companion and Candy.ai rely heavily on AI image generation to drive token sales. However, their base Stable Diffusion implementations fail at <em>character consistency</em>. An AI companion will generate a selfie, and the next selfie will look like a completely different person (different facial structure, different body type).</p>
                    <p><strong>Consumer Psychology:</strong> Visual inconsistency destroys the parasocial bond. If the companion's face changes every day, the user's attachment breaks, leading to churn.</p>
                    <p><strong>The Market Gap:</strong> Advanced open-source users solve this using complex LoRA (Low-Rank Adaptation) training and ControlNet pipelines on platforms like Civitai. Commercial platforms have largely failed to productize this workflow at scale due to compute costs.</p>
                  </div>
                </div>

                {/* Dump 3 */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <span className="w-6 h-6 bg-slate-900 text-white rounded flex items-center justify-center font-bold text-xs">03</span>
                    <h3 className="text-xl font-bold text-slate-900">The Kindroid UX Friction</h3>
                  </div>
                  <div className="bg-white border border-slate-200 p-6 rounded-xl shadow-sm text-sm text-slate-700 leading-relaxed space-y-4">
                    <p><strong>The Core Problem:</strong> Kindroid currently leads the market in memory retention and emotional IQ, utilizing advanced RAG (Retrieval-Augmented Generation) and custom system prompts. However, its onboarding process is highly complex, requiring users to write their own backstories and configure intricate settings.</p>
                    <p><strong>Consumer Psychology:</strong> Mainstream users (the Candy.ai demographic) want zero-friction onboarding. They want to swipe, select a pre-made personality, and immediately begin chatting. They do not want to act as prompt engineers.</p>
                    <p><strong>The Market Gap:</strong> The winning platform must combine the deep, unyielding memory of Kindroid with the frictionless, highly visual onboarding of Candy.ai.</p>
                  </div>
                </div>

                {/* Dump 4 */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <span className="w-6 h-6 bg-slate-900 text-white rounded flex items-center justify-center font-bold text-xs">04</span>
                    <h3 className="text-xl font-bold text-slate-900">The Power User Migration (NeuralCompanion)</h3>
                  </div>
                  <div className="bg-white border border-slate-200 p-6 rounded-xl shadow-sm text-sm text-slate-700 leading-relaxed space-y-4">
                    <p><strong>The Core Problem:</strong> The top 1% of power users—the ones who dictate market trends and build the best AI personas—are fleeing commercial apps completely due to data privacy fears. They are building local, open-source solutions like NeuralCompanion.</p>
                    <p><strong>The Reality:</strong> Centralized servers storing millions of intimate chat logs are massive targets for data breaches. Power users want total data sovereignty.</p>
                    <p><strong>The Market Gap:</strong> A "Bring Your Own Model" (BYOM) or highly encrypted cloud-hosting solution for open-source frameworks. Timple.ai can act as the infrastructure layer, capturing the hardcore demographic without spending a dime on user acquisition.</p>
                  </div>
                </div>

              </div>
            </motion.div>
          )}

          {/* TAB: EXECUTION STRATEGY */}
          {activeSection === 'execution' && (
            <motion.div key="execution" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-12">
              
              <div className="border-b border-slate-200 pb-4">
                <h2 className="text-2xl font-bold flex items-center"><Compass className="mr-2 text-teal-600"/> Technical Co-Founder Blueprint</h2>
                <p className="text-sm text-slate-500">How we engineer our way out of the competitor traps and build a scalable moat.</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                
                {/* Execution Steps */}
                <div className="lg:col-span-8 space-y-8">
                  
                  {/* Problem 1 */}
                  <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-3">
                        <div className="bg-rose-100 text-rose-700 font-bold px-3 py-1 rounded text-sm">Priority 1</div>
                        <h3 className="text-xl font-bold text-slate-900">Solving the Retention Crisis (Amnesia)</h3>
                      </div>
                    </div>
                    <div className="mb-6">
                      <p className="text-sm text-slate-600 font-medium mb-2">The Failure:</p>
                      <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 text-sm text-slate-700 flex items-start">
                        <X className="text-rose-500 mr-2 flex-shrink-0 mt-0.5" size={16}/>
                        <span>Standard LLMs rely on expanding context windows. Once the conversation exceeds 8k/32k tokens, the oldest memories are dropped. The companion forgets the user's name, leading to instant churn.</span>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-slate-600 font-medium mb-2">The Engineering Execution:</p>
                      <div className="bg-blue-50/50 p-4 rounded-lg border border-blue-100 text-sm text-slate-800 flex items-start">
                        <Check className="text-blue-600 mr-2 flex-shrink-0 mt-0.5" size={16}/>
                        <div className="space-y-2">
                          <p>We deploy <strong>Graph-RAG (Retrieval-Augmented Generation)</strong> using a graph database like Neo4j or Memgraph.</p>
                          <p>Instead of just vectorizing text, we parse the conversation in real-time to extract entities and relationships. We build a permanent knowledge graph: <code>(User)-[Loves]-&gt;(Sci-Fi)</code>.</p>
                          <p>Before the LLM generates a response, we query the graph for relevant nodes and inject them into the system prompt. The memory becomes infinite and structured.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Problem 2 */}
                  <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-3">
                        <div className="bg-amber-100 text-amber-700 font-bold px-3 py-1 rounded text-sm">Priority 2</div>
                        <h3 className="text-xl font-bold text-slate-900">Protecting Gross Margins (Compute Bleed)</h3>
                      </div>
                    </div>
                    <div className="mb-6">
                      <p className="text-sm text-slate-600 font-medium mb-2">The Failure:</p>
                      <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 text-sm text-slate-700 flex items-start">
                        <X className="text-rose-500 mr-2 flex-shrink-0 mt-0.5" size={16}/>
                        <span>Using OpenAI GPT-4o or Claude 3.5 Sonnet for millions of casual chat messages ("Hey, how are you?") destroys unit economics, pushing inference costs higher than subscription revenue.</span>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-slate-600 font-medium mb-2">The Engineering Execution:</p>
                      <div className="bg-blue-50/50 p-4 rounded-lg border border-blue-100 text-sm text-slate-800 flex items-start">
                        <Check className="text-blue-600 mr-2 flex-shrink-0 mt-0.5" size={16}/>
                        <div className="space-y-2">
                          <p>We implement a <strong>Dynamic Model Routing Architecture</strong>.</p>
                          <p>We host a highly quantized, blazing-fast open-weight model (like Llama-3 8B) on decentralized GPU networks (Akash) to handle 90% of basic conversational filler at near-zero cost.</p>
                          <p>A lightweight classifier analyzes user intent. Only when deep emotional reasoning or complex roleplay is detected do we route the query to a heavy 70B parameter model. This preserves a &gt;75% Gross Margin.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Problem 3 */}
                  <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-3">
                        <div className="bg-emerald-100 text-emerald-700 font-bold px-3 py-1 rounded text-sm">Priority 3</div>
                        <h3 className="text-xl font-bold text-slate-900">The Decoupled API (Censorship Solution)</h3>
                      </div>
                    </div>
                    <div className="mb-6">
                      <p className="text-sm text-slate-600 font-medium mb-2">The Failure:</p>
                      <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 text-sm text-slate-700 flex items-start">
                        <X className="text-rose-500 mr-2 flex-shrink-0 mt-0.5" size={16}/>
                        <span>Hosting uncensored NSFW AI content natively on Timple.ai risks immediate bans from Stripe and the Apple App Store, cutting off our primary revenue arteries.</span>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-slate-600 font-medium mb-2">The Engineering Execution:</p>
                      <div className="bg-blue-50/50 p-4 rounded-lg border border-blue-100 text-sm text-slate-800 flex items-start">
                        <Check className="text-blue-600 mr-2 flex-shrink-0 mt-0.5" size={16}/>
                        <div className="space-y-2">
                          <p>We build a <strong>Decoupled "Bring Your Own Model" (BYOM) Architecture</strong>.</p>
                          <p>The native Timple.ai app remains strictly SFW to maintain payment processor compliance. However, we engineer an open API endpoint within the app.</p>
                          <p>Power users can plug in third-party API keys (OpenRouter, local LM Studio) to route their chats through uncensored, "abliterated" models off-platform. We get the retention benefits without the compliance liability.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>

                {/* Dashboard Side Panel */}
                <div className="lg:col-span-4 space-y-6">
                  <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sticky top-24">
                    <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center border-b border-slate-200 pb-4">
                      <Activity className="text-blue-600 mr-2" size={20}/> Engineering KPIs
                    </h3>
                    
                    <div className="space-y-8">
                      <div>
                        <div className="flex justify-between text-sm mb-2">
                          <span className="text-slate-600 font-medium">Target Gross Margin</span>
                          <span className="text-slate-900 font-bold">75%</span>
                        </div>
                        <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
                          <div className="h-full bg-emerald-500 w-[75%] rounded-full"></div>
                        </div>
                        <p className="text-xs text-slate-500 mt-2">Achieved via Dynamic Model Routing & Decentralized GPU compute.</p>
                      </div>

                      <div>
                        <div className="flex justify-between text-sm mb-2">
                          <span className="text-slate-600 font-medium">Month-3 Retention</span>
                          <span className="text-slate-900 font-bold">&gt;40%</span>
                        </div>
                        <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
                          <div className="h-full bg-blue-500 w-[45%] rounded-full"></div>
                        </div>
                        <p className="text-xs text-slate-500 mt-2">Driven exclusively by Graph-RAG infinite memory implementations.</p>
                      </div>

                      <div>
                        <div className="flex justify-between text-sm mb-2">
                          <span className="text-slate-600 font-medium">Inference Cost (per 1k)</span>
                          <span className="text-slate-900 font-bold">&lt;$0.001</span>
                        </div>
                        <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
                          <div className="h-full bg-rose-500 w-[15%] rounded-full"></div>
                        </div>
                        <p className="text-xs text-slate-500 mt-2">Targeting Llama-3 8B 4-bit quantization for 90% of requests.</p>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>
          )}

        </AnimatePresence>
      </div>
    </main>
  );
}
