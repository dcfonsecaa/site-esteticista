import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

const galleryImages = [
  { src: '/clinic-interior.jpg', alt: 'Recepção da clínica', category: 'Ambiente' },
  { src: '/facial-treatment.jpg', alt: 'Tratamento facial', category: 'Tratamentos' },
  { src: '/salon-interior.jpg', alt: 'Sala de atendimento', category: 'Ambiente' },
  { src: '/microneedling.jpg', alt: 'Microagulhamento', category: 'Tratamentos' },
  { src: '/treatment-room.jpg', alt: 'Sala de tratamento', category: 'Ambiente' },
  { src: '/spa-mask.jpg', alt: 'Máscara facial', category: 'Tratamentos' },
  { src: '/facial-mask.jpg', alt: 'Aplicação de máscara', category: 'Tratamentos' },
  { src: '/spa-massage.jpg', alt: 'Massagem facial', category: 'Tratamentos' },
]

const categories = ['Todos', 'Ambiente', 'Tratamentos']

export default function Gallery() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [activeCategory, setActiveCategory] = useState('Todos')
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const filteredImages = activeCategory === 'Todos'
    ? galleryImages
    : galleryImages.filter((img) => img.category === activeCategory)

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

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return
      if (e.key === 'Escape') setLightboxIndex(null)
      if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : filteredImages.length - 1))
      }
      if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) => (prev !== null && prev < filteredImages.length - 1 ? prev + 1 : 0))
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [lightboxIndex, filteredImages.length])

  return (
    <section id="galeria" ref={sectionRef} className="py-20 lg:py-32 bg-cream-50">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <p className="text-gold-600 text-sm uppercase tracking-[0.3em] mb-3 font-medium">Galeria</p>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-dark-950 mb-6">
            Nosso <span className="italic text-gold-600">Espaço</span>
          </h2>
          <div className="w-20 h-0.5 bg-gold-500 mx-auto mb-6" />
          <p className="text-dark-500 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Um ambiente pensado para o seu conforto e bem-estar, com tecnologia de ponta
            e uma atmosfera acolhedora.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center gap-3 mb-10"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 text-sm font-medium rounded-sm transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-gold-500 text-white shadow-md'
                  : 'bg-white text-dark-500 border border-cream-200 hover:border-gold-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div layout className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <AnimatePresence mode="popLayout">
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.src}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative aspect-square overflow-hidden rounded-sm cursor-pointer"
                onClick={() => setLightboxIndex(index)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-dark-950/0 group-hover:bg-dark-950/40 transition-all duration-500 flex items-center justify-center">
                  <span className="text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0">
                    {image.alt}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-dark-950/95 backdrop-blur-sm flex items-center justify-center"
            onClick={() => setLightboxIndex(null)}
          >
            <button
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-10"
              onClick={() => setLightboxIndex(null)}
            >
              <X size={32} />
            </button>

            <button
              className="absolute left-4 lg:left-8 text-white/70 hover:text-white transition-colors z-10"
              onClick={(e) => {
                e.stopPropagation()
                setLightboxIndex(lightboxIndex > 0 ? lightboxIndex - 1 : filteredImages.length - 1)
              }}
            >
              <ChevronLeft size={40} />
            </button>

            <button
              className="absolute right-4 lg:right-8 text-white/70 hover:text-white transition-colors z-10"
              onClick={(e) => {
                e.stopPropagation()
                setLightboxIndex(lightboxIndex < filteredImages.length - 1 ? lightboxIndex + 1 : 0)
              }}
            >
              <ChevronRight size={40} />
            </button>

            <motion.img
              key={filteredImages[lightboxIndex].src}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              src={filteredImages[lightboxIndex].src}
              alt={filteredImages[lightboxIndex].alt}
              className="max-w-[90vw] max-h-[85vh] object-contain rounded-sm"
              onClick={(e) => e.stopPropagation()}
            />

            <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 text-sm">
              {lightboxIndex + 1} / {filteredImages.length} — {filteredImages[lightboxIndex].alt}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
