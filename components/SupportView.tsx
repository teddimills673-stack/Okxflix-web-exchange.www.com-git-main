'use client';

import React from 'react';
import { Headphones } from 'lucide-react';

export const SupportView: React.FC = () => {
  const propertyId = process.env.NEXT_PUBLIC_TAWK_PROPERTY_ID || '6aacb0d36ebfd6344e772c16';
  const widgetId = process.env.NEXT_PUBLIC_TAWK_WIDGET_ID || 'default';
  const chatUrl = `https://tawk.to/chat/${propertyId}/${widgetId}`;

  return (
    <div className="space-y-4 pb-24 sm:pb-12 animate-fadeIn max-w-4xl mx-auto h-full flex flex-col overflow-x-hidden">
      {/* Support Center Header */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 sm:p-5 shadow-xl flex items-center justify-between gap-4 shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-blue-600/20 text-blue-400 flex items-center justify-center font-bold shrink-0">
            <Headphones className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <h2 className="text-base sm:text-lg font-bold text-white">OKX FLIX Support Center</h2>
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-[10px] px-2 py-0.5 rounded font-mono font-bold bg-emerald-500/10 text-emerald-400">
                Live Agents Online 24/7
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Tawk.to Live Chat Embedded Container */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col flex-1 min-h-[600px] sm:min-h-[700px] w-full">
        <div className="flex-1 relative bg-slate-950 flex flex-col w-full h-full">
          <iframe
            src={chatUrl}
            title="OKX FLIX Live Support"
            className="w-full h-full border-0 bg-slate-950 absolute inset-0 touch-manipulation"
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-modals allow-downloads"
            allow="microphone; camera; display-capture; autoplay; clipboard-write; encrypted-media; fullscreen"
          />
        </div>
      </div>
    </div>
  );
};
