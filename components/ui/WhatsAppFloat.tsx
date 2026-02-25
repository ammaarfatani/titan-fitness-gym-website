'use client';

import { useState, useEffect } from 'react';
import { FaWhatsapp, FaTimes } from 'react-icons/fa';

export default function WhatsAppFloat() {
  const [show, setShow] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [tooltipOpen, setTooltipOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (show && !dismissed) {
      const t = setTimeout(() => setTooltipOpen(true), 800);
      return () => clearTimeout(t);
    }
  }, [show, dismissed]);

  if (dismissed) return null;

  return (
    <div className={`fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 transition-all duration-500 ${show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      {/* Tooltip */}
      {tooltipOpen && (
        <div className="relative bg-white text-gray-900 rounded-none shadow-2xl p-4 max-w-[220px] text-sm font-body animate-fade-up">
          <button
            onClick={() => setTooltipOpen(false)}
            className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
            aria-label="Close tooltip"
          >
            <FaTimes className="text-xs" />
          </button>
          <p className="font-semibold text-gray-900 mb-1">Chat with us! 💬</p>
          <p className="text-gray-600 text-xs">Book your free trial or ask any question — we respond fast!</p>
          {/* Arrow */}
          <div className="absolute -bottom-2 right-6 w-4 h-4 bg-white rotate-45 shadow" />
        </div>
      )}

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/923001234567?text=Hi! I'm interested in joining Titan Fitness Gym. Can you help me get started?"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float w-16 h-16 bg-[#25D366] hover:bg-[#1da851] flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110"
        aria-label="Chat on WhatsApp"
        onClick={() => setTooltipOpen(false)}
      >
        <FaWhatsapp className="text-white text-3xl" />
      </a>
    </div>
  );
}
