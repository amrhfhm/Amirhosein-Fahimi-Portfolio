import React, { useState } from "react";
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
  MoreHorizontal
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

type Tab = "overview" | "projects" | "editor" | "testimonials" | "seo";

export default function Admin() {
  const [activeTab, setActiveTab] = useState<Tab>("overview");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

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
            active={activeTab === "projects"} 
            onClick={() => setActiveTab("projects")}
            collapsed={!isSidebarOpen}
          />
          <NavItem 
            icon={<FileText size={18} />} 
            label="Editor" 
            active={activeTab === "editor"} 
            onClick={() => setActiveTab("editor")}
            collapsed={!isSidebarOpen}
          />
          <NavItem 
            icon={<MessageSquareQuote size={18} />} 
            label="Testimonials" 
            active={activeTab === "testimonials"} 
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
            <h2 className="text-sm font-medium text-black capitalize">{activeTab}</h2>
          </div>
          <div className="flex items-center gap-3">
            <button className="px-4 py-2 text-xs font-bold uppercase tracking-widest text-black/40 hover:text-black transition-colors flex items-center gap-2">
              <Eye size={14} /> Preview
            </button>
            <button className="px-5 py-2 bg-black text-white rounded-full text-xs font-bold uppercase tracking-widest hover:bg-black/80 transition-colors flex items-center gap-2">
              <Save size={14} /> Save Changes
            </button>
          </div>
        </header>

        <div className="flex-grow overflow-y-auto p-8">
          <AnimatePresence mode="wait">
            {activeTab === "overview" && <OverviewView />}
            {activeTab === "projects" && <ProjectsView />}
            {activeTab === "editor" && <EditorView />}
            {activeTab === "testimonials" && <TestimonialsView />}
            {activeTab === "seo" && <SEOView />}
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

function OverviewView() {
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
        <StatCard label="Total Visits" value="2.4k" change="+12%" icon={<BarChart3 size={20} />} />
        <StatCard label="Inquiries" value="14" change="+3" icon={<MessageSquareQuote size={20} />} />
        <StatCard label="Case Study Views" value="842" change="+18%" icon={<Eye size={20} />} />
        <StatCard label="Form Success" value="92%" change="+2%" icon={<folder size={20} />} />
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
                     <div className={`w-2 h-2 rounded-full bg-${action.color}-500/40 opacity-0 group-hover:opacity-100 transition-opacity`} />
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
          <button className="relative z-10 mt-12 w-full py-4 bg-white text-black rounded-2xl text-xs font-black uppercase tracking-[0.2em] hover:scale-[1.02] transition-transform flex items-center justify-center gap-2">
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
        <h4 className="text-2xl font-display font-medium tracking-tight">{value}</h4>
        <p className="text-xs text-black/40 font-medium uppercase tracking-widest mt-1">{label}</p>
      </div>
    </div>
  );
}

function ProjectsView() {
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
        <button className="p-3 bg-black text-white rounded-xl flex items-center justify-center transition-transform hover:scale-110 active:scale-95 shadow-xl shadow-black/10">
          <Plus size={20} />
        </button>
      </div>

      <div className="grid gap-4">
        {[
          { title: "GG10 Gaming Platform", category: "Gaming", status: "Published", updated: "2h ago" },
          { title: "Bit24 Spot Product", category: "Fintech", status: "Published", updated: "1d ago" },
          { title: "Bit24 KYC Redesign", category: "Fintech", status: "Published", updated: "Yesterday" },
          { title: "Personal Portfolio", category: "AI / Design", status: "Draft", updated: "3d ago" },
        ].map((project, i) => (
          <div key={i} className="bg-white p-4 pr-6 rounded-[24px] border border-black/5 flex items-center justify-between group hover:border-black/10 transition-all cursor-pointer">
            <div className="flex items-center gap-6">
              <div className="w-16 h-12 bg-black/5 rounded-xl flex-shrink-0" />
              <div>
                <h4 className="font-medium text-sm text-black">{project.title}</h4>
                <div className="flex items-center gap-3 mt-1">
                  <span className="text-[10px] uppercase font-black tracking-widest text-black/30">{project.category}</span>
                  <span className="w-1 h-1 rounded-full bg-black/10" />
                  <span className="text-[10px] uppercase font-black tracking-widest text-[#25A9B3]">{project.status}</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xs text-black/30 hidden md:block">Updated {project.updated}</span>
              <button className="p-2 text-black/20 hover:text-black transition-colors">
                <MoreHorizontal size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

function EditorView() {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="max-w-4xl mx-auto space-y-12"
    >
      <div className="space-y-2">
        <span className="text-[10px] font-black uppercase text-[#25A9B3] tracking-[0.3em]">Editor</span>
        <h2 className="text-4xl font-display font-medium tracking-tight">Bit24 KYC Redesign</h2>
      </div>

      <div className="space-y-10">
        <Section title="Hero Details">
          <div className="grid md:grid-cols-2 gap-6">
            <Input label="Project Title" defaultValue="Bit24 KYC Redesign" />
            <Input label="Category" defaultValue="Fintech / Optimization" />
            <div className="md:col-span-2">
              <TextArea label="Description" defaultValue="Driving growth by deconstructing the friction in high-stakes identity verification." />
            </div>
          </div>
        </Section>

        <Section title="Strategic Thinking">
          <div className="space-y-6">
             <div className="p-6 bg-black/5 rounded-2xl border border-black/5 space-y-4">
                <Input label="Thinking Title 01" defaultValue="The Distortion of 'Drop-offs'" />
                <TextArea label="Content" defaultValue="One of the most important findings was that not every exit was a failure..." />
                <button className="text-[10px] font-black uppercase text-red-500/60 hover:text-red-500 transition-colors">Remove Section</button>
             </div>
             <button className="w-full py-4 border-2 border-dashed border-black/5 rounded-2xl text-[10px] font-black uppercase tracking-widest text-black/30 hover:bg-black/5 hover:border-black/10 transition-all">
                Add Strategy Section
             </button>
          </div>
        </Section>

        <Section title="Before & After Comparison">
           <div className="p-6 bg-black/5 rounded-2xl border border-black/5 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                 <div className="space-y-4">
                    <span className="text-[10px] font-black uppercase text-black/30">Before View</span>
                    <div className="aspect-[4/3] bg-black/10 rounded-xl flex items-center justify-center text-black/20">
                       <ImageIcon size={24} />
                    </div>
                 </div>
                 <div className="space-y-4">
                    <span className="text-[10px] font-black uppercase text-black/30">After View</span>
                    <div className="aspect-[4/3] bg-black/10 rounded-xl flex items-center justify-center text-black/20">
                       <ImageIcon size={24} />
                    </div>
                 </div>
              </div>
              <TextArea label="Reasoning" defaultValue="By reducing perceived complexity through progressive disclosure..." />
           </div>
        </Section>
      </div>
    </motion.div>
  );
}

function Section({ title, children }: { title: string, children: React.ReactNode }) {
  return (
    <div className="space-y-6">
      <h3 className="text-sm font-black uppercase tracking-[0.2em] text-black/30 pb-4 border-b border-black/5">{title}</h3>
      {children}
    </div>
  );
}

function Input({ label, defaultValue }: { label: string, defaultValue?: string }) {
  return (
    <div className="space-y-2">
      <label className="text-xs font-bold text-black/40 uppercase tracking-widest">{label}</label>
      <input 
        type="text" 
        defaultValue={defaultValue}
        className="w-full bg-white border border-black/5 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-black/20 transition-all"
      />
    </div>
  );
}

function TextArea({ label, defaultValue }: { label: string, defaultValue?: string }) {
  return (
    <div className="space-y-2">
      <label className="text-xs font-bold text-black/40 uppercase tracking-widest">{label}</label>
      <textarea 
        defaultValue={defaultValue}
        rows={4}
        className="w-full bg-white border border-black/5 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-black/20 transition-all resize-none"
      />
    </div>
  );
}

function TestimonialsView() {
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
        <button className="p-3 bg-black text-white rounded-xl shadow-xl shadow-black/10">
          <Plus size={20} />
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
         {[
           { name: "Jane Doe", role: "Product Manager", text: "Amir's eye for detail is unmatched. He transformed our onboarding flow..." },
           { name: "Bruce Wayne", role: "CEO, Wayne Ent.", text: "A strategic thinker who understands the intersection of design and business..." },
         ].map((t, i) => (
           <div key={i} className="bg-white p-8 rounded-[32px] border border-black/5 space-y-6 hover:border-black/10 transition-all group">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-black/5" />
                  <div>
                    <h4 className="text-sm font-bold">{t.name}</h4>
                    <span className="text-[10px] uppercase font-black tracking-widest text-black/30">{t.role}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                   <button className="p-2 hover:bg-black/5 rounded-lg transition-colors text-black/20 hover:text-black">
                     <FileText size={16} />
                   </button>
                   <button className="p-2 hover:bg-black/5 rounded-lg transition-colors text-black/20 hover:text-red-500">
                     <MoreHorizontal size={16} />
                   </button>
                </div>
              </div>
              <p className="text-sm text-black/60 leading-relaxed font-sans font-light italic">"{t.text}"</p>
           </div>
         ))}
      </div>
    </motion.div>
  );
}

function SEOView() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="max-w-4xl space-y-12"
    >
       <div className="space-y-4">
          <h2 className="text-2xl font-display font-medium">Search Engine Optimization</h2>
          <p className="text-sm text-black/40">Fine-tune how your portfolio appears in search results and social shares.</p>
       </div>

       <div className="space-y-10">
          <Section title="Global Settings">
             <div className="grid gap-6">
                <Input label="Site Title" defaultValue="Amirhosein Fahimi — Product Designer" />
                <TextArea label="Meta Description" defaultValue="Self-taught Product Designer focused on creating premium digital experiences for the next generation of users." />
                <Input label="Keywords" defaultValue="Product Design, UX Research, Portfolio, Fintech Design" />
             </div>
          </Section>

          <Section title="Social Appearance (OG Tags)">
             <div className="p-8 bg-white rounded-[32px] border border-black/5 flex flex-col md:flex-row gap-8 items-center">
                <div className="w-full md:w-64 aspect-[1.91/1] bg-black/5 rounded-2xl flex items-center justify-center text-black/20 border border-black/5 border-dashed">
                   <ImageIcon size={32} />
                </div>
                <div className="flex-grow space-y-4">
                   <h4 className="text-sm font-bold">Social Preview Image</h4>
                   <p className="text-xs text-black/40 leading-relaxed">Dimensions: 1200x630px. This image will appear when you share links on Twitter, LinkedIn, etc.</p>
                   <button className="px-5 py-2.5 bg-black/5 text-black rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-black/10 transition-colors">
                      Upload New Image
                   </button>
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
