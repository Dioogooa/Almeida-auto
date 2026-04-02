export default function CtaWhatsApp() {
  return (
    <section className="bg-primary py-20 relative overflow-hidden">
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-white opacity-10 pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
          Pronto para transformar seu carro?
        </h2>
        <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto">
          Faça um orçamento sem compromisso e descubra as melhores opções de mídia e estética para o seu veículo.
        </p>
        <a
          href="https://wa.me/55SEUNUMERO?text=Olá! Quero fazer um orçamento sem compromisso"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-black font-bold py-4 px-10 rounded-full hover:bg-gray-100 hover:scale-105 transition-all shadow-lg"
        >
          Chamar no WhatsApp
        </a>
      </div>
    </section>
  );
}
