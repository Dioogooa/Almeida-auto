import { FaWhatsapp } from "react-icons/fa";

export default function CtaWhatsApp() {
  return (
    <section className="bg-primary py-20 relative overflow-hidden">
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-white opacity-10 pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
          Pronto para transformar seu carro?
        </h2>
        <p className="text-base md:text-lg text-white/90 mb-8 md:mb-10 max-w-2xl mx-auto">
          Faça um orçamento sem compromisso e descubra as melhores condições de multimídia, acessórios e estética para o seu veículo.
        </p>
        <a
          href="https://wa.me/5562982302156"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 bg-white text-black font-bold py-4 px-10 rounded-full hover:bg-gray-100 hover:scale-105 transition-all shadow-lg"
        >
          <FaWhatsapp className="w-6 h-6 text-[#25D366]" />
          Chamar no WhatsApp
        </a>
      </div>
    </section>
  );
}
