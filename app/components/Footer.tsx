export default function Footer() {
  return (
    <footer className="w-full border-t border-zinc-800 bg-black/20 backdrop-blur-lg mt-auto">
      <div className="w-full mx-auto px-8 py-4">
        <div className="flex flex-col items-center sm:items-start sm:flex-row sm:justify-between gap-4">
          <div className="flex flex-col items-center sm:items-start gap-2 w-full sm:w-auto">
            <p className="text-zinc-400 text-sm">
              © {new Date().getFullYear()} Reverb. All rights reserved.
            </p>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <a
                  href="https://discord.com/"
                  className="text-sm text-zinc-400 hover:text-[#3D90D7] transition-colors flex items-center gap-2"
                >
                  Discord
                </a>
                <div className="text-zinc-600">•</div>
                <a
                  href="https://github.com/motorphobe/Reverb"
                  className="text-sm text-zinc-400 hover:text-[#3D90D7] transition-colors flex items-center gap-2"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
          <div className="text-zinc-400 text-sm text-center sm:text-left w-full sm:w-auto">
            Not affiliated with Mojang Studios
          </div>
        </div>
      </div>
    </footer>
  );
}
