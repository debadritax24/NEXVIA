export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white">
      <div className="flex flex-col items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-500">
          <span className="text-lg font-bold text-white">N</span>
        </div>
        <div className="h-5 w-5 animate-spin rounded-full border-2 border-slate-200 border-t-primary-500" />
      </div>
    </div>
  );
}
