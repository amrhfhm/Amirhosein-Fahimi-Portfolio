import React, { useState, useEffect } from "react";
import { 
  LayoutDashboard, 
  FolderKanban, 
  FileText, 
  MessageSquareQuote, 
  Globe, 
  BarChart3, 
  Plus, 
  Save, 
  Eye, 
  Image as ImageIcon, 
  Settings,
  ChevronRight,
  MoreHorizontal,
  Loader2
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { 
  collection, 
  getDocs, 
  doc, 
  updateDoc, 
  setDoc, 
  addDoc, 
  deleteDoc, 
  query, 
  orderBy, 
  onSnapshot,
  getDoc
} from "firebase/firestore";
import { db, auth } from "../lib/firebase";
import { migrateData } from "../lib/migration";

enum OperationType {
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
  LIST = 'list',
  GET = 'get',
  WRITE = 'write',
}

interface FirestoreErrorInfo {
  error: string;
  operationType: OperationType;
  path: string | null;
  authInfo: any;
}

function handleFirestoreError(error: unknown, operationType: OperationType, path: string | null) {
  const errInfo: FirestoreErrorInfo = {
    error: error instanceof Error ? error.message : String(error),
    authInfo: {
      userId: auth.currentUser?.uid,
      email: auth.currentUser?.email,
    },
    operationType,
    path
  }
  console.error('Firestore Error: ', JSON.stringify(errInfo));
  throw new Error(JSON.stringify(errInfo));
}

type Tab = "overview" | "projects" | "editor" | "testimonials" | "testimonial-editor" | "seo";

export default function Admin() {
  const [activeTab, setActiveTab] = useState<Tab>("overview");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [isMigrating, setIsMigrating] = useState(false);

  const handleMigrate = async () => {
    setIsMigrating(true);
    try {
      await migrateData();
      alert("Migration complete!");
    } catch (error) {
      console.error(error);
      alert("Migration failed.");
    } finally {
      setIsMigrating(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F9FAFB] flex font-sans selection:bg-black selection:text-white">
      {/* Sidebar */}
      <aside 
        className={`bg-white border-r border-black/5 flex flex-col transition-all duration-500 ${isSidebarOpen ? "w-64" : "w-20"}`}
      >
        <div className="h-20 flex items-center px-6 border-b border-black/5 gap-3 overflow-hidden">
          <div className="w-8 h-8 bg-black rounded-lg flex-shrink-0 flex items-center justify-center text-white font-display font-black text-xs">
            AF
          </div>
          {isSidebarOpen && (
            <span className="font-display font-medium tracking-tight text-sm">Dashboard</span>
          )}
        </div>

        <nav className="flex-grow p-4 space-y-1">
          <NavItem 
            icon={<LayoutDashboard size={18} />} 
            label="Overview" 
            active={activeTab === "overview"} 
            onClick={() => setActiveTab("overview")}
            collapsed={!isSidebarOpen}
          />
          <NavItem 
            icon={<FolderKanban size={18} />} 
            label="Projects" 
            active={activeTab === "projects" || activeTab === "editor"} 
            onClick={() => setActiveTab("projects")}
            collapsed={!isSidebarOpen}
          />
          <NavItem 
            icon={<MessageSquareQuote size={18} />} 
            label="Testimonials" 
            active={activeTab === "testimonials" || activeTab === "testimonial-editor"} 
            onClick={() => setActiveTab("testimonials")}
            collapsed={!isSidebarOpen}
          />
          <NavItem 
            icon={<Globe size={18} />} 
            label="SEO" 
            active={activeTab === "seo"} 
            onClick={() => setActiveTab("seo")}
            collapsed={!isSidebarOpen}
          />
        </nav>

        <div className="p-4 border-t border-black/5">
           <NavItem 
            icon={<Settings size={18} />} 
            label="Settings" 
            active={false}
            onClick={() => {}}
            collapsed={!isSidebarOpen}
          />
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-grow flex flex-col min-w-0">
        <header className="h-20 bg-white border-b border-black/5 flex items-center justify-between px-8">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="p-2 hover:bg-black/5 rounded-lg transition-colors text-black/40"
            >
              <ChevronRight className={`transition-transform duration-500 ${isSidebarOpen ? "rotate-180" : ""}`} size={20} />
            </button>
            <h2 className="text-sm font-medium text-black capitalize">{activeTab.replace("-", " ")}</h2>
          </div>
          <div className="flex items-center gap-3">
            <button 
              onClick={handleMigrate} 
              disabled={isMigrating}
              className="px-4 py-2 text-xs font-bold uppercase tracking-widest text-[#25A9B3] hover:text-[#25A9B3]/80 transition-colors disabled:opacity-50"
            >
              {isMigrating ? "Migrating..." : "Seed Data"}
            </button>
            <button className="px-4 py-2 text-xs font-bold uppercase tracking-widest text-black/40 hover:text-black transition-colors flex items-center gap-2">
              <Eye size={14} /> Preview
            </button>
            <button className="px-5 py-2 bg-black text-white rounded-full text-xs font-bold uppercase tracking-widest hover:bg-black/80 transition-colors flex items-center gap-2">
              <Save size={14} /> Global Save
            </button>
          </div>
        </header>

        <div className="flex-grow overflow-y-auto p-8">
          <AnimatePresence mode="wait">
            {activeTab === "overview" && <OverviewView key="overview" onNewProject={() => { (window as any)._editingProjectId = null; setActiveTab("editor"); }} />}
            {activeTab === "projects" && <ProjectsView key="projects" onEditProject={(id) => { setActiveTab("editor"); (window as any)._editingProjectId = id; }} onNewProject={() => { (window as any)._editingProjectId = null; setActiveTab("editor"); }} />}
            {activeTab === "editor" && <EditorView key="editor" id={(window as any)._editingProjectId} onBack={() => setActiveTab("projects")} />}
            {activeTab === "testimonials" && <TestimonialsView key="testimonials" onEdit={(id) => { (window as any)._editingTestimonialId = id; setActiveTab("testimonial-editor"); }} onNew={() => { (window as any)._editingTestimonialId = null; setActiveTab("testimonial-editor"); }} />}
            {activeTab === "testimonial-editor" && <TestimonialEditorView key="testimonial-editor" id={(window as any)._editingTestimonialId} onBack={() => setActiveTab("testimonials")} />}
            {activeTab === "seo" && <SEOView key="seo" />}
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}

function NavItem({ icon, label, active, onClick, collapsed }: { icon: React.ReactNode, label: string, active: boolean, onClick: () => void, collapsed: boolean }) {
  return (
    <button 
      onClick={onClick}
      className={`
        w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200
        ${active ? "bg-black text-white shadow-lg shadow-black/10" : "text-black/50 hover:bg-black/5 hover:text-black"}
      `}
    >
      <div className="flex-shrink-0">{icon}</div>
      {!collapsed && <span className="text-sm font-medium whitespace-nowrap">{label}</span>}
    </button>
  );
}

function OverviewView({ onNewProject }: { onNewProject: () => void, key?: string }) {
  const [stats, setStats] = useState({ visits: "2.4k", inquiries: "14", views: "842", success: "92%" });

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="max-w-6xl space-y-10"
    >
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-display font-medium tracking-tight mb-1">Welcome back, Amirhosein</h1>
          <p className="text-sm text-black/40">Here's what's happening with your portfolio lately.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard label="Total Visits" value={stats.visits} change="+12%" icon={<BarChart3 size={20} />} />
        <StatCard label="Inquiries" value={stats.inquiries} change="+3" icon={<MessageSquareQuote size={20} />} />
        <StatCard label="Case Study Views" value={stats.views} change="+18%" icon={<Eye size={20} />} />
        <StatCard label="Form Success" value={stats.success} change="+2%" icon={<FolderKanban size={20} />} />
      </div>

      <div className="grid lg:grid-cols-[2fr_1fr] gap-8">
        <div className="bg-white p-8 rounded-[32px] border border-black/5 space-y-6">
          <div className="flex lg:items-center justify-between">
            <h3 className="text-lg font-display font-medium">Recent Activity</h3>
            <button className="text-[10px] font-black uppercase tracking-widest text-[#25A9B3]">View History</button>
          </div>
          <div className="space-y-4">
             {[
               { entry: "Updated 'Bit24 KYC' Case Study", time: "2 hours ago", color: "blue" },
               { entry: "Received new inquiry from Jane Cooper", time: "5 hours ago", color: "green" },
               { entry: "Added new testimonial from David Smith", time: "1 day ago", color: "purple" },
               { entry: "Modified SEO meta tags for Home", time: "2 days ago", color: "amber" },
             ].map((action, i) => (
               <div key={i} className="flex items-center justify-between py-3 border-b border-black/5 last:border-0 group">
                  <div className="flex items-center gap-4">
                     <div className={`w-2 h-2 rounded-full bg-${action.color}-600/40 opacity-0 group-hover:opacity-100 transition-opacity`} />
                     <span className="text-sm text-black/70 group-hover:text-black transition-colors">{action.entry}</span>
                  </div>
                  <span className="text-xs text-black/30">{action.time}</span>
               </div>
             ))}
          </div>
        </div>

        <div className="bg-black text-white p-8 rounded-[32px] flex flex-col justify-between relative overflow-hidden group">
          <div className="relative z-10">
            <h3 className="text-lg font-display font-medium mb-2">Build something new</h3>
            <p className="text-white/40 text-sm leading-relaxed">Your projects are the heartbeat of your portfolio. Add a new one today.</p>
          </div>
          <button 
            onClick={onNewProject}
            className="relative z-10 mt-12 w-full py-4 bg-white text-black rounded-2xl text-xs font-black uppercase tracking-[0.2em] hover:scale-[1.02] transition-transform flex items-center justify-center gap-2 font-display"
          >
            <Plus size={16} /> New Project
          </button>
          {/* Decorative element */}
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#25A9B3]/20 blur-[60px] rounded-full group-hover:bg-[#25A9B3]/40 transition-colors duration-1000" />
        </div>
      </div>
    </motion.div>
  );
}

function StatCard({ label, value, change, icon }: { label: string, value: string, change: string, icon: React.ReactNode }) {
  return (
    <div className="bg-white p-6 rounded-[28px] border border-black/5 space-y-4 hover:shadow-sm transition-all duration-300">
      <div className="flex items-center justify-between">
        <div className="p-2.5 bg-[#F3F4F6] rounded-xl text-black/40">{icon}</div>
        <span className="text-[10px] font-black uppercase text-[#25A9B3]">{change}</span>
      </div>
      <div>
        <h4 className="text-2xl font-display font-medium tracking-tight leading-none">{value}</h4>
        <p className="text-xs text-black/40 font-medium uppercase tracking-widest mt-2">{label}</p>
      </div>
    </div>
  );
}

function ProjectsView({ onEditProject, onNewProject }: { onEditProject: (id: string) => void, onNewProject: () => void, key?: string }) {
  const [projects, setProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const q = query(collection(db, "projects"), orderBy("order", "asc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setProjects(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
      setLoading(false);
    }, (error) => handleFirestoreError(error, OperationType.LIST, "projects"));
    return () => unsubscribe();
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="max-w-6xl space-y-8"
    >
      <div className="flex items-center justify-between">
        <div>
           <h2 className="text-2xl font-display font-medium">Projects</h2>
           <p className="text-sm text-black/40">Manage your work and display order.</p>
        </div>
        <button 
          onClick={onNewProject}
          className="p-3 bg-black text-white rounded-xl flex items-center justify-center transition-transform hover:scale-110 active:scale-95 shadow-xl shadow-black/10"
        >
          <Plus size={20} />
        </button>
      </div>

      {loading ? (
        <div className="h-64 flex items-center justify-center">
          <Loader2 className="animate-spin text-black/20" size={32} />
        </div>
      ) : (
        <div className="grid gap-4">
          {projects.map((project, i) => (
            <div 
              key={project.id} 
              onClick={() => onEditProject(project.id)}
              className="bg-white p-4 pr-6 rounded-[24px] border border-black/5 flex items-center justify-between group hover:border-black/10 transition-all cursor-pointer"
            >
              <div className="flex items-center gap-6">
                <div className="w-16 h-12 bg-black/5 rounded-xl flex-shrink-0 overflow-hidden">
                  {project.image && <img src={project.image} alt={project.title} className="w-full h-full object-cover" />}
                </div>
                <div>
                  <h4 className="font-medium text-sm text-black">{project.title}</h4>
                  <div className="flex items-center gap-3 mt-1">
                    <span className="text-[10px] uppercase font-black tracking-widest text-black/30">{project.category}</span>
                    <span className="w-1 h-1 rounded-full bg-black/10" />
                    <span className="text-[10px] uppercase font-black tracking-widest text-[#25A9B3]">{project.status || 'Draft'}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs text-black/30 hidden md:block">Updated {new Date(project.updatedAt).toLocaleDateString()}</span>
                <button className="p-2 text-black/20 hover:text-black transition-colors">
                  <MoreHorizontal size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </motion.div>
  );
}

function EditorView({ id, onBack }: { id: string | null, onBack: () => void, key?: string }) {
  const [project, setProject] = useState<any>({
    title: "",
    category: "",
    description: "",
    role: "",
    timeline: "",
    image: "",
    overview: "",
    problem: "",
    solution: "",
    accent: "",
    order: 0,
    thinking: [],
    comparisons: [],
    sections: []
  });
  const [loading, setLoading] = useState(id ? true : false);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (!id) return;
    const fetch = async () => {
      try {
        const docRef = doc(db, "projects", id);
        const snap = await getDoc(docRef);
        if (snap.exists()) setProject(snap.data());
      } catch (error) {
        handleFirestoreError(error, OperationType.GET, `projects/${id}`);
      } finally {
        setLoading(false);
      }
    };
    fetch();
  }, [id]);

  const handleUpdate = async (field: string, value: any) => {
    const updated = { ...project, [field]: value };
    setProject(updated);
  };

  const save = async () => {
    setSaving(true);
    try {
      if (id) {
        await updateDoc(doc(db, "projects", id), project);
      } else {
        await addDoc(collection(db, "projects"), {
          ...project,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        });
      }
      alert("Project saved successfully.");
      onBack();
    } catch (error) {
      handleFirestoreError(error, id ? OperationType.UPDATE : OperationType.CREATE, `projects/${id || ''}`);
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <div className="h-64 flex items-center justify-center"><Loader2 className="animate-spin" /></div>;
  if (!project) return <div>Project not found.</div>;

  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="max-w-4xl mx-auto space-y-12 pb-20"
    >
      <div className="flex items-center justify-between">
        <div className="space-y-2">
          <button onClick={onBack} className="text-[10px] font-black uppercase text-black/30 hover:text-black transition-colors mb-2">← Back to Projects</button>
          <div className="flex items-center gap-3">
            <span className="text-[10px] font-black uppercase text-[#25A9B3] tracking-[0.3em]">Editor</span>
            {saving && <Loader2 className="animate-spin text-[#25A9B3]" size={14} />}
          </div>
          <h2 className="text-4xl font-display font-medium tracking-tight leading-none">{project.title}</h2>
        </div>
        <button 
          onClick={save}
          disabled={saving}
          className="px-6 py-3 bg-black text-white rounded-full text-xs font-bold uppercase tracking-widest hover:bg-black/80 transition-colors disabled:opacity-50 flex items-center gap-2"
        >
          {saving ? <Loader2 className="animate-spin" size={14} /> : <Save size={14} />} Save Project
        </button>
      </div>

      <div className="space-y-10">
        <Section title="Hero Details">
          <div className="grid md:grid-cols-2 gap-6">
            <Input label="Project Title" value={project.title} onChange={(v) => handleUpdate('title', v)} />
            <Input label="Category" value={project.category} onChange={(v) => handleUpdate('category', v)} />
            <div className="md:col-span-2">
              <TextArea label="Description" value={project.description} onChange={(v) => handleUpdate('description', v)} />
            </div>
            <Input label="Role" value={project.role} onChange={(v) => handleUpdate('role', v)} />
            <Input label="Timeline" value={project.timeline} onChange={(v) => handleUpdate('timeline', v)} />
            <div className="md:col-span-2">
               <Input label="Hero Image URL" value={project.image} onChange={(v) => handleUpdate('image', v)} />
            </div>
          </div>
        </Section>

        <Section title="Overview Content">
           <div className="grid gap-6">
              <TextArea label="Project Overview" value={project.overview} onChange={(v) => handleUpdate('overview', v)} />
              <TextArea label="The Problem" value={project.problem} onChange={(v) => handleUpdate('problem', v)} />
              <TextArea label="The Solution" value={project.solution} onChange={(v) => handleUpdate('solution', v)} />
           </div>
        </Section>
      </div>
    </motion.div>
  );
}

function Section({ title, children }: { title: string, children: React.ReactNode }) {
  return (
    <div className="space-y-6">
      <h3 className="text-sm font-black uppercase tracking-[0.2em] text-black/30 pb-4 border-b border-black/5 font-display">{title}</h3>
      {children}
    </div>
  );
}

function Input({ label, value, onChange }: { label: string, value?: string, onChange: (v: string) => void }) {
  return (
    <div className="space-y-2 font-display">
      <label className="text-[10px] font-black text-black/40 uppercase tracking-widest">{label}</label>
      <input 
        type="text" 
        value={value || ""}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-white border border-black/5 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-black/20 transition-all font-sans"
      />
    </div>
  );
}

function TextArea({ label, value, onChange }: { label: string, value?: string, onChange: (v: string) => void }) {
  return (
    <div className="space-y-2 font-display">
      <label className="text-[10px] font-black text-black/40 uppercase tracking-widest">{label}</label>
      <textarea 
        value={value || ""}
        onChange={(e) => onChange(e.target.value)}
        rows={4}
        className="w-full bg-white border border-black/5 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-black/20 transition-all resize-none font-sans"
      />
    </div>
  );
}

function TestimonialsView({ onEdit, onNew }: { onEdit: (id: string) => void, onNew: () => void, key?: string }) {
  const [testimonials, setTestimonials] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const q = query(collection(db, "testimonials"), orderBy("order", "asc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setTestimonials(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
      setLoading(false);
    }, (error) => handleFirestoreError(error, OperationType.LIST, "testimonials"));
    return () => unsubscribe();
  }, []);

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this testimonial?")) return;
    try {
      await deleteDoc(doc(db, "testimonials", id));
    } catch (error) {
      handleFirestoreError(error, OperationType.DELETE, `testimonials/${id}`);
    }
  }

  return (
     <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="max-w-6xl space-y-8"
    >
      <div className="flex items-center justify-between">
        <div>
           <h2 className="text-2xl font-display font-medium">Testimonials</h2>
           <p className="text-sm text-black/40">Manage client feedback and visibility.</p>
        </div>
        <button 
          onClick={onNew}
          className="p-3 bg-black text-white rounded-xl shadow-xl shadow-black/10 transition-transform hover:scale-110 active:scale-95"
        >
          <Plus size={20} />
        </button>
      </div>

      {loading ? (
        <div className="h-64 flex items-center justify-center"><Loader2 className="animate-spin" /></div>
      ) : (
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t) => (
            <div key={t.id} className="bg-white p-8 rounded-[32px] border border-black/5 space-y-6 hover:border-black/10 transition-all group">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-black/5 overflow-hidden">
                      {t.avatar && <img src={t.avatar} alt={t.name} className="w-full h-full object-cover" />}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold">{t.name}</h4>
                      <span className="text-[10px] uppercase font-black tracking-widest text-black/30">{t.role}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button 
                      onClick={() => onEdit(t.id)}
                      className="p-2 hover:bg-black/5 rounded-lg transition-colors text-black/20 hover:text-black"
                    >
                      <FileText size={16} />
                    </button>
                    <button 
                      onClick={() => handleDelete(t.id)}
                      className="p-2 hover:bg-black/5 rounded-lg transition-colors text-black/20 hover:text-red-500"
                    >
                      <MoreHorizontal size={16} />
                    </button>
                  </div>
                </div>
                <p className="text-sm text-black/60 leading-relaxed font-sans font-light italic">"{t.text || t.quote}"</p>
                {t.extra && <p className="text-[10px] text-black/30 font-bold uppercase tracking-widest">{t.extra}</p>}
            </div>
          ))}
        </div>
      )}
    </motion.div>
  );
}

function TestimonialEditorView({ id, onBack }: { id: string | null, onBack: () => void, key?: string }) {
  const [data, setData] = useState<any>({
    name: "",
    role: "",
    extra: "",
    text: "",
    avatar: "",
    order: 0
  });
  const [loading, setLoading] = useState(id ? true : false);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (!id) return;
    const fetch = async () => {
      try {
        const snap = await getDoc(doc(db, "testimonials", id));
        if (snap.exists()) setData(snap.data());
      } catch (error) {
        handleFirestoreError(error, OperationType.GET, `testimonials/${id}`);
      } finally {
        setLoading(false);
      }
    };
    fetch();
  }, [id]);

  const save = async () => {
    setSaving(true);
    try {
      if (id) {
        await updateDoc(doc(db, "testimonials", id), data);
      } else {
        await addDoc(collection(db, "testimonials"), {
          ...data,
          createdAt: new Date().toISOString()
        });
      }
      onBack();
    } catch (error) {
      handleFirestoreError(error, id ? OperationType.UPDATE : OperationType.CREATE, `testimonials/${id || ''}`);
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <div className="h-64 flex items-center justify-center"><Loader2 className="animate-spin" /></div>;

  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="max-w-2xl mx-auto space-y-8"
    >
      <div className="flex items-center justify-between">
        <button onClick={onBack} className="text-[10px] font-black uppercase text-black/30 hover:text-black transition-colors">← Back</button>
        <button 
          onClick={save}
          disabled={saving}
          className="px-6 py-2 bg-black text-white rounded-full text-xs font-bold uppercase tracking-widest disabled:opacity-50"
        >
          {saving ? "Saving..." : "Save Testimonial"}
        </button>
      </div>

      <div className="bg-white p-8 rounded-[32px] border border-black/5 space-y-6">
        <div className="flex items-center gap-6 pb-6 border-b border-black/5">
          <div className="w-20 h-20 rounded-full bg-black/5 overflow-hidden flex-shrink-0">
             {data.avatar && <img src={data.avatar} className="w-full h-full object-cover" />}
          </div>
          <div className="flex-grow">
            <Input label="Avatar URL" value={data.avatar} onChange={(v) => setData({...data, avatar: v})} />
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <Input label="Name" value={data.name} onChange={(v) => setData({...data, name: v})} />
          <Input label="Role" value={data.role} onChange={(v) => setData({...data, role: v})} />
        </div>
        <Input label="Extra Info" value={data.extra} onChange={(v) => setData({...data, extra: v})} />
        <TextArea label="Testimonial Text" value={data.text || data.quote} onChange={(v) => setData({...data, text: v, quote: v})} />
        <Input label="Display Order" value={data.order?.toString()} onChange={(v) => setData({...data, order: parseInt(v) || 0})} />
      </div>
    </motion.div>
  );
}

function SEOView({ key }: { key?: string }) {
  const [settings, setSettings] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const fetch = async () => {
      try {
        const snap = await getDoc(doc(db, "settings", "site"));
        if (snap.exists()) setSettings(snap.data());
      } catch (error) {
        handleFirestoreError(error, OperationType.GET, "settings/site");
      } finally {
        setLoading(false);
      }
    };
    fetch();
  }, []);

  const handleSave = async () => {
    setSaving(true);
    try {
      await setDoc(doc(db, "settings", "site"), settings);
      alert("Settings saved.");
    } catch (error) {
      handleFirestoreError(error, OperationType.WRITE, "settings/site");
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <div className="h-64 flex items-center justify-center"><Loader2 className="animate-spin" /></div>;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="max-w-4xl space-y-12 pb-20"
    >
       <div className="flex items-center justify-between">
          <div className="space-y-2">
            <h2 className="text-2xl font-display font-medium">Search Engine Optimization</h2>
            <p className="text-sm text-black/40">Fine-tune how your portfolio appears in search results.</p>
          </div>
          <button 
            onClick={handleSave}
            disabled={saving}
            className="px-6 py-3 bg-black text-white rounded-full text-xs font-bold uppercase tracking-widest hover:bg-black/80 transition-colors disabled:opacity-50 flex items-center gap-2"
          >
             {saving ? <Loader2 className="animate-spin" size={14} /> : <Save size={14} />} Save Settings
          </button>
       </div>

       <div className="space-y-10">
          <Section title="Global Settings">
             <div className="grid gap-6">
                <Input label="Site Title" value={settings?.siteTitle} onChange={(v) => setSettings({...settings, siteTitle: v})} />
                <TextArea label="Meta Description" value={settings?.metaDescription} onChange={(v) => setSettings({...settings, metaDescription: v})} />
                <Input label="Keywords" value={settings?.keywords} onChange={(v) => setSettings({...settings, keywords: v})} />
             </div>
          </Section>

          <Section title="Social Appearance (OG Tags)">
             <div className="p-8 bg-white rounded-[32px] border border-black/5 flex flex-col md:flex-row gap-8 items-center">
                <div className="w-full md:w-64 aspect-[1.91/1] bg-black/5 rounded-2xl flex items-center justify-center text-black/20 border border-black/5 border-dashed overflow-hidden">
                   {settings?.ogImage ? <img src={settings.ogImage} className="w-full h-full object-cover" /> : <ImageIcon size={32} />}
                </div>
                <div className="flex-grow space-y-4">
                   <h4 className="text-sm font-bold">Social Preview Image</h4>
                   <p className="text-xs text-black/40 leading-relaxed">Dimensions: 1200x630px. This image will appear when you share links on Twitter, LinkedIn, etc.</p>
                   <Input label="OG Image URL" value={settings?.ogImage} onChange={(v) => setSettings({...settings, ogImage: v})} />
                </div>
             </div>
          </Section>
       </div>
    </motion.div>
  );
}


function folder({ size }: { size: number }) {
  return <FolderKanban size={size} />;
}
