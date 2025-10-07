'use client'
import { useState, useRef, useEffect } from 'react'
import { PlayIcon, PauseIcon, SpeakerWaveIcon, SpeakerXMarkIcon, ArrowRightIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'

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
      video.play().catch(() => console.warn('Autoplay bloqueado, precisa de interação do usuário.'))
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
    <section id="about" className="relative min-h-screen flex items-center justify-center pt-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-6 max-w-6xl py-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          <div
            className="relative mx-auto max-w-sm md:max-w-md rounded-2xl overflow-hidden shadow-2xl bg-black"
            onMouseEnter={() => setShowControls(true)}
            onMouseLeave={() => setShowControls(false)}
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
                <source src="/videos/enzimas_capilares.mp4" type="video/mp4" />
              </video>
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />

            {showControls && (
              <div className="absolute bottom-4 right-4 flex space-x-2 bg-black/40 rounded-lg p-2">
                <button onClick={togglePlay} aria-label={isPlaying ? 'Pausar vídeo' : 'Reproduzir vídeo'}>
                  {isPlaying ? <PauseIcon className="w-6 h-6 text-white" /> : <PlayIcon className="w-6 h-6 text-white" />}
                </button>

                <button onClick={toggleMute} aria-label={isMuted ? 'Ativar som' : 'Desativar som'}>
                  {isMuted ? <SpeakerXMarkIcon className="w-6 h-6 text-white" /> : <SpeakerWaveIcon className="w-6 h-6 text-white" />}
                </button>

                <input
                  type="range"
                  min={0}
                  max={1}
                  step={0.1}
                  value={volume}
                  onChange={(e) => handleVolumeChange(parseFloat(e.target.value))}
                  className="w-20 accent-[var(--color-marrom-claro)]"
                />
              </div>
            )}
          </div>

          <div className="space-y-6 text-center md:text-left">
            <div className="inline-block bg-[var(--color-marrom-claro)]/10 px-4 py-2 rounded-full">
              <span className="text-[var(--color-marrom-claro)] text-sm font-light">TRATAMENTO CAPILAR</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-light text-gray-900 leading-tight">
              Inovação em<span className="text-[var(--color-marrom-claro)]"> Tratamento Capilar</span>
            </h1>

            <p className="text-lg text-gray-600 font-light leading-relaxed">
              Um cuidado pensado para quem está percebendo falhas, queda de cabelo ou fios mais finos.
              O protocolo combina ativos que estimulam o crescimento e fortalecem os fios, sempre de forma personalizada conforme a necessidade de cada paciente.
            </p>

            <div className="flex flex-col items-center md:items-start space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-[var(--color-marrom-claro)] rounded-full"></div>
                <span className="text-gray-700 font-light">Resultados gradativos</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-[var(--color-marrom-claro)] rounded-full"></div>
                <span className="text-gray-700 font-light">Protocolo personalizado</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-[var(--color-marrom-claro)] rounded-full"></div>
                <span className="text-gray-700 font-light">Tratamento para homens e mulheres</span>
              </div>
            </div>

            <Link
              href="#contact"
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
