export default function ProvaSocial() {
  const stats = [
    {
      title: "+3000",
      description: "clientes atendidos",
    },
    {
      title: "+4 anos",
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
