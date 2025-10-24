'use client'
import Link from 'next/link'
import { ArrowRightIcon } from '@heroicons/react/24/solid'
import { VideoPlayer } from '@/app/components/shared/VideoPlayer'
import { Gallery } from '@/app/components/shared/Gallery'
import { FAQSection } from '@/app/components/shared/FAQSection'
import { ProcessSteps } from '@/app/components/shared/ProcessSteps'

const galleryImages = [
  {
    before: '/images/capilar_1_before.png',
    after: '/images/capilar_1_after.png',
    title: 'Tratamento Capilar Masculino'
  },
  {
    before: '/images/capilar_2_before.png',
    after: '/images/capilar_2_after.png',
    title: 'Tratamento Capilar Masculino'
  },
  {
    before: '/images/result_capilar_5.png',
    after: '/images/result_capilar_6.png',
    title: 'Tratamento Capilar Feminino'
  },
  {
    before: '/images/result_capilar_7.png',
    after: '/images/result_capilar_8.png',
    title: 'Tratamento Capilar Feminino'
  }
]

const faqs = [
  {
    question: 'Em quanto tempo verei resultados?',
    answer: 'Depende do metabolismo de cada paciente e da resposta do organismo ao tratamento. De forma geral, os resultados costumam começar a aparecer a partir de 2 meses de tratamento.'
  },
  {
    question: 'O tratamento funciona para homens e mulheres?',
    answer: 'Sim! Nosso protocolo é personalizado e eficaz tanto para pacientes masculinos quanto femininos. Cada caso é avaliado individualmente considerando hormônios, genética e pré-disposições.'
  },
  {
    question: 'Quais são os efeitos colaterais?',
    answer: 'O tratamento capilar é geralmente bem tolerado. Efeitos colaterais são raros e, quando ocorrem, costumam ser leves, como irritação local. Todo o processo é acompanhado por profissional especializado.'
  },
  {
    question: 'Como funciona o acompanhamento?',
    answer: 'Realizamos avaliações mensais com registro fotográfico para monitorar a evolução. O protocolo pode ser ajustado conforme necessário para otimizar os resultados.'
  },
  {
    question: 'Tem algum cuidado depois da aplicação?',
    answer: 'Evitar lavar o cabelo no mesmo dia, não usar boné, evitar sol e atividade física intensa nas primeiras 24 horas.'
  }
]

const steps = [
  {
    number: '01',
    title: 'Avaliação Inicial',
    description: 'Análise detalhada do quadro capilar e criação de protocolo personalizado'
  },
  {
    number: '02',
    title: 'Aplicação',
    description: 'Procedimento realizado com técnicas especializadas e produtos de alta qualidade'
  },
  {
    number: '03',
    title: 'Acompanhamento',
    description: 'Monitoramento mensal com registro fotográfico e ajustes no protocolo'
  }
]

export const HairTreatment = () => {
  return (
    <section id="hair-treatment" className="scroll-mt-20">
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
                  TRATAMENTO CAPILAR
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900 leading-tight">
                Inovação em
                <br />
                <span className="text-[var(--color-marrom-claro)]">Terapia Capilar</span>
              </h2>

              <p className="text-base sm:text-lg text-gray-600 font-light leading-relaxed max-w-xl mx-auto lg:mx-0">
                Um cuidado pensado para quem está percebendo falhas, queda de cabelo ou fios mais finos. O protocolo combina ativos que estimulam o crescimento e fortalecem os fios, sempre de forma personalizada.
              </p>

              <div className="space-y-3 sm:space-y-4 pt-2">
                {[
                  'Resultados gradativos e naturais',
                  'Protocolo personalizado',
                  'Para homens e mulheres'
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

      <Gallery images={galleryImages} title="Transformações Capilares" />
      <ProcessSteps steps={steps} title="Nosso Processo" />
      <FAQSection faqs={faqs} title="Dúvidas sobre Tratamento Capilar" />
    </section>
  )
}
