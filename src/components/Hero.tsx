import { motion } from "motion/react";

export default function Hero() {
  return (
    <section className="relative pt-32">
      <motion.div
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        className="w-full h-[60vh] md:h-[80vh] relative"
      >
        <div className="w-full h-full overflow-hidden shadow-2xl relative group bg-[#121212]">
          <div className="absolute inset-0 bg-black/20 pointer-events-none" />
          
          <div className="absolute inset-0 flex items-center justify-center p-8 md:p-24 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1.2 }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-medium leading-[1.1] tracking-tighter">
                <span style={{ color: '#F8F8F8' }} className="block">Crafted from user insight,</span>
                <span style={{ color: '#25a9b3' }} className="block">Validated by data,</span>
                <span style={{ color: '#b48864' }} className="block text-balance">Aligned with business</span>
              </h2>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
