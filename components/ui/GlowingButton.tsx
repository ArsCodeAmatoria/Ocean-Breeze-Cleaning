'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

interface GlowingButtonProps {
  children: React.ReactNode
  href?: string
  onClick?: () => void
  className?: string
  type?: 'primary' | 'secondary' | 'accent'
  size?: 'sm' | 'md' | 'lg'
  glowColor?: string
  fullWidth?: boolean
  disabled?: boolean
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
}

export default function GlowingButton({
  children,
  href,
  onClick,
  className = '',
  type = 'primary',
  size = 'md',
  glowColor,
  fullWidth = false,
  disabled = false,
  icon,
  iconPosition = 'left'
}: GlowingButtonProps) {
  // Determine button styles based on type
  const getButtonStyle = () => {
    switch (type) {
      case 'primary':
        return {
          background: 'bg-gradient-to-r from-blue-600 to-cyan-500',
          text: 'text-white',
          hover: 'hover:shadow-[0_0_25px_rgba(0,170,255,0.5)]',
          glow: glowColor || 'rgba(0, 170, 255, 0.5)'
        }
      case 'secondary':
        return {
          background: 'bg-transparent border-2 border-blue-500',
          text: 'text-white',
          hover: 'hover:shadow-[0_0_20px_rgba(0,170,255,0.4)]',
          glow: glowColor || 'rgba(0, 170, 255, 0.4)'
        }
      case 'accent':
        return {
          background: 'bg-gradient-to-r from-cyan-400 to-teal-500',
          text: 'text-white',
          hover: 'hover:shadow-[0_0_25px_rgba(45,212,191,0.5)]',
          glow: glowColor || 'rgba(45, 212, 191, 0.5)'
        }
      default:
        return {
          background: 'bg-gradient-to-r from-blue-600 to-cyan-500',
          text: 'text-white',
          hover: 'hover:shadow-[0_0_25px_rgba(0,170,255,0.5)]',
          glow: glowColor || 'rgba(0, 170, 255, 0.5)'
        }
    }
  }

  // Determine button size
  const getSizeClass = () => {
    switch (size) {
      case 'sm': return 'px-4 py-2 text-sm'
      case 'md': return 'px-6 py-3 text-base'
      case 'lg': return 'px-8 py-4 text-lg'
      default: return 'px-6 py-3 text-base'
    }
  }

  const buttonStyle = getButtonStyle()
  const sizeClass = getSizeClass()
  const widthClass = fullWidth ? 'w-full' : ''
  const disabledClass = disabled ? 'opacity-60 cursor-not-allowed' : 'cursor-pointer'

  const buttonContent = (
    <>
      <span className="relative z-10 flex items-center justify-center gap-2">
        {icon && iconPosition === 'left' && icon}
        {children}
        {icon && iconPosition === 'right' && icon}
      </span>
      <motion.span 
        className="absolute inset-0 rounded-md z-0"
        style={{ 
          background: 'radial-gradient(circle, var(--glow-color) 0%, transparent 70%)',
          opacity: 0 
        }}
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 0.4 }}
        transition={{ duration: 0.2 }}
        animate={{ 
          '--glow-color': buttonStyle.glow 
        } as any}
      />
    </>
  )

  // Common button classes
  const commonClasses = `relative ${buttonStyle.background} ${buttonStyle.text} ${sizeClass} ${buttonStyle.hover} ${widthClass} ${disabledClass} ${className} rounded-md font-medium transition duration-300 overflow-hidden`

  // Use Link if href is provided, otherwise use button
  if (href) {
    return (
      <Link 
        href={href} 
        className={commonClasses}
        tabIndex={disabled ? -1 : 0}
        onClick={disabled ? (e) => e.preventDefault() : onClick}
      >
        {buttonContent}
      </Link>
    )
  }

  return (
    <motion.button
      className={commonClasses}
      onClick={onClick}
      disabled={disabled}
      whileHover={{ scale: disabled ? 1 : 1.03 }}
      whileTap={{ scale: disabled ? 1 : 0.97 }}
    >
      {buttonContent}
    </motion.button>
  )
} 