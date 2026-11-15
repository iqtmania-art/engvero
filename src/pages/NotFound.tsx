import React from "react";

export default function NotFound() {
  return (
    <main className="min-h-[70vh] flex items-center justify-center bg-slate-50 px-4 py-16">
      <div className="max-w-lg w-full text-center bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
        <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600">404 - Page Not Found</p>
        <h1 className="mt-2 text-3xl font-bold text-slate-900">We could not find that lesson</h1>
        <p className="mt-3 text-slate-600">The link may have moved or been mistyped. Jump back into your practice:</p>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm font-medium">
          <a href="/" className="rounded-lg bg-indigo-600 text-white px-4 py-2.5 hover:bg-indigo-700">Go to Homepage</a>
          <a href="/english-level-test/" className="rounded-lg border border-slate-300 text-slate-700 px-4 py-2.5 hover:bg-slate-100">Take Level Check</a>
          <a href="/grammar/" className="rounded-lg border border-slate-300 text-slate-700 px-4 py-2.5 hover:bg-slate-100">Browse Grammar</a>
          <a href="/vocabulary/" className="rounded-lg border border-slate-300 text-slate-700 px-4 py-2.5 hover:bg-slate-100">Explore Vocabulary</a>
        </div>
      </div>
    </main>
  );
}