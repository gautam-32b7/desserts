export default function Spinner() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="animate-spin rounded-full h-12 w-12 border-4 border-rose-950 border-t-transparent mb-3"></div>
      <p className="text-center text-rose-900">Loading...</p>
    </div>
  );
}
