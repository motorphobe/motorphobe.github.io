"use client";

export default function Nav() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    const offset = 80; 
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <nav className="fixed top-0 z-50 w-full bg-black/20 backdrop-blur-lg border-b border-zinc-800">
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16">
          <a href="/" className="text-blue-50 font-bold font-exo2 tracking-[0.1em]">
            R E V E R B
          </a>
          <div className="flex gap-6">
            <a onClick={(e) => handleScroll(e, 'home')} href="#home" className="text-zinc-400 hover:text-[#3E90D6] transition-colors font-[525] cursor-pointer">
              Home
            </a>
            <a onClick={(e) => handleScroll(e, 'features')} href="#features" className="text-zinc-400 hover:text-[#3E90D6] transition-colors font-[525] cursor-pointer">
              Features
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
