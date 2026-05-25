import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Clock, Briefcase, ArrowRight, ChevronDown, ChevronUp, Zap, Users, BookOpen, Heart } from "lucide-react";
import { Link } from "wouter";

const openings = [
  {
    id: 1,
    title: "Senior Full-Stack Developer",
    type: "Full-time",
    mode: "Hybrid",
    location: "Ahmedabad, India",
    experience: "3–6 years",
    salary: "₹12L – ₹22L per annum",
    skills: ["React", "Node.js", "TypeScript", "PostgreSQL"],
    description: "We're looking for a senior full-stack engineer who can independently architect and deliver complex web applications. You'll work directly with clients, lead smaller feature teams, and set the technical standard for our projects.",
    responsibilities: [
      "Architect and implement full-stack features from requirements to deployment",
      "Lead code reviews and mentor junior developers",
      "Collaborate directly with clients on technical decisions",
      "Contribute to improving our development standards and practices",
      "Participate in pre-sales technical assessments for new projects",
    ],
    requirements: [
      "3+ years of professional React experience with hooks and modern patterns",
      "Strong Node.js and REST API development experience",
      "Proficiency with PostgreSQL and database design",
      "TypeScript expertise, not just usage",
      "Experience with cloud deployment (AWS or GCP preferred)",
      "Strong communication skills — you'll interact with clients regularly",
    ],
  },
  {
    id: 2,
    title: "Flutter Mobile Developer",
    type: "Full-time",
    mode: "Hybrid",
    location: "Ahmedabad, India",
    experience: "2–5 years",
    salary: "₹8L – ₹16L per annum",
    skills: ["Flutter", "Dart", "Firebase", "REST APIs"],
    description: "Join our mobile team to build high-quality Flutter applications for clients across healthcare, e-commerce, and enterprise sectors. You'll own the mobile codebase for 3–5 simultaneous projects.",
    responsibilities: [
      "Build production Flutter applications from Figma designs",
      "Implement state management solutions (Riverpod, BLoC)",
      "Integrate REST APIs and third-party SDKs",
      "Publish and maintain apps on App Store and Google Play",
      "Write unit and widget tests for critical application flows",
    ],
    requirements: [
      "2+ years of professional Flutter/Dart development",
      "Published at least one app on both App Store and Google Play",
      "Experience with common Flutter state management patterns",
      "Solid understanding of REST API integration",
      "Familiarity with Firebase services",
      "Good eye for UI detail and platform-specific design conventions",
    ],
  },
  {
    id: 3,
    title: "UI/UX Designer",
    type: "Full-time",
    mode: "Hybrid",
    location: "Ahmedabad, India",
    experience: "2–4 years",
    salary: "₹7L – ₹14L per annum",
    skills: ["Figma", "UX Research", "Design Systems", "Prototyping"],
    description: "We need a talented designer who can translate business requirements into exceptional user experiences. You'll own design for multiple simultaneous client projects, from initial wireframes to high-fidelity prototypes.",
    responsibilities: [
      "Lead UX research and user flow mapping for new projects",
      "Create wireframes, prototypes, and high-fidelity UI in Figma",
      "Build and maintain design systems for client products",
      "Collaborate closely with developers for faithful implementation",
      "Conduct and document usability testing sessions",
    ],
    requirements: [
      "2+ years of product/UX design experience",
      "Strong Figma proficiency including auto-layout and component systems",
      "Portfolio demonstrating complex web and mobile UI/UX work",
      "Understanding of frontend constraints (HTML, CSS principles)",
      "Experience with design systems and component libraries",
      "Excellent visual design sensibility and attention to detail",
    ],
  },
  {
    id: 4,
    title: "Junior React Developer",
    type: "Full-time",
    mode: "On-site",
    location: "Ahmedabad, India",
    experience: "0–2 years",
    salary: "₹4L – ₹8L per annum",
    skills: ["React", "JavaScript", "HTML/CSS", "Git"],
    description: "An entry-level role for a hungry developer ready to grow fast. You'll work under senior engineers on real client projects, receive structured mentorship, and be challenged to level up every month.",
    responsibilities: [
      "Implement UI components from Figma designs with pixel accuracy",
      "Write clean, well-commented code following team standards",
      "Fix bugs and handle small feature additions on live projects",
      "Participate in code reviews and learn from feedback",
      "Write basic unit tests for your code",
    ],
    requirements: [
      "Solid HTML, CSS, and vanilla JavaScript fundamentals",
      "Some practical React experience (personal projects count)",
      "Familiarity with Git and basic version control workflows",
      "Ability to read and understand written English technical documentation",
      "Eagerness to learn and ask questions — this is required, not optional",
      "Based in or willing to relocate to Ahmedabad",
    ],
  },
];

const perks = [
  { icon: Zap, title: "Rapid Career Growth", desc: "Work on diverse projects across industries. At our scale, you'll touch more in one year than most engineers see in five." },
  { icon: Users, title: "Direct Client Exposure", desc: "Senior team members work directly with clients — no layers of management between you and the people using your software." },
  { icon: BookOpen, title: "Learning Culture", desc: "Weekly technical discussions, access to courses and conferences, and a team that genuinely enjoys learning new technology." },
  { icon: Heart, title: "Work-Life Balance", desc: "We're ambitious but not reckless. We don't glorify burnout. Sustainable pace, flexible hours, and real time off." },
];

function JobCard({ job }: { job: typeof openings[0] }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="rounded-2xl bg-[#0a0f1c] border border-slate-800 hover:border-primary/30 transition-all overflow-hidden"
    >
      <div
        className="p-7 cursor-pointer"
        onClick={() => setExpanded(!expanded)}
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary font-medium">{job.type}</span>
              <span className="text-xs px-2.5 py-1 rounded-full bg-slate-800 text-slate-400">{job.mode}</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">{job.title}</h3>
            <div className="flex flex-wrap gap-4 text-sm text-slate-400">
              <span className="flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5" />{job.location}</span>
              <span className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" />{job.experience}</span>
              <span className="flex items-center gap-1.5"><Briefcase className="h-3.5 w-3.5" />{job.salary}</span>
            </div>
          </div>
          <button className="p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white transition-colors flex-shrink-0 mt-1">
            {expanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
          </button>
        </div>

        <div className="flex flex-wrap gap-1.5 mt-4">
          {job.skills.map((s) => (
            <span key={s} className="text-xs px-2 py-0.5 rounded bg-slate-800 text-slate-400">{s}</span>
          ))}
        </div>
      </div>

      {expanded && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="px-7 pb-7 border-t border-slate-800 pt-6"
        >
          <p className="text-slate-400 text-sm leading-relaxed mb-6">{job.description}</p>

          <div className="grid md:grid-cols-2 gap-6 mb-7">
            <div>
              <h4 className="text-sm font-bold text-white mb-3">Responsibilities</h4>
              <ul className="space-y-2">
                {job.responsibilities.map((r) => (
                  <li key={r} className="text-xs text-slate-400 flex gap-2 items-start">
                    <span className="text-primary mt-1">→</span>{r}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-bold text-white mb-3">Requirements</h4>
              <ul className="space-y-2">
                {job.requirements.map((r) => (
                  <li key={r} className="text-xs text-slate-400 flex gap-2 items-start">
                    <span className="text-emerald-400 mt-1">✓</span>{r}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <a
            href={`mailto:jainhk12@gmail.com?subject=Application for ${job.title}&body=Hello Hardik,%0D%0A%0D%0AI would like to apply for the ${job.title} position at Jinambe Technologies.%0D%0A%0D%0APlease find my resume attached.%0D%0A%0D%0AThank you for your consideration.`}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary hover:bg-primary/90 text-white text-sm font-semibold transition-all"
          >
            Apply for This Role <ArrowRight className="h-4 w-4" />
          </a>
        </motion.div>
      )}
    </motion.div>
  );
}

export default function Careers() {
  return (
    <div className="min-h-screen bg-[#020817] text-white pt-24 pb-20">
      {/* Hero */}
      <div className="container mx-auto px-4 max-w-7xl mb-20 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest bg-primary/10 text-primary border border-primary/20 mb-6">
            Join Our Team
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
            Build the Future{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-primary">
              With Us
            </span>
          </h1>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto">
            Jinambe Technologies is growing, and we're looking for exceptional engineers and designers who want to do the best work of their careers. We're a small, high-ownership team — every person here shapes how we build and where we go.
          </p>
        </motion.div>
      </div>

      {/* Perks */}
      <div className="container mx-auto px-4 max-w-7xl mb-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {perks.map((perk, i) => (
            <motion.div
              key={perk.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="p-6 rounded-2xl bg-[#0a0f1c] border border-slate-800"
            >
              <div className="h-11 w-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <perk.icon className="h-5 w-5 text-primary" />
              </div>
              <h4 className="font-bold text-white mb-2 text-sm">{perk.title}</h4>
              <p className="text-slate-400 text-xs leading-relaxed">{perk.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Open Positions */}
      <div className="container mx-auto px-4 max-w-5xl mb-20">
        <div className="flex items-center gap-4 mb-10">
          <h2 className="text-2xl font-bold">Open Positions</h2>
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-primary/10 text-primary border border-primary/20">
            {openings.length} roles
          </span>
        </div>
        <div className="space-y-4">
          {openings.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      </div>

      {/* No Fit? */}
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center p-12 rounded-3xl bg-gradient-to-r from-blue-950/60 to-indigo-950/60 border border-primary/20"
        >
          <h2 className="text-2xl font-bold mb-4">Don't See Your Role?</h2>
          <p className="text-slate-400 mb-8 max-w-xl mx-auto text-sm">
            If you're exceptionally talented and passionate about building great software, we want to hear from you even if we don't have a listed opening. Send us your portfolio and tell us what you'd love to work on.
          </p>
          <a
            href="mailto:jainhk12@gmail.com?subject=Open Application — Jinambe Technologies"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-primary hover:bg-primary/90 text-white font-semibold transition-all"
          >
            Send an Open Application <ArrowRight className="h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </div>
  );
}
