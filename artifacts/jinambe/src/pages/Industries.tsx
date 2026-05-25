import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  Heart, BookOpen, TrendingUp, Home, ShoppingBag,
  Truck, UtensilsCrossed, Plane, Cloud, Building2
} from "lucide-react";
import { Button } from "@/components/ui/button";

const industries = [
  {
    icon: Heart,
    name: "Healthcare",
    color: "text-rose-400 bg-rose-400/10 border-rose-400/20",
    tagline: "Digitizing patient care",
    challenges: ["Complex compliance requirements (HIPAA)", "Fragmented patient data across systems", "Manual appointment and billing processes"],
    solutions: ["Secure cloud-based HMS platforms", "Integrated EHR and patient portals", "AI-powered diagnostics and scheduling"],
    tech: ["React", "Node.js", "AWS", "PostgreSQL", "HL7 FHIR"],
    benefits: ["60% faster patient admissions", "40% reduction in administrative costs", "Real-time clinical decision support"],
  },
  {
    icon: BookOpen,
    name: "Education",
    color: "text-blue-400 bg-blue-400/10 border-blue-400/20",
    tagline: "Transforming how we learn",
    challenges: ["Scaling content delivery to thousands", "Tracking student progress accurately", "Engaging digital-native learners"],
    solutions: ["Feature-rich LMS with live classes", "AI-powered personalized learning paths", "Gamification and progress analytics"],
    tech: ["React", "WebRTC", "Node.js", "MongoDB", "FFmpeg"],
    benefits: ["98% course completion rates", "3x higher student engagement", "Scalable to 100K+ concurrent users"],
  },
  {
    icon: TrendingUp,
    name: "Finance & FinTech",
    color: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
    tagline: "Engineering financial infrastructure",
    challenges: ["Regulatory compliance and security", "Real-time data processing at scale", "Legacy system modernization"],
    solutions: ["Secure banking and payment platforms", "Real-time financial analytics dashboards", "Automated compliance and reporting"],
    tech: ["React", "Python", "PostgreSQL", "Kafka", "AWS"],
    benefits: ["99.99% uptime SLA", "Bank-grade security standards", "10x faster reporting cycles"],
  },
  {
    icon: Home,
    name: "Real Estate",
    color: "text-indigo-400 bg-indigo-400/10 border-indigo-400/20",
    tagline: "Intelligent property platforms",
    challenges: ["Disconnected listing and CRM systems", "Manual property valuation", "Slow client communication cycles"],
    solutions: ["AI-powered property platforms", "Virtual tour and 3D visualization tools", "Integrated CRM and lead automation"],
    tech: ["React", "Python", "Google Maps", "TensorFlow", "AWS"],
    benefits: ["35% faster property closings", "AI valuation accuracy of 94%", "200% more qualified leads"],
  },
  {
    icon: ShoppingBag,
    name: "E-commerce & Retail",
    color: "text-orange-400 bg-orange-400/10 border-orange-400/20",
    tagline: "Revenue-optimized storefronts",
    challenges: ["Cart abandonment and low conversions", "Inventory management complexity", "Multi-channel selling coordination"],
    solutions: ["Headless commerce with PWA frontends", "Smart inventory and order management", "Omnichannel platform integration"],
    tech: ["Next.js", "Node.js", "Stripe", "Redis", "Elasticsearch"],
    benefits: ["25% improvement in conversion rate", "Real-time inventory across all channels", "Seamless checkout experience"],
  },
  {
    icon: Truck,
    name: "Logistics & Supply Chain",
    color: "text-sky-400 bg-sky-400/10 border-sky-400/20",
    tagline: "Optimized operations at scale",
    challenges: ["Real-time fleet and shipment visibility", "Manual route planning inefficiency", "Complex supplier coordination"],
    solutions: ["GPS-enabled fleet management ERP", "AI-based route optimization algorithms", "Supplier portal and procurement automation"],
    tech: ["React", "Node.js", "Google Maps", "PostgreSQL", "WebSockets"],
    benefits: ["22% reduction in fuel costs", "Real-time tracking for all shipments", "30% improvement in delivery SLA"],
  },
  {
    icon: UtensilsCrossed,
    name: "Food & Restaurants",
    color: "text-amber-400 bg-amber-400/10 border-amber-400/20",
    tagline: "Digital dining experiences",
    challenges: ["Manual order-taking errors", "Slow kitchen communication", "No digital customer engagement"],
    solutions: ["QR-based digital menus and ordering", "Kitchen display and queue management", "Loyalty programs and customer analytics"],
    tech: ["React", "Node.js", "WebSockets", "Stripe", "Firebase"],
    benefits: ["25% increase in average order value", "Zero paper menus and order tickets", "Contactless, frictionless service"],
  },
  {
    icon: Plane,
    name: "Travel & Hospitality",
    color: "text-cyan-400 bg-cyan-400/10 border-cyan-400/20",
    tagline: "Seamless travel experiences",
    challenges: ["Complex booking and inventory management", "Multi-partner coordination", "Personalization at scale"],
    solutions: ["Custom booking engines and portals", "Dynamic pricing and yield management", "AI-powered travel recommendation systems"],
    tech: ["React", "Node.js", "PostgreSQL", "Python", "Stripe"],
    benefits: ["40% increase in direct bookings", "Automated pricing optimization", "Guest satisfaction score improvement"],
  },
  {
    icon: Cloud,
    name: "SaaS & Tech Startups",
    color: "text-violet-400 bg-violet-400/10 border-violet-400/20",
    tagline: "From MVP to scale",
    challenges: ["Fast time-to-market pressure", "Scalable multi-tenant architecture", "Subscription billing complexity"],
    solutions: ["Rapid MVP development with modern stacks", "Cloud-native multi-tenant architecture", "Integrated billing and subscription management"],
    tech: ["Next.js", "Node.js", "AWS", "Stripe", "PostgreSQL"],
    benefits: ["Weeks from idea to live product", "Architecture that scales to millions", "Recurring revenue from day one"],
  },
  {
    icon: Building2,
    name: "Enterprise & Corporate",
    color: "text-slate-300 bg-slate-300/10 border-slate-300/20",
    tagline: "Enterprise-grade digital transformation",
    challenges: ["Legacy system modernization", "Siloed data across departments", "Complex organizational workflows"],
    solutions: ["Custom ERP and workflow automation", "System integration and API middleware", "Enterprise dashboards and BI platforms"],
    tech: ["React", "Node.js", "Java", "PostgreSQL", "Azure"],
    benefits: ["Unified data across all departments", "80% reduction in manual processes", "Executive decision-making at speed"],
  },
];

export default function Industries() {
  return (
    <div className="min-h-screen bg-[#020817] text-white pt-24 pb-20">
      {/* Hero */}
      <div className="container mx-auto px-4 max-w-7xl mb-20 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest bg-primary/10 text-primary border border-primary/20 mb-6">
            Domain Expertise
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
            Industries We{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-primary">
              Transform
            </span>
          </h1>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto">
            Deep domain expertise across 10 industries means we understand your business challenges before you explain them — and we know exactly how to solve them.
          </p>
        </motion.div>
      </div>

      {/* Industries Grid */}
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-8">
          {industries.map((industry, i) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="p-7 rounded-2xl bg-[#0a0f1c] border border-slate-800 hover:border-primary/30 transition-all"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className={`p-3 rounded-xl border ${industry.color} flex-shrink-0`}>
                  <industry.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{industry.name}</h3>
                  <p className={`text-xs font-medium ${industry.color.split(" ")[0]}`}>{industry.tagline}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-5">
                <div>
                  <p className="text-xs font-semibold text-rose-400 uppercase tracking-widest mb-2">Challenges</p>
                  <ul className="space-y-1">
                    {industry.challenges.map((c) => (
                      <li key={c} className="text-xs text-slate-400 flex gap-1.5 items-start">
                        <span className="text-slate-600 mt-0.5">—</span>
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-semibold text-emerald-400 uppercase tracking-widest mb-2">Solutions</p>
                  <ul className="space-y-1">
                    {industry.solutions.map((s) => (
                      <li key={s} className="text-xs text-slate-400 flex gap-1.5 items-start">
                        <span className="text-emerald-500 mt-0.5">+</span>
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-semibold text-blue-400 uppercase tracking-widest mb-2">Results</p>
                  <ul className="space-y-1">
                    {industry.benefits.map((b) => (
                      <li key={b} className="text-xs text-slate-300 flex gap-1.5 items-start font-medium">
                        <span className="text-primary mt-0.5">✓</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-800">
                {industry.tech.map((t) => (
                  <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-slate-800 text-slate-400">{t}</span>
                ))}
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
          <h2 className="text-3xl font-extrabold mb-4">Your Industry. Our Expertise.</h2>
          <p className="text-slate-400 mb-8 max-w-xl mx-auto">
            Don't see your sector listed? We've likely worked in adjacent domains. Let's have a conversation about your specific challenges.
          </p>
          <Link href="/contact">
            <Button size="lg" className="h-12 px-8 bg-primary hover:bg-primary/90">
              Talk to an Expert
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
