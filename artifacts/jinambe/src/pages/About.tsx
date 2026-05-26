import { motion } from "framer-motion";
import { Award, Users, Target, Lightbulb, TrendingUp, Shield, Heart, Zap } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

const timeline = [
  { year: "2018", title: "The Beginning", desc: "Hardik Kothari begins his IT career, working with startups and agencies to understand real-world software challenges from the ground up." },
  { year: "2020", title: "Client Work & Freelancing", desc: "Delivered 20+ successful projects independently, building expertise across web, mobile, and enterprise software development domains." },
  { year: "2021", title: "Jinambe Technologies Founded", desc: "Founded Jinambe Technologies in Ahmedabad with a clear mission: deliver enterprise-quality software accessible to businesses of all sizes." },
  { year: "2022", title: "First Enterprise Clients", desc: "Secured first major enterprise clients in healthcare and real estate sectors. Team expanded, processes formalized, quality standards elevated." },
  { year: "2023", title: "Product Expansion", desc: "Extended capabilities into SaaS development, CRM/ERP systems, and AI-integrated applications. Crossed 80+ client milestone." },
  { year: "2024", title: "International Growth", desc: "Expanded client base to international markets. Launched dedicated mobile and cloud divisions. 150+ projects delivered successfully." },
];

const values = [
  { icon: Shield, title: "Uncompromising Quality", desc: "Every line of code is reviewed, every design decision is intentional, every deployment is verified. Quality is not a feature — it's our foundation." },
  { icon: Heart, title: "Client-First Mindset", desc: "We measure our success by your outcomes. Your goals become our goals, your challenges become our problem to solve." },
  { icon: Zap, title: "Speed with Precision", desc: "Rapid delivery without sacrificing quality. We move fast because our processes are solid, not because we cut corners." },
  { icon: Lightbulb, title: "Innovation by Default", desc: "We stay ahead of the technology curve so our clients always have access to the most effective modern solutions." },
  { icon: Target, title: "Results-Oriented", desc: "Beautiful software that doesn't deliver business value is just art. We build for measurable outcomes — growth, efficiency, and revenue." },
  { icon: Users, title: "Long-Term Partnership", desc: "Our most valuable relationships are the ones that grow over years. We invest in understanding your business deeply so we can serve you better." },
];

const stats = [
  { value: "6+", label: "Years in Industry" },
  { value: "150+", label: "Projects Delivered" },
  { value: "80+", label: "Happy Clients" },
  { value: "98%", label: "Client Retention" },
];

export default function About() {
  return (
    <div className="min-h-screen bg-[#020817] text-white pt-24 pb-20">
      {/* Hero */}
      <div className="container mx-auto px-4 max-w-7xl mb-20">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest bg-primary/10 text-primary border border-primary/20 mb-6">
            Our Story
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
            Built from{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-primary">
              Real Experience
            </span>
          </h1>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto">
            Jinambe Technologies was not built in a boardroom. It was built from real client interactions, personal struggles with subpar software, and a deep conviction that businesses deserve better technology partners.
          </p>
        </motion.div>
      </div>

      {/* CEO Section */}
      <div className="container mx-auto px-4 max-w-7xl mb-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-blue-500/10 rounded-3xl blur-xl" />
            <img
              src="/ceo-hardik.jpg"
              alt="Hardik Kothari – Founder & CEO of Jinambe Technologies"
              className="relative rounded-2xl border border-slate-700/50 shadow-2xl w-full max-w-md mx-auto object-cover"
            />
            <div className="absolute -bottom-4 -right-4 bg-[#0a0f1c] border border-slate-700 rounded-2xl p-4 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <Award className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">6+ Years</p>
                  <p className="text-slate-400 text-xs">IT Industry Experience</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary text-xs font-bold uppercase tracking-widest mb-3 block">Message from the Founder</span>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6 leading-tight">
              Technology Should Work <br />
              <span className="text-primary">For You, Not Against You</span>
            </h2>
            <blockquote className="text-slate-300 text-lg leading-relaxed mb-6 pl-4 border-l-2 border-primary/50 italic">
              "I built Jinambe after witnessing too many businesses trapped in poor software, broken integrations, and unreliable technology partners. Every company we work with deserves a product that genuinely serves their goals — built with care, precision, and the kind of deep understanding that only comes from real experience."
            </blockquote>
            <p className="text-slate-400 leading-relaxed mb-8">
              Hardik Kothari has spent over 6 years in the trenches of software development — working with startups, SMBs, and enterprises across India and internationally. He founded Jinambe Technologies on a simple but powerful belief: that exceptional software is not a luxury reserved for large corporations. Every ambitious business deserves technology that works.
            </p>
            <div className="flex items-center gap-4">
              <img
                src="/ceo-hardik.jpg"
                alt="Hardik Kothari"
                className="h-12 w-12 rounded-full object-cover border-2 border-primary/40"
              />
              <div>
                <p className="font-bold text-white">Hardik Kothari</p>
                <p className="text-primary text-sm">Founder & CEO, Jinambe Technologies</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Stats */}
      <div className="bg-[#0a0f1c] border-y border-slate-800 py-16 mb-24">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <p className="text-4xl md:text-5xl font-extrabold text-white mb-2 tracking-tighter">{stat.value}</p>
                <p className="text-slate-400 text-sm font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Office Photo Banner */}
      <div className="container mx-auto px-4 max-w-7xl mb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden border border-slate-800 shadow-2xl"
        >
          <img
            src="/office-team.png"
            alt="Jinambe Technologies office"
            className="w-full h-72 md:h-96 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />
          <div className="absolute inset-0 flex items-center">
            <div className="px-10 md:px-16 max-w-xl">
              <span className="text-xs font-bold uppercase tracking-widest text-primary mb-3 block">Our Workspace</span>
              <h3 className="text-2xl md:text-4xl font-extrabold text-white mb-3 leading-tight">
                Where Great Software<br />Gets Built
              </h3>
              <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                Our Ahmedabad studio is where engineers, designers, and strategists work side-by-side to deliver precision-crafted products for clients worldwide.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Mission & Vision */}
      <div className="container mx-auto px-4 max-w-7xl mb-24">
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl bg-[#0a0f1c] border border-primary/20"
          >
            <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
              <Target className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-slate-400 leading-relaxed">
              To empower startups, businesses, and enterprises with precision-engineered software solutions that drive measurable growth. We build technology that is reliable, scalable, and designed to become a competitive advantage for every client we serve.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="p-8 rounded-2xl bg-[#0a0f1c] border border-blue-500/20"
          >
            <div className="h-12 w-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-6">
              <TrendingUp className="h-6 w-6 text-blue-400" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
            <p className="text-slate-400 leading-relaxed">
              To be the most trusted technology partner for ambitious organizations worldwide — recognized not just for the software we build, but for the outcomes we create, the relationships we cultivate, and the standard of excellence we consistently deliver.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Timeline */}
      <div className="container mx-auto px-4 max-w-4xl mb-24">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Our Journey</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">From a single engineer with a vision to a growing team delivering enterprise software worldwide.</p>
        </motion.div>
        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-blue-500/50 to-transparent" />
          <div className="space-y-10">
            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative flex items-start gap-6 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} pl-12 md:pl-0`}
              >
                <div className="absolute left-0 md:left-1/2 top-2 w-8 h-8 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center -translate-x-0 md:-translate-x-1/2 flex-shrink-0 z-10">
                  <div className="w-2.5 h-2.5 rounded-full bg-primary" />
                </div>
                <div className={`md:w-5/12 p-6 rounded-2xl bg-[#0a0f1c] border border-slate-800 ${i % 2 === 0 ? "md:mr-auto" : "md:ml-auto"}`}>
                  <span className="text-primary text-xs font-bold uppercase tracking-widest">{item.year}</span>
                  <h4 className="text-lg font-bold text-white mt-1 mb-2">{item.title}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="container mx-auto px-4 max-w-7xl mb-24">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Core Values</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">The principles that govern every decision we make and every product we build.</p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, i) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="p-6 rounded-2xl bg-[#0a0f1c] border border-slate-800 hover:border-primary/30 transition-all"
            >
              <div className="h-11 w-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <value.icon className="h-5 w-5 text-primary" />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">{value.title}</h4>
              <p className="text-slate-400 text-sm leading-relaxed">{value.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center p-12 rounded-3xl bg-gradient-to-r from-blue-950/60 to-indigo-950/60 border border-primary/20"
        >
          <h2 className="text-3xl font-extrabold mb-4">Work With Us</h2>
          <p className="text-slate-400 mb-8 max-w-xl mx-auto">
            Join the 80+ businesses that have trusted Jinambe Technologies to build their most important software.
          </p>
          <Link href="/contact">
            <Button size="lg" className="h-12 px-8 bg-primary hover:bg-primary/90">
              Start a Conversation
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
