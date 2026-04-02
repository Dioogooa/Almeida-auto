import Link from "next/link";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-secondary text-white pt-16 pb-8" id="contato">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <div className="col-span-1 md:col-span-2">
          <Link href="/" className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center text-white font-bold text-xs">
              AA
            </div>
            <span className="font-bold text-xl tracking-tight text-white">Almeida Auto</span>
          </Link>
          <p className="text-gray-400 max-w-sm">
            Especialistas em transformar o seu veículo com tecnologia, estilo e o melhor cuidado estético.
          </p>
        </div>

        <div>
          <h4 className="font-bold mb-6 text-lg">Links Rápidos</h4>
          <ul className="space-y-4 text-gray-400">
            <li><Link href="/servicos" className="hover:text-primary transition-colors">Nossos Serviços</Link></li>
            <li><Link href="#contato" className="hover:text-primary transition-colors">Contato</Link></li>
            <li>
              <a
                href="https://wa.me/55SEUNUMERO?text=Olá! Quero transformar meu carro"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors flex items-center gap-2"
              >
                <FaWhatsapp className="w-5 h-5" />
                Chamar no WhatsApp
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6 text-lg">Redes Sociais</h4>
          <ul className="space-y-4 text-gray-400">
            <li>
              <a
                href="https://instagram.com/SEUINSTA"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors flex items-center gap-2"
              >
                <FaInstagram className="w-5 h-5" />
                @loja
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/55SEUNUMERO?text=Olá! Quero transformar meu carro"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors flex items-center gap-2"
              >
                <FaWhatsapp className="w-5 h-5" />
                WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
        <p>&copy; {new Date().getFullYear()} Almeida Auto. Todos os direitos reservados.</p>
        <p className="mt-2 md:mt-0">Desenvolvido com excelência.</p>
      </div>
    </footer>
  );
}