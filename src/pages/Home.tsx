import { motion, AnimatePresence } from "motion/react";
import Hero from "../components/Hero";
import ProjectList from "../components/ProjectList";
import Testimonials from "../components/Testimonials";

export default function Home() {
  return (
    <AnimatePresence>
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Hero />
        <ProjectList />
        <Testimonials />
      </motion.main>
    </AnimatePresence>
  );
}
