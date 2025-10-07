'use client'
import { useState } from 'react'
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline'

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleSubmit = () => {
    const whatsappMessage = `Olá! Gostaria de agendar uma avaliação.%0A%0ANome: ${formData.name}%0AEmail: ${formData.email}%0ATelefone: ${formData.phone}%0AMensagem: ${formData.message}`
    window.open(`https://wa.me/5551998902287?text=${whatsappMessage}`, '_blank')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section id="contact" className="relative min-h-screen flex items-center justify-center py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <div className="inline-block bg-[var(--color-marrom-claro)]/10 px-4 py-2 rounded-full mb-4">
            <span className="text-[var(--color-marrom-claro)] text-sm font-light tracking-wide">FALE CONOSCO</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">
            Agende sua <span className="text-[var(--color-marrom-claro)]">Avaliação</span>
          </h2>
          <p className="text-lg text-gray-600 font-light max-w-2xl mx-auto">
            Entre em contato e dê o primeiro passo para recuperar sua confiança
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-light text-gray-700 mb-2">
                    Nome completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[var(--color-marrom-claro)] focus:ring-2 focus:ring-[var(--color-marrom-claro)]/20 transition-all outline-none"
                    placeholder="Seu nome"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-light text-gray-700 mb-2">
                    E-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[var(--color-marrom-claro)] focus:ring-2 focus:ring-[var(--color-marrom-claro)]/20 transition-all outline-none"
                    placeholder="seu@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-light text-gray-700 mb-2">
                    Telefone/WhatsApp
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[var(--color-marrom-claro)] focus:ring-2 focus:ring-[var(--color-marrom-claro)]/20 transition-all outline-none"
                    placeholder="(00) 00000-0000"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-light text-gray-700 mb-2">
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[var(--color-marrom-claro)] focus:ring-2 focus:ring-[var(--color-marrom-claro)]/20 transition-all outline-none resize-none"
                    placeholder="Conte-nos um pouco sobre seu caso..."
                  />
                </div>

                <button
                  onClick={handleSubmit}
                  className="w-full bg-[var(--color-marrom-claro)] text-white py-4 rounded-lg font-light hover:bg-opacity-90 transition-all duration-300 hover:shadow-lg"
                >
                  Enviar Mensagem via WhatsApp
                </button>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-8 shadow-xl space-y-6">
              <h3 className="text-2xl font-light text-gray-900 mb-6">Informações de Contato</h3>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[var(--color-marrom-claro)]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <PhoneIcon className="w-6 h-6 text-[var(--color-marrom-claro)]" />
                </div>
                <div>
                  <div className="text-sm text-gray-500 font-light mb-1">Telefone</div>
                  <a href="tel:+5554999999999" className="text-gray-900 hover:text-[var(--color-marrom-claro)] transition-colors">
                    (51)99890-2287
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[var(--color-marrom-claro)]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <EnvelopeIcon className="w-6 h-6 text-[var(--color-marrom-claro)]" />
                </div>
                <div>
                  <div className="text-sm text-gray-500 font-light mb-1">E-mail</div>
                  <a href="mailto:contato@dragabryella.com.br" className="text-gray-900 hover:text-[var(--color-marrom-claro)] transition-colors">
                    contato@dragabryella.com.br
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[var(--color-marrom-claro)]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPinIcon className="w-6 h-6 text-[var(--color-marrom-claro)]" />
                </div>
                <div>
                  <div className="text-sm text-gray-500 font-light mb-1">Localização</div>
                  <p className="text-gray-900">
                    Unique Business Center - Av. Centenário, 585 - Torre 1 - Sala 1211. Gravataí - RS
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[var(--color-marrom-claro)]/10 to-gray-100 rounded-2xl p-8">
              <h4 className="text-xl font-light text-gray-900 mb-4">Horário de Atendimento</h4>
              <div className="space-y-3 text-gray-700 font-light">
                <div className="flex justify-between">
                  <span>Quartas e Quintas</span>
                  <span>12h às 20h</span>
                </div>
                <div className="flex justify-between">
                  <span>Sábados</span>
                  <span>8h às 12h</span>
                </div>
                <div className="flex justify-between text-gray-500">
                  <span>Domingos e outros</span>
                  <span>Fechado</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
