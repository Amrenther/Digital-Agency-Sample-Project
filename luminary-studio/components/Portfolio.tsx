"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { projects } from "@/lib/data";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="py-28 bg-[#080c18] relative overflow-hidden"
    >
      {/* Top divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-purple-400 text-sm font-semibold tracking-widest uppercase">
            Our Work
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mt-4 mb-6">
            Projects We&apos;re{" "}
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Proud Of
            </span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            A curated selection of work that showcases our craft, creativity, and
            commitment to excellence.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              className="group relative rounded-2xl overflow-hidden border border-white/10 aspect-[4/3] bg-[#0d1535] cursor-pointer"
              id={`portfolio-card-${project.id}`}
            >
              {/* Image */}
              <Image
                src={project.imageSrc}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />

              {/* Hover Overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-[#0a0f1e] via-[#0a0f1e]/80 to-transparent flex flex-col justify-end p-6"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                {/* Category badge */}
                <span className="inline-block px-3 py-1 rounded-full bg-cyan-500/20 border border-cyan-500/30 text-cyan-400 text-xs font-semibold mb-3 w-fit">
                  {project.category}
                </span>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-2">
                  {project.title}
                </h3>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs text-white/60 bg-white/10 px-2 py-0.5 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* View Project Link */}
                <motion.div
                  className="flex items-center gap-2 text-cyan-400 text-sm font-semibold"
                  initial={{ x: -10, opacity: 0 }}
                  whileHover={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  <span>View Project</span>
                  <span className="text-base">→</span>
                </motion.div>
              </motion.div>

              {/* Always-visible subtle gradient at bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-100 group-hover:opacity-0 transition-opacity duration-300 pointer-events-none" />
              {/* Always show title at bottom when not hovered */}
              <div className="absolute bottom-0 left-0 right-0 p-4 group-hover:opacity-0 transition-opacity duration-300">
                <p className="text-white font-semibold text-sm">{project.title}</p>
                <p className="text-white/60 text-xs">{project.category}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-14 text-center"
        >
          <motion.button
            className="px-8 py-4 rounded-full border border-white/20 text-white font-semibold hover:bg-white/5 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            id="portfolio-view-all-btn"
          >
            View All Projects →
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
