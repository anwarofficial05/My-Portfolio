import React, { useState, useEffect, useRef } from 'react';
import { personalInfo, aiAssistantFAQs } from '../data/portfolioData';
import { 
  Sparkles, 
  X, 
  Send, 
  Bot, 
  User, 
  CornerDownLeft, 
  ArrowUpRight, 
  MessageSquare,
  HelpCircle,
  RotateCcw
} from 'lucide-react';

export default function AIAssistant({ isOpen, onClose, onOpenResume }) {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'assistant',
      text: `Hello! I'm **Anwar AI**, Mohamed Anwar's interactive portfolio assistant. I can answer questions about his data analytics experience, ML projects, technical stack, or interview availability. What would you like to explore?`,
      time: 'Just now'
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen, isTyping]);

  const handleSelectFAQ = (faq) => {
    sendMessage(faq.question, faq.answer, faq.relatedSection);
  };

  const findAnswer = (query) => {
    const q = query.toLowerCase();

    if (q.includes('hire') || q.includes('why') || q.includes('candidate') || q.includes('fit') || q.includes('hire anwar')) {
      return {
        answer: aiAssistantFAQs[0].answer,
        section: 'skills'
      };
    }
    if (q.includes('sql') || q.includes('power bi') || q.includes('data') || q.includes('analytics') || q.includes('tableau') || q.includes('excel')) {
      return {
        answer: aiAssistantFAQs[1].answer,
        section: 'skills'
      };
    }
    if (q.includes('loan') || q.includes('credit') || q.includes('risk') || q.includes('project 1')) {
      return {
        answer: aiAssistantFAQs[2].answer,
        section: 'projects'
      };
    }
    if (q.includes('jarvis') || q.includes('voice') || q.includes('assistant') || q.includes('telemetry')) {
      return {
        answer: aiAssistantFAQs[3].answer,
        section: 'projects'
      };
    }
    if (q.includes('k8s') || q.includes('kubernetes') || q.includes('pod') || q.includes('schedule') || q.includes('lstm') || q.includes('xgboost')) {
      return {
        answer: aiAssistantFAQs[4].answer,
        section: 'projects'
      };
    }
    if (q.includes('medknow') || q.includes('healthcare') || q.includes('rbac') || q.includes('flask')) {
      return {
        answer: `MedKnow is a healthcare knowledge management portal built with Flask, SQLAlchemy, and JWT. It features multi-tier role-based access control (RBAC), clinical protocol versioning, audit trails, and advisory workflows.`,
        section: 'projects'
      };
    }
    if (q.includes('intern') || q.includes('experience') || q.includes('work') || q.includes('pluto') || q.includes('barola') || q.includes('tvk')) {
      return {
        answer: aiAssistantFAQs[5].answer,
        section: 'experience'
      };
    }
    if (q.includes('contact') || q.includes('email') || q.includes('phone') || q.includes('call') || q.includes('interview') || q.includes('reach')) {
      return {
        answer: aiAssistantFAQs[6].answer,
        section: 'contact'
      };
    }
    if (q.includes('certif') || q.includes('badge') || q.includes('tata') || q.includes('deloitte') || q.includes('cisco') || q.includes('nvidia')) {
      return {
        answer: `Anwar holds 14+ industry certifications including Tata GenAI Powered Data Analytics, Deloitte Data Analytics, TCS iON Master Data Management, NVIDIA AI, Cisco Python, Anthropic Claude AI Fluency, and Infosys Agentic AI Mastery.`,
        section: 'certifications'
      };
    }
    if (q.includes('education') || q.includes('college') || q.includes('degree') || q.includes('gpa') || q.includes('graduate')) {
      return {
        answer: `Anwar is pursuing his Bachelor of Computer Science and Engineering at Anjalai Ammal Mahalingam Engineering College with expected graduation in 2027.`,
        section: 'experience'
      };
    }
    if (q.includes('resume') || q.includes('cv')) {
      return {
        answer: `You can view and print Anwar's ATS-compliant resume directly using the 'Resume' button in the navigation or top header!`,
        section: 'resume'
      };
    }

    // Default polite response
    return {
      answer: `Mohamed Anwar specializes in Data Analytics (Power BI, SQL CTEs, Excel) and Full-Stack AI (FastAPI, React, Scikit-Learn). He has built 4 production projects with live deployments and completed 3 internships. Would you like to check his projects, skills, or contact info?`,
      section: 'projects'
    };
  };

  const sendMessage = (userText, predefinedAnswer = null, section = null) => {
    if (!userText.trim()) return;

    const newMsgId = Date.now();
    const userMessage = {
      id: newMsgId,
      sender: 'user',
      text: userText,
      time: 'Just now'
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    let answerObj = { answer: predefinedAnswer, section };
    if (!predefinedAnswer) {
      answerObj = findAnswer(userText);
    }

    setTimeout(() => {
      setIsTyping(false);
      const botMsg = {
        id: newMsgId + 1,
        sender: 'assistant',
        text: answerObj.answer,
        section: answerObj.section,
        time: 'Just now'
      };
      setMessages((prev) => [...prev, botMsg]);
    }, 600);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage(inputValue);
  };

  const handleJumpToSection = (sectionId) => {
    onClose();
    if (sectionId === 'resume') {
      onOpenResume();
      return;
    }
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleResetChat = () => {
    setMessages([
      {
        id: 1,
        sender: 'assistant',
        text: `Chat reset. I'm ready to answer any questions about Mohamed Anwar's technical background, projects, or credentials.`,
        time: 'Just now'
      }
    ]);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/75 backdrop-blur-md animate-fadeIn">
      <div 
        className="w-full max-w-2xl bg-[#0a0f24] border border-purple-500/30 rounded-3xl shadow-2xl shadow-purple-500/20 flex flex-col h-[640px] max-h-[90vh] overflow-hidden relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-5 py-4 border-b border-white/10 bg-[#0d142c] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 via-indigo-600 to-sky-500 flex items-center justify-center text-white shadow-md shadow-purple-500/30">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-heading font-bold text-white text-base">Anwar AI</h3>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  Online
                </span>
              </div>
              <p className="text-xs text-gray-400 font-mono">Recruiter & Engineering Assistant</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleResetChat}
              className="p-2 rounded-xl text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
              title="Reset Chat"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-xl text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
              title="Close Assistant"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Suggested Quick Prompt Chips */}
        <div className="px-4 py-2.5 bg-[#080d1f] border-b border-white/5 overflow-x-auto no-scrollbar flex items-center gap-2">
          <span className="text-[10px] text-gray-400 font-mono flex items-center gap-1 flex-shrink-0">
            <HelpCircle className="w-3 h-3 text-purple-400" /> Prompts:
          </span>
          {aiAssistantFAQs.slice(0, 5).map((faq, idx) => (
            <button
              key={idx}
              onClick={() => handleSelectFAQ(faq)}
              className="text-[11px] px-3 py-1 rounded-full bg-white/5 hover:bg-purple-600/20 text-gray-300 hover:text-purple-300 border border-white/10 hover:border-purple-500/40 whitespace-nowrap transition-all duration-150 flex-shrink-0"
            >
              {faq.question}
            </button>
          ))}
        </div>

        {/* Message Log */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex gap-3 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {msg.sender === 'assistant' && (
                <div className="w-8 h-8 rounded-lg bg-purple-600/20 border border-purple-500/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Bot className="w-4 h-4 text-purple-400" />
                </div>
              )}

              <div className={`max-w-[85%] sm:max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                msg.sender === 'user'
                  ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-tr-none shadow-md shadow-purple-600/20'
                  : 'bg-[#101938] border border-white/10 text-gray-200 rounded-tl-none shadow-sm'
              }`}>
                <p className="whitespace-pre-line">{msg.text}</p>
                
                {/* Related Section Trigger Link */}
                {msg.section && (
                  <div className="mt-3 pt-2.5 border-t border-white/10 flex items-center justify-between">
                    <span className="text-[11px] text-gray-400 font-mono">Related section:</span>
                    <button
                      onClick={() => handleJumpToSection(msg.section)}
                      className="text-xs font-semibold text-sky-400 hover:text-sky-300 flex items-center gap-1 underline underline-offset-2"
                    >
                      <span>Jump to {msg.section}</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                )}
              </div>

              {msg.sender === 'user' && (
                <div className="w-8 h-8 rounded-lg bg-sky-600/20 border border-sky-500/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <User className="w-4 h-4 text-sky-400" />
                </div>
              )}
            </div>
          ))}

          {/* Typing Indicator */}
          {isTyping && (
            <div className="flex gap-3 items-center">
              <div className="w-8 h-8 rounded-lg bg-purple-600/20 border border-purple-500/40 flex items-center justify-center flex-shrink-0">
                <Bot className="w-4 h-4 text-purple-400" />
              </div>
              <div className="bg-[#101938] border border-white/10 rounded-2xl rounded-tl-none px-4 py-3 flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-purple-400 animate-bounce" style={{ animationDelay: '0ms' }} />
                <div className="w-2 h-2 rounded-full bg-purple-400 animate-bounce" style={{ animationDelay: '150ms' }} />
                <div className="w-2 h-2 rounded-full bg-purple-400 animate-bounce" style={{ animationDelay: '300ms' }} />
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input Form */}
        <form 
          onSubmit={handleSubmit}
          className="p-3 sm:p-4 bg-[#0d142c] border-t border-white/10 flex items-center gap-2"
        >
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Ask about Anwar's skills, SQL benchmarks, projects, or certs..."
            className="flex-1 bg-[#060913] border border-white/15 rounded-xl px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
          />
          <button
            type="submit"
            disabled={!inputValue.trim()}
            className="btn-primary p-2.5 rounded-xl text-white disabled:opacity-40 disabled:cursor-not-allowed transition-all"
            title="Send Message"
          >
            <Send className="w-4 h-4" />
          </button>
        </form>
      </div>
    </div>
  );
}
