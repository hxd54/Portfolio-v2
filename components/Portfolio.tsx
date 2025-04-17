"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const projects = [
  {
    id: 1,
    title: "HXD Gaming",
    description:
      "HXD Gaming! is an exciting project where I combine my expertise in Full Stack Development with my passion for gaming. This project aims to create immersive and engaging gaming experiences for players worldwide.",
    image: "/projects/neon hxd_0.png",
  },
  {
    id: 2,
    title: "Movie Mood",
    description: "Movie Mood is a personalized movie recommendation platform that helps users discover films based on their selected mood and preferred genre.",
    image: "/projects/introducing.jpg",
  },
  {
    id: 3,
    title: "HXD Renders",
    description: "I specialize in crafting captivating motion graphics and 3D text animations. My work brings brands and ideas to life through innovative visual storytelling. Let's create something extraordinary together.",
    image: "/projects/green sci-fi HXD.png",
  },
]

const Portfolio = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  }

  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My Portfolio
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{
                scale: 1.03,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              }}
              className="bg-card text-card-foreground rounded-xl overflow-hidden shadow-md border border-border transition-all duration-300"
            >
              <div className="relative h-64 w-full">
                <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <motion.a
                  href={`#project-${project.id}`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center text-primary hover:text-primary/80"
                >
                  View Project
                  <svg
                    className="ml-2 w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Portfolio
