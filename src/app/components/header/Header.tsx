'use client'
import Link from 'next/link'
import Image from 'next/image'
import { montserrat } from '@/app/fonts'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import { useState, useEffect } from 'react'

const navLinks = [
  { href: '#about', label: 'Sobre' },
  { href: '#results', label: 'Resultados' },
  { href: '#how-it-works', label: 'Como Funciona' },
  { href: '#benefits', label: 'Benefícios' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contact', label: 'Contato' },
]

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  return (
    <header 
      className={`
        fixed top-0 left-0 right-0 z-50 
        transition-all duration-300
        ${isScrolled ? 'bg-[var(--color-marrom-claro)] shadow-lg' : 'bg-[var(--color-marrom-claro)] shadow-md'}
      `}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-18 lg:h-20">
          <Link href="#about" className="flex-shrink-0 z-50">
            <Image
              src="/images/logo_branco_suave.png"
              alt="Dra. Gabryella Klein"
              width={160}
              height={40}
              className="h-8 sm:h-9 lg:h-10 w-auto"
              priority
            />
          </Link>

          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`
                  text-sm xl:text-base relative inline-block text-white px-3 py-2
                  ${montserrat.className}
                  after:content-[''] after:absolute after:left-3 after:right-3 after:bottom-1
                  after:h-[1px] after:w-0 after:bg-white after:mx-auto
                  after:transition-all after:duration-500 after:ease-out
                  hover:after:w-[calc(100%-1.5rem)]
                  font-light transition-colors
                `}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-white z-50"
            aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
          >
            {isOpen ? (
              <XMarkIcon className="h-6 w-6 sm:h-7 sm:w-7" />
            ) : (
              <Bars3Icon className="h-6 w-6 sm:h-7 sm:w-7" />
            )}
          </button>
        </div>
      </div>

      <div 
        className={`
          fixed inset-0 bg-white lg:hidden transition-all duration-300 ease-in-out
          ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}
        `}
        style={{ top: '4rem' }}
      >
        <nav className="flex flex-col items-center justify-center h-full space-y-6 p-6">
          {navLinks.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              className={`
                text-xl sm:text-2xl text-gray-800 font-light
                transition-all duration-300 hover:text-[var(--color-marrom-claro)]
                ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}
              `}
              style={{ 
                transitionDelay: isOpen ? `${index * 50}ms` : '0ms' 
              }}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
