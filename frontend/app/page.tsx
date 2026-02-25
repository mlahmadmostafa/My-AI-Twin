import Twin from '@/components/twin';

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center text-zinc-100 mb-2">
            AI in Production
          </h1>
          <p className="text-center text-zinc-400 mb-8">
            Deploy your Digital Twin to the cloud
          </p>

          <div className="h-[600px]">
            <Twin />
          </div>

          <footer className="mt-8 text-center text-sm text-zinc-500">
            <p>See dad? I am a good Software Engineer.</p>
          </footer>
        </div>
      </div>
    </main>
  );
}
