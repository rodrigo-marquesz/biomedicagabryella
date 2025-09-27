// src/app/components/sobre/Sobre.tsx
'use client'
import { useState, useRef, useEffect } from 'react'
import { PlayIcon, PauseIcon, SpeakerWaveIcon, SpeakerXMarkIcon, ArrowRightIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'

export const Sobre = () => {
  const [isPlaying, setIsPlaying] = useState(true)
  const [isMuted, setIsMuted] = useState(true)
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
      {/* Container principal com largura limitada */}
      <div className="container mx-auto px-4 max-w-6xl py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Coluna do Vídeo */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <video
              ref={videoRef}
              muted={isMuted}
              autoPlay
              loop
              playsInline
              className="w-full h-auto max-h-[500px] object-cover"
              poster="/images/video-poster.jpg"
            >
              <source src="/videos/enzimas_capilares.mp4" type="video/mp4" />
            </video>

            {/* Overlay e controles */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
            <div className="absolute bottom-4 right-4 flex space-x-2">
              <button
                onClick={toggleMute}
                className="p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all"
              >
                {isMuted ? (
                  <SpeakerXMarkIcon className="w-4 h-4 text-white" />
                ) : (
                  <SpeakerWaveIcon className="w-4 h-4 text-white" />
                )}
              </button>
              <button
                onClick={togglePlay}
                className="p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all"
              >
                {isPlaying ? (
                  <PauseIcon className="w-4 h-4 text-white" />
                ) : (
                  <PlayIcon className="w-4 h-4 text-white" />
                )}
              </button>
            </div>
          </div>

          {/* Coluna do Conteúdo */}
          <div className="space-y-6">
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

            {/* CTA elegante */}
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
