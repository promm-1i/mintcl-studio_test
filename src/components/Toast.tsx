import React from 'react';
import { CheckCircle2, X } from 'lucide-react';

interface ToastProps {
  message: string | null;
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message, onClose }) => {
  if (!message) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-bounce-short bg-slate-900 text-white px-4 py-3 rounded-xl shadow-xl border border-teal-500/40 flex items-center gap-3 text-xs sm:text-sm font-medium">
      <CheckCircle2 className="w-5 h-5 text-teal-400 shrink-0" />
      <span>{message}</span>
      <button
        onClick={onClose}
        className="p-1 hover:bg-slate-800 rounded-lg text-slate-400 hover:text-white cursor-pointer"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};
