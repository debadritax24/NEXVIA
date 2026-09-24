export default function AdminLoading() {
  return (
    <div className="flex min-h-screen bg-slate-50">
      <aside className="hidden lg:flex lg:flex-col lg:w-64 lg:border-r border-slate-200 bg-white shrink-0">
        <div className="flex items-center gap-2.5 px-6 h-16 border-b border-slate-200">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-500">
            <span className="text-xs font-bold text-white">N</span>
          </div>
          <span className="text-base font-bold text-slate-900">NEXVIA</span>
        </div>
        <div className="px-3 py-4 space-y-1">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="h-10 rounded-lg bg-slate-100 animate-pulse" />
          ))}
        </div>
      </aside>
      <main className="flex-1 p-6 lg:p-8 space-y-6">
        <div className="h-8 w-48 rounded bg-slate-200 animate-pulse" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="h-28 rounded-xl border border-slate-200 bg-white p-5">
              <div className="h-4 w-20 rounded bg-slate-100 animate-pulse mb-3" />
              <div className="h-7 w-16 rounded bg-slate-200 animate-pulse" />
            </div>
          ))}
        </div>
        <div className="h-64 rounded-xl border border-slate-200 bg-white p-6">
          <div className="h-5 w-32 rounded bg-slate-200 animate-pulse mb-4" />
          <div className="space-y-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="h-4 rounded bg-slate-100 animate-pulse" />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
