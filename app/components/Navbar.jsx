"use client"
import React from 'react'
import { useState } from 'react'
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-10 w-full bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm shadow-sm">
        <div className="container mx-auto flex items-center justify-between px-4 py-3 md:px-6">
          <div className="flex items-center gap-3">
            <svg
              className="h-6 w-6 text-primary"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 
                10-10S17.52 2 12 2zm0 18c-4.41 
                0-8-3.59-8-8s3.59-8 8-8 8 
                3.59 8 8-3.59 8-8 
                8zm-1-13h2v6h-2zm0 8h2v2h-2z"></path>
            </svg>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              uloakuamaobi
            </h2>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-8 md:flex">
            <a className="text-sm font-medium hover:text-primary transition-colors" href="/">Home</a>
            <a className="text-sm font-medium hover:text-primary transition-colors" href="/about">About</a>
            <a className="text-sm font-medium hover:text-primary transition-colors" href="/contact">Contact</a>
          </nav>

          <button className="hidden md:flex min-w-[84px] items-center justify-center rounded-lg bg-[#3b82f6] h-10 px-5 text-sm font-bold text-white shadow-md transition-transform hover:scale-105">
            <span className="truncate">Order Now</span>
          </button>

          {/* Mobile Menu Icon */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden cursor-pointer text-slate-900 dark:text-white">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M4 6h16M4 12h16m-7 6h7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
            </svg>
          </button>
          {
            isOpen && (
              <div className='transition-all duration-300 ease-in-out absolute top-16 left-0 w-full bg-white dark:bg-background-dark md:hidden'>
            <nav className="items-center gap-8 flex flex-col py-4">
            <a className="text-sm font-medium hover:text-primary transition-colors" href="/">Home</a>
            <a className="text-sm font-medium hover:text-primary transition-colors" href="/about">About</a>
            <a className="text-sm font-medium hover:text-primary transition-colors" href="/contact">Contact</a>
          </nav>
          </div>
            )
          }
          
        </div>
      </header>
  )
}

export default Navbar