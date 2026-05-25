import { motion } from "framer-motion";
import { Link, useParams } from "wouter";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";

const serviceData: Record<string, {
  title: string;
  tagline: string;
  icon: string;
  color: string;
  overview: string;
  whatWeDeliver: string[];
  process: { step: string; title: string; desc: string }[];
  benefits: { title: string; desc: string }[];
  tech: string[];
  cta: string;
}> = {
  "website-development": {
    title: "Website Development",
    tagline: "Cinematic, high-performance web experiences",
    icon: "🌐",
    color: "from-blue-600/20 to-indigo-600/10",
    overview: "We design and engineer websites that go beyond aesthetics. Every project combines cinematic design, engineering precision, and conversion optimization to deliver a digital presence that truly represents your brand and drives business results.",
    whatWeDeliver: [
      "Custom-coded React or Next.js website (no page builders, no limitations)",
      "Mobile-first, fully responsive across all devices and screen sizes",
      "SEO-optimized structure, semantic HTML, and Core Web Vitals compliance",
      "CMS integration (Sanity, Contentful, or custom headless setup)",
      "Contact forms, lead capture, and CRM integration",
      "Analytics setup with Google Analytics 4 and Hotjar",
      "SSL/HTTPS, security headers, and performance monitoring",
      "12-month warranty on all delivered code",
    ],
    process: [
      { step: "01", title: "Discovery & Strategy", desc: "Deep-dive into your business, competitors, and user personas. We define the sitemap, content strategy, and conversion goals before a single mockup is drawn." },
      { step: "02", title: "UI/UX Design", desc: "Figma-based design with multiple concept directions. We present two initial concepts and iterate until the design is exactly right — then we'll hand you an interactive prototype." },
      { step: "03", title: "Development", desc: "Component-by-component build in React/Next.js with TypeScript. Daily progress updates, staging environment access, and regular review checkpoints." },
      { step: "04", title: "Testing & QA", desc: "Cross-browser testing, mobile QA on 10 real devices, performance benchmarking, accessibility audit, and security review." },
      { step: "05", title: "Launch & Support", desc: "Zero-downtime deployment, Google Search Console setup, and a handover session with your team. 12-month maintenance warranty included." },
    ],
    benefits: [
      { title: "No Page Builders", desc: "Custom-coded means no limitations. Your website can do anything you can imagine, with performance that page builders can never match." },
      { title: "Performance Obsessed", desc: "We target 95+ Lighthouse scores. Fast websites rank better, convert better, and retain users better." },
      { title: "SEO-First Architecture", desc: "Built for search engines from the ground up. Semantic HTML, structured data, and Core Web Vitals compliance out of the box." },
      { title: "Conversion Optimized", desc: "We study user behavior and design clear paths to conversion — whether that's a contact form, a purchase, or a lead magnet." },
    ],
    tech: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Sanity CMS", "Vercel", "AWS"],
    cta: "Get a Website Quote",
  },
  "mobile-app": {
    title: "Mobile App Development",
    tagline: "Native and cross-platform applications that users love",
    icon: "📱",
    color: "from-sky-600/20 to-blue-600/10",
    overview: "We build mobile applications that users don't just download — they keep using. Through a rigorous design and engineering process, we create apps that are fast, intuitive, reliable, and genuinely delightful across iOS and Android.",
    whatWeDeliver: [
      "Flutter or React Native app targeting both iOS and Android",
      "Custom UI/UX designed for mobile-first interaction patterns",
      "Backend API development and integration",
      "App Store and Google Play submission and optimization (ASO)",
      "Push notification setup and in-app messaging",
      "Analytics integration (Mixpanel, Firebase Analytics)",
      "CI/CD pipeline for automated builds and releases",
      "6-month post-launch maintenance and support",
    ],
    process: [
      { step: "01", title: "Product Discovery", desc: "User stories, feature prioritization, and technical scoping. We help you define the MVP that maximizes learning while minimizing time to market." },
      { step: "02", title: "UX Wireframing", desc: "Low-fidelity wireframes for every screen flow, reviewed and approved before moving to visual design. This prevents expensive rework later." },
      { step: "03", title: "Visual Design", desc: "High-fidelity UI in Figma with your brand guidelines applied. Interactive prototype shared for stakeholder review and user testing." },
      { step: "04", title: "Development Sprints", desc: "Two-week sprints with demo at the end of each. You can test on real devices throughout development, not just at the end." },
      { step: "05", title: "Store Submission", desc: "App Store and Play Store submission with optimized listings. We navigate the review process and handle any rejection feedback." },
    ],
    benefits: [
      { title: "Cross-Platform Efficiency", desc: "One codebase, two platforms. 40-60% lower development cost compared to building two separate native apps, with near-native performance." },
      { title: "User-Centered Design", desc: "We follow platform-specific HIG guidelines so your app feels native to each platform, not like a generic cross-platform compromise." },
      { title: "Built for Scale", desc: "Architecture designed from day one to handle growth — efficient API design, proper state management, and future feature extensibility built in." },
      { title: "Full Lifecycle Support", desc: "We don't disappear after launch. Monitoring, crash reporting, and a dedicated support channel keep your app running smoothly." },
    ],
    tech: ["Flutter", "React Native", "Dart", "TypeScript", "Node.js", "Firebase", "AWS", "Stripe"],
    cta: "Discuss Your App Idea",
  },
  "custom-software": {
    title: "Custom Software Development",
    tagline: "Bespoke enterprise applications for complex business needs",
    icon: "⚙️",
    color: "from-indigo-600/20 to-violet-600/10",
    overview: "When off-the-shelf software creates compromises, custom software creates competitive advantage. We architect and build enterprise applications that fit your exact workflows — not the other way around.",
    whatWeDeliver: [
      "Requirements analysis and technical architecture document",
      "Full-stack web application with React frontend and Node.js/Python backend",
      "Relational or document database design and implementation",
      "Role-based access control and user management",
      "Third-party integrations (ERPs, CRMs, payment gateways, APIs)",
      "Automated testing suite (unit, integration, E2E)",
      "Documentation for all APIs and admin functions",
      "Ongoing maintenance and feature development retainer",
    ],
    process: [
      { step: "01", title: "Requirements Analysis", desc: "Structured discovery sessions to map every workflow, user type, and system integration. We produce a comprehensive requirements document before writing code." },
      { step: "02", title: "Architecture Design", desc: "Technical architecture, database schema, API design, and infrastructure planning. You review and approve before development begins." },
      { step: "03", title: "Iterative Development", desc: "Monthly release cycles with working software at every checkpoint. No black-box development — you see progress continuously." },
      { step: "04", title: "User Acceptance Testing", desc: "Structured UAT with your team on a staging environment that mirrors production. Issues are tracked and resolved systematically." },
      { step: "05", title: "Production Deployment", desc: "Infrastructure setup, zero-downtime deployment, monitoring configuration, and team training for day-to-day use." },
    ],
    benefits: [
      { title: "Exact Fit", desc: "Software built for your workflows, not generic workflows. No workarounds, no unused features, no licensing limitations." },
      { title: "Competitive Moat", desc: "Custom software becomes a strategic asset. Your competitors can't replicate it by buying the same SaaS subscription." },
      { title: "Full Ownership", desc: "You own all the code, all the data, all the infrastructure. No vendor lock-in, no per-seat pricing surprises." },
      { title: "Scales With You", desc: "Architecture designed for your 5-year vision, not just today's requirements. Adding features is planned for, not retrofitted." },
    ],
    tech: ["React", "TypeScript", "Node.js", "Python", "PostgreSQL", "Redis", "Docker", "AWS"],
    cta: "Scope Your Project",
  },
};

export default function ServiceDetail() {
  const params = useParams<{ slug: string }>();
  const slug = params.slug ?? "";
  const service = serviceData[slug];

  if (!service) {
    return (
      <div className="min-h-screen bg-[#020817] text-white pt-24 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Service Not Found</h1>
          <Link href="/services">
            <button className="text-primary hover:underline flex items-center gap-2 mx-auto">
              <ArrowLeft className="h-4 w-4" /> View All Services
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
          <Link href="/services">
            <button className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm">
              <ArrowLeft className="h-4 w-4" /> All Services
            </button>
          </Link>
        </motion.div>

        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`rounded-3xl bg-gradient-to-br ${service.color} border border-slate-800 p-10 mb-16`}
        >
          <div className="text-5xl mb-5">{service.icon}</div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-3">{service.title}</h1>
          <p className="text-slate-400 text-xl mb-8">{service.tagline}</p>
          <p className="text-slate-300 text-lg leading-relaxed max-w-3xl">{service.overview}</p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-14">
            {/* What We Deliver */}
            <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-2xl font-bold mb-6">What We Deliver</h2>
              <ul className="space-y-3">
                {service.whatWeDeliver.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-slate-300 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.section>

            {/* Our Process */}
            <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-2xl font-bold mb-8">Our Process</h2>
              <div className="space-y-6">
                {service.process.map((step, i) => (
                  <motion.div
                    key={step.step}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="flex gap-5"
                  >
                    <div className="flex-shrink-0">
                      <div className="h-10 w-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary font-bold text-sm">
                        {step.step}
                      </div>
                    </div>
                    <div className="pt-1">
                      <h4 className="font-bold text-white mb-1.5">{step.title}</h4>
                      <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Why Choose Us */}
            <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-2xl font-bold mb-6">Why Choose Jinambe</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {service.benefits.map((benefit) => (
                  <div key={benefit.title} className="p-5 rounded-xl bg-[#0a0f1c] border border-slate-800">
                    <h4 className="font-bold text-white mb-2 text-sm">{benefit.title}</h4>
                    <p className="text-slate-400 text-xs leading-relaxed">{benefit.desc}</p>
                  </div>
                ))}
              </div>
            </motion.section>
          </div>

          {/* Sidebar */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl bg-[#0a0f1c] border border-slate-800 sticky top-24"
            >
              <h3 className="text-lg font-bold mb-5">Tech Stack</h3>
              <div className="flex flex-wrap gap-2 mb-8">
                {service.tech.map((t) => (
                  <span key={t} className="text-xs px-2.5 py-1.5 rounded-lg bg-slate-800 text-slate-300">{t}</span>
                ))}
              </div>

              <div className="pt-6 border-t border-slate-800">
                <p className="text-sm text-slate-400 mb-4">Ready to get started? Let's discuss your requirements.</p>
                <Link href="/contact">
                  <button className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-primary hover:bg-primary/90 text-white text-sm font-semibold transition-all mb-3">
                    {service.cta} <ArrowRight className="h-4 w-4" />
                  </button>
                </Link>
                <a
                  href="https://wa.me/917777994472"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-green-500/10 border border-green-500/30 hover:border-green-500/50 text-green-400 text-sm font-medium transition-all"
                >
                  Chat on WhatsApp
                </a>
              </div>

              <div className="mt-6 pt-6 border-t border-slate-800">
                <p className="text-xs text-slate-500 mb-3 uppercase tracking-wider">Also explore</p>
                <div className="space-y-2">
                  <Link href="/services">
                    <button className="w-full text-left text-sm text-slate-400 hover:text-primary transition-colors py-1">
                      → All Services
                    </button>
                  </Link>
                  <Link href="/portfolio">
                    <button className="w-full text-left text-sm text-slate-400 hover:text-primary transition-colors py-1">
                      → View Our Portfolio
                    </button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
