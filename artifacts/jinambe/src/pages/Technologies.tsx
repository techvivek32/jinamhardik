import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

const categories = [
  {
    name: "Frontend",
    color: "blue",
    tech: [
      { name: "React", level: 98, desc: "Component-based UIs", emoji: "⚛️" },
      { name: "Next.js", level: 95, desc: "Full-stack React framework", emoji: "▲" },
      { name: "TypeScript", level: 96, desc: "Type-safe JavaScript", emoji: "TS" },
      { name: "Tailwind CSS", level: 97, desc: "Utility-first CSS", emoji: "🎨" },
      { name: "Vue.js", level: 85, desc: "Progressive framework", emoji: "💚" },
      { name: "Framer Motion", level: 92, desc: "Production animations", emoji: "🎭" },
    ],
  },
  {
    name: "Backend",
    color: "indigo",
    tech: [
      { name: "Node.js", level: 97, desc: "Server-side JavaScript", emoji: "🟢" },
      { name: "Python", level: 90, desc: "APIs & AI/ML", emoji: "🐍" },
      { name: "GraphQL", level: 88, desc: "Flexible API queries", emoji: "◈" },
      { name: "REST APIs", level: 98, desc: "Standard web APIs", emoji: "🔗" },
      { name: "Express.js", level: 96, desc: "Node.js framework", emoji: "⚡" },
      { name: "Redis", level: 88, desc: "Caching & queues", emoji: "🔴" },
    ],
  },
  {
    name: "Mobile",
    color: "sky",
    tech: [
      { name: "Flutter", level: 93, desc: "Cross-platform apps", emoji: "🐦" },
      { name: "React Native", level: 92, desc: "Cross-platform apps", emoji: "📱" },
      { name: "Swift", level: 80, desc: "Native iOS", emoji: "🍎" },
      { name: "Kotlin", level: 80, desc: "Native Android", emoji: "🤖" },
    ],
  },
  {
    name: "Database",
    color: "violet",
    tech: [
      { name: "PostgreSQL", level: 96, desc: "Relational database", emoji: "🐘" },
      { name: "MongoDB", level: 90, desc: "Document database", emoji: "🍃" },
      { name: "MySQL", level: 88, desc: "Relational database", emoji: "🐬" },
      { name: "Firebase", level: 87, desc: "Real-time database", emoji: "🔥" },
      { name: "Drizzle ORM", level: 92, desc: "TypeScript-first ORM", emoji: "💧" },
    ],
  },
  {
    name: "Cloud & DevOps",
    color: "cyan",
    tech: [
      { name: "AWS", level: 92, desc: "Cloud infrastructure", emoji: "☁️" },
      { name: "Google Cloud", level: 85, desc: "Cloud services", emoji: "🌐" },
      { name: "Azure", level: 83, desc: "Enterprise cloud", emoji: "🔷" },
      { name: "Docker", level: 93, desc: "Containerization", emoji: "🐳" },
      { name: "Kubernetes", level: 82, desc: "Container orchestration", emoji: "⚙️" },
      { name: "CI/CD Pipelines", level: 94, desc: "Automated deployments", emoji: "🚀" },
    ],
  },
];

const colorMap: Record<string, { bar: string; badge: string; text: string }> = {
  blue: { bar: "bg-blue-500", badge: "bg-blue-400/10 text-blue-400 border-blue-400/20", text: "text-blue-400" },
  indigo: { bar: "bg-indigo-500", badge: "bg-indigo-400/10 text-indigo-400 border-indigo-400/20", text: "text-indigo-400" },
  sky: { bar: "bg-sky-500", badge: "bg-sky-400/10 text-sky-400 border-sky-400/20", text: "text-sky-400" },
  violet: { bar: "bg-violet-500", badge: "bg-violet-400/10 text-violet-400 border-violet-400/20", text: "text-violet-400" },
  cyan: { bar: "bg-cyan-500", badge: "bg-cyan-400/10 text-cyan-400 border-cyan-400/20", text: "text-cyan-400" },
};

export default function Technologies() {
  return (
    <div className="min-h-screen bg-[#020817] text-white pt-24 pb-20">
      {/* Hero */}
      <div className="container mx-auto px-4 max-w-7xl mb-20 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest bg-primary/10 text-primary border border-primary/20 mb-6">
            Our Stack
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
            Technologies We{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-primary">
              Master
            </span>
          </h1>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto">
            We stay at the forefront of modern software development — deliberately choosing tools that are proven, scalable, and right for each project's unique requirements.
          </p>
        </motion.div>
      </div>

      {/* Tech Categories */}
      <div className="container mx-auto px-4 max-w-7xl space-y-16">
        {categories.map((cat, ci) => {
          const colors = colorMap[cat.color] ?? colorMap.blue;
          return (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: ci * 0.08 }}
            >
              <div className="flex items-center gap-3 mb-8">
                <span className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest border ${colors.badge}`}>
                  {cat.name}
                </span>
                <div className="flex-1 h-px bg-slate-800" />
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {cat.tech.map((t, i) => (
                  <motion.div
                    key={t.name}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06 }}
                    whileHover={{ y: -2 }}
                    className="p-5 rounded-2xl bg-[#0a0f1c] border border-slate-800 hover:border-primary/30 transition-all"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="h-10 w-10 rounded-xl bg-slate-800 flex items-center justify-center text-base font-bold flex-shrink-0">
                        {t.emoji}
                      </div>
                      <div>
                        <p className="font-bold text-white text-sm">{t.name}</p>
                        <p className="text-slate-500 text-xs">{t.desc}</p>
                      </div>
                      <span className={`ml-auto text-sm font-bold ${colors.text}`}>{t.level}%</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-slate-800 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${t.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: i * 0.05, ease: "easeOut" }}
                        className={`h-full rounded-full ${colors.bar}`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Approach Section */}
      <div className="container mx-auto px-4 max-w-7xl mt-20">
        <div className="grid md:grid-cols-3 gap-6 p-8 rounded-3xl bg-[#0a0f1c] border border-slate-800">
          {[
            { title: "Right Tool for the Job", desc: "We don't have a preferred stack we force onto every project. We evaluate each requirement and recommend the technology that best serves your specific goals." },
            { title: "Proven in Production", desc: "Every technology we use has been battle-tested in production applications. We don't experiment with your project's foundation." },
            { title: "Staying Current", desc: "Our team actively evaluates new technologies, attends conferences, and contributes to open-source. You benefit from our continuous learning." },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="h-1.5 w-12 rounded-full bg-primary mb-4" />
              <h4 className="font-bold text-white mb-2">{item.title}</h4>
              <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="container mx-auto px-4 max-w-4xl mt-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center p-12 rounded-3xl bg-gradient-to-r from-blue-950/60 to-indigo-950/60 border border-primary/20"
        >
          <h2 className="text-3xl font-extrabold mb-4">Need a Specific Stack?</h2>
          <p className="text-slate-400 mb-8 max-w-xl mx-auto">
            Tell us your requirements and we'll recommend the optimal technology choices for your project.
          </p>
          <Link href="/contact">
            <Button size="lg" className="h-12 px-8 bg-primary hover:bg-primary/90">
              Discuss Your Tech Stack
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
