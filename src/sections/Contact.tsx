import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react'

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simula envio - em produção, integrar com Supabase ou serviço de email
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: '', email: '', phone: '', service: '', message: '' })
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Endereço',
      lines: ['Rua das Flores, 123 — Jardim Europa', 'São Paulo, SP — 01454-000'],
    },
    {
      icon: Phone,
      title: 'Telefone',
      lines: ['(11) 99999-9999', 'WhatsApp disponível'],
      link: 'https://wa.me/5511999999999',
    },
    {
      icon: Mail,
      title: 'E-mail',
      lines: ['contato@helenacosta.com.br'],
      link: 'mailto:contato@helenacosta.com.br',
    },
    {
      icon: Clock,
      title: 'Horário',
      lines: ['Segunda a Sexta: 9h às 19h', 'Sábado: 9h às 14h'],
    },
  ]

  return (
    <section id="contato" ref={sectionRef} className="py-20 lg:py-32 bg-cream-50">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-gold-600 text-sm uppercase tracking-[0.3em] mb-3 font-medium">Contato</p>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-dark-950 mb-6">
            Agende sua <span className="italic text-gold-600">Consulta</span>
          </h2>
          <div className="w-20 h-0.5 bg-gold-500 mx-auto mb-6" />
          <p className="text-dark-500 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Entre em contato para agendar uma avaliação personalizada.
            Estamos prontos para cuidar de você.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-2 space-y-6"
          >
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-5 bg-white rounded-sm border border-cream-200 hover:border-gold-200 hover:shadow-md transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-full bg-gold-50 flex items-center justify-center shrink-0">
                  <info.icon size={20} className="text-gold-600" />
                </div>
                <div>
                  <h4 className="font-serif text-base font-medium text-dark-950 mb-1">
                    {info.title}
                  </h4>
                  {info.lines.map((line, i) => (
                    info.link ? (
                      <a
                        key={i}
                        href={info.link}
                        className="text-dark-500 text-sm hover:text-gold-600 transition-colors block"
                      >
                        {line}
                      </a>
                    ) : (
                      <p key={i} className="text-dark-500 text-sm">
                        {line}
                      </p>
                    )
                  ))}
                </div>
              </div>
            ))}

            {/* Map placeholder */}
            <div className="rounded-sm overflow-hidden border border-cream-200 h-48 bg-cream-100 flex items-center justify-center">
              <div className="text-center">
                <MapPin size={32} className="text-gold-300 mx-auto mb-2" />
                <p className="text-dark-400 text-sm">Mapa de localização</p>
                <p className="text-dark-300 text-xs mt-1">Rua das Flores, 123 — Jardim Europa</p>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <div className="bg-white rounded-sm p-6 lg:p-10 border border-cream-200 shadow-sm">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <CheckCircle size={56} className="text-green-500 mb-4" />
                  <h3 className="font-serif text-2xl text-dark-950 mb-2">Mensagem Enviada!</h3>
                  <p className="text-dark-500 text-sm">Entraremos em contato em breve.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-dark-600 text-sm font-medium mb-2">
                        Nome completo
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-cream-50 border border-cream-200 rounded-sm text-dark-800 text-sm focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400 transition-all"
                        placeholder="Seu nome"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-dark-600 text-sm font-medium mb-2">
                        E-mail
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-cream-50 border border-cream-200 rounded-sm text-dark-800 text-sm focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400 transition-all"
                        placeholder="seu@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="phone" className="block text-dark-600 text-sm font-medium mb-2">
                        Telefone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-cream-50 border border-cream-200 rounded-sm text-dark-800 text-sm focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400 transition-all"
                        placeholder="(11) 99999-9999"
                      />
                    </div>
                    <div>
                      <label htmlFor="service" className="block text-dark-600 text-sm font-medium mb-2">
                        Tratamento de interesse
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-cream-50 border border-cream-200 rounded-sm text-dark-800 text-sm focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400 transition-all appearance-none"
                      >
                        <option value="">Selecione um tratamento</option>
                        <option value="limpeza">Limpeza de Pele Profunda</option>
                        <option value="hidratacao">Hidratação Facial Intensiva</option>
                        <option value="microagulhamento">Microagulhamento</option>
                        <option value="peeling">Peeling Químico</option>
                        <option value="olheiras">Tratamento para Olheiras</option>
                        <option value="drenagem">Drenagem Linfática Facial</option>
                        <option value="radiofrequencia">Radiofrequência Facial</option>
                        <option value="sobrancelhas">Design de Sobrancelhas</option>
                        <option value="outro">Outro / Avaliação</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-dark-600 text-sm font-medium mb-2">
                      Mensagem (opcional)
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 bg-cream-50 border border-cream-200 rounded-sm text-dark-800 text-sm focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400 transition-all resize-none"
                      placeholder="Conte um pouco sobre o que você procura..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-primary w-full gap-2"
                  >
                    <Send size={16} />
                    Enviar Mensagem
                  </button>

                  <p className="text-dark-400 text-xs text-center">
                    Ou fale diretamente pelo{' '}
                    <a
                      href="https://wa.me/5511999999999?text=Olá!%20Gostaria%20de%20agendar%20uma%20consulta."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gold-600 hover:underline"
                    >
                      WhatsApp
                    </a>
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
