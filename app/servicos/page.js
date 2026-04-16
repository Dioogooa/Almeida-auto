import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, MonitorPlay, Wrench, Sparkles } from "lucide-react";

export const metadata = {
  title: "Nossos Serviços | Almeida Auto",
  description: "Conheça todos os serviços de multimídia, acessórios e estética automotiva oferecidos pela Almeida Auto.",
};

const multimidias = [
  {
    nome: "Multimídias universais (9\" e 10\")",
    descricao: "Compatível com a grande maioria dos veículos, oferecendo tecnologia de ponta, CarPlay, Android Auto e ampla conectividade."
  },
  {
    nome: "Multimídias específicas (BMW, Mercedes, Porsche)",
    descricao: "Centrais projetadas sob medida, mantendo 100% a originalidade do painel e as funções de fábrica do seu veículo premium."
  },
  {
    nome: "Multimídia Dualscreen (tela panorâmica)",
    descricao: "Uma experiência visual panorâmica incrível com sistema de tela dupla, unindo painel de instrumentos e central de entretenimento."
  },
  {
    nome: "Multimídia Estilo Tesla (9.7\")",
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
    <div className="min-h-screen bg-gray-50/50 py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header da Página de Serviços */}
        <div className="flex flex-col items-center justify-center mb-20 space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-700">
          <Image 
            src="/logo.png" 
            alt="Almeida Auto" 
            width={280} 
            height={80} 
            className="h-16 md:h-20 w-auto object-contain drop-shadow-md"
            priority
          />
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground text-center tracking-tight">
            Nossos Serviços
          </h1>
          <div className="w-24 h-1.5 bg-primary rounded-full"></div>
        </div>

        <div className="space-y-24">
          
          {/* Seção Multimídias */}
          <section className="scroll-mt-24">
            <div className="flex items-center gap-4 mb-10 border-b border-border pb-4">
              <div className="p-3 bg-primary/10 rounded-2xl text-primary">
                <MonitorPlay size={32} strokeWidth={2} />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground uppercase">
                Multimídias
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {multimidias.map((item, index) => (
                <div 
                  key={index} 
                  className="bg-background border border-border rounded-3xl p-8 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 group"
                >
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {item.nome}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.descricao}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Seção Acessórios */}
          <section className="scroll-mt-24">
            <div className="flex items-center gap-4 mb-10 border-b border-border pb-4">
              <div className="p-3 bg-primary/10 rounded-2xl text-primary">
                <Wrench size={32} strokeWidth={2} />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground uppercase">
                Acessórios
              </h2>
            </div>
            
            <div className="bg-background border border-border rounded-3xl p-8 shadow-sm">
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-8">
                {acessorios.map((item, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                    <span className="text-lg font-medium text-foreground/90">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Seção Estética Automotiva */}
          <section className="scroll-mt-24">
            <div className="flex items-center gap-4 mb-10 border-b border-border pb-4">
              <div className="p-3 bg-primary/10 rounded-2xl text-primary">
                <Sparkles size={32} strokeWidth={2} />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground uppercase">
                Estética Automotiva
              </h2>
            </div>
            
            <div className="bg-background border border-border rounded-3xl p-8 shadow-sm">
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-8">
                {estetica.map((item, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                    <span className="text-lg font-medium text-foreground/90">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

        </div>

        {/* Back Button */}
        <div className="mt-24 mb-12 flex justify-center">
          <Link 
            href="/" 
            className="inline-flex items-center justify-center bg-secondary hover:bg-secondary/90 text-white font-semibold py-4 px-8 rounded-full transition-all shadow-md hover:shadow-lg transform hover:-translate-y-1"
          >
            <ArrowLeft className="mr-2 w-5 h-5" />
            Voltar para a página inicial
          </Link>
        </div>

      </div>
    </div>
  );
}
