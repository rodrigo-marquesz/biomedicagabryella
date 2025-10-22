'use client'
import { useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/24/outline'

const faqs = [
  // tratamento capilar
  {
    question: 'Em quanto tempo verei resultados?',
    answer: 'Depende muito do metabolismo de cada paciente e da resposta do organismo ao tratamento. Mas, de forma geral, os resultados costumam começar a aparecer a partir de 2 meses de tratamento.'
  },
  {
    question: 'O tratamento funciona para homens e mulheres?',
    answer: 'Sim! Nosso protocolo é personalizado e eficaz tanto para pacientes masculinos quanto femininos. Cada caso é avaliado individualmente para criar uma formulação específica considerando hormônios, genética e pré-disposições que causem a queda do cabelo.'
  },
  {
    question: 'Quais são os efeitos colaterais?',
    answer: 'O tratamento capilar é geralmente bem tolerado. Efeitos colaterais são raros e, quando ocorrem, costumam ser leves, como leve irritação local. Todo o processo é acompanhado por profissional especializado.'
  },
  {
    question: 'Como funciona o acompanhamento?',
    answer: 'Realizamos avaliações mensais com registro fotográfico para monitorar a evolução. O protocolo pode ser ajustado conforme necessário para otimizar os resultados. Você terá suporte contínuo durante todo o tratamento.'
  },
  {
    question: 'Preciso fazer alguma avaliação antes de iniciar?',
    answer: 'Sim, a avaliação é feita por um profissional especializado, que analisará seu quadro capilar e com isso montaremos um protocolo personalizado para você.'
  },
  {
    question: 'Faz o cabelo crescer mesmo?',
    answer: 'Sim! O tratamento estimula a circulação e o metabolismo do folículo, fortalecendo os fios e ajudando no crescimento saudável.'
  },
  {
    question: 'Ajuda na queda do cabelo?',
    answer: 'Sim! O tratamento possui diversos ativos que diminuem a queda dos fios.'
  },
  {
    question: 'Tem algum cuidado depois da aplicação?',
    answer: 'Evitar lavar o cabelo no mesmo dia, não usar boné, evitar sol e atividade física intensa nas primeiras 24 horas.'
  },
  // botox
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
  // preenchimento facial
  {
    question: 'Em quanto tempo vejo o resultado?',
    answer: 'O resultado é imediato, mas o aspecto final aparece em até 15 dias, quando o produto se acomoda e o inchaço diminui.'
  },
  {
    question: 'Quanto tempo dura o preenchimento?',
    answer: 'Depende da região e do metabolismo de cada paciente, mas geralmente o efeito dura de 8 a 12 meses.'
  },
  {
    question: '⁠Tem algum cuidado após o procedimento?',
    answer: 'Sim! Evite exercícios físicos, exposição solar, bebidas alcoólicas e maquiagem nas primeiras 24 horas. Alguns preenchimentos também exigem cuidados específicos, que explico sempre no pós-procedimento.'
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
