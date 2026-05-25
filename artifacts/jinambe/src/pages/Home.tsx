import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { useSubscribeNewsletter } from "@workspace/api-client-react";
import { useToast } from "@/hooks/use-toast";
import {
  ArrowRight, ChevronRight, Terminal, Code2, Globe, Smartphone,
  Cloud, Database, CheckCircle2, Users, Star, TrendingUp, Shield, Zap, Palette
} from "lucide-react";

const stats = [
  { label: "Years Experience", value: "6+" },
  { label: "Happy Clients", value: "80+" },
  { label: "Projects Delivered", value: "150+" },
  { label: "Client Satisfaction", value: "98%" },
];

const services = [
  { title: "Website Development", icon: Globe, desc: "Cinematic, high-performance web experiences built for conversion.", href: "/services/website-development", color: "text-blue-400 bg-blue-400/10" },
  { title: "Mobile App Development", icon: Smartphone, desc: "Native & cross-platform iOS/Android applications.", href: "/services/mobile-app", color: "text-sky-400 bg-sky-400/10" },
  { title: "Custom Software", icon: Terminal, desc: "Bespoke enterprise applications for complex workflows.", href: "/services/custom-software", color: "text-indigo-400 bg-indigo-400/10" },
  { title: "UI/UX Design", icon: Palette, desc: "User experiences that are beautiful and convert.", href: "/services/ui-ux-design", color: "text-violet-400 bg-violet-400/10" },
  { title: "SaaS Development", icon: Cloud, desc: "Cloud-native products from MVP to enterprise scale.", href: "/services/saas-development", color: "text-cyan-400 bg-cyan-400/10" },
  { title: "API Integration", icon: Code2, desc: "Connecting your technology ecosystem seamlessly.", href: "/services/api-integration", color: "text-emerald-400 bg-emerald-400/10" },
];

const techStack = ["React", "Next.js", "Node.js", "Flutter", "TypeScript", "PostgreSQL", "AWS", "Python", "Docker", "Redis"];

const testimonials = [
  {
    quote: "Jinambe delivered our SaaS platform 3 weeks ahead of schedule and 10% under budget. The quality exceeded our expectations at every stage.",
    name: "Ravi Mehta",
    role: "CTO, FinEdge Technologies",
    location: "Mumbai",
    rating: 5,
  },
  {
    quote: "Our hospital management system transformed the way we serve patients. Admissions are faster, records are clean, and our staff actually enjoys using it.",
    name: "Dr. Priya Shah",
    role: "Medical Director, CarePoint Hospitals",
    location: "Ahmedabad",
    rating: 5,
  },
  {
    quote: "We've worked with multiple development agencies. Jinambe is different — transparent communication, deep technical expertise, and they genuinely care about outcomes.",
    name: "Arjun Kapoor",
    role: "Founder, PropVision Realty",
    location: "Surat",
    rating: 5,
  },
];

const whyUs = [
  { icon: Shield, title: "Uncompromising Quality", desc: "Code reviewed, tested, and deployed with absolute intentionality. No shortcuts." },
  { icon: Zap, title: "On-Time Delivery", desc: "We've maintained a 96% on-time delivery rate across 150+ projects." },
  { icon: TrendingUp, title: "Outcome Focused", desc: "We measure success by your business results, not just code shipped." },
  { icon: Users, title: "Dedicated Team", desc: "A consistent team throughout your project — no rotating freelancers." },
  { icon: CheckCircle2, title: "Full Transparency", desc: "Weekly demos, daily updates, staging access throughout development." },
  { icon: Code2, title: "Modern Architecture", desc: "Every project built for the next 5 years, not just today's requirements." },
];

const process = [
  { step: "01", title: "Discovery Call", desc: "30-min call to understand your project, goals, and timeline. No pressure, just clarity." },
  { step: "02", title: "Technical Proposal", desc: "Detailed scope, tech stack recommendation, timeline, and investment — within 48 hours." },
  { step: "03", title: "Design Sprint", desc: "UI/UX wireframes and high-fidelity prototypes before a line of code is written." },
  { step: "04", title: "Agile Build", desc: "Two-week sprints with working demos. You see progress every step of the way." },
  { step: "05", title: "Launch & Support", desc: "Zero-downtime deployment, monitoring setup, and ongoing maintenance support." },
];

const portfolioHighlights = [
  { title: "MediCare Pro", category: "Healthcare SaaS", result: "40% reduction in admin costs", color: "from-teal-600/30 to-cyan-600/10" },
  { title: "ShopSphere", category: "E-commerce Platform", result: "₹2Cr+ monthly GMV", color: "from-orange-600/30 to-amber-600/10" },
  { title: "PropVision", category: "Real Estate AI", result: "35% faster property closings", color: "from-blue-600/30 to-indigo-600/10" },
];

function NewsletterForm() {
  const [email, setEmail] = useState("");
  const { toast } = useToast();
  const subscribe = useSubscribeNewsletter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    subscribe.mutate(
      { data: { email } },
      {
        onSuccess: () => {
          toast({ title: "Subscribed!", description: "Welcome to our newsletter." });
          setEmail("");
        },
        onError: () => {
          toast({ title: "Error", description: "Please try again.", variant: "destructive" });
        },
      }
    );
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        required
        className="flex-1 h-11 px-4 rounded-xl bg-slate-800/80 border border-slate-700 text-white placeholder:text-slate-500 text-sm focus:outline-none focus:border-primary/60"
        data-testid="input-newsletter-email"
      />
      <Button
        type="submit"
        disabled={subscribe.isPending}
        className="h-11 px-6 bg-primary hover:bg-primary/90 whitespace-nowrap"
        data-testid="button-newsletter-subscribe"
      >
        {subscribe.isPending ? "Subscribing..." : "Subscribe"}
      </Button>
    </form>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-[#020817]">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
        <div className="absolute inset-0 flex items-center justify-center bg-[#020817] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#020817] via-transparent to-transparent z-10" />

        <div className="container relative z-20 mx-auto px-4 text-center max-w-5xl pt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-4 backdrop-blur-sm"
            >
              <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse" />
              Premium IT Solutions from Ahmedabad, India
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6 leading-tight">
              Precision-Engineered <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-primary to-blue-600">
                Digital Experiences
              </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto mb-10 leading-relaxed">
              We build world-class software, enterprise applications, and cinematic web experiences that transform businesses and accelerate growth. Trusted by 80+ companies worldwide.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact">
                <Button size="lg" className="h-12 px-8 text-base bg-primary hover:bg-primary/90 text-white shadow-[0_0_25px_rgba(37,99,235,0.5)] transition-all hover:shadow-[0_0_40px_rgba(37,99,235,0.7)]">
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button size="lg" variant="outline" className="h-12 px-8 text-base border-slate-700 hover:bg-slate-800 text-white">
                  View Our Work
                </Button>
              </Link>
            </div>

            <div className="pt-8 flex flex-wrap items-center justify-center gap-3 text-xs text-slate-500">
              {["150+ Projects", "98% Client Satisfaction", "On-time Delivery", "Post-launch Support"].map((item) => (
                <span key={item} className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-3 w-3 text-primary" /> {item}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
          <div className="w-5 h-8 rounded-full border-2 border-slate-600 flex items-start justify-center pt-1.5">
            <div className="w-1 h-2 rounded-full bg-slate-500" />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-[#0a0f1c] border-t border-slate-800/50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="space-y-1"
              >
                <h3 className="text-4xl md:text-5xl font-extrabold text-white tracking-tighter">{stat.value}</h3>
                <p className="text-slate-400 font-medium text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-[#020817]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest bg-primary/10 text-primary border border-primary/20 mb-4">
                What We Build
              </span>
              <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">Enterprise Capabilities</h2>
              <p className="text-slate-400 max-w-2xl mx-auto">Comprehensive technology solutions designed for scale, security, and exceptional user experience.</p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                whileHover={{ y: -4 }}
                className="group p-7 rounded-2xl bg-[#0a0f1c] border border-slate-800 hover:border-primary/40 transition-all"
              >
                <div className={`h-12 w-12 rounded-xl flex items-center justify-center mb-5 ${service.color} group-hover:scale-110 transition-transform`}>
                  <service.icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{service.title}</h3>
                <p className="text-slate-400 mb-5 text-sm leading-relaxed">{service.desc}</p>
                <Link href={service.href} className="text-primary font-medium flex items-center text-sm hover:gap-2 transition-all">
                  Learn more <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link href="/services">
              <Button variant="outline" className="border-slate-700 text-white hover:bg-slate-800">
                View All 10 Services <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-[#0a0f1c]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest bg-primary/10 text-primary border border-primary/20 mb-6">
                Why Jinambe
              </span>
              <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
                We're a Partner, <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-primary">
                  Not Just a Vendor
                </span>
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed mb-8">
                We've seen what bad software costs businesses — wasted money, missed opportunities, and frustrated teams. That's why every project we take on receives the same level of care and precision we'd give our own product.
              </p>
              <Link href="/about">
                <Button variant="outline" className="border-slate-700 text-white hover:bg-slate-800">
                  Our Story <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </motion.div>

            <div className="grid grid-cols-2 gap-4">
              {whyUs.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  className="p-5 rounded-2xl bg-[#020817] border border-slate-800 hover:border-primary/30 transition-all"
                >
                  <div className="h-9 w-9 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                    <item.icon className="h-4 w-4 text-primary" />
                  </div>
                  <h4 className="text-sm font-bold text-white mb-1.5">{item.title}</h4>
                  <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Highlights */}
      <section className="py-24 bg-[#020817]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest bg-primary/10 text-primary border border-primary/20 mb-4">
                Recent Work
              </span>
              <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
                Projects That Move Businesses Forward
              </h2>
              <p className="text-slate-400 max-w-2xl mx-auto">A sample of what we've built. Every project in our portfolio started as someone's vision.</p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {portfolioHighlights.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className={`group rounded-2xl bg-gradient-to-br ${project.color} border border-slate-800 hover:border-primary/30 p-7 transition-all`}
              >
                <div className="h-24 bg-slate-800/50 rounded-xl mb-5 flex items-center justify-center">
                  <span className="text-4xl font-black text-white/20">{project.title.slice(0, 2)}</span>
                </div>
                <p className="text-xs text-primary font-semibold uppercase tracking-widest mb-1">{project.category}</p>
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-emerald-400 text-sm font-medium flex items-center gap-1.5">
                  <TrendingUp className="h-3.5 w-3.5" /> {project.result}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/portfolio">
              <Button variant="outline" className="border-slate-700 text-white hover:bg-slate-800">
                View All 12+ Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-[#0a0f1c]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest bg-primary/10 text-primary border border-primary/20 mb-4">
                How We Work
              </span>
              <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">Our Proven Process</h2>
              <p className="text-slate-400 max-w-2xl mx-auto">From first conversation to final launch — a clear, predictable process that keeps projects on time and on budget.</p>
            </motion.div>
          </div>

          <div className="relative">
            <div className="hidden md:block absolute top-10 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
            <div className="grid md:grid-cols-5 gap-6">
              {process.map((step, i) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative text-center"
                >
                  <div className="h-16 w-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary font-extrabold text-sm mx-auto mb-4 relative z-10">
                    {step.step}
                  </div>
                  <h4 className="font-bold text-white mb-2 text-sm">{step.title}</h4>
                  <p className="text-slate-500 text-xs leading-relaxed">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Ticker */}
      <section className="py-12 bg-[#020817] border-y border-slate-800/50 overflow-hidden">
        <div className="flex gap-6 animate-[scroll_20s_linear_infinite] whitespace-nowrap">
          {[...techStack, ...techStack, ...techStack].map((tech, i) => (
            <span key={i} className="inline-flex items-center gap-2 text-slate-500 text-sm font-medium px-4 py-2 rounded-full bg-slate-900 border border-slate-800 flex-shrink-0">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-[#0a0f1c]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest bg-primary/10 text-primary border border-primary/20 mb-4">
                Client Feedback
              </span>
              <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">What Our Clients Say</h2>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-7 rounded-2xl bg-[#020817] border border-slate-800 hover:border-primary/20 transition-all"
              >
                <div className="flex gap-0.5 mb-5">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="h-4 w-4 text-amber-400 fill-current" />
                  ))}
                </div>
                <p className="text-slate-300 text-sm leading-relaxed mb-6 italic">"{t.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center text-primary text-sm font-bold flex-shrink-0">
                    {t.name.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">{t.name}</p>
                    <p className="text-slate-500 text-xs">{t.role} · {t.location}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#020817]">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-12 rounded-3xl bg-gradient-to-r from-blue-950/70 to-indigo-950/70 border border-primary/25"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/15 border border-primary/30 text-primary text-xs font-semibold uppercase tracking-widest mb-6">
              <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              Ready to Start?
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-5 leading-tight">
              Let's Build Something <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-primary">Extraordinary Together</span>
            </h2>
            <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto">
              Tell us about your project. We'll respond within 24 hours with a tailored technical proposal and project estimate — completely free.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link href="/contact">
                <Button size="lg" className="h-13 px-10 text-lg bg-primary hover:bg-primary/90 text-white shadow-[0_0_30px_rgba(37,99,235,0.5)] transition-all">
                  Get a Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <a
                href="https://wa.me/917777994472?text=Hi%20Jinambe!%20I%27d%20like%20to%20discuss%20a%20project."
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" variant="outline" className="h-12 px-8 border-green-600/50 text-green-400 hover:bg-green-500/10 hover:border-green-500/70">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 mr-2">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Chat on WhatsApp
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-[#0a0f1c] border-t border-slate-800">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h3 className="text-2xl font-bold text-white mb-2">Stay Ahead in Tech</h3>
            <p className="text-slate-400 text-sm mb-6">Engineering insights, product strategies, and industry updates — directly to your inbox. No spam, ever.</p>
            <NewsletterForm />
          </motion.div>
        </div>
      </section>
    </div>
  );
}
