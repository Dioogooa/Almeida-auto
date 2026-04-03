"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const servicos = [
  {
    id: "multimidia",
    titulo: "Multimídia Automotiva",
    descricao: "Instalação de centrais multimídia de última geração, integração com Apple CarPlay e Android Auto, câmeras de ré e sistemas de som premium.",
    imagem: "/servicos/multimidia.jpg",
    video: "/servicos/multimidia.mp4",
  },
  {
    id: "acessorios",
    titulo: "Acessórios e Películas",
    descricao: "Aplicação de insulfilm, fitas de led, sistema de som, alarmes e outros acessórios para segurança e personalização.",
    imagem: "/servicos/acessorios.jpg",
    video: "/servicos/acessorios.mp4",
  },
  {
    id: "estetica",
    titulo: "Estética Automotiva",
    descricao: "Polimento técnico, cristalização, vitrificação de pintura e higienização interna completa para manter seu carro como zero.",
    imagem: "/servicos/estetica.jpg",
    video: "/servicos/estetica1.mp4",
  }
];

export default function SecaoInterativa() {
  const [ativo, setAtivo] = useState(servicos[0]);

  return (
    <section className="py-24 bg-white" id="servicos">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nossos Serviços</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Oferecemos uma linha completa de soluções para modernizar, proteger e cuidar
            do seu veículo com a máxima qualidade.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Coluna Esquerda: Lista de Serviços */}
          <div className="flex flex-col gap-4">
            {servicos.map((servico) => (
              <button
                key={servico.id}
                onClick={() => setAtivo(servico)}
                className={`text-left p-6 rounded-2xl border transition-all duration-300 ${ativo.id === servico.id
                  ? "border-primary bg-primary/5 shadow-md"
                  : "border-gray-200 bg-white hover:border-primary/30"
                  }`}
              >
                <h3 className={`text-2xl font-bold mb-2 ${ativo.id === servico.id ? "text-primary" : "text-gray-800"}`}>
                  {servico.titulo}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {servico.descricao}
                </p>
                <div
                  className={`inline-flex items-center gap-1 font-semibold transition-colors ${ativo.id === servico.id ? "text-primary" : "text-gray-400"
                    }`}
                >
                  Saber mais <ChevronRight size={18} />
                </div>
              </button>
            ))}
            <div className="mt-4">
              <Link
                href="/servicos"
                className="inline-block bg-secondary text-white font-semibold py-4 px-8 rounded-full hover:bg-gray-800 transition-colors"
              >
                Ver todos os detalhes
              </Link>
            </div>
          </div>

          {/* Coluna Direita: Imagem Dinâmica */}
          <div className="relative aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden shadow-xl bg-gray-100">
            <AnimatePresence mode="wait">
              <motion.div
                key={ativo.id}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                {ativo.video ? (
                  <video
                    src={ativo.video}
                    poster={ativo.imagem}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                ) : (
                  <Image
                    src={ativo.imagem}
                    alt={ativo.titulo}
                    fill
                    className="object-cover"
                  />
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
