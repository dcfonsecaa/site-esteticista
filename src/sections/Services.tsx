import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Sparkles, Droplets, Sun, Leaf, Zap, Eye, Heart, Scissors } from 'lucide-react'

const services = [
  {
    icon: Sparkles,
    title: 'Limpeza de Pele Profunda',
    description: 'Protocolo completo de limpeza com extração, peeling enzimático e máscara calmante. Ideal para peles oleosas e com acne.',
    duration: '60 min',
    price: 'R$ 180',
  },
  {
    icon: Droplets,
    title: 'Hidratação Facial Intensiva',
    description: 'Tratamento com ácido hialurônico, vitaminas e peptídeos para reposição de água e luminosidade imediata.',
    duration: '50 min',
    price: 'R$ 220',
  },
  {
    icon: Zap,
    title: 'Microagulhamento (Dermapen)',
    description: 'Estimulação de colágeno através de microperfurações controladas. Excelente para rugas, cicatrizes e poros dilatados.',
    duration: '45 min',
    price: 'R$ 350',
  },
  {
    icon: Sun,
    title: 'Peeling Químico',
    description: 'Renovação celular com ácidos específicos para cada tipo de pele. Tratamento de manchas, melasma e fotoenvelhecimento.',
    duration: '40 min',
    price: 'R$ 280',
  },
  {
    icon: Eye,
    title: 'Tratamento para Olheiras',
    description: 'Protocolo exclusivo com vitaminas, ácido hialurônico e tecnologia LED para redução de olheiras e bolsas.',
    duration: '30 min',
    price: 'R$ 200',
  },
  {
    icon: Leaf,
    title: 'Drenagem Linfática Facial',
    description: 'Massagem manual com movimentos específicos para reduzir inchaço, melhorar a circulação e definir o contorno facial.',
    duration: '40 min',
    price: 'R$ 160',
  },
  {
    icon: Heart,
    title: 'Radiofrequência Facial',
    description: 'Tecnologia que aquece as camadas profundas da pele, estimulando colágeno e elastina para firmeza e rejuvenescimento.',
    duration: '50 min',
    price: 'R$ 300',
  },
  {
    icon: Scissors,
    title: 'Design de Sobrancelhas',
    description: 'Análise facial completa, design com linha de precisão, henna e finalização com produtos de alta performance.',
    duration: '40 min',
    price: 'R$ 120',
  },
]

export default function Services() {
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
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="tratamentos" ref={sectionRef} className="py-20 lg:py-32 bg-white">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-gold-600 text-sm uppercase tracking-[0.3em] mb-3 font-medium">Tratamentos</p>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-dark-950 mb-6">
            Nossos <span className="italic text-gold-600">Serviços</span>
          </h2>
          <div className="w-20 h-0.5 bg-gold-500 mx-auto mb-6" />
          <p className="text-dark-500 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Protocolos exclusivos desenvolvidos com base científica e tecnologia de ponta
            para resultados visíveis e duradouros.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="group relative bg-cream-50 rounded-sm overflow-hidden border border-cream-200 hover:border-gold-300 hover:shadow-xl transition-all duration-500"
            >
              {/* Top accent */}
              <div className="h-1 bg-gradient-to-r from-gold-400 to-gold-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

              <div className="p-6">
                <div className="w-12 h-12 rounded-full bg-gold-50 flex items-center justify-center mb-4 group-hover:bg-gold-500 transition-colors duration-300">
                  <service.icon size={22} className="text-gold-600 group-hover:text-white transition-colors duration-300" />
                </div>

                <h3 className="font-serif text-lg font-medium text-dark-950 mb-2 group-hover:text-gold-700 transition-colors">
                  {service.title}
                </h3>

                <p className="text-dark-500 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-cream-200">
                  <span className="text-dark-400 text-xs">{service.duration}</span>
                  <span className="font-serif text-lg font-semibold text-gold-600">{service.price}</span>
                </div>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gold-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-dark-400 text-sm mb-4">
            * Valores sujeitos a alteração. Consulte pacotes promocionais.
          </p>
          <a
            href="https://wa.me/5511999999999?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20tratamentos."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Agendar Avaliação
          </a>
        </motion.div>
      </div>
    </section>
  )
}
