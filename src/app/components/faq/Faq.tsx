'use client'
import { useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/24/outline'

const faqs = [
  {
    question: 'Quanto tempo leva para ver os primeiros resultados?',
    answer: 'Os primeiros resultados podem ser observados em aproximadamente 30 dias de tratamento. Resultados mais significativos e visíveis geralmente aparecem entre 90 a 120 dias, com melhora progressiva do crescimento capilar.'
  },
  {
    question: 'O tratamento funciona para homens e mulheres?',
    answer: 'Sim! Nosso protocolo é personalizado e eficaz tanto para pacientes masculinos quanto femininos. Cada caso é avaliado individualmente para criar uma formulação específica considerando hormônios, genética e histórico médico.'
  },
  {
    question: 'Quais são os efeitos colaterais?',
    answer: 'O tratamento com enzimas capilares e minoxidil é geralmente bem tolerado. Efeitos colaterais são raros e, quando ocorrem, costumam ser leves, como leve irritação local. Todo o processo é acompanhado por profissional especializado.'
  },
  {
    question: 'Como funciona o acompanhamento?',
    answer: 'Realizamos avaliações mensais com registro fotográfico para monitorar a evolução. O protocolo pode ser ajustado conforme necessário para otimizar os resultados. Você terá suporte contínuo durante todo o tratamento.'
  },
  {
    question: 'Preciso fazer exames antes de iniciar?',
    answer: 'Sim, solicitamos alguns exames laboratoriais básicos para avaliar seu estado de saúde geral e identificar possíveis causas da queda capilar. Isso permite criar um protocolo verdadeiramente personalizado e seguro.'
  },
  {
    question: 'O resultado é permanente?',
    answer: 'Os resultados são duradouros enquanto o tratamento é mantido. A queda capilar tem causas multifatoriais, e a manutenção é importante para preservar os ganhos obtidos. Discutimos estratégias de manutenção após a fase inicial.'
  }
]

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="relative py-20 bg-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <div className="inline-block bg-[var(--color-marrom-claro)]/10 px-4 py-2 rounded-full mb-4">
            <span className="text-[var(--color-marrom-claro)] text-sm font-light tracking-wide">DÚVIDAS FREQUENTES</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">
            Perguntas <span className="text-[var(--color-marrom-claro)]">Frequentes</span>
          </h2>
          <p className="text-lg text-gray-600 font-light max-w-2xl mx-auto">
            Encontre respostas para as dúvidas mais comuns sobre nosso tratamento
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left"
              >
                <span className="text-lg font-light text-gray-900 pr-4">
                  {faq.question}
                </span>
                <ChevronDownIcon 
                  className={`w-6 h-6 text-[var(--color-marrom-claro)] flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-5 pt-2">
                  <p className="text-gray-600 font-light leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 font-light mb-4">
            Não encontrou sua resposta?
          </p>
          <a 
            href="#contato" 
            className="inline-block bg-[var(--color-marrom-claro)] text-white px-6 py-3 rounded-lg font-light hover:bg-opacity-90 transition-all duration-300"
          >
            Entre em Contato
          </a>
        </div>
      </div>
    </section>
  )
}
