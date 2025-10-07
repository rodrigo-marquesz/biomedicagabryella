'use client'
import { CheckCircleIcon } from '@heroicons/react/24/solid'

const benefits = [
  'Tratamento baseado em evidências científicas',
  'Protocolo 100% personalizado para seu caso',
  'Acompanhamento biomédico especializado',
  'Primeiros resultados em 30 dias',
  'Sem efeitos colaterais significativos',
  'Atendimento humanizado e sigiloso',
  'Tecnologia de ponta em enzimas capilares',
  'Suporte durante todo o tratamento'
]

export const Benefits = () => {
  return (
    <section id="benefits" className="relative py-20 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <div className="inline-block bg-[var(--color-marrom-claro)]/10 px-4 py-2 rounded-full">
              <span className="text-[var(--color-marrom-claro)] text-sm font-light tracking-wide">POR QUE ESCOLHER</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-light text-gray-900 leading-tight">
              Benefícios do Nosso <span className="text-[var(--color-marrom-claro)]">Tratamento</span>
            </h2>

            <p className="text-lg text-gray-600 font-light leading-relaxed">
              Uma abordagem moderna e científica para recuperação capilar, desenvolvida por profissionais especializados em biomedicina estética.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="flex items-start space-x-3 group">
                  <CheckCircleIcon className="w-6 h-6 text-[var(--color-marrom-claro)] flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                  <span className="text-gray-700 font-light">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-[var(--color-marrom-claro)]/20 to-gray-100">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-8 p-8">
                  <div className="space-y-2">
                    <div className="text-6xl font-light text-[var(--color-marrom-claro)]">90%</div>
                    <div className="text-gray-700 font-light">Taxa de Sucesso</div>
                  </div>
                  
                  <div className="w-px h-16 bg-gray-300 mx-auto"></div>
                  
                  <div className="space-y-2">
                    <div className="text-6xl font-light text-[var(--color-marrom-claro)]">30</div>
                    <div className="text-gray-700 font-light">Dias para Resultados</div>
                  </div>
                  
                  <div className="w-px h-16 bg-gray-300 mx-auto"></div>
                  
                  <div className="space-y-2">
                    <div className="text-6xl font-light text-[var(--color-marrom-claro)]">1000+</div>
                    <div className="text-gray-700 font-light">Pacientes Atendidos</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
