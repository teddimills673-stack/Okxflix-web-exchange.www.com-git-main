export const dynamic = 'force-static';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center p-6 text-center">
      <div className="max-w-md w-full bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-2xl space-y-6">
        <h1 className="text-2xl font-bold tracking-tight">Page Not Found</h1>
        <p className="text-sm text-slate-400">The page you are looking for does not exist or has been moved.</p>
        <a href="/" className="inline-block py-3 px-6 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-xl transition-colors shadow-lg shadow-blue-600/25">
          Return to Dashboard
        </a>
      </div>
    </div>
  );
}
