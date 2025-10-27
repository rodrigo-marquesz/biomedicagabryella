'use client'
import Link from 'next/link'
import { ArrowRightIcon, SparklesIcon } from '@heroicons/react/24/solid'
import { Gallery } from '@/app/components/shared/Gallery'
import { FAQSection } from '@/app/components/shared/FAQSection'
import { ProcessSteps } from '@/app/components/shared/ProcessSteps'

const galleryImages = [
  {
    before: '/images/botox_facial_1.jpeg',
    after: '/images/botox_facial_2.jpeg',
    title: 'Botox Facial'
  }
]

const faqs = [
  {
    question: 'Quanto tempo dura o efeito?',
    answer: 'Em média, de 3 a 4 meses. Isso pode variar conforme o metabolismo de cada pessoa.'
  },
  {
    question: 'Vou ficar sem expressão?',
    answer: 'Não precisa se preocupar! Quando bem aplicado, o botox mantém suas expressões naturais. Apenas suaviza o que te incomoda, sem tirar sua identidade.'
  },
  {
    question: 'Tem algum cuidado após a aplicação?',
    answer: 'Sim! Nas primeiras 24 horas é importante evitar deitar, massagear o rosto, fazer atividade física e consumir bebida alcoólica.'
  },
  {
    question: 'É seguro?',
    answer: 'Sim! Quando aplicado por profissional qualificado, o botox é extremamente seguro. Utilizamos apenas produtos aprovados pela ANVISA.'
  },
  {
    question: 'Dói durante a aplicação?',
    answer: 'O desconforto é mínimo. Utilizamos agulhas ultrafinas e técnicas que minimizam qualquer sensação desagradável durante o procedimento.'
  }
]

const steps = [
  {
    number: '01',
    title: 'Consulta',
    description: 'Avaliação facial detalhada e definição de áreas a serem tratadas'
  },
  {
    number: '02',
    title: 'Aplicação',
    description: 'Procedimento rápido e preciso com produtos de alta qualidade'
  },
  {
    number: '03',
    title: 'Resultado',
    description: 'Efeito aparece gradualmente em 7 a 14 dias com resultado natural'
  }
]

export const Botox = () => {
  return (
    <section id="botox" className="scroll-mt-20">
      <div className="relative min-h-screen flex items-center justify-center py-16 sm:py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            
            {/* Card Elegante */}
            <div className="relative bg-gradient-to-br from-[var(--color-marrom-claro)]/5 via-white to-[var(--color-marrom-claro)]/5 rounded-3xl p-8 sm:p-12 shadow-2xl border border-[var(--color-marrom-claro)]/10">
              <div className="absolute top-6 right-6 w-20 h-20 bg-[var(--color-marrom-claro)]/10 rounded-full blur-2xl"></div>
              <div className="absolute bottom-6 left-6 w-32 h-32 bg-[var(--color-marrom-claro)]/5 rounded-full blur-3xl"></div>
              
              <div className="relative z-10 space-y-6">
                <div className="w-16 h-16 bg-gradient-to-br from-[var(--color-marrom-claro)] to-[var(--color-marrom-escuro)] rounded-2xl flex items-center justify-center shadow-lg">
                  <SparklesIcon className="w-8 h-8 text-white" />
                </div>
                
                <div className="space-y-3">
                  <div className="inline-block bg-[var(--color-marrom-claro)]/10 px-4 py-2 rounded-full">
                    <span className="text-[var(--color-marrom-claro)] text-xs sm:text-sm font-light tracking-wide">
                      PROCEDIMENTO ESTÉTICO
                    </span>
                  </div>
                  <h3 className="text-3xl sm:text-4xl font-light text-gray-900">
                    Botox
                  </h3>
                  <p className="text-base text-gray-600 font-light leading-relaxed">
                    Tratamento especializado para suavizar rugas e linhas de expressão com resultados naturais e elegantes.
                  </p>
                </div>

                <div className="pt-4 grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <div className="text-2xl font-light text-[var(--color-marrom-claro)]">3-4</div>
                    <div className="text-xs text-gray-600">meses de duração</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-2xl font-light text-[var(--color-marrom-claro)]">7-14</div>
                    <div className="text-xs text-gray-600">dias para resultado</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Conteúdo */}
            <div className="space-y-4 sm:space-y-6 text-center lg:text-left">
              <div className="inline-block bg-[var(--color-marrom-claro)]/10 px-4 py-2 rounded-full">
                <span className="text-[var(--color-marrom-claro)] text-sm font-light tracking-wide">
                  BOTOX
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900 leading-tight">
                Suavize suas
                <br />
                <span className="text-[var(--color-marrom-claro)]">Linhas de Expressão</span>
              </h2>

              <p className="text-base sm:text-lg text-gray-600 font-light leading-relaxed max-w-xl mx-auto lg:mx-0">
                Tratamento especializado para suavizar rugas e linhas de expressão, preservando a naturalidade do seu rosto. Resultados harmoniosos e elegantes.
              </p>

              <div className="space-y-3 sm:space-y-4 pt-2">
                {[
                  'Resultados naturais',
                  'Procedimento rápido',
                  'Sem tempo de recuperação'
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-center lg:justify-start space-x-3">
                    <div className="w-2 h-2 bg-[var(--color-marrom-claro)] rounded-full flex-shrink-0"></div>
                    <span className="text-sm sm:text-base text-gray-700 font-light">{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 sm:pt-6">
                <Link
                  href="#contact"
                  className="inline-flex items-center space-x-2 bg-[var(--color-marrom-claro)] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-light hover:bg-[var(--color-marrom-escuro)] hover:scale-105 transition-all duration-300 group shadow-lg hover:shadow-xl text-sm sm:text-base cursor-pointer"
                >
                  <span>Agendar Consulta</span>
                  <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Gallery images={galleryImages} title="Resultados com Botox" />
      <ProcessSteps steps={steps} title="Como Funciona o Botox" />
      <FAQSection faqs={faqs} title="Dúvidas sobre Botox" />
    </section>
  )
}
