// ==========================================
// components/shared/VideoPlayer.tsx
// ==========================================
'use client'
import { useState, useRef, useEffect } from 'react'
import { PlayIcon, PauseIcon, SpeakerWaveIcon, SpeakerXMarkIcon } from '@heroicons/react/24/solid'

interface VideoPlayerProps {
  src: string
  poster?: string
}

export const VideoPlayer = ({ src, poster }: VideoPlayerProps) => {
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
    <div
      className="relative mx-auto w-full max-w-[280px] sm:max-w-sm lg:max-w-md rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl bg-black"
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
          poster={poster}
        >
          <source src={src} type="video/mp4" />
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
  )
}
