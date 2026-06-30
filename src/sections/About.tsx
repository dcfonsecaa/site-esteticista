import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Award, Heart, Sparkles, Shield } from 'lucide-react'

const stats = [
  { number: '12+', label: 'Anos de Experiência' },
  { number: '2.500+', label: 'Clientes Atendidas' },
  { number: '8', label: 'Especializações' },
  { number: '100%', label: 'Satisfação' },
]

const values = [
  {
    icon: Heart,
    title: 'Cuidado Individualizado',
    description: 'Cada paciente recebe um protocolo exclusivo, desenvolvido após análise detalhada da pele e das necessidades específicas.',
  },
  {
    icon: Shield,
    title: 'Segurança e Ética',
    description: 'Todos os procedimentos seguem rigorosos protocolos de biossegurança e são realizados com produtos certificados.',
  },
  {
    icon: Sparkles,
    title: 'Tecnologia de Ponta',
    description: 'Investimento contínuo em equipamentos modernos e técnicas atualizadas para oferecer os melhores resultados.',
  },
  {
    icon: Award,
    title: 'Formação Contínua',
    description: 'Atualização constante através de cursos, congressos e workshops nacionais e internacionais.',
  },
]

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="sobre" ref={sectionRef} className="py-20 lg:py-32 bg-cream-50">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 lg:mb-24"
        >
          <p className="text-gold-600 text-sm uppercase tracking-[0.3em] mb-3 font-medium">Sobre</p>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-dark-950 mb-6">
            Dra. Helena Costa
          </h2>
          <div className="w-20 h-0.5 bg-gold-500 mx-auto mb-6" />
          <p className="text-dark-500 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Especialista em Estética Avançada com mais de 12 anos de experiência,
            dedicada a realçar a beleza natural de cada paciente com procedimentos
            seguros e resultados excepcionais.
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20 lg:mb-28">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-[3/4] rounded-sm overflow-hidden">
              <img
                src="/facial-cleaning.jpg"
                alt="Dra. Helena Costa em atendimento"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-950/30 to-transparent" />
            </div>
            {/* Decorative frame */}
            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-gold-300/40 rounded-sm -z-10" />
            {/* Badge */}
            <div className="absolute -bottom-6 -right-6 bg-white shadow-xl rounded-sm p-5 max-w-[200px]">
              <p className="font-serif text-3xl font-semibold text-gold-600 mb-1">12+</p>
              <p className="text-dark-500 text-sm">Anos de experiência em estética avançada</p>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h3 className="font-serif text-2xl sm:text-3xl font-light text-dark-950 mb-6">
              Comprometida com a <span className="italic text-gold-600">excelência</span>
            </h3>
            <div className="space-y-4 text-dark-500 leading-relaxed mb-8">
              <p>
                Formada em Estética e Cosmetologia pela Universidade de São Paulo,
                com especializações em Dermatofuncional, Laserterapia e Harmonização
                Facial. Minha trajetória é marcada pela busca incessante por
                conhecimento e pela paixão em transformar vidas.
              </p>
              <p>
                Acredito que a verdadeira beleza nasce do equilíbrio entre saúde,
                bem-estar e autoestima. Por isso, cada tratamento é pensado de forma
                única, respeitando a individualidade e os objetivos de cada paciente.
              </p>
              <p>
                Meu espaço foi projetado para oferecer uma experiência sensorial
                completa — desde a recepção acolhedora até o pós-procedimento,
                garantindo conforto, privacidade e resultados que superam expectativas.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                'Pós-Graduação em Estética Avançada',
                'Especialista em Laserterapia',
                'Certificação Internacional em Harmonização',
                'Membro da Sociedade Brasileira de Dermatologia',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold-500 mt-2 shrink-0" />
                  <span className="text-dark-600 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-20 lg:mb-28"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 lg:p-8 bg-white rounded-sm shadow-sm border border-cream-200 hover:shadow-md hover:border-gold-200 transition-all duration-300"
            >
              <p className="font-serif text-3xl lg:text-4xl font-semibold text-gold-600 mb-2">
                {stat.number}
              </p>
              <p className="text-dark-500 text-sm">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="font-serif text-2xl sm:text-3xl font-light text-dark-950 text-center mb-12">
            Nossos <span className="italic text-gold-600">Valores</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="group p-6 bg-white rounded-sm border border-cream-200 hover:border-gold-300 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-gold-50 flex items-center justify-center mb-4 group-hover:bg-gold-500 transition-colors duration-300">
                  <value.icon size={22} className="text-gold-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h4 className="font-serif text-lg font-medium text-dark-950 mb-2">
                  {value.title}
                </h4>
                <p className="text-dark-500 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
