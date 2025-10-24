'use client'
import Link from 'next/link'
import { ArrowRightIcon } from '@heroicons/react/24/solid'
import { VideoPlayer } from '@/app/components/shared/VideoPlayer'
import { Gallery } from '@/app/components/shared/Gallery'
import { FAQSection } from '@/app/components/shared/FAQSection'
import { ProcessSteps } from '@/app/components/shared/ProcessSteps'

const galleryImages = [
  {
    before: '/images/preenchimento_nariz_1.png',
    after: '/images/preenchimento_nariz_2.png',
    title: 'Preenchimento de Nariz'
  },
  {
    before: '/images/preenchimento_facial_1.png',
    after: '/images/preenchimento_facial_2.png',
    title: 'Preenchimento Facial'
  }
]

const faqs = [
  {
    question: 'Em quanto tempo vejo o resultado?',
    answer: 'O resultado é imediato, mas o aspecto final aparece em até 15 dias, quando o produto se acomoda e o inchaço diminui.'
  },
  {
    question: 'Quanto tempo dura o preenchimento?',
    answer: 'Depende da região e do metabolismo de cada paciente, mas geralmente o efeito dura de 8 a 12 meses.'
  },
  {
    question: 'Tem algum cuidado após o procedimento?',
    answer: 'Sim! Evite exercícios físicos, exposição solar, bebidas alcoólicas e maquiagem nas primeiras 24 horas. Alguns preenchimentos também exigem cuidados específicos.'
  },
  {
    question: 'Quais áreas podem ser preenchidas?',
    answer: 'Lábios, maçãs do rosto, sulco nasogeniano, mandíbula, queixo, olheiras e outras áreas que necessitam de volume ou harmonização.'
  },
  {
    question: 'O resultado fica natural?',
    answer: 'Sim! Nosso foco é sempre a naturalidade e harmonia facial. O objetivo é realçar sua beleza de forma equilibrada.'
  }
]

const steps = [
  {
    number: '01',
    title: 'Análise Facial',
    description: 'Estudo detalhado das proporções faciais e planejamento personalizado'
  },
  {
    number: '02',
    title: 'Preenchimento',
    description: 'Aplicação precisa com técnicas avançadas e produtos premium'
  },
  {
    number: '03',
    title: 'Finalização',
    description: 'Resultado imediato com harmonização natural e elegante'
  }
]

export const Filling = () => {
  return (
    <section id="filling" className="scroll-mt-20">
      <div className="relative min-h-screen flex items-center justify-center py-16 sm:py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            <VideoPlayer
              src="/videos/enzimas_capilares.mp4"
              poster="/images/video-poster.jpg"
            />

            <div className="space-y-4 sm:space-y-6 text-center lg:text-left">
              <div className="inline-block bg-[var(--color-marrom-claro)]/10 px-4 py-2 rounded-full">
                <span className="text-[var(--color-marrom-claro)] text-sm font-light tracking-wide">
                  PREENCHIMENTO FACIAL
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900 leading-tight">
                Harmonização e
                <br />
                <span className="text-[var(--color-marrom-claro)]">Rejuvenescimento</span>
              </h2>

              <p className="text-base sm:text-lg text-gray-600 font-light leading-relaxed max-w-xl mx-auto lg:mx-0">
                Realce sua beleza natural com preenchimentos faciais. Restauração de volume, contorno e rejuvenescimento com resultados elegantes e harmoniosos.
              </p>

              <div className="space-y-3 sm:space-y-4 pt-2">
                {[
                  'Resultado imediato',
                  'Harmonização natural',
                  'Produtos de alta qualidade'
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
                  className="inline-flex items-center space-x-2 bg-[var(--color-marrom-claro)] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-light hover:bg-[var(--color-marrom-escuro)] transition-all duration-300 group shadow-lg hover:shadow-xl text-sm sm:text-base"
                >
                  <span>Agendar Avaliação</span>
                  <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Gallery images={galleryImages} title="Resultados de Preenchimento" />
      <ProcessSteps steps={steps} title="Processo de Preenchimento" />
      <FAQSection faqs={faqs} title="Dúvidas sobre Preenchimento" />
    </section>
  )
}
