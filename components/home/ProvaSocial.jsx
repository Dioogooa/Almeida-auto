import { FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function ProvaSocial() {
  const stats = [
    {
      title: "+3000",
      description: "clientes atendidos",
    },
    {
      title: "+5 anos",
      description: "de mercado",
    },
    {
      title: "Referência",
      description: "em multimídia automotiva",
    }
  ];

  return (
    <section className="py-16 bg-muted">
      <div className="max-w-7xl mx-auto px-4">

        {/* Botões de Acesso Rápido */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href="https://wa.me/5562982302156"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold rounded-full transition-all hover:scale-105 shadow-lg active:scale-95 text-lg"
          >
            <FaWhatsapp className="w-6 h-6" />
            Nosso WhatsApp
          </a>
          <a
            href="https://instagram.com/almeida_autoo"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] hover:opacity-90 text-white font-bold rounded-full transition-all hover:scale-105 shadow-lg active:scale-95 text-lg"
          >
            <FaInstagram className="w-6 h-6" />
            Nosso Instagram
          </a>
        </div>

        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
            Sejam bem-vindos à Almeida Auto
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
            Transformando a experiência do seu veículo com a melhor tecnologia em multimídia e acessórios automotivos.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-8 text-center shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-2">
                {stat.title}
              </h3>
              <p className="text-gray-600 font-medium text-sm md:text-base uppercase tracking-wide">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
