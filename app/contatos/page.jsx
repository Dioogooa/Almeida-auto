"use client";

import Link from "next/link";
import { FaWhatsapp, FaInstagram, FaWaze, FaMapMarkerAlt, FaEnvelope, FaArrowLeft } from "react-icons/fa";

export default function Contatos() {
  const contatos = [
    {
      nome: "WhatsApp Loja",
      desc: "Atendimento geral e orçamentos.",
      icone: <FaWhatsapp className="w-5 h-5 text-green-500" />,
      url: "https://wa.me/5562982302156",
      cor: "hover:border-green-500 hover:shadow-green-500/10"
    },
    {
      nome: "Vendedor Rafael",
      desc: "Fale direto com o Rafael para negócios.",
      icone: <FaWhatsapp className="w-5 h-5 text-emerald-600" />,
      url: "https://wa.me/5562985405383",
      cor: "hover:border-emerald-600 hover:shadow-emerald-600/10"
    },
    {
      nome: "Instagram",
      desc: "Siga-nos e veja nossos últimos projetos.",
      icone: <FaInstagram className="w-5 h-5 text-pink-600" />,
      url: "https://instagram.com/almeida_autoo",
      cor: "hover:border-pink-600 hover:shadow-pink-600/10"
    },
    {
      nome: "Como chegar (Waze)",
      desc: "Traçar rota rápida pelo Waze.",
      icone: <FaWaze className="w-5 h-5 text-blue-500" />,
      url: "https://ul.waze.com/ul?place=ChIJ1UpviiDxXpMReN0xXT-174k&ll=-16.72239100%2C-49.26058170&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location",
      cor: "hover:border-blue-500 hover:shadow-blue-500/10"
    },
    {
      nome: "Como chegar (Google Maps)",
      desc: "Traçar rota pelo Google Maps.",
      icone: <FaMapMarkerAlt className="w-5 h-5 text-red-500" />,
      url: "https://maps.app.goo.gl/SyLRC1T9BUcr37dr8",
      cor: "hover:border-red-500 hover:shadow-red-500/10"
    },
    {
      nome: "E-mail",
      desc: "Envie-nos um e-mail diretamente.",
      icone: <FaEnvelope className="w-5 h-5 text-gray-700" />,
      url: "mailto:contato@almeidaauto.com.br", // Altere se o email for diferente
      cor: "hover:border-gray-700 hover:shadow-gray-700/10"
    }
  ];

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col py-10 px-4 sm:px-6 lg:px-8">
      {/* Botão Voltar Superior (Apenas Seta) */}
      <div className="max-w-3xl mx-auto w-full mb-6">
        <Link
          href="/"
          className="inline-flex items-center justify-center text-gray-500 hover:text-gray-900 transition-colors bg-white w-10 h-10 rounded-full shadow-sm border border-gray-100 hover:shadow-md"
        >
          <FaArrowLeft className="w-4 h-4" />
        </Link>
      </div>

      {/* Conteúdo Principal */}
      <div className="max-w-3xl mx-auto w-full">
        <div className="mb-10 text-left sm:text-center">
          <h1 className="text-3xl md:text-3xl font-bold text-gray-900 tracking-tight">
            Nossos Contatos
          </h1>
          <p className="text-base text-gray-600 mt-2 max-w-xl sm:mx-auto">
            Escolha o melhor canal de comunicação para falar com a gente ou traçar a rota para nossa loja!
          </p>
        </div>

        {/* Grid de Contatos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {contatos.map((contato, index) => (
            <a
              key={index}
              href={contato.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`bg-white rounded-xl p-4 shadow-sm border border-gray-100 transition-all duration-300 w-full flex items-center gap-4 ${contato.cor} hover:-translate-y-0.5 group`}
            >
              <div className="bg-gray-50 p-3 rounded-lg group-hover:bg-white transition-colors duration-300">
                {contato.icone}
              </div>
              <div>
                <h3 className="text-base font-bold text-gray-900">{contato.nome}</h3>
                <p className="text-sm text-gray-500 mt-0.5">{contato.desc}</p>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Botão Voltar Inferior */}
      <div className="max-w-3xl mx-auto w-full mt-10 flex justify-center sm:justify-start">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors bg-white px-5 py-2.5 rounded-xl shadow-sm border border-gray-200 hover:shadow-md font-medium text-sm"
        >
          <FaArrowLeft className="w-4 h-4" />
          Voltar para a Página Inicial
        </Link>
      </div>
    </main>
  );
}
