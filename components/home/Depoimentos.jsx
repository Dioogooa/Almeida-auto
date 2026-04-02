import { Star } from "lucide-react";

export default function Depoimentos() {
  const depoimentos = [
    {
      nome: "Carlos Eduardo",
      carro: "Jeep Compass",
      texto: "Instalei a central multimídia com eles e ficou perfeito. Acabamento impecável e o atendimento foi nota 10. Recomendo muito!",
      foto: "/depoimentos/carlos.jpg"
    },
    {
      nome: "Mariana Silva",
      carro: "Honda Civic",
      texto: "Fiz o polimento e cristalização. Meu carro saiu parecendo que acabou de sair da concessionária. Serviço excepcional.",
      foto: "/depoimentos/mariana.jpg"
    },
    {
      nome: "Roberto Alves",
      carro: "Toyota Corolla",
      texto: "Coloquei insulfilm antivandalismo e câmera de ré. Muito rápidos e profissionais. Melhor loja da região com certeza.",
      foto: "/depoimentos/roberto.jpg"
    }
  ];

  return (
    <section className="py-24 bg-muted">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">O que dizem nossos clientes</h2>
          <p className="text-gray-600">A satisfação de quem já transformou seu carro com a gente.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {depoimentos.map((depoimento, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex gap-1 text-yellow-400 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} fill="currentColor" />
                ))}
              </div>
              <p className="text-gray-700 mb-8 italic">"{depoimento.texto}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden flex-shrink-0">
                  <span className="text-gray-500 font-bold">{depoimento.nome.charAt(0)}</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{depoimento.nome}</h4>
                  <p className="text-sm text-gray-500">{depoimento.carro}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
