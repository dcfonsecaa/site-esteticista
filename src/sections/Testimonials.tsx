import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Mariana Silva',
    role: 'Empresária',
    image: '/facial-mask.jpg',
    rating: 5,
    text: 'A Dra. Helena transformou minha pele completamente. Depois de anos tentando diferentes tratamentos, finalmente encontrei alguém que entendeu exatamente o que eu precisava. O ambiente é incrível e o resultado superou todas as expectativas.',
  },
  {
    name: 'Carolina Mendes',
    role: 'Advogada',
    image: '/spa-massage.jpg',
    rating: 5,
    text: 'Profissionalismo exemplar. A consulta inicial foi super completa, a Dra. explicou cada etapa do tratamento e me deixou super à vontade. Já estou no terceiro mês de acompanhamento e os resultados são visíveis.',
  },
  {
    name: 'Fernanda Lima',
    role: 'Influenciadora Digital',
    image: '/microneedling.jpg',
    rating: 5,
    text: 'Recomendo de olhos fechados! O microagulhamento mudou minha autoestima. A pele ficou mais firme, os poros diminuíram e o brilho natural voltou. O cuidado pós-procedimento também é impecável.',
  },
  {
    name: 'Patrícia Oliveira',
    role: 'Médica',
    image: '/facial-treatment.jpg',
    rating: 5,
    text: 'Como médica, sou exigente com procedimentos estéticos. A Dra. Helena demonstra conhecimento técnico sólido, usa produtos de qualidade e o espaço segue todos os protocolos de biossegurança. Indico para todas as minhas pacientes.',
  },
]

export default function Testimonials() {
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
    <section id="depoimentos" ref={sectionRef} className="py-20 lg:py-32 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gold-50 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-50" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold-50 rounded-full translate-x-1/3 translate-y-1/3 opacity-50" />

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-gold-600 text-sm uppercase tracking-[0.3em] mb-3 font-medium">Depoimentos</p>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-dark-950 mb-6">
            O que dizem <span className="italic text-gold-600">nossas clientes</span>
          </h2>
          <div className="w-20 h-0.5 bg-gold-500 mx-auto mb-6" />
          <p className="text-dark-500 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            A satisfação de nossas pacientes é o nosso maior orgulho.
            Conheça algumas histórias de transformação.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 * index }}
              className="bg-cream-50 rounded-sm p-6 lg:p-8 border border-cream-200 hover:border-gold-200 hover:shadow-lg transition-all duration-300 relative"
            >
              <Quote size={32} className="text-gold-200 mb-4" />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} size={16} className="text-gold-500 fill-gold-500" />
                ))}
              </div>

              <p className="text-dark-600 leading-relaxed mb-6 text-sm lg:text-base">
                "{testimonial.text}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-cream-200">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-serif text-base font-medium text-dark-950">
                    {testimonial.name}
                  </p>
                  <p className="text-dark-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
