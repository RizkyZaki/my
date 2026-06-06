'use client';

export default function BackToTop() {
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="group flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 rounded-full text-white font-semibold transition-all hover:scale-105 shadow-lg"
    >
      <span>Back to Top</span>
      <svg className="w-5 h-5 group-hover:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
      </svg>
    </button>
  );
}
