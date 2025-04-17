"use client"

import { motion } from "framer-motion"
import SocialLinks from "./SocialLinks"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-muted text-muted-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8 md:mb-0"
          >
            <h2 className="text-2xl font-bold text-foreground">Haxdev</h2>
            <p className="text-sm">The Crazy Gamer On The Planet.</p>
          </motion.div>
          <motion.nav
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-8 md:mb-0"
          >
            <ul className="flex flex-wrap justify-center md:justify-end space-x-6">
              {["Home", "About", "Portfolio", "Gallery", "Contact"].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="hover:text-foreground transition-colors duration-200">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.nav>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="border-t border-border pt-8 mt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-sm mb-4 md:mb-0">&copy; {currentYear} Haxdev. All rights reserved.</p>
          <SocialLinks />
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
