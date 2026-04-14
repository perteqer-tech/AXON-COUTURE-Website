import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, User, Bot } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";
import Logo from './Logo';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "" });

interface Message {
  role: 'user' | 'bot';
  content: string;
}

export default function ChatDemo() {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'bot', content: '¡Hola! Soy tu asesor de talla de AXON & COUTURE. ¿En qué prenda estás interesado hoy para que podamos encontrar tu ajuste perfecto?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const response = await ai.models.generateContent({
        model: "gemini-1.5-flash",
        contents: [
          {
            role: "user",
            parts: [{ text: `Eres un asesor de tallas experto para una marca de moda de lujo. Tu objetivo es ayudar al cliente a encontrar su talla perfecta basándote en sus medidas o marcas que ya usa. Sé elegante, profesional y servicial. El usuario dice: ${userMessage}` }]
          }
        ],
        config: {
          systemInstruction: "Eres el Asesor de Talla de AXON & COUTURE. Tu misión es reducir devoluciones ayudando a los clientes a elegir la talla correcta con precisión y elegancia. Habla siempre en español.",
        }
      });

      const botResponse = response.text || "Lo siento, hubo un pequeño error en la pasarela. ¿Podrías repetir eso?";
      setMessages(prev => [...prev, { role: 'bot', content: botResponse }]);
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { role: 'bot', content: "Lo siento, mi conexión con el taller se ha interrumpido. Por favor, inténtalo de nuevo." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto border border-ink/10 rounded-2xl overflow-hidden bg-white shadow-2xl shadow-accent/5">
      {/* Header */}
      <div className="bg-ink text-paper p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Logo className="w-10 h-10" />
          <div>
            <h3 className="font-serif text-lg leading-tight">Asesor de Talla AI</h3>
            <p className="text-[10px] uppercase tracking-widest opacity-60">Powered by AXON & COUTURE</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-[10px] uppercase tracking-widest opacity-60">En línea</span>
        </div>
      </div>

      {/* Chat Area */}
      <div 
        ref={scrollRef}
        className="h-[400px] overflow-y-auto p-6 space-y-4 bg-paper"
      >
        <AnimatePresence initial={false}>
          {messages.map((msg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`max-w-[80%] flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${msg.role === 'user' ? 'bg-ink text-paper' : 'bg-accent/20 text-accent'}`}>
                  {msg.role === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                </div>
                <div className={`p-4 rounded-2xl text-sm leading-relaxed ${
                  msg.role === 'user' 
                    ? 'bg-ink text-paper rounded-tr-none' 
                    : 'bg-white border border-ink/5 shadow-sm rounded-tl-none'
                }`}>
                  {msg.content}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-white border border-ink/5 p-4 rounded-2xl rounded-tl-none flex gap-2">
              <div className="w-1.5 h-1.5 bg-accent rounded-full animate-bounce [animation-delay:-0.3s]" />
              <div className="w-1.5 h-1.5 bg-accent rounded-full animate-bounce [animation-delay:-0.15s]" />
              <div className="w-1.5 h-1.5 bg-accent rounded-full animate-bounce" />
            </div>
          </div>
        )}
      </div>

      {/* Input Area */}
      <div className="p-4 bg-white border-t border-ink/5">
        <div className="relative flex items-center">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Escribe tu consulta sobre tallas..."
            className="w-full pl-4 pr-12 py-3 bg-paper border border-ink/10 rounded-xl focus:outline-none focus:border-accent transition-colors text-sm"
          />
          <button
            onClick={handleSend}
            disabled={isLoading || !input.trim()}
            className="absolute right-2 p-2 text-accent hover:text-ink disabled:opacity-30 transition-all"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
        <p className="text-[10px] text-center mt-3 text-ink/40 uppercase tracking-widest">
          Precisión del 98% en recomendaciones de ajuste
        </p>
      </div>
    </div>
  );
}
