import { motion } from "motion/react";
import { ArrowRight, Loader2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { collection, query, orderBy, getDocs } from "firebase/firestore";
import { db } from "../lib/firebase";
import { handleFirestoreError, OperationType } from "../lib/firestore-errors";

export default function ProjectList() {
  const [projects, setProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const q = query(collection(db, "projects"), orderBy("order", "asc"));
        const snap = await getDocs(q);
        setProjects(snap.docs.map(doc => ({ id: doc.id, ...doc.data() })));
      } catch (error) {
        handleFirestoreError(error, OperationType.LIST, "projects");
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  const getAccent = (category: string) => {
    if (category.toLowerCase().includes('gaming')) return "bg-purple-500/10 text-purple-600";
    if (category.toLowerCase().includes('ai')) return "bg-blue-500/10 text-blue-600";
    if (category.toLowerCase().includes('fintech')) return "bg-emerald-500/10 text-emerald-600";
    return "bg-black/5 text-black/60";
  };

  if (loading) {
    return (
      <div className="py-64 flex items-center justify-center">
        <Loader2 className="animate-spin text-black/20" size={48} />
      </div>
    );
  }

  return (
    <section id="work" className="px-6 py-32 max-w-7xl mx-auto uppercase">
      <div className="grid gap-32">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="group grid md:grid-cols-2 gap-12 items-center"
          >
            {/* Desktop Thumbnail */}
            <div className={`hidden md:block ${index % 2 === 0 ? "md:order-1" : "md:order-2"}`}>
              <Link to={`/project/${project.id}`} className="block relative aspect-[4/3] overflow-hidden rounded-2xl bg-black/5 border border-black/5">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  src={project.image}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                />
              </Link>
            </div>

            <div className={`${index % 2 === 0 ? "md:order-2" : "md:order-1"}`}>
              <div className={`inline-block px-3 py-1 rounded-full text-[10px] font-bold tracking-widest ${getAccent(project.category)} mb-6`}>
                {project.category}
              </div>
              <h3 className="text-3xl md:text-5xl font-sans font-medium mb-6 leading-tight group-hover:text-black transition-colors">
                {project.title}
              </h3>

              {/* Mobile Thumbnail */}
              <Link to={`/project/${project.id}`} className="block md:hidden mb-8 relative aspect-[4/3] overflow-hidden rounded-2xl bg-black/5 border border-black/5">
                {project.image && (
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover opacity-90"
                  />
                )}
              </Link>

              <p className="text-lg md:text-xl font-sans text-black/40 font-light mb-10 leading-relaxed normal-case">
                {project.description}
              </p>
              <Link to={`/project/${project.id}`} className="inline-flex items-center gap-2 text-sm font-semibold tracking-widest border-b border-black/10 pb-2 group-hover:border-black transition-all">
                VIEW CASE STUDY
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

