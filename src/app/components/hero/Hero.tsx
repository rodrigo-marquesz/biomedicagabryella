'use client'
import { useState, useRef, useEffect } from 'react'
import { PlayIcon, PauseIcon, SpeakerWaveIcon, SpeakerXMarkIcon, ArrowRightIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'

const treatments = [
  {
    title: 'Tratamento Capilar',
    description: 'Protocolo personalizado para estimular crescimento e fortalecer os fios',
    href: '#capilar',
    icon: '💆‍♀️'
  },
  {
    title: 'Botox',
    description: 'Suavização de linhas de expressão com naturalidade',
    href: '#botox',
    icon: '✨'
  },
  {
    title: 'Preenchimento',
    description: 'Harmonização facial com técnicas avançadas',
    href: '#preenchimento',
    icon: '💎'
  }
]

export const Hero = () => {
  const [isPlaying, setIsPlaying] = useState(true)
  const [isMuted, setIsMuted] = useState(true)
  const [volume, setVolume] = useState(0)
  const [showControls, setShowControls] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    video.muted = isMuted
    video.volume = volume
  }, [isMuted, volume])

  const togglePlay = () => {
    const video = videoRef.current
    if (!video) return
    if (isPlaying) {
      video.pause()
    } else {
      video.play().catch(() => console.warn('Autoplay bloqueado'))
    }
    setIsPlaying(!isPlaying)
  }

  const toggleMute = () => setIsMuted(!isMuted)

  const handleVolumeChange = (val: number) => {
    setVolume(val)
    if (val > 0 && isMuted) setIsMuted(false)
    if (val === 0 && !isMuted) setIsMuted(true)
  }

  return (
    <section id="about" className="relative min-h-screen flex items-center justify-center pt-20 sm:pt-24 lg:pt-20 pb-12 sm:pb-16 lg:pb-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center mb-12 sm:mb-16">
          <div 
            className="relative mx-auto w-full max-w-[280px] sm:max-w-sm lg:max-w-md rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl bg-black order-2 lg:order-1"
            onMouseEnter={() => setShowControls(true)}
            onMouseLeave={() => setShowControls(false)}
            onTouchStart={() => setShowControls(true)}
          >
            <div className="aspect-[3/5]">
              <video
                ref={videoRef}
                autoPlay
                loop
                playsInline
                muted
                className="w-full h-full object-cover"
                poster="/images/video-poster.jpg"
              >
                <source src="/videos/apresentacao.mp4" type="video/mp4" />
              </video>
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />

            {showControls && (
              <div className="absolute bottom-3 sm:bottom-4 right-3 sm:right-4 flex items-center space-x-2 bg-black/50 backdrop-blur-sm rounded-lg p-2">
                <button 
                  onClick={togglePlay} 
                  aria-label={isPlaying ? 'Pausar vídeo' : 'Reproduzir vídeo'}
                  className="hover:scale-110 transition-transform"
                >
                  {isPlaying ? (
                    <PauseIcon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  ) : (
                    <PlayIcon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  )}
                </button>

                <button 
                  onClick={toggleMute} 
                  aria-label={isMuted ? 'Ativar som' : 'Desativar som'}
                  className="hover:scale-110 transition-transform"
                >
                  {isMuted ? (
                    <SpeakerXMarkIcon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  ) : (
                    <SpeakerWaveIcon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  )}
                </button>

                <input
                  type="range"
                  min={0}
                  max={1}
                  step={0.1}
                  value={volume}
                  onChange={(e) => handleVolumeChange(parseFloat(e.target.value))}
                  className="w-16 sm:w-20 accent-[var(--color-marrom-claro)] cursor-pointer"
                  aria-label="Controle de volume"
                />
              </div>
            )}
          </div>

          <div className="space-y-4 sm:space-y-6 text-center lg:text-left order-1 lg:order-2">
            <div className="inline-block bg-[var(--color-marrom-claro)]/10 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full">
              <span className="text-[var(--color-marrom-claro)] text-xs sm:text-sm font-light tracking-wide">
                BIOMÉDICA ESTETA - CRBM-5: 010954
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900 leading-tight">
              Dra. Gabryella Klein
              <br />
              <span className="text-[var(--color-marrom-claro)]">Biomedicina Estética</span>
            </h1>

            <p className="text-base sm:text-lg text-gray-600 font-light leading-relaxed max-w-xl mx-auto lg:mx-0">
              Especialista em procedimentos estéticos faciais e capilares, com foco em resultados naturais e personalizados para cada paciente.
            </p>

            <div className="pt-4 sm:pt-6">
              <Link
                href="#contact"
                className="inline-flex items-center space-x-2 bg-[var(--color-marrom-claro)] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-light hover:bg-opacity-90 transition-all duration-300 group shadow-lg hover:shadow-xl text-sm sm:text-base"
              >
                <span>Agendar Avaliação</span>
                <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-light text-gray-900 text-center mb-8 sm:mb-12">
            Conheça nossos <span className="text-[var(--color-marrom-claro)]">Tratamentos</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {treatments.map((treatment, i) => (
              <Link
                key={i}
                href={treatment.href}
                className="group bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-4xl sm:text-5xl mb-4">{treatment.icon}</div>
                <h3 className="text-xl sm:text-2xl font-light text-gray-900 mb-3 group-hover:text-[var(--color-marrom-claro)] transition-colors">
                  {treatment.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 font-light leading-relaxed">
                  {treatment.description}
                </p>
                <div className="mt-4 flex items-center text-[var(--color-marrom-claro)] text-sm font-light group-hover:translate-x-2 transition-transform">
                  Saiba mais
                  <ArrowRightIcon className="w-4 h-4 ml-2" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}