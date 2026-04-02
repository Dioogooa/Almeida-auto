import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";

const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export const metadata = {
  title: "Almeida Auto | Multimídia e Estética Automotiva",
  description: "Transforme seu carro com tecnologia e estilo. Referência em multimídia automotiva, acessórios e estética com mais de 4 anos de mercado.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={`${inter.className} scroll-smooth`}>
      <body className="min-h-screen flex flex-col pt-20">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
