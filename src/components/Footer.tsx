import { Instagram, MapPin, Phone, Mail, Clock } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-dark-950 text-white">
      <div className="container-custom py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-full bg-gold-500 flex items-center justify-center">
                <span className="font-serif text-white text-lg font-semibold">H</span>
              </div>
              <div>
                <h3 className="font-serif text-xl font-semibold">Dra. Helena Costa</h3>
                <p className="text-[10px] text-gold-400 uppercase tracking-[0.2em]">Estética Premium</p>
              </div>
            </div>
            <p className="text-dark-300 text-sm leading-relaxed mb-6">
              Transformando vidas através da ciência da beleza. Cuidado, sofisticação e resultados que você merece.
            </p>
            <div className="flex gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-dark-700 flex items-center justify-center text-dark-400 hover:bg-gold-500 hover:border-gold-500 hover:text-white transition-all duration-300"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-medium mb-5 text-gold-400">Links Rápidos</h4>
            <ul className="space-y-3">
              {[
                { label: 'Início', href: '#inicio' },
                { label: 'Sobre', href: '#sobre' },
                { label: 'Tratamentos', href: '#tratamentos' },
                { label: 'Galeria', href: '#galeria' },
                { label: 'Contato', href: '#contato' },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-dark-300 text-sm hover:text-gold-400 transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg font-medium mb-5 text-gold-400">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-gold-500 mt-0.5 shrink-0" />
                <span className="text-dark-300 text-sm">
                  Rua das Flores, 123 — Jardim Europa<br />
                  São Paulo, SP — 01454-000
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-gold-500 shrink-0" />
                <a href="https://wa.me/5511999999999" className="text-dark-300 text-sm hover:text-gold-400 transition-colors">
                  (11) 99999-9999
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-gold-500 shrink-0" />
                <a href="mailto:contato@helenacosta.com.br" className="text-dark-300 text-sm hover:text-gold-400 transition-colors">
                  contato@helenacosta.com.br
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-serif text-lg font-medium mb-5 text-gold-400">Horário de Funcionamento</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Clock size={18} className="text-gold-500 mt-0.5 shrink-0" />
                <div className="text-dark-300 text-sm">
                  <p>Segunda a Sexta: 9h às 19h</p>
                  <p>Sábado: 9h às 14h</p>
                  <p className="text-gold-500 mt-1">Domingo: Fechado</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-dark-800">
        <div className="container-custom py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-dark-500 text-xs text-center md:text-left">
            © 2024 Dra. Helena Costa. Todos os direitos reservados.
          </p>
          <p className="text-dark-600 text-xs">
            Desenvolvido com cuidado e dedicação
          </p>
        </div>
      </div>
    </footer>
  )
}
