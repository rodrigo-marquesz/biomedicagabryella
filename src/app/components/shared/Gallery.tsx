'use client'
import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'
import { ChevronLeftIcon, ChevronRightIcon, ArrowRightIcon } from '@heroicons/react/24/solid'

interface GalleryImage {
  before: string
  after: string
  title: string
}

interface GalleryProps {
  images: GalleryImage[]
  title: string
}

export const Gallery = ({ images, title }: GalleryProps) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [mobileIndex, setMobileIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const touchStartX = useRef(0)
  const touchEndX = useRef(0)

  const mobileSlides = images.flatMap(img => [
    { image: img.before, label: 'Antes', title: img.title, type: 'before' },
    { image: img.after, label: 'Depois', title: img.title, type: 'after' }
  ])

  // Calcular o índice correto da imagem atual no mobile
  // Como temos 2 slides por imagem (antes/depois), dividimos por 2 e arredondamos para baixo
  const currentMobileImageIndex = Math.floor(mobileIndex / 2)
  const currentMobileImage = images[currentMobileImageIndex] !== undefined ? images[currentMobileImageIndex] : images[0]

  useEffect(() => {
    if (isHovered) return
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
      setMobileIndex((prev) => (prev + 1) % mobileSlides.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [isHovered, images.length, mobileSlides.length])

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
    setMobileIndex((prev) => (prev + 1) % mobileSlides.length)
  }

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
    setMobileIndex((prev) => (prev - 1 + mobileSlides.length) % mobileSlides.length)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    setMobileIndex(index * 2)
  }

  // Handlers para swipe/arrastar no mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX
  }

  const handleTouchEnd = () => {
    const swipeThreshold = 50 // pixels mínimos para considerar um swipe
    const diff = touchStartX.current - touchEndX.current

    if (Math.abs(diff) > swipeThreshold) {
      if (diff > 0) {
        goToNext()
      } else {
        goToPrevious()
      }
    }

    touchStartX.current = 0
    touchEndX.current = 0
  }

  const currentImage = images[currentIndex] !== undefined ? images[currentIndex] : images[0]

  return (
    <div className="py-16 sm:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-12">
          <div className="inline-block bg-[var(--color-marrom-claro)]/10 px-4 py-2 rounded-full mb-4">
            <span className="text-[var(--color-marrom-claro)] text-sm font-light tracking-wide">
              RESULTADOS REAIS
            </span>
          </div>
          <h3 className="text-3xl sm:text-4xl font-light text-gray-900">
            {title}
          </h3>
        </div>

        <div
          className="relative max-w-6xl mx-auto"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Desktop Gallery */}
          <div className="hidden lg:block relative overflow-hidden">
            <div
              className="flex transition-transform duration-1000 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {images.map((item, i) => (
                <div key={i} className="min-w-full flex-shrink-0 p-5">
                  <div className="grid grid-cols-2 gap-6 lg:gap-8 px-2">
                    <div className="relative bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-xl overflow-hidden">
                      <div className="absolute top-4 left-4 z-10 bg-black/70 backdrop-blur-sm px-3 py-1.5 rounded-full">
                        <span className="text-white text-sm font-light">Antes</span>
                      </div>
                      <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
                        <Image
                          src={item.before}
                          alt="Antes do tratamento"
                          fill
                          className="object-cover"
                          sizes="45vw"
                          priority={i === 0}
                        />
                      </div>
                    </div>

                    <div className="relative bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-xl overflow-hidden">
                      <div className="absolute top-4 left-4 z-10 bg-[var(--color-marrom-claro)] backdrop-blur-sm px-3 py-1.5 rounded-full">
                        <span className="text-white text-sm font-light">Depois</span>
                      </div>
                      <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
                        <Image
                          src={item.after}
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

          {/* Mobile Gallery - COM SWIPE */}
          <div 
            className="lg:hidden relative overflow-hidden pb-5"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${mobileIndex * 100}%)` }}
            >
              {mobileSlides.map((slide, i) => (
                <div key={i} className="min-w-full flex-shrink-0 px-2">
                  <div className="relative bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-xl overflow-hidden max-w-md mx-auto">
                    <div className={`absolute top-4 left-4 z-10 ${
                      slide.type === 'before' ? 'bg-black/70' : 'bg-[var(--color-marrom-claro)]'
                    } backdrop-blur-sm px-3 py-1.5 rounded-full`}>
                      <span className="text-white text-sm font-light">{slide.label}</span>
                    </div>
                    <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
                      <Image
                        src={slide.image}
                        alt={`${slide.label} do tratamento`}
                        fill
                        className="object-cover"
                        sizes="100vw"
                        priority={i < 2}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {mobileSlides.length > 1 && (
              <>
                <button
                  onClick={goToPrevious}
                  className="absolute left-2 top-1/2 -translate-y-1/2 w-9 h-9 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all z-10"
                  aria-label="Resultado anterior"
                >
                  <ChevronLeftIcon className="w-5 h-5 text-[var(--color-marrom-claro)]" />
                </button>
                <button
                  onClick={goToNext}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all z-10"
                  aria-label="Próximo resultado"
                >
                  <ChevronRightIcon className="w-5 h-5 text-[var(--color-marrom-claro)]" />
                </button>
              </>
            )}
          </div>

          {/* Botões Desktop */}
          {images.length > 1 && (
            <button
              onClick={goToPrevious}
              className="hidden lg:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 w-12 h-12 bg-white hover:bg-gray-50 rounded-full shadow-lg items-center justify-center transition-all group z-10"
              aria-label="Resultado anterior"
            >
              <ChevronLeftIcon className="w-6 h-6 text-[var(--color-marrom-claro)] group-hover:-translate-x-0.5 transition-transform" />
            </button>
          )}

          {images.length > 1 && (
            <button
              onClick={goToNext}
              className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 w-12 h-12 bg-white hover:bg-gray-50 rounded-full shadow-lg items-center justify-center transition-all group z-10"
              aria-label="Próximo resultado"
            >
              <ChevronRightIcon className="w-6 h-6 text-[var(--color-marrom-claro)] group-hover:translate-x-0.5 transition-transform" />
            </button>
          )}
        </div>

        <div className="mt-8 space-y-4">
          <div className="text-center">
            <h4 className="text-lg sm:text-xl font-light text-gray-900">
              <span className="hidden lg:inline">{currentImage.title}</span>
              <span className="lg:hidden">{currentMobileImage.title}</span>
            </h4>
          </div>

          <div className="flex justify-center gap-3">
            {images.map((_, i) => (
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

        <div className="mt-10 text-center">
          <p className="text-xs sm:text-sm text-gray-500 font-light px-4">
            *Divulgação das imagens autorizadas por cada paciente. As imagens não representam garantia de resultado.
          </p>
        </div>
      </div>
    </div>
  )
}
