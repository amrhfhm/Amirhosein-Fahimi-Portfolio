import { motion } from "motion/react";
import { ArrowUpRight, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="px-6 py-32 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-20 mb-32">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-[12px] tracking-[0.4em] text-black font-black mb-4 block uppercase">Get in touch</span>
          <h2 className="text-5xl md:text-7xl font-sans font-bold tracking-tighter leading-[1.1] mb-12">
            Have an idea, a problem, <br /> or a project in mind? Let's talk
          </h2>
          <a 
            href="mailto:MiroFahimi@gmail.com"
            className="text-2xl md:text-4xl font-sans font-medium text-black hover:opacity-70 transition-all border-b-2 border-black/10 pb-4 inline-flex items-center gap-4 group"
          >
            MiroFahimi@gmail.com
            <ArrowUpRight className="w-8 h-8 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
          </a>
        </motion.div>

        <div className="flex flex-col justify-end items-start md:items-end gap-10">
          <div className="flex gap-6">
            <a 
              href="https://www.linkedin.com/in/mirofahimi/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-14 h-14 rounded-full bg-black flex items-center justify-center text-white transition-all duration-300 hover:bg-[#0A66C2] hover:scale-110 active:scale-95 shadow-lg"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="mailto:MiroFahimi@gmail.com"
              className="w-14 h-14 rounded-full bg-black flex items-center justify-center text-white transition-all duration-300 hover:bg-[#EA4335] hover:scale-110 active:scale-95 shadow-lg"
              aria-label="Gmail"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
          <p className="text-sm text-black font-bold max-w-xs md:text-right leading-relaxed">
            Amirhosein Fahimi — Product Designer based in Iran. Helping forward-thinking brands scale globally.
          </p>
        </div>
      </div>

      <div className="pt-8 border-t border-black/10 flex flex-col md:flex-row justify-between items-center gap-4 text-black text-[11px] uppercase tracking-widest font-black">
        <span>© 2026 Amirhosein Fahimi</span>
        <span>Built with Passion</span>
      </div>
    </footer>
  );
}
