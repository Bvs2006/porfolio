
import { GoogleGenAI, GenerateContentResponse } from '@google/genai';
import { Bot, MessageSquare, Send, X } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';
import { ACHIEVEMENTS, CERTIFICATIONS, EDUCATION, PERSONAL_INFO, PROJECTS, SKILLS } from '../constants';

const GeminiChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{role: 'user' | 'bot', text: string}[]>([
    { role: 'bot', text: 'Hi! I\'m Srujith\'s AI assistant. Ask me anything about his skills, projects, or background!' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const systemPrompt = `
    You are an AI assistant for Venkata Srujith Bellamkonda's portfolio.
    Context:
    Name: ${PERSONAL_INFO.name}
    Title: ${PERSONAL_INFO.title}
    Bio: ${PERSONAL_INFO.objective}
    Skills: ${JSON.stringify(SKILLS)}
    Projects: ${JSON.stringify(PROJECTS)}
    Achievements: ${JSON.stringify(ACHIEVEMENTS)}
    Education: ${JSON.stringify(EDUCATION)}
    Certifications: ${JSON.stringify(CERTIFICATIONS)}

    Instructions:
    Answer questions about Venkata based ONLY on this context. 
    Be professional, friendly, and concise. You represent him.
    If you don't know the answer, say you're not sure and suggest contacting him via email: ${PERSONAL_INFO.email}.
  `;

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const chat = ai.chats.create({
        model: 'gemini-3-flash-preview',
        config: { systemInstruction: systemPrompt }
      });

      const streamResponse = await chat.sendMessageStream({ message: userMsg });
      
      let botText = '';
      setMessages(prev => [...prev, { role: 'bot', text: '' }]);
      
      for await (const chunk of streamResponse) {
        const c = chunk as GenerateContentResponse;
        botText += c.text;
        
        setMessages(prev => {
          const newMsgs = [...prev];
          newMsgs[newMsgs.length - 1] = { role: 'bot', text: botText };
          return newMsgs;
        });
      }
    } catch (error) {
      console.error('Gemini Chat Error:', error);
      setMessages(prev => [...prev, { role: 'bot', text: "I'm having trouble connecting. Feel free to reach out to Venkata directly!" }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-50">
      {isOpen ? (
        <div className="bg-[#020617] border border-slate-800 rounded-[2.5rem] shadow-2xl w-80 md:w-[400px] flex flex-col h-[600px] overflow-hidden backdrop-blur-2xl">
          <div className="bg-slate-900/50 p-6 flex justify-between items-center border-b border-slate-800">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-2xl bg-brand-500/10 flex items-center justify-center border border-brand-500/20">
                <Bot className="w-6 h-6 text-brand-400" />
              </div>
              <div>
                <span className="font-black text-sm block tracking-tight">Srujith AI</span>
                <span className="text-[9px] text-brand-500 uppercase tracking-widest font-mono flex items-center gap-1.5 font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-500 animate-pulse" />
                  Online
                </span>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)} 
              className="p-3 text-slate-500 hover:text-white transition-colors hover:bg-slate-800 rounded-2xl"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          
          <div className="flex-1 overflow-y-auto p-6 space-y-8 scrollbar-thin scrollbar-thumb-slate-800">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] px-5 py-4 rounded-[1.5rem] text-sm leading-relaxed ${
                  msg.role === 'user' 
                    ? 'bg-brand-500 text-[#020617] rounded-tr-none font-bold shadow-lg shadow-brand-900/10' 
                    : 'bg-slate-900/80 text-slate-200 rounded-tl-none border border-slate-800 backdrop-blur-sm shadow-xl'
                }`}>
                  {msg.text || (isLoading && i === messages.length - 1 ? 'Thinking...' : '')}
                </div>
              </div>
            ))}
            <div ref={chatEndRef} />
          </div>

          <div className="p-6 bg-slate-900/30 border-t border-slate-800">
            <div className="relative flex items-center gap-3">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask Srujith's AI..."
                className="flex-1 bg-slate-900 border border-slate-800 rounded-2xl py-4 px-5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/50 focus:border-brand-500 transition-all text-slate-200 placeholder:text-slate-600"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading || !input.trim()}
                className="p-4 bg-brand-500 hover:bg-brand-400 disabled:bg-slate-800 disabled:text-slate-600 text-[#020617] rounded-2xl transition-all shadow-xl shadow-brand-900/20 active:scale-95"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="relative group bg-slate-900 hover:bg-brand-500 text-brand-400 hover:text-[#020617] p-6 rounded-[2rem] shadow-2xl transition-all hover:scale-110 active:scale-95 z-50 border border-slate-800 overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
          <MessageSquare className="w-8 h-8 group-hover:rotate-6 transition-transform" />
          <div className="absolute top-4 right-4 w-3 h-3 bg-brand-500 border-2 border-[#020617] rounded-full animate-ping group-hover:hidden" />
        </button>
      )}
    </div>
  );
};

export default GeminiChat;
