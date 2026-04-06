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
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Sejam bem-vindos à Almeida Auto
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Transformando a experiência do seu veículo com a melhor tecnologia em multimídia e acessórios automotivos.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-8 text-center shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <h3 className="text-4xl md:text-5xl font-bold text-primary mb-2">
                {stat.title}
              </h3>
              <p className="text-gray-600 font-medium text-lg uppercase tracking-wide">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
