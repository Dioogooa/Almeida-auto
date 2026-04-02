import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-muted">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          {/* Logo */}
          <div className="w-10 h-10 bg-primary/20 rounded-md flex items-center justify-center text-primary font-bold">
            AA
          </div>
          <span className="font-bold text-xl tracking-tight text-primary">Almeida Auto</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-8 font-medium">
          <Link href="/" className="hover:text-primary transition-colors text-foreground">Home</Link>
          <Link href="/servicos" className="hover:text-primary transition-colors text-foreground">Serviços</Link>
          <Link href="#contato" className="hover:text-primary transition-colors text-foreground">Contato</Link>
        </nav>

        {/* Menu mobile */}
        <button className="md:hidden p-2 text-foreground">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
        </button>
      </div>
    </header>
  );
}
