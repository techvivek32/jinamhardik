import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, ExternalLink } from "lucide-react";

const categories = ["All", "Web App", "Mobile App", "SaaS", "ERP/CRM", "Healthcare", "E-commerce", "Real Estate", "AI", "Education"];

const projects = [
  {
    slug: "medicare-pro",
    title: "MediCare Pro",
    category: "Healthcare",
    tagline: "Hospital Management SaaS Platform",
    description: "A comprehensive cloud-based hospital management system serving 3 healthcare institutions with patient records, appointment scheduling, billing, and real-time analytics.",
    tech: ["React", "Node.js", "PostgreSQL", "AWS"],
    color: "from-teal-600/30 to-cyan-600/20",
    border: "border-teal-500/20",
    badge: "bg-teal-500/10 text-teal-400",
    metrics: ["40% faster admissions", "60% less paperwork", "3 hospitals onboarded"],
    image: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?auto=format&fit=crop&w=700&q=80",
  },
  {
    slug: "shopsphere",
    title: "ShopSphere",
    category: "E-commerce",
    tagline: "Multi-vendor E-commerce Platform",
    description: "A full-featured multi-vendor marketplace supporting 200+ sellers with real-time inventory, payment processing, and seller analytics dashboards.",
    tech: ["Next.js", "Stripe", "Redis", "PostgreSQL"],
    color: "from-orange-600/30 to-amber-600/20",
    border: "border-orange-500/20",
    badge: "bg-orange-500/10 text-orange-400",
    metrics: ["200+ active sellers", "₹2Cr+ monthly GMV", "4.8 app store rating"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=700&q=80",
  },
  {
    slug: "propvision",
    title: "PropVision",
    category: "Real Estate",
    tagline: "AI-Powered Real Estate Platform",
    description: "An intelligent property management and listing platform with AI-driven price predictions, virtual tours, and automated lead management for real estate agencies.",
    tech: ["React", "Python", "TensorFlow", "Node.js"],
    color: "from-blue-600/30 to-indigo-600/20",
    border: "border-blue-500/20",
    badge: "bg-blue-500/10 text-blue-400",
    metrics: ["500+ property listings", "35% faster closings", "AI pricing accuracy 94%"],
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=700&q=80",
  },
  {
    slug: "edulearn",
    title: "EduLearn",
    category: "Education",
    tagline: "EdTech Learning Management System",
    description: "A modern LMS platform supporting live classes, recorded content, assessments, and progress tracking for 5,000+ students across multiple institutions.",
    tech: ["React", "WebRTC", "Node.js", "MongoDB"],
    color: "from-violet-600/30 to-purple-600/20",
    border: "border-violet-500/20",
    badge: "bg-violet-500/10 text-violet-400",
    metrics: ["5,000+ active students", "98% course completion", "20+ institutions"],
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=700&q=80",
  },
  {
    slug: "fleettrack",
    title: "FleetTrack",
    category: "ERP/CRM",
    tagline: "Logistics & Fleet Management ERP",
    description: "End-to-end fleet management and logistics ERP with real-time GPS tracking, route optimization, driver management, and automated maintenance scheduling.",
    tech: ["React", "Node.js", "Google Maps API", "PostgreSQL"],
    color: "from-emerald-600/30 to-green-600/20",
    border: "border-emerald-500/20",
    badge: "bg-emerald-500/10 text-emerald-400",
    metrics: ["300+ vehicles tracked", "22% fuel savings", "Real-time visibility"],
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=700&q=80",
  },
  {
    slug: "fintrack",
    title: "FinTrack Pro",
    category: "SaaS",
    tagline: "Financial Analytics SaaS",
    description: "A B2B financial analytics platform enabling CFOs and finance teams to consolidate multi-source data, automate reporting, and gain real-time cash flow insights.",
    tech: ["Next.js", "Python", "PostgreSQL", "AWS Lambda"],
    color: "from-sky-600/30 to-blue-600/20",
    border: "border-sky-500/20",
    badge: "bg-sky-500/10 text-sky-400",
    metrics: ["50+ enterprise clients", "80% reporting time saved", "$10M+ tracked monthly"],
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=700&q=80",
  },
  {
    slug: "buildhub",
    title: "BuildHub",
    category: "ERP/CRM",
    tagline: "Construction Project Management CRM",
    description: "A purpose-built CRM and project management platform for construction companies — covering project timelines, contractor management, purchase orders, and client billing.",
    tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
    color: "from-amber-600/30 to-yellow-600/20",
    border: "border-amber-500/20",
    badge: "bg-amber-500/10 text-amber-400",
    metrics: ["45 construction firms", "30% fewer delays", "Full project visibility"],
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=700&q=80",
  },
  {
    slug: "aichat",
    title: "NexusAI",
    category: "AI",
    tagline: "Enterprise AI Chat Assistant",
    description: "A customizable AI-powered customer support and internal knowledge assistant integrated with company documents, CRMs, and helpdesks via RAG architecture.",
    tech: ["React", "OpenAI", "Python", "Pinecone"],
    color: "from-rose-600/30 to-pink-600/20",
    border: "border-rose-500/20",
    badge: "bg-rose-500/10 text-rose-400",
    metrics: ["70% ticket deflection", "24/7 availability", "10 enterprise deployments"],
    image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?auto=format&fit=crop&w=700&q=80",
  },
  {
    slug: "menumaster",
    title: "MenuMaster",
    category: "Web App",
    tagline: "Restaurant Digital Ordering Platform",
    description: "A QR-based digital menu and ordering system for restaurants, enabling contactless ordering, kitchen display management, and real-time table tracking.",
    tech: ["React", "Node.js", "WebSockets", "Stripe"],
    color: "from-fuchsia-600/30 to-violet-600/20",
    border: "border-fuchsia-500/20",
    badge: "bg-fuchsia-500/10 text-fuchsia-400",
    metrics: ["150+ restaurants", "25% increase in AOV", "Zero paper menus"],
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=700&q=80",
  },
  {
    slug: "healthfit",
    title: "HealthFit",
    category: "Mobile App",
    tagline: "Fitness & Wellness Mobile App",
    description: "A React Native fitness app with personalized workout plans, nutrition tracking, live coaching sessions, and wearable device integrations for iOS and Android.",
    tech: ["React Native", "Node.js", "PostgreSQL", "HealthKit"],
    color: "from-green-600/30 to-teal-600/20",
    border: "border-green-500/20",
    badge: "bg-green-500/10 text-green-400",
    metrics: ["50,000+ downloads", "4.9 app store rating", "30min avg session time"],
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=700&q=80",
  },
  {
    slug: "claimmgr",
    title: "ClaimMGR",
    category: "SaaS",
    tagline: "Insurance Claims Management SaaS",
    description: "A cloud-native insurance claims processing platform that automates documentation, adjuster workflows, fraud detection, and settlement tracking.",
    tech: ["React", "Python", "AWS", "PostgreSQL"],
    color: "from-indigo-600/30 to-blue-600/20",
    border: "border-indigo-500/20",
    badge: "bg-indigo-500/10 text-indigo-400",
    metrics: ["60% faster settlements", "85% automation rate", "4 insurance companies"],
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=700&q=80",
  },
  {
    slug: "hrbrain",
    title: "HRBrain",
    category: "ERP/CRM",
    tagline: "HR & Payroll Management Platform",
    description: "A comprehensive HR management suite covering recruitment, onboarding, attendance, leave management, payroll processing, and performance reviews.",
    tech: ["React", "Node.js", "PostgreSQL", "Razorpay"],
    color: "from-cyan-600/30 to-sky-600/20",
    border: "border-cyan-500/20",
    badge: "bg-cyan-500/10 text-cyan-400",
    metrics: ["2,000+ employees managed", "100% payroll accuracy", "15 companies"],
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=700&q=80",
  },
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#020817] text-white pt-24 pb-20">
      {/* Hero */}
      <div className="container mx-auto px-4 max-w-7xl mb-16 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest bg-primary/10 text-primary border border-primary/20 mb-6">
            Our Work
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
            Projects That{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-primary">
              Define Excellence
            </span>
          </h1>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto">
            150+ projects delivered across industries. Each one built with precision, passion, and a deep understanding of the business challenges it solves.
          </p>
        </motion.div>
      </div>

      {/* Category Filter */}
      <div className="container mx-auto px-4 max-w-7xl mb-12">
        <div className="flex flex-wrap gap-2 justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat
                  ? "bg-primary text-white shadow-[0_0_15px_rgba(37,99,235,0.4)]"
                  : "bg-[#0a0f1c] border border-slate-800 text-slate-400 hover:text-white hover:border-slate-600"
              }`}
              data-testid={`filter-${cat.toLowerCase().replace("/", "-")}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="container mx-auto px-4 max-w-7xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((project, i) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
                whileHover={{ y: -4 }}
                className={`group rounded-2xl bg-gradient-to-br ${project.color} border ${project.border} overflow-hidden transition-all hover:shadow-[0_8px_40px_rgba(37,99,235,0.15)]`}
              >
                {/* Project Image */}
                <div className="h-48 relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-3 left-4">
                    <span className={`text-xs px-2.5 py-1 rounded-full font-semibold ${project.badge}`}>
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Link href={`/portfolio/${project.slug}`}>
                      <div className="h-8 w-8 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                        <ExternalLink className="h-3.5 w-3.5 text-white" />
                      </div>
                    </Link>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
                  <p className="text-xs text-slate-500 font-medium mb-3">{project.tagline}</p>
                  <p className="text-slate-400 text-sm leading-relaxed mb-4 line-clamp-2">{project.description}</p>

                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tech.slice(0, 3).map((t) => (
                      <span key={t} className="text-xs px-2 py-0.5 rounded bg-slate-800/80 text-slate-400">{t}</span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="text-xs px-2 py-0.5 rounded bg-slate-800/80 text-slate-500">+{project.tech.length - 3}</span>
                    )}
                  </div>

                  <div className="border-t border-slate-800/60 pt-4">
                    <div className="grid grid-cols-3 gap-2">
                      {project.metrics.map((m) => (
                        <div key={m} className="text-center">
                          <p className="text-xs text-slate-400 leading-tight">{m}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link href={`/portfolio/${project.slug}`}>
                    <button className="mt-4 flex items-center gap-1.5 text-sm font-medium text-primary hover:gap-3 transition-all">
                      View Case Study <ArrowRight className="h-4 w-4" />
                    </button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Work Samples — actual client UI screenshots */}
      <div className="container mx-auto px-4 max-w-7xl mt-24 mb-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest bg-primary/10 text-primary border border-primary/20 mb-4">
            Design Snapshots
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3">
            A Glimpse Inside Our Work
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Real UI screens from our delivered projects — precision-crafted interfaces built for performance and clarity.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5">
          {[
            { src: "/portfolio-svgs/portfolio-1.svg", label: "Dashboard Analytics UI", tag: "SaaS / Web App" },
            { src: "/portfolio-svgs/portfolio-2.svg", label: "Mobile App Interface", tag: "Flutter / Mobile" },
            { src: "/portfolio-svgs/portfolio-3.svg", label: "E-commerce Storefront", tag: "E-commerce" },
            { src: "/portfolio-svgs/portfolio-4.svg", label: "Enterprise CRM Panel", tag: "ERP / CRM" },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group relative rounded-2xl overflow-hidden border border-slate-800 bg-[#0a0f1c] hover:border-primary/30 transition-all"
            >
              <div className="overflow-hidden">
                <img
                  src={item.src}
                  alt={item.label}
                  className="w-full h-52 object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                <div>
                  <p className="text-white font-bold text-sm">{item.label}</p>
                  <p className="text-slate-400 text-xs mt-0.5">{item.tag}</p>
                </div>
                <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-primary/20 text-primary border border-primary/30">
                  Delivered
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="container mx-auto px-4 max-w-4xl mt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center p-12 rounded-3xl bg-gradient-to-r from-blue-950/60 to-indigo-950/60 border border-primary/20"
        >
          <h2 className="text-3xl font-extrabold mb-4">Your Project Could Be Next</h2>
          <p className="text-slate-400 mb-8 max-w-xl mx-auto">
            Let's discuss your idea and build something that makes this list even more impressive.
          </p>
          <Link href="/contact">
            <button className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-primary hover:bg-primary/90 text-white font-semibold transition-all shadow-[0_0_20px_rgba(37,99,235,0.35)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)]">
              Start Your Project <ArrowRight className="h-4 w-4" />
            </button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
