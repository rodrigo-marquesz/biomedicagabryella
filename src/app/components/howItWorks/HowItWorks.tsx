'use client'
import { BeakerIcon, ClipboardDocumentCheckIcon, ChartBarIcon, SparklesIcon } from '@heroicons/react/24/outline'

const steps = [
  {
    icon: ClipboardDocumentCheckIcon,
    title: 'Avaliação Completa',
    description: 'Análise detalhada do seu quadro capilar, histórico médico e exames laboratoriais para identificar as causas da queda.'
  },
  {
    icon: BeakerIcon,
    title: 'Protocolo Personalizado',
    description: 'Formulação exclusiva com enzimas capilares, minoxidil e vitaminas específicas para seu caso.'
  },
  {
    icon: ChartBarIcon,
    title: 'Acompanhamento Mensal',
    description: 'Monitoramento regular com fotos comparativas e ajustes no tratamento conforme necessário.'
  },
  {
    icon: SparklesIcon,
    title: 'Resultados Visíveis',
    description: 'Primeiros resultados em 30 dias, com crescimento significativo em 90 a 120 dias de tratamento.'
  }
]

export const HowItWorks = () => {
  return (
    <section id="how-it-works" className="relative min-h-screen flex items-center justify-center py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <div className="inline-block bg-[var(--color-marrom-claro)]/10 px-4 py-2 rounded-full mb-4">
            <span className="text-[var(--color-marrom-claro)] text-sm font-light tracking-wide">NOSSO MÉTODO</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">
            Como <span className="text-[var(--color-marrom-claro)]">Funciona</span>
          </h2>
          <p className="text-lg text-gray-600 font-light max-w-2xl mx-auto">
            Um protocolo científico e personalizado para recuperação capilar efetiva
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <div 
              key={idx}
              className="relative group"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 h-full flex flex-col">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-[var(--color-marrom-claro)] rounded-full flex items-center justify-center text-white font-light text-lg shadow-lg">
                  {idx + 1}
                </div>

                <div className="mb-6 inline-block">
                  <div className="w-16 h-16 bg-[var(--color-marrom-claro)]/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <step.icon className="w-8 h-8 text-[var(--color-marrom-claro)]" />
                  </div>
                </div>

                <h3 className="text-xl font-light text-gray-900 mb-3">
                  {step.title}
                </h3>

                <p className="text-gray-600 font-light leading-relaxed flex-grow">
                  {step.description}
                </p>
              </div>

              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <div className="w-8 h-0.5 bg-gradient-to-r from-[var(--color-marrom-claro)] to-transparent"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}