'use client'
import { useState, useRef, useEffect } from 'react'
import { PlayIcon, PauseIcon, SpeakerWaveIcon, SpeakerXMarkIcon } from '@heroicons/react/24/solid'

export const About = () => {
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

  const handleWhatsApp = () => {
    window.open('https://wa.me/5551998902287?text=Olá! Gostaria de agendar uma avaliação.', '_blank')
  }

  return (
    <section id="about" className="relative min-h-screen flex items-center justify-center pt-24 sm:pt-28 lg:pt-32 pb-12 sm:pb-16 lg:pb-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          <div 
            className="relative mx-auto w-full max-w-[280px] sm:max-w-sm lg:max-w-md rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl bg-black order-1 lg:order-1"
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
                poster="/videos/apresentacao.mp4"
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

          <div className="space-y-4 sm:space-y-6 text-center lg:text-left order-2 lg:order-2">
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
              <button
                onClick={handleWhatsApp}
                className="inline-flex items-center space-x-2 bg-[var(--color-marrom-claro)] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-light hover:bg-[var(--color-marrom-escuro)] hover:scale-105 transition-all duration-300 group shadow-lg hover:shadow-2xl text-sm sm:text-base cursor-pointer"
              >
                <svg className="w-5 h-5 group-hover:rotate-12 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                <span>Falar no WhatsApp</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
