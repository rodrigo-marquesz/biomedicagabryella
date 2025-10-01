'use client'
import { useState } from 'react'

const cases = [
  { 
    before: '/images/result_capilar_1.png', 
    after: '/images/result_capilar_1_after.png', 
    title: 'Caso 1 - Região Superior',
    timeframe: '90 dias de tratamento'
  },
  { 
    before: '/images/result_capilar_2.png', 
    after: '/images/result_capilar_2_after.png', 
    title: 'Caso 2 - Região Lateral',
    timeframe: '120 dias de tratamento'
  }
]

export const Results = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section id="results" className="relative min-h-screen flex items-center justify-center py-20 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <div className="inline-block bg-[var(--color-marrom-claro)]/10 px-4 py-2 rounded-full mb-4">
            <span className="text-[var(--color-marrom-claro)] text-sm font-light tracking-wide">TRANSFORMAÇÕES REAIS</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">
            Resultados <span className="text-[var(--color-marrom-claro)]">Comprovados</span>
          </h2>
          <p className="text-lg text-gray-600 font-light max-w-2xl mx-auto">
            Acompanhe as transformações de nossos pacientes através do protocolo personalizado com enzimas e minoxidil
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {cases.map((caseItem, idx) => (
            <div key={idx} className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500">
              <div className="space-y-6">
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-gray-100">
                  <div className="absolute inset-0 grid grid-cols-2 gap-1">
                    <div className="relative">
                      <img 
                        src={caseItem.before} 
                        alt="Antes do tratamento" 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                        <span className="text-white text-sm font-light">Antes</span>
                      </div>
                    </div>
                    <div className="relative">
                      <img 
                        src={caseItem.after} 
                        alt="Depois do tratamento" 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[var(--color-marrom-claro)]/70 to-transparent p-3">
                        <span className="text-white text-sm font-light">Depois</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-2 text-center">
                  <h3 className="text-xl font-light text-gray-900">{caseItem.title}</h3>
                  <p className="text-sm text-gray-600 font-light">{caseItem.timeframe}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center gap-3">
          {cases.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === activeIndex 
                  ? 'w-8 bg-[var(--color-marrom-claro)]' 
                  : 'w-2 bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Ver caso ${idx + 1}`}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm font-light">
            *Resultados individuais podem variar. Fotos reais de pacientes com consentimento.
          </p>
        </div>
      </div>
    </section>
  )
}
