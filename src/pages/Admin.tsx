import React, { useState, useEffect } from "react";
import { 
  Plus,
  LayoutDashboard, 
  FileText, 
  MessageSquareQuote, 
  Globe, 
  BarChart3, 
  Save, 
  Image as ImageIcon, 
  ChevronRight,
  MoreHorizontal,
  Loader2,
  LogOut,
  X
} from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { motion, AnimatePresence } from "motion/react";
import { useNavigate } from "react-router-dom";
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
  getDoc,
  limit
} from "firebase/firestore";
import { db, auth } from "../lib/firebase";
import { migrateData } from "../lib/migration";
import { handleFirestoreError, OperationType } from "../lib/firestore-errors";
import { ImageUpload } from "../components/ImageUpload";

type Tab = "overview" | "analytics" | "testimonials" | "testimonial-editor" | "seo";

export default function Admin() {
  const [activeTab, setActiveTab] = useState<Tab>("overview");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [isMigrating, setIsMigrating] = useState(false);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await fetch("/api/admin/logout", { method: "POST" });
      navigate("/admin/login");
    } catch (err) {
      console.error("Logout failed", err instanceof Error ? err.message : String(err));
      // Fallback: just redirect
      navigate("/admin/login");
    }
  };

  const handleMigrate = async () => {
    setIsMigrating(true);
    try {
      await migrateData();
      alert("Migration complete!");
    } catch (error) {
      console.error(error instanceof Error ? error.message : String(error));
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
            icon={<BarChart3 size={18} />} 
            label="Analytics" 
            active={activeTab === "analytics"} 
            onClick={() => setActiveTab("analytics")}
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
            <button 
              onClick={handleLogout}
              className="px-4 py-2 text-xs font-bold uppercase tracking-widest text-red-500 hover:text-red-600 transition-colors flex items-center gap-2"
            >
              <LogOut size={14} /> Logout
            </button>
            <button className="px-5 py-2 bg-black text-white rounded-full text-xs font-bold uppercase tracking-widest hover:bg-black/80 transition-colors flex items-center gap-2">
              <Save size={14} /> Global Save
            </button>
          </div>
        </header>

        <div className="flex-grow overflow-y-auto p-8">
          <AnimatePresence mode="wait">
            {activeTab === "overview" && <OverviewView key="overview" onGoToAnalytics={() => setActiveTab("analytics")} />}
            {activeTab === "analytics" && <AnalyticsView key="analytics" />}
            {activeTab === "testimonials" && <TestimonialsView key="testimonials" onEdit={(id) => { (window as any)._testimonialId = id; setActiveTab("testimonial-editor"); }} onNew={() => { (window as any)._testimonialId = null; setActiveTab("testimonial-editor"); }} />}
            {activeTab === "testimonial-editor" && <TestimonialEditorView key="testimonial-editor" id={(window as any)._testimonialId} onBack={() => setActiveTab("testimonials")} />}
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

function OverviewView({ onGoToAnalytics }: { onGoToAnalytics: () => void, key?: string }) {
  const [stats, setStats] = useState({ testimonials: 0, updates: 0, visitors: 0 });
  const [recentActivity, setRecentActivity] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const testimonialSnap = await getDocs(collection(db, "testimonials"));
        
        setStats({
          testimonials: testimonialSnap.size,
          updates: 0,
          visitors: 0
        });

        // Fetch analytics for visitor count
        const analyticsSnap = await getDocs(query(collection(db, "analytics"), limit(500)));
        const pageViews = analyticsSnap.docs.filter(d => d.data().type === "page_view").length;
        setStats(prev => ({ ...prev, visitors: pageViews }));

      } catch (error) {
        console.error("Error fetching overview stats:", error instanceof Error ? error.message : String(error));
      } finally {
        setLoading(false);
      }
    };
    fetchStats();
  }, []);

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
          <p className="text-sm text-black/40">Real-time summary of your portfolio content.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard label="Public Testimonials" value={stats.testimonials.toString()} change="Real-time" icon={<MessageSquareQuote size={20} />} />
        <StatCard label="Site Visitors" value={stats.visitors.toString()} change="Lifetime" icon={<BarChart3 size={20} />} />
        <StatCard label="New Inquiries" value="0" change="Soon" icon={<FileText size={20} />} />
      </div>

      <div className="grid lg:grid-cols-[2fr_1fr] gap-8">
        <div className="bg-white p-8 rounded-[32px] border border-black/5 space-y-6">
          <div className="flex lg:items-center justify-between">
            <h3 className="text-lg font-display font-medium">Recent Activity</h3>
            <button onClick={onGoToAnalytics} className="text-[10px] font-black uppercase tracking-widest text-[#25A9B3]">View Analytics</button>
          </div>
          <div className="space-y-4">
             {loading ? (
               <div className="py-12 flex justify-center"><Loader2 className="animate-spin text-black/10" /></div>
             ) : (
                <p className="text-sm text-black/30 italic py-4">No recent activity detected.</p>
             )}
          </div>
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

/* ProjectsView and EditorView removed */

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
            <ImageUpload label="Avatar Image" value={data.avatar} onChange={(v) => setData({...data, avatar: v})} folder="testimonials" />
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
                   <ImageUpload label="OG Image" value={settings?.ogImage} onChange={(v) => setSettings({...settings, ogImage: v})} folder="seo" />
                </div>
             </div>
          </Section>
       </div>
    </motion.div>
  );
}




function AnalyticsView() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAnalytics = async () => {
      try {
        const thirtyDaysAgo = new Date();
        thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
        
        const snapshot = await getDocs(query(collection(db, "analytics"), orderBy("timestamp", "desc"), limit(2000)));
        const events = snapshot.docs.map(doc => {
          const d = doc.data();
          return {
            id: doc.id,
            type: d.type,
            timestamp: d.timestamp,
            projectId: d.projectId,
            projectTitle: d.projectTitle,
            depth: d.depth,
            device: d.device
          };
        });
        
        const recentEvents = events.filter((e: any) => e.timestamp?.toDate ? e.timestamp.toDate() >= thirtyDaysAgo : false);

        // Daily visits for chart
        const visitsByDay: Record<string, number> = {};
        for(let i = 0; i < 30; i++) {
          const d = new Date();
          d.setDate(d.getDate() - i);
          visitsByDay[d.toLocaleDateString()] = 0;
        }

        recentEvents.filter((e: any) => e.type === "page_view").forEach((e: any) => {
          const d = e.timestamp?.toDate ? e.timestamp.toDate().toLocaleDateString() : null;
          if (d && visitsByDay.hasOwnProperty(d)) visitsByDay[d]++;
        });

        const chartData = Object.entries(visitsByDay).map(([date, count]) => ({ date, visits: count })).reverse();

        // Scroll depth per project
        const scrollEvents = recentEvents.filter((e: any) => e.type === "scroll");
        const scrollData: Record<string, { total: number, count: number, title: string }> = {};
        scrollEvents.forEach((e: any) => {
          const pid = e.projectId || "unknown";
          if (!scrollData[pid]) scrollData[pid] = { total: 0, count: 0, title: e.projectTitle || pid };
          scrollData[pid].total += e.depth || 0;
          scrollData[pid].count++;
        });

        const avgScroll = Object.entries(scrollData).map(([id, data]) => ({
          title: data.title,
          avgDepth: Math.round(data.total / data.count)
        }));

        setData({
          totalVisits: recentEvents.filter((e: any) => e.type === "page_view").length,
          chartData,
          avgScroll,
          deviceSplit: {
            desktop: Math.round((recentEvents.filter((e: any) => e.device === "desktop").length / (recentEvents.length || 1)) * 100),
            mobile: Math.round((recentEvents.filter((e: any) => e.device === "mobile").length / (recentEvents.length || 1)) * 100),
          }
        });
      } catch (error) {
        console.error("Error fetching analytics:", error instanceof Error ? error.message : String(error));
      } finally {
        setLoading(false);
      }
    };
    fetchAnalytics();
  }, []);

  if (loading) return <div className="h-64 flex items-center justify-center"><Loader2 className="animate-spin text-black/20" size={32} /></div>;
  if (!data) return <div className="p-8 text-black/40">No analytics data available yet.</div>;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-6xl space-y-10"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-8 rounded-[32px] border border-black/5">
          <span className="text-[10px] font-black uppercase text-black/30 tracking-widest block mb-1">Total Visits</span>
          <div className="text-5xl font-display font-medium tracking-tighter">{data.totalVisits}</div>
          <p className="text-xs text-black/40 mt-4">Across all pages (Last 30 days)</p>
        </div>
        <div className="bg-white p-8 rounded-[32px] border border-black/5 flex flex-col justify-center">
          <span className="text-[10px] font-black uppercase text-black/30 tracking-widest block mb-4">Device Distribution</span>
          <div className="space-y-4">
             {/* ... device display logic ... */}
             <div className="space-y-2"><div className="flex justify-between text-xs font-bold uppercase tracking-widest"><span>Desktop</span><span>{data.deviceSplit.desktop}%</span></div><div className="h-1.5 w-full bg-black/5 rounded-full overflow-hidden"><div className="h-full bg-black" style={{ width: `${data.deviceSplit.desktop}%` }} /></div></div>
             <div className="space-y-2"><div className="flex justify-between text-xs font-bold uppercase tracking-widest"><span>Mobile</span><span>{data.deviceSplit.mobile}%</span></div><div className="h-1.5 w-full bg-black/5 rounded-full overflow-hidden"><div className="h-full bg-[#25A9B3]" style={{ width: `${data.deviceSplit.mobile}%` }} /></div></div>
          </div>
        </div>
      </div>

      <div className="bg-white p-8 rounded-[32px] border border-black/5">
        <h3 className="text-lg font-display font-medium mb-8">Visits (Last 30 Days)</h3>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data.chartData}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
              <XAxis dataKey="date" hide />
              <YAxis hide />
              <Tooltip />
              <Line type="monotone" dataKey="visits" stroke="#25A9B3" strokeWidth={2} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-white p-8 rounded-[32px] border border-black/5">
        <h3 className="text-lg font-display font-medium mb-8">Avg Scroll Depth per Project</h3>
        <div className="space-y-4">
          {data.avgScroll.map((p: any, i: number) => (
             <div key={i} className="flex justify-between items-center py-3 border-b border-black/5">
               <span className="text-sm font-bold uppercase tracking-widest">{p.title}</span>
               <span className="text-sm font-black text-[#25A9B3]">{p.avgDepth}%</span>
             </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
