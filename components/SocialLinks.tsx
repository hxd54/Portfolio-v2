"use client"

import { motion } from "framer-motion"
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react"
import type React from "react" // Added import for React

interface SocialLinkProps {
  href: string
  icon: React.ReactNode
  label: string
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, icon, label }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.2 }}
    whileTap={{ scale: 0.9 }}
    className="text-gray-400 hover:text-white transition-colors duration-200"
  >
    <span className="sr-only">{label}</span>
    {icon}
  </motion.a>
)

const SocialLinks: React.FC<{ className?: string }> = ({ className }) => {
  const socialLinks = [
    { href: "https://facebook.com/vaillantrukabura54", icon: <Facebook size={24} />, label: "Facebook" },
    { href: "https://instagram.com/vaillant_rukabura54", icon: <Instagram size={24} />, label: "Instagram" },
    { href: "https://x.com/haxdev54", icon: <Twitter size={24} />, label: "X (Twitter)" },
    { href: "https://linkedin.com/in/haxdev54", icon: <Linkedin size={24} />, label: "LinkedIn" },
  ]

  return (
    <div className={`flex space-x-4 ${className}`}>
      {socialLinks.map((link) => (
        <SocialLink key={link.href} {...link} />
      ))}
    </div>
  )
}

export default SocialLinks
