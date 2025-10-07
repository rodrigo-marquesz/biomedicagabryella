'use client'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { ChevronLeftIcon, ChevronRightIcon, ArrowRightIcon } from '@heroicons/react/24/solid'

const cases = [
  { 
    before: '/images/capilar_1_before.png', 
    after: '/images/capilar_1_after.png', 
    title: 'Caso 1 - Coroa capilar inteira'
  },
  { 
    before: '/images/capilar_2_before.png', 
    after: '/images/capilar_2_after.png', 
    title: 'Caso 2 - Região Lateral'
  }
]

export const Results = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [mobileIndex, setMobileIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  const mobileSlides = cases.flatMap(c => [
    { image: c.before, label: 'Antes', title: c.title, type: 'before' },
    { image: c.after, label: 'Depois', title: c.title, type: 'after' }
  ])

  useEffect(() => {
    if (isHovered) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % cases.length)
      setMobileIndex((prev) => (prev + 1) % mobileSlides.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [isHovered, mobileSlides.length])

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % cases.length)
    setMobileIndex((prev) => (prev + 1) % mobileSlides.length)
  }

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + cases.length) % cases.length)
    setMobileIndex((prev) => (prev - 1 + mobileSlides.length) % mobileSlides.length)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    setMobileIndex(index * 2)
  }

  const currentCase = cases[currentIndex]
  const currentMobileSlide = mobileSlides[mobileIndex]

  return (
    <section 
      id="results" 
      className="relative min-h-screen flex items-center justify-center py-16 sm:py-20 lg:py-24 bg-white overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-block bg-[var(--color-marrom-claro)]/10 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-3 sm:mb-4">
            <span className="text-[var(--color-marrom-claro)] text-xs sm:text-sm font-light tracking-wide">
              TRANSFORMAÇÕES REAIS
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900 mb-3 sm:mb-4">
            Resultados <span className="text-[var(--color-marrom-claro)]">Comprovados</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 font-light max-w-2xl mx-auto px-4">
            Acompanhe as transformações de nossos pacientes através dos protocolos e acompanhamentos personalizados com enzimas e minoxidil, botox e preenchimento
          </p>
        </div>

        <div 
          className="relative max-w-6xl mx-auto"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="hidden lg:block relative overflow-hidden">
            <div 
              className="flex transition-transform duration-1000 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {cases.map((caseItem, i) => (
                <div key={i} className="min-w-full flex-shrink-0 p-5">
                  <div className="grid grid-cols-2 gap-6 lg:gap-8 px-2">
                    <div className="relative bg-gradient-to-br from-gray-50 to-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-xl overflow-hidden">
                      <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-10 bg-black/70 backdrop-blur-sm px-3 py-1.5 rounded-full">
                        <span className="text-white text-xs sm:text-sm font-light">Antes</span>
                      </div>
                      
                      <div className="relative aspect-[3/4] rounded-xl sm:rounded-2xl overflow-hidden">
                        <Image
                          src={caseItem.before}
                          alt="Antes do tratamento"
                          fill
                          className="object-cover"
                          sizes="45vw"
                          priority={i === 0}
                        />
                      </div>
                    </div>

                    <div className="relative bg-gradient-to-br from-gray-50 to-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-xl overflow-hidden">
                      <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-10 bg-[var(--color-marrom-claro)] backdrop-blur-sm px-3 py-1.5 rounded-full">
                        <span className="text-white text-xs sm:text-sm font-light">Depois</span>
                      </div>
                      
                      <div className="relative aspect-[3/4] rounded-xl sm:rounded-2xl overflow-hidden">
                        <Image
                          src={caseItem.after}
                          alt="Depois do tratamento"
                          fill
                          className="object-cover"
                          sizes="45vw"
                          priority={i === 0}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none">
              <div className="bg-white rounded-full p-3 shadow-xl">
                <ArrowRightIcon className="w-8 h-8 text-[var(--color-marrom-claro)]" />
              </div>
            </div>
          </div>

          <div className="lg:hidden relative overflow-hidden pb-5">
            <div 
              className="flex transition-transform duration-1000 ease-in-out"
              style={{ transform: `translateX(-${mobileIndex * 100}%)` }}
            >
              {mobileSlides.map((slide, i) => (
                <div key={i} className="min-w-full flex-shrink-0">
                  <div className="relative bg-gradient-to-br from-gray-50 to-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-xl overflow-hidden max-w-md mx-auto">
                    <div className={`absolute top-3 left-3 sm:top-4 sm:left-4 z-10 ${
                      slide.type === 'before' ? 'bg-black/70' : 'bg-[var(--color-marrom-claro)]'
                    } backdrop-blur-sm px-3 py-1.5 rounded-full`}>
                      <span className="text-white text-xs sm:text-sm font-light">{slide.label}</span>
                    </div>
                    
                    <div className="relative aspect-[3/4] rounded-xl sm:rounded-2xl overflow-hidden">
                      <Image
                        src={slide.image}
                        alt={`${slide.label} do tratamento`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 90vw"
                        priority={i < 2}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={goToPrevious}
            className="hidden lg:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 w-12 h-12 bg-white hover:bg-gray-50 rounded-full shadow-lg hover:shadow-xl items-center justify-center transition-all duration-300 group z-10"
            aria-label="Resultado anterior"
          >
            <ChevronLeftIcon className="w-6 h-6 text-[var(--color-marrom-claro)] group-hover:-translate-x-0.5 transition-transform" />
          </button>

          <button
            onClick={goToNext}
            className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 w-12 h-12 bg-white hover:bg-gray-50 rounded-full shadow-lg hover:shadow-xl items-center justify-center transition-all duration-300 group z-10"
            aria-label="Próximo resultado"
          >
            <ChevronRightIcon className="w-6 h-6 text-[var(--color-marrom-claro)] group-hover:translate-x-0.5 transition-transform" />
          </button>

          <div className="flex lg:hidden justify-center gap-4 mt-6">
            <button
              onClick={goToPrevious}
              className="w-10 h-10 bg-white hover:bg-gray-50 rounded-full shadow-lg flex items-center justify-center transition-all"
              aria-label="Resultado anterior"
            >
              <ChevronLeftIcon className="w-5 h-5 text-[var(--color-marrom-claro)]" />
            </button>
            <button
              onClick={goToNext}
              className="w-10 h-10 bg-white hover:bg-gray-50 rounded-full shadow-lg flex items-center justify-center transition-all"
              aria-label="Próximo resultado"
            >
              <ChevronRightIcon className="w-5 h-5 text-[var(--color-marrom-claro)]" />
            </button>
          </div>
        </div>

        <div className="mt-8 sm:mt-10 space-y-4">
          <div className="text-center space-y-2">
            <h3 className="text-lg sm:text-xl font-light text-gray-900">
              {currentCase.title}
            </h3>
          </div>

          <div className="flex justify-center gap-2 sm:gap-3">
            {cases.map((_, i) => (
              <button
                key={i}
                onClick={() => goToSlide(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === currentIndex 
                    ? 'w-8 bg-[var(--color-marrom-claro)]' 
                    : 'w-2 bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Ver caso ${i + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="mt-10 sm:mt-12 text-center">
          <p className="text-xs sm:text-sm text-gray-500 font-light px-4">
            *Divulgação das imagens autorizadas por cada paciente. 
            As imagens não representam, de forma alguma, garantia de resultado. <br />
            Cada indivíduo tem características anatômicas e fisiológicas únicas e, por isso, há diferentes respostas aos tratamentos.
          </p>
        </div>
      </div>
    </section>
  )
}
