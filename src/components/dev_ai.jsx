import React, { useState, useEffect, useRef } from "react";
import { Sparkles, Bot, X, Send, User, MessageSquare } from "lucide-react";

const DevAI = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: "ai",
      text: "Hi there! I'm DevAI, Debabrata's virtual assistant. 🚀 How can I help you today?",
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [showBadge, setShowBadge] = useState(true);
  const chatEndRef = useRef(null);

  // Auto-scroll to bottom of chat
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  // Hide the floating "DevAI" text badge after 8 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowBadge(false);
    }, 8000);
    return () => clearTimeout(timer);
  }, []);

  const quickPrompts = [
    "Tell me about Debabrata",
    "What services are offered?",
    "Show me the projects",
    "How can I contact him?",
  ];

  const handleSend = (textToSend) => {
    const query = textToSend || input;
    if (!query.trim()) return;

    // Add user message
    const userMsg = {
      sender: "user",
      text: query,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInput("");
    setIsTyping(true);

    // Simulate AI response delay
    setTimeout(() => {
      let responseText = "";
      const lowerQuery = query.toLowerCase();

      if (lowerQuery.includes("debabrata") || lowerQuery.includes("about")) {
        responseText = "Debabrata is a passionate developer building premium web applications. He specializes in React, Tailwind CSS, and full-stack development, delivering stunning user experiences!";
      } else if (lowerQuery.includes("services")) {
        responseText = "He offers full-stack Web Development, UI/UX design refinement, Performance Optimization, and custom software integrations tailored to business needs.";
      } else if (lowerQuery.includes("projects")) {
        responseText = "Debabrata has built many cool projects! Scroll up to the 'Projects' section in the portfolio to see a showcased list of applications.";
      } else if (lowerQuery.includes("contact")) {
        responseText = "You can easily contact him by filling out the Contact Form above, or by sending an email. He'll get back to you as soon as possible!";
      } else {
        responseText = `I received your message: "${query}". I am currently in demo mode while my creator configures my AI API. Feel free to use the Contact form to reach him directly!`;
      }

      setMessages((prev) => [
        ...prev,
        {
          sender: "ai",
          text: responseText,
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        },
      ]);
      setIsTyping(false);
    }, 120000 / 80); // ~1.5s typing delay
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end font-sans">
      {/* CHAT WINDOW */}
      {isOpen && (
        <div className="mb-4 w-[340px] sm:w-[380px] h-[480px] rounded-3xl bg-white/80 dark:bg-zinc-900/90 backdrop-blur-xl border border-black/10 dark:border-white/10 shadow-2xl flex flex-col overflow-hidden transition-all duration-300 transform scale-100 origin-bottom-right">
          {/* Header */}
          <div className="bg-gradient-to-r from-orange-500 via-rose-500 to-violet-600 p-4 text-white flex items-center justify-between shadow-md">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/20">
                  <Bot className="w-5 h-5 text-white animate-pulse" />
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-500 border-2 border-white dark:border-zinc-900 animate-pulse"></span>
              </div>
              <div>
                <h3 className="font-bold text-base leading-none">DevAI</h3>
                <span className="text-[11px] text-white/80">Active & Ready</span>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-full hover:bg-white/20 transition active:scale-95 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 ai-chat-scrollbar">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex gap-2.5 max-w-[85%] ${
                  msg.sender === "user" ? "ml-auto flex-row-reverse" : "mr-auto"
                }`}
              >
                <div
                  className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 ${
                    msg.sender === "user"
                      ? "bg-orange-500 text-white"
                      : "bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200"
                  }`}
                >
                  {msg.sender === "user" ? (
                    <User className="w-4 h-4" />
                  ) : (
                    <Bot className="w-4 h-4" />
                  )}
                </div>
                <div className="flex flex-col">
                  <div
                    className={`p-3 rounded-2xl text-sm leading-relaxed ${
                      msg.sender === "user"
                        ? "bg-orange-500 text-white rounded-tr-none shadow-md shadow-orange-500/10"
                        : "bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-100 rounded-tl-none border border-black/5 dark:border-white/5"
                    }`}
                  >
                    {msg.text}
                  </div>
                  <span className="text-[10px] text-zinc-400 dark:text-zinc-500 mt-1 self-end">
                    {msg.time}
                  </span>
                </div>
              </div>
            ))}

            {/* Typing indicator */}
            {isTyping && (
              <div className="flex gap-2.5 mr-auto max-w-[85%]">
                <div className="w-7 h-7 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 flex items-center justify-center shrink-0">
                  <Bot className="w-4 h-4" />
                </div>
                <div className="bg-zinc-100 dark:bg-zinc-800 p-3 rounded-2xl rounded-tl-none border border-black/5 dark:border-white/5 flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-orange-500 animate-bounce [animation-delay:-0.3s]"></span>
                  <span className="w-2 h-2 rounded-full bg-rose-500 animate-bounce [animation-delay:-0.15s]"></span>
                  <span className="w-2 h-2 rounded-full bg-violet-600 animate-bounce"></span>
                </div>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          {/* Quick Prompts */}
          {messages.length === 1 && !isTyping && (
            <div className="px-4 pb-2 pt-1 flex flex-wrap gap-1.5 border-t border-black/5 dark:border-white/5">
              {quickPrompts.map((prompt, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSend(prompt)}
                  className="text-xs py-1 px-2.5 rounded-full bg-orange-50 dark:bg-zinc-800/50 text-orange-600 dark:text-orange-400 border border-orange-100 dark:border-zinc-700/50 hover:bg-orange-100 dark:hover:bg-zinc-700/80 transition cursor-pointer"
                >
                  {prompt}
                </button>
              ))}
            </div>
          )}

          {/* Input Area */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="p-3 bg-zinc-50 dark:bg-zinc-900/50 border-t border-black/10 dark:border-white/10 flex items-center gap-2"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask DevAI something..."
              className="flex-1 bg-white dark:bg-zinc-800 border border-black/10 dark:border-white/10 rounded-xl px-3.5 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 dark:text-white"
            />
            <button
              type="submit"
              disabled={!input.trim()}
              className="p-2 rounded-xl bg-orange-500 text-white hover:bg-orange-600 active:scale-95 disabled:opacity-50 disabled:active:scale-100 transition cursor-pointer"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}

      {/* FLOATING ACTION BUTTON */}
      <div className="flex items-center gap-2 group">
        {/* Floating text badge */}
        {showBadge && !isOpen && (
          <div className="bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md border border-black/10 dark:border-white/10 shadow-lg px-3.5 py-1.5 rounded-full text-xs font-semibold text-zinc-800 dark:text-white flex items-center gap-1.5 animate-float select-none">
            <Sparkles className="w-3.5 h-3.5 text-orange-500 animate-spin" style={{ animationDuration: '4s' }} />
            <span>Chat with <span className="text-orange-500 font-bold">DevAI</span></span>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowBadge(false);
              }}
              className="ml-1 p-0.5 rounded-full hover:bg-black/5 dark:hover:bg-white/10 cursor-pointer"
            >
              <X className="w-3 h-3 text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200" />
            </button>
          </div>
        )}

        {/* The Trigger Button */}
        <button
          onClick={() => {
            setIsOpen(!isOpen);
            if (!isOpen) setShowBadge(false);
          }}
          className={`w-14 h-14 rounded-full bg-gradient-to-tr from-orange-500 via-rose-500 to-violet-600 text-white flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 active:scale-90 relative cursor-pointer border border-white/20 animate-float animate-pulse-glow ${
            isOpen ? "rotate-90" : ""
          }`}
          aria-label="Toggle DevAI Assistant"
        >
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Bot className="w-6 h-6 animate-pulse" />
          )}
          {/* Subtle notification dot if chat is closed and badge is active */}
          {!isOpen && showBadge && (
            <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-emerald-500 rounded-full border-2 border-white dark:border-zinc-900 animate-bounce"></span>
          )}
        </button>
      </div>
    </div>
  );
};

export default DevAI;
