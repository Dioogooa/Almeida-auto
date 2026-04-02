import { MapPin, Clock } from "lucide-react";

export default function Localizacao() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Venha nos conhecer</h2>
          <p className="text-gray-600">Nossa loja está de portas abertas para receber seu veículo.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="col-span-1 bg-gray-50 p-8 rounded-3xl flex flex-col justify-center">
            <div className="mb-8">
              <div className="flex items-center gap-3 text-primary mb-3">
                <MapPin size={24} />
                <h3 className="text-xl font-bold text-gray-900">Endereço</h3>
              </div>
              <p className="text-gray-600 pl-9">
                Rua Placeholder das Flores, 123<br />
                Bairro Automotivo<br />
                Cidade - Estado, 00000-000
              </p>
            </div>

            <div>
              <div className="flex items-center gap-3 text-primary mb-3">
                <Clock size={24} />
                <h3 className="text-xl font-bold text-gray-900">Horário de Funcionamento</h3>
              </div>
              <ul className="text-gray-600 pl-9 space-y-2">
                <li><span className="font-medium text-gray-900">Seg - Sex:</span> 9h às 18h</li>
                <li><span className="font-medium text-gray-900">Sábado:</span> 9h às 13h</li>
                <li><span className="font-medium text-gray-900">Domingo:</span> Fechado</li>
              </ul>
            </div>
          </div>

          <div className="col-span-1 lg:col-span-2 h-[400px] bg-gray-200 rounded-3xl overflow-hidden relative">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14620.316086782488!2d-46.6669926875704!3d-23.63731872134062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5a00a297e68b%3A0xb3de4ce992e59e54!2sAeroporto%20de%20S%C3%A3o%20Paulo!5e0!3m2!1spt-BR!2sbr!4v1714578502390!5m2!1spt-BR!2sbr" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
