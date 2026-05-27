import { motion } from "framer-motion";
import { Link, useParams } from "wouter";
import { ArrowLeft, ArrowRight, CheckCircle2, Clock, Users, TrendingUp, ExternalLink } from "lucide-react";

const projects: Record<string, {
  title: string;
  tagline: string;
  category: string;
  client: string;
  duration: string;
  teamSize: string;
  tech: string[];
  color: string;
  image: string;
  url: string;
  overview: string;
  challenge: string;
  solution: string;
  results: string[];
  metrics: { label: string; value: string; icon: typeof TrendingUp }[];
  features: string[];
}> = {
  "medicare-pro": {
    title: "MediCare Pro",
    tagline: "Hospital Management SaaS Platform",
    category: "Healthcare",
    client: "Multi-Hospital Group, Gujarat",
    duration: "6 months",
    teamSize: "4 engineers, 1 designer",
    tech: ["React", "Node.js", "PostgreSQL", "AWS", "HL7 FHIR", "Redis"],
    color: "from-teal-600/20 to-cyan-600/10",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1400&q=90",
    url: "https://app.medicare-pro.io",
    overview: "MediCare Pro is a comprehensive cloud-based hospital management system built to modernize operations across a network of three hospitals in Gujarat. The platform serves doctors, nurses, administrative staff, and hospital management with role-based access to every aspect of patient care and administration.",
    challenge: "The hospital group was running three separate software systems that didn't communicate with each other — a legacy billing system from 2008, a paper-based patient records system, and a disconnected appointment scheduling tool. Patient data was duplicated across systems, billing errors were frequent, and doctors had no access to prior patient history from other branches. The group needed a unified system that could be deployed across all three hospitals simultaneously without disrupting operations.",
    solution: "We designed MediCare Pro as a multi-tenant SaaS platform with complete data isolation between hospital branches, while enabling cross-branch patient record access for authorized physicians. We implemented a real-time synchronization layer using PostgreSQL's listen/notify mechanism, built a custom HL7 FHIR-compliant data layer for patient records, and developed an analytics dashboard that gives hospital management live visibility into occupancy, revenue, and clinical outcomes.",
    results: [
      "Patient admission time reduced from 45 minutes to under 8 minutes with digital registration",
      "40% reduction in administrative overhead through automated billing and insurance claims",
      "Doctors have instant access to complete patient history across all three hospital branches",
      "Zero data entry duplication — patient records are created once and shared intelligently",
      "Monthly revenue reporting that previously took 3 days now completes automatically overnight",
      "Successful deployment across all three hospitals with zero downtime migration",
    ],
    metrics: [
      { label: "Faster Admissions", value: "5.6×", icon: TrendingUp },
      { label: "Admin Cost Reduced", value: "40%", icon: Users },
      { label: "Hospitals Deployed", value: "3", icon: CheckCircle2 },
      { label: "Uptime SLA", value: "99.9%", icon: Clock },
    ],
    features: [
      "Role-based access control for 8 staff types",
      "Real-time bed and OT availability dashboard",
      "Digital prescription and e-pharmacy integration",
      "Automated insurance claim generation",
      "Patient portal with appointment booking",
      "Lab result management and notifications",
      "Ambulance and emergency triage module",
      "Financial reporting and revenue analytics",
    ],
  },
  "shopsphere": {
    title: "ShopSphere",
    tagline: "Multi-vendor E-commerce Platform",
    category: "E-commerce",
    client: "Retail Consortium, Ahmedabad",
    duration: "5 months",
    teamSize: "3 engineers, 1 designer",
    tech: ["Next.js", "Stripe", "Redis", "PostgreSQL", "Elasticsearch", "AWS S3"],
    color: "from-orange-600/20 to-amber-600/10",
    image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&w=1400&q=90",
    url: "https://shop.shopsphere.io",
    overview: "ShopSphere is a full-featured multi-vendor marketplace platform that empowers 200+ sellers to run their own digital storefronts under a unified platform. The system handles everything from product listings and inventory management to seller payouts and customer analytics.",
    challenge: "A consortium of local retailers wanted to compete with large e-commerce platforms by aggregating their inventory under a single online destination. They needed a platform that gave each seller full autonomy over their product catalog and pricing, while providing customers with a unified shopping cart and checkout experience across multiple sellers.",
    solution: "We built ShopSphere as a headless e-commerce architecture with Next.js App Router for the storefront, a custom Node.js seller dashboard, and Stripe Connect for split payment processing and automated seller payouts. Elasticsearch powers the product search across all 200+ sellers, and Redis handles the shopping cart and session state for near-instant page loads.",
    results: [
      "200+ sellers onboarded within the first two months of launch",
      "Monthly GMV exceeded ₹2 crore within 6 months of operation",
      "Average page load time under 1.2 seconds on mobile across India",
      "Seller payout automation eliminated 80+ hours of monthly manual finance work",
      "Customer return rate 35% above industry average for marketplace platforms",
      "4.8 average rating on both iOS and Android app stores",
    ],
    metrics: [
      { label: "Active Sellers", value: "200+", icon: Users },
      { label: "Monthly GMV", value: "₹2Cr+", icon: TrendingUp },
      { label: "App Rating", value: "4.8★", icon: CheckCircle2 },
      { label: "Avg Load Time", value: "1.2s", icon: Clock },
    ],
    features: [
      "Multi-vendor product catalog with 50K+ SKUs",
      "Real-time inventory sync and low-stock alerts",
      "Stripe Connect for automated seller payouts",
      "AI-powered product recommendation engine",
      "Universal search with faceted filtering",
      "Mobile-first PWA with offline browsing",
      "Seller analytics dashboard with revenue tracking",
      "Returns and dispute management system",
    ],
  },
};

export default function ProjectDetail() {
  const params = useParams<{ slug: string }>();
  const slug = params.slug ?? "";
  const project = projects[slug];

  if (!project) {
    return (
      <div className="min-h-screen bg-[#020817] text-white pt-24 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
          <Link href="/portfolio">
            <button className="text-primary hover:underline flex items-center gap-2 mx-auto">
              <ArrowLeft className="h-4 w-4" /> Back to Portfolio
            </button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#020817] text-white pt-24 pb-20">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Back */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-10">
          <Link href="/portfolio">
            <button className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm">
              <ArrowLeft className="h-4 w-4" /> Back to Portfolio
            </button>
          </Link>
        </motion.div>

        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-3xl border border-slate-800 overflow-hidden mb-12"
        >
          {/* Browser chrome bar */}
          <div className="bg-[#13182a] px-4 py-3 flex items-center gap-3 border-b border-slate-700/60">
            <div className="flex gap-1.5 flex-shrink-0">
              <div className="w-3 h-3 rounded-full bg-red-400/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-400/80" />
              <div className="w-3 h-3 rounded-full bg-green-400/80" />
            </div>
            <div className="flex-1 mx-2 bg-slate-800/70 rounded-md px-3 py-1.5 flex items-center gap-2">
              <svg className="w-3 h-3 text-slate-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd"/>
              </svg>
              <span className="text-slate-400 text-xs font-mono truncate">{project.url.replace("https://", "")}</span>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-auto flex-shrink-0 text-slate-500 hover:text-slate-300 transition-colors"
                title="Open live site"
              >
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative h-64 md:h-80">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#020817] via-black/50 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <span className="text-xs font-semibold uppercase tracking-widest text-primary bg-primary/20 border border-primary/30 px-3 py-1 rounded-full mb-3 inline-block backdrop-blur-sm">
                {project.category}
              </span>
              <h1 className="text-4xl md:text-5xl font-extrabold mb-1">{project.title}</h1>
              <p className="text-slate-300 text-lg">{project.tagline}</p>
            </div>
          </div>

          {/* Metrics strip */}
          <div className={`bg-gradient-to-br ${project.color} p-6`}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {project.metrics.map((metric) => (
                <div key={metric.label} className="text-center p-4 rounded-xl bg-black/20 border border-white/5">
                  <p className="text-3xl font-extrabold text-white mb-1">{metric.value}</p>
                  <p className="text-xs text-slate-400">{metric.label}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-10">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-10">
            <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-2xl font-bold mb-4">Overview</h2>
              <p className="text-slate-400 leading-relaxed">{project.overview}</p>
            </motion.section>

            <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-2xl font-bold mb-4">The Challenge</h2>
              <div className="p-6 rounded-xl bg-rose-500/5 border border-rose-500/20">
                <p className="text-slate-300 leading-relaxed">{project.challenge}</p>
              </div>
            </motion.section>

            <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-2xl font-bold mb-4">Our Solution</h2>
              <div className="p-6 rounded-xl bg-primary/5 border border-primary/20">
                <p className="text-slate-300 leading-relaxed">{project.solution}</p>
              </div>
            </motion.section>

            <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-2xl font-bold mb-4">Results & Impact</h2>
              <ul className="space-y-3">
                {project.results.map((result) => (
                  <li key={result} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <p className="text-slate-300 text-sm leading-relaxed">{result}</p>
                  </li>
                ))}
              </ul>
            </motion.section>

            <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-2xl font-bold mb-4">Key Features Delivered</h2>
              <div className="grid md:grid-cols-2 gap-3">
                {project.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-2.5 p-3 rounded-lg bg-[#0a0f1c] border border-slate-800">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                    <p className="text-slate-300 text-sm">{feature}</p>
                  </div>
                ))}
              </div>
            </motion.section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl bg-[#0a0f1c] border border-slate-800 sticky top-24"
            >
              <h3 className="text-lg font-bold mb-5">Project Details</h3>
              <dl className="space-y-4">
                {[
                  { label: "Client", value: project.client },
                  { label: "Duration", value: project.duration },
                  { label: "Team", value: project.teamSize },
                  { label: "Category", value: project.category },
                ].map((item) => (
                  <div key={item.label}>
                    <dt className="text-xs text-slate-500 uppercase tracking-wider font-medium mb-1">{item.label}</dt>
                    <dd className="text-slate-200 text-sm font-medium">{item.value}</dd>
                  </div>
                ))}
              </dl>

              <div className="mt-6 pt-6 border-t border-slate-800">
                <p className="text-xs text-slate-500 uppercase tracking-wider font-medium mb-3">Tech Stack</p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-slate-800 text-slate-300">{t}</span>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-slate-800 space-y-3">
                {/* Live Preview Button */}
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-semibold transition-all shadow-[0_0_20px_rgba(5,150,105,0.3)] hover:shadow-[0_0_28px_rgba(5,150,105,0.5)]"
                >
                  <ExternalLink className="h-4 w-4" />
                  View Live Project
                </a>

                <p className="text-xs text-slate-500 mb-3 text-center">Interested in a similar solution?</p>
                <Link href="/contact">
                  <button className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-primary hover:bg-primary/90 text-white text-sm font-semibold transition-all">
                    Start Your Project <ArrowRight className="h-4 w-4" />
                  </button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
