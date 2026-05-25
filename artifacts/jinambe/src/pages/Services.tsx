import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  Globe, Smartphone, Code2, Palette, Cloud, Database, ShoppingCart,
  Plug, LifeBuoy, BarChart3, ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    slug: "website-development",
    icon: Globe,
    title: "Website Development",
    tagline: "Cinematic web experiences",
    description: "We engineer high-performance, visually stunning websites that captivate visitors and drive conversions. From corporate portals to complex web applications — every project is crafted for speed, scalability, and impact.",
    tech: ["React", "Next.js", "TypeScript", "Node.js"],
    color: "blue",
  },
  {
    slug: "mobile-app",
    icon: Smartphone,
    title: "Mobile App Development",
    tagline: "Native & cross-platform",
    description: "Deliver flawless mobile experiences across iOS and Android. Our Flutter and React Native apps are engineered for performance, designed for delight, and built to scale from launch day to millions of users.",
    tech: ["Flutter", "React Native", "Swift", "Kotlin"],
    color: "sky",
  },
  {
    slug: "custom-software",
    icon: Code2,
    title: "Custom Software Development",
    tagline: "Tailored enterprise solutions",
    description: "Bespoke applications architected around your exact workflows. We build mission-critical software that becomes the operational backbone of your business — reliable, secure, and designed to grow with you.",
    tech: ["Node.js", "Python", "Java", "PostgreSQL"],
    color: "indigo",
  },
  {
    slug: "ui-ux-design",
    icon: Palette,
    title: "UI/UX Design",
    tagline: "Design that converts",
    description: "User experiences that are as beautiful as they are intuitive. Our design process combines research, prototyping, and relentless iteration to produce interfaces that users love and businesses depend on.",
    tech: ["Figma", "Framer", "Design Systems", "Prototyping"],
    color: "violet",
  },
  {
    slug: "saas-development",
    icon: Cloud,
    title: "SaaS Development",
    tagline: "Cloud-native products",
    description: "From idea to multi-tenant SaaS platform — we architect subscription-based products with the right infrastructure, billing integrations, and scalable backends that support thousands of concurrent users.",
    tech: ["AWS", "Next.js", "Stripe", "Redis"],
    color: "cyan",
  },
  {
    slug: "crm-erp",
    icon: BarChart3,
    title: "CRM & ERP Development",
    tagline: "Operational intelligence",
    description: "Custom CRM and ERP systems that replace fragmented spreadsheets and legacy tools. We build unified platforms that give your teams real-time visibility, automate workflows, and accelerate decisions.",
    tech: ["React", "Node.js", "PostgreSQL", "WebSockets"],
    color: "blue",
  },
  {
    slug: "ecommerce",
    icon: ShoppingCart,
    title: "E-commerce Development",
    tagline: "Revenue-optimized stores",
    description: "High-converting online stores engineered for growth. Custom storefronts, headless commerce architecture, inventory management, and seamless payment processing — built to maximize your revenue.",
    tech: ["Shopify", "Next.js", "Stripe", "Node.js"],
    color: "emerald",
  },
  {
    slug: "api-integration",
    icon: Plug,
    title: "API Integration",
    tagline: "Systems that talk",
    description: "Connect your entire technology ecosystem. We design and implement RESTful APIs, GraphQL services, and third-party integrations that make your systems communicate seamlessly and data flow intelligently.",
    tech: ["REST", "GraphQL", "Webhooks", "OAuth"],
    color: "amber",
  },
  {
    slug: "cloud-solutions",
    icon: Database,
    title: "Cloud Solutions",
    tagline: "Infrastructure at scale",
    description: "Architected for resilience, engineered for scale. We design and manage cloud infrastructure on AWS, Azure, and GCP — from containerization and serverless functions to CI/CD pipelines and cost optimization.",
    tech: ["AWS", "Azure", "GCP", "Docker", "Kubernetes"],
    color: "sky",
  },
  {
    slug: "maintenance",
    icon: LifeBuoy,
    title: "Maintenance & Support",
    tagline: "Always-on reliability",
    description: "Your product never sleeps, and neither do we. Ongoing performance monitoring, security patching, feature updates, and rapid incident response — ensuring your applications stay fast, secure, and competitive.",
    tech: ["Monitoring", "DevOps", "Security", "Updates"],
    color: "rose",
  },
];

const colorMap: Record<string, string> = {
  blue: "text-blue-400 bg-blue-400/10 border-blue-400/20",
  sky: "text-sky-400 bg-sky-400/10 border-sky-400/20",
  indigo: "text-indigo-400 bg-indigo-400/10 border-indigo-400/20",
  violet: "text-violet-400 bg-violet-400/10 border-violet-400/20",
  cyan: "text-cyan-400 bg-cyan-400/10 border-cyan-400/20",
  emerald: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
  amber: "text-amber-400 bg-amber-400/10 border-amber-400/20",
  rose: "text-rose-400 bg-rose-400/10 border-rose-400/20",
  purple: "text-purple-400 bg-purple-400/10 border-purple-400/20",
};

export default function Services() {
  return (
    <div className="min-h-screen bg-[#020817] text-white pt-24 pb-20">
      {/* Hero */}
      <div className="container mx-auto px-4 max-w-7xl mb-20 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest bg-primary/10 text-primary border border-primary/20 mb-6">
            What We Build
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
            Enterprise-Grade{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-primary">
              Technology Services
            </span>
          </h1>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto">
            From concept to deployment, we deliver precision-engineered software solutions that drive real business outcomes. Every project is a partnership, every product is built to last.
          </p>
        </motion.div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const colorClasses = colorMap[service.color] ?? colorMap.blue;
            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.5 }}
                whileHover={{ y: -4 }}
                className="group relative p-7 rounded-2xl bg-[#0a0f1c] border border-slate-800 hover:border-primary/40 transition-all"
              >
                <div className={`inline-flex p-3 rounded-xl border ${colorClasses} mb-5`}>
                  <service.icon className="h-5 w-5" />
                </div>
                <p className={`text-xs font-semibold uppercase tracking-widest mb-2 ${colorClasses.split(" ")[0]}`}>
                  {service.tagline}
                </p>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-5">{service.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {service.tech.map((t) => (
                    <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-slate-800 text-slate-400">
                      {t}
                    </span>
                  ))}
                </div>

                <Link href={`/services/${service.slug}`}>
                  <button className="flex items-center gap-1.5 text-sm font-medium text-primary hover:gap-3 transition-all group">
                    Learn more
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center p-12 rounded-3xl bg-gradient-to-r from-blue-950/60 to-indigo-950/60 border border-primary/20"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
            Share your requirements with us and get a free technical consultation and project estimate within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="h-12 px-8 bg-primary hover:bg-primary/90 text-white shadow-[0_0_20px_rgba(37,99,235,0.35)]">
                Get a Free Quote
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/portfolio">
              <Button size="lg" variant="outline" className="h-12 px-8 border-slate-700 text-white hover:bg-slate-800">
                View Our Portfolio
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
