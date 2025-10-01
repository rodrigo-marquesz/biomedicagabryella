// src/app/components/header/Header.tsx

'use client'
import Link from 'next/link'
import Image from 'next/image'
import { montserrat } from '@/app/fonts'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import { useState } from 'react'

const navLinks = [
  { href: '#about', label: 'Sobre' },
  { href: '#results', label: 'Resultados' },
  { href: '#contato', label: 'Contato' },
]

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-[var(--color-marrom-claro)] shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto flex items-center justify-between md:h-20 px-4">
        <Link href="#sobre">
          <Image
            src="/images/logo_branco_suave.png"
            alt="Logo"
            width={150}
            height={10}
            className="md:w-[200px]"
          />
        </Link>

        <nav className="hidden space-x-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`
                text-lg relative inline-block text-white
                ${montserrat.className}
                after:content-[''] after:absolute after:left-0 after:-bottom-0
                after:h-[1px] after:w-0 after:bg-white
                after:transition-all after:duration-700 after:ease-in-out
                hover:after:w-full font-light
              `}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden ml-4"
          aria-label="Abrir menu"
        >
          {isOpen ? (
            <XMarkIcon className="h-7 w-7 text-white" />
          ) : (
            <Bars3Icon className="h-7 w-7 text-white" />
          )}
        </button>
      </div>

      {isOpen && (
        <div className="absolute top-16 left-0 flex w-full flex-col items-center space-y-4 bg-white p-4 shadow-lg md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="w-full py-2 text-center text-gray-600 transition hover:bg-gray-100"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  )
}
