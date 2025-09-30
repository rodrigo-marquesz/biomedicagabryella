'use client'
import { useState, useRef, useEffect } from 'react'
import { PlayIcon, PauseIcon, SpeakerWaveIcon, SpeakerXMarkIcon, ArrowRightIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'

export const Sobre = () => {
  const [isPlaying, setIsPlaying] = useState(true)
  const [isMuted, setIsMuted] = useState(true)
  const [showControls, setShowControls] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (video) {
      isPlaying ? video.play() : video.pause()
    }
  }, [isPlaying])

  const togglePlay = () => setIsPlaying(!isPlaying)
  const toggleMute = () => setIsMuted(!isMuted)

  return (
    <section id="sobre" className="relative min-h-screen flex items-center justify-center pt-16 md:pt-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-6 max-w-6xl py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          <div
            className="relative mx-auto max-w-sm md:max-w-md rounded-2xl overflow-hidden shadow-2xl bg-black"
            onMouseEnter={() => setShowControls(true)}
            onMouseLeave={() => setShowControls(false)}
          >
            <div className="aspect-[3.5/5]">
              <video
                ref={videoRef}
                muted={isMuted}
                autoPlay
                loop
                playsInline
                className="w-full h-full object-cover"
                poster="/images/video-poster.jpg"
              >
                <source src="/videos/enzimas_capilares.mp4" type="video/mp4" />
              </video>
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
            {showControls && (
              <div className="absolute bottom-4 right-4 flex space-x-2">
                {/* botões */}
              </div>
            )}
          </div>



          <div className="space-y-6 text-center md:text-left">
            <div className="inline-block bg-[var(--color-marrom-claro)]/10 px-4 py-2 rounded-full">
              <span className="text-[var(--color-marrom-claro)] text-sm font-light">INOVAÇÃO CIENTÍFICA</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-light text-gray-900 leading-tight">
              Revolução em{' '}
              <span className="text-[var(--color-marrom-claro)]">Terapia Capilar</span>
            </h1>

            <p className="text-lg text-gray-600 font-light leading-relaxed">
              Nossa tecnologia exclusiva com enzimas específicas oferece resultados
              comprovados no tratamento de crescimento capilar para pacientes masculinos
              e femininos. Baseada em pesquisas biomédicas avançadas.
            </p>

            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-[var(--color-marrom-claro)] rounded-full"></div>
                <span className="text-gray-700 font-light">Resultados em 30 dias</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-[var(--color-marrom-claro)] rounded-full"></div>
                <span className="text-gray-700 font-light">Protocolo personalizado</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-[var(--color-marrom-claro)] rounded-full"></div>
                <span className="text-gray-700 font-light">Acompanhamento especializado</span>
              </div>
            </div>

            <Link
              href="#contato"
              className="inline-flex items-center space-x-2 bg-[var(--color-marrom-claro)] text-white px-6 py-3 rounded-lg font-light hover:bg-opacity-90 transition-all duration-300 group"
            >
              <span>Agendar Avaliação</span>
              <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
