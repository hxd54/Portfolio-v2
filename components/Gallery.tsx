"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useRef } from "react"

const galleryImages = [
  // Row 1
  [
    { id: 1, src: "/gallery/coolhxd.png", alt: "Gallery image 1" },
    { id: 2, src: "/gallery/cordic_hxd.png", alt: "Gallery image 2" },
    { id: 3, src: "/gallery/Dark and Robots.png", alt: "Gallery image 3" },
    { id: 4, src: "/gallery/HXD in the box.png", alt: "Gallery image 4" },
    { id: 5, src: "/gallery/HXD's.png", alt: "Gallery image 5" },
  ],
  // Row 2
  [
    { id: 6, src: "/gallery/christmas hxd.png", alt: "Gallery image 6" },
    { id: 7, src: "/gallery/know your limits.png", alt: "Gallery image 7" },
    { id: 8, src: "/gallery/opt illusion logo_0.png", alt: "Gallery image 8" },
    { id: 9, src: "/gallery/pawns.png", alt: "Gallery image 9" },
    { id: 10, src: "/gallery/the camera.png", alt: "Gallery image 10" },
  ],
  // Row 3
  [
    { id: 11, src: "/gallery/The HXD Frame (HD).png", alt: "Gallery image 11" },
    { id: 12, src: "/gallery/HXD.png", alt: "Gallery image 12" },
    { id: 13, src: "/gallery/you're not ready for 2k25(4k).png", alt: "Gallery image 13" },
    { id: 14, src: "/gallery/fuzzy HXD.png", alt: "Gallery image 14" },
    { id: 15, src: "/gallery/Clothy HXD.png", alt: "Gallery image 15" },
  ],
]

const Gallery = () => {
  const constraintsRef = useRef(null)

  return (
    <section id="gallery" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Gallery
        </motion.h2>

        <div className="overflow-hidden" ref={constraintsRef}>
          {galleryImages.map((row, rowIndex) => (
            <motion.div
              key={`row-${rowIndex}`}
              className="flex gap-4 mb-4 py-2"
              initial={{ x: rowIndex % 2 === 0 ? "10%" : "-10%" }}
              animate={{
                x: rowIndex % 2 === 0 ? "-10%" : "10%",
              }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "mirror",
                duration: 20 + rowIndex * 5,
                ease: "linear",
              }}
            >
              {row.map((image) => (
                <motion.div
                  key={image.id}
                  className="relative min-w-[300px] h-[200px] rounded-lg overflow-hidden shadow-lg"
                  whileHover={{
                    scale: 1.05,
                    zIndex: 10,
                    transition: { duration: 0.3 },
                  }}
                  drag
                  dragConstraints={constraintsRef}
                >
                  <Image src={image.src || "/placeholder.svg"} alt={image.alt} fill className="object-cover" />
                </motion.div>
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery
