import Link from "next/link";
import { ArrowLeft, CheckCircle2, MonitorPlay, Wrench, Sparkles } from "lucide-react";

export const metadata = {
  title: "Nossos Serviços | Almeida Auto",
  description: "Conheça todos os serviços de multimídia, acessórios e estética automotiva oferecidos pela Almeida Auto.",
};

const multimidias = [
  {
    nome: "Multimídias universais",
    tipo: "9\" e 10\"",
    descricao: "Compatível com a grande maioria dos veículos, oferecendo tecnologia de ponta, CarPlay, Android Auto e ampla conectividade."
  },
  {
    nome: "Multimídias específicas",
    tipo: "BMW, Mercedes, Porsche",
    descricao: "Centrais projetadas sob medida, mantendo 100% a originalidade do painel e as funções de fábrica do seu veículo premium."
  },
  {
    nome: "Multimídia Dualscreen",
    tipo: "tela panorâmica",
    descricao: "Uma experiência visual panorâmica incrível com sistema de tela dupla, unindo painel de instrumentos e central de entretenimento."
  },
  {
    nome: "Multimídia Estilo Tesla",
    tipo: "9.7\"",
    descricao: "Design vertical imponente e moderno, permitindo o controle de diversas funções do carro diretamente na tela gigante."
  }
];

const acessorios = [
  "Películas com retenção de calor",
  "Sonorização interna",
  "Pintura de roda e pinças",
  "LED interno RGB",
  "Farol de LED",
  "Martelinho de ouro",
  "Instalação de câmera de ré e desbloqueio",
  "Proteção de pintura PPF",
  "Instalação de revestimento premium",
  "Frisos laterais"
];

const estetica = [
  "Polimento",
  "Vitrificação de pintura",
  "Descontaminação de pintura",
  "Lavagem detalhada",
  "Higienização interna",
  "Limpeza de motor",
  "Oxizanitização"
];

export default function ServicosPage() {
  return (
    <div className="min-h-screen bg-gray-50/50 py-12 md:py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header da Página de Serviços */}
        <div className="flex flex-col items-center justify-center mb-16 animate-in fade-in slide-in-from-bottom-8 duration-700 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Nossos Serviços
          </h1>
          <div className="w-12 h-1 bg-primary rounded-full mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A maior variedade de multimídias do mercado.
          </p>
        </div>

        <div className="space-y-16 md:space-y-20">
          
          {/* Seção Multimídias */}
          <section className="scroll-mt-24">
            <div className="flex items-center gap-3 mb-8 border-b border-border pb-3">
              <div className="text-primary">
                <MonitorPlay size={24} strokeWidth={2} />
              </div>
              <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-foreground uppercase">
                Multimídias
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
              {multimidias.map((item, index) => (
                <div 
                  key={index} 
                  className="bg-background border border-border rounded-2xl p-6 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 group"
                >
                  <h3 className="text-lg font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                    {item.nome}
                  </h3>
                  <span className="block text-sm text-muted-foreground mb-3 font-medium">
                    {item.tipo}
                  </span>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.descricao}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Seção Acessórios */}
          <section className="scroll-mt-24">
            <div className="flex items-center gap-3 mb-8 border-b border-border pb-3">
              <div className="text-primary">
                <Wrench size={24} strokeWidth={2} />
              </div>
              <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-foreground uppercase">
                Acessórios
              </h2>
            </div>
            
            <div className="bg-background border border-border rounded-2xl p-6 shadow-sm">
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-5 gap-x-8">
                {acessorios.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-base text-foreground/90">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Seção Estética Automotiva */}
          <section className="scroll-mt-24">
            <div className="flex items-center gap-3 mb-8 border-b border-border pb-3">
              <div className="text-primary">
                <Sparkles size={24} strokeWidth={2} />
              </div>
              <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-foreground uppercase">
                Estética Automotiva
              </h2>
            </div>
            
            <div className="bg-background border border-border rounded-2xl p-6 shadow-sm">
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-5 gap-x-8">
                {estetica.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-base text-foreground/90">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

        </div>

        {/* Back Button */}
        <div className="mt-20 mb-8 flex justify-center">
          <Link 
            href="/" 
            className="inline-flex items-center justify-center bg-secondary hover:bg-secondary/90 text-white text-sm font-semibold py-3 px-6 rounded-full transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
          >
            <ArrowLeft className="mr-2 w-4 h-4" />
            Voltar para a página inicial
          </Link>
        </div>

      </div>
    </div>
  );
}
