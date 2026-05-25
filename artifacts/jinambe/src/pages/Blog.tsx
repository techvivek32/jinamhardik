import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Search, Clock, ArrowRight, Tag } from "lucide-react";

const allPosts = [
  {
    slug: "react-native-future-mobile",
    category: "Mobile Development",
    title: "Why React Native is the Future of Cross-Platform Mobile Development",
    excerpt: "As mobile app budgets tighten and timelines shrink, React Native has emerged as the dominant cross-platform choice. We break down the technical advantages, real-world performance benchmarks, and when to choose native instead.",
    author: "Hardik Kothari",
    date: "May 18, 2026",
    readTime: "8 min read",
    featured: true,
    tags: ["React Native", "Mobile", "Flutter", "iOS", "Android"],
  },
  {
    slug: "ai-enterprise-software",
    category: "AI & Technology",
    title: "How AI is Transforming Enterprise Software: Beyond the Hype",
    excerpt: "From intelligent automation to predictive analytics, AI is reshaping how enterprise applications work. This deep dive separates real ROI from marketing fluff, with specific implementation patterns that actually deliver value.",
    author: "Hardik Kothari",
    date: "May 10, 2026",
    readTime: "11 min read",
    featured: true,
    tags: ["AI", "Enterprise", "LLM", "Automation"],
  },
  {
    slug: "saas-architecture-scale",
    category: "Software Architecture",
    title: "Building Scalable SaaS Architecture: Lessons from 50+ Deployments",
    excerpt: "Multi-tenancy, database isolation strategies, feature flagging, subscription billing — after building SaaS products across a dozen industries, we've developed opinionated patterns that work. Here's the complete architecture guide.",
    author: "Hardik Kothari",
    date: "April 28, 2026",
    readTime: "14 min read",
    featured: false,
    tags: ["SaaS", "Architecture", "Node.js", "PostgreSQL"],
  },
  {
    slug: "nextjs-vs-vite-2026",
    category: "Web Development",
    title: "Next.js vs Vite in 2026: Choosing the Right Frontend Foundation",
    excerpt: "The React ecosystem has never had more choices. We compare Next.js App Router and Vite across SEO requirements, build performance, developer experience, and deployment complexity — with concrete recommendations for each use case.",
    author: "Hardik Kothari",
    date: "April 15, 2026",
    readTime: "9 min read",
    featured: false,
    tags: ["Next.js", "Vite", "React", "Frontend"],
  },
  {
    slug: "startup-mvp-mistakes",
    category: "Product Strategy",
    title: "5 Technical Mistakes That Kill Startup MVPs (And How to Avoid Them)",
    excerpt: "After building 30+ MVPs, we've seen the same expensive mistakes repeated. Premature optimization, wrong database choices, ignoring auth, skipping error handling — this article is the pre-mortem your startup needs.",
    author: "Hardik Kothari",
    date: "April 2, 2026",
    readTime: "10 min read",
    featured: false,
    tags: ["Startup", "MVP", "Product", "Architecture"],
  },
  {
    slug: "postgresql-performance-tips",
    category: "Backend Engineering",
    title: "PostgreSQL Performance in Production: 10 Patterns That Actually Matter",
    excerpt: "Slow queries are a product problem, not just a technical one. We share the ten indexing strategies, query optimization patterns, and connection pool configurations that transformed the performance of our production applications.",
    author: "Hardik Kothari",
    date: "March 22, 2026",
    readTime: "12 min read",
    featured: false,
    tags: ["PostgreSQL", "Backend", "Performance", "Database"],
  },
  {
    slug: "design-systems-enterprise",
    category: "UI/UX Design",
    title: "Design Systems for Enterprise Applications: A Practical Implementation Guide",
    excerpt: "A well-built design system can cut frontend development time by 40% and dramatically improve product consistency. We walk through the technical implementation, component architecture, and governance model for enterprise-scale design systems.",
    author: "Hardik Kothari",
    date: "March 10, 2026",
    readTime: "13 min read",
    featured: false,
    tags: ["Design System", "UI/UX", "React", "Figma"],
  },
  {
    slug: "devops-cicd-best-practices",
    category: "DevOps",
    title: "Modern CI/CD for Web Applications: A Complete Pipeline Architecture",
    excerpt: "From code commit to production deployment in under 5 minutes — we detail the exact CI/CD architecture, testing strategies, and deployment patterns we use for mission-critical client applications.",
    author: "Hardik Kothari",
    date: "February 25, 2026",
    readTime: "11 min read",
    featured: false,
    tags: ["DevOps", "CI/CD", "Docker", "AWS"],
  },
];

const categories = ["All", "Mobile Development", "AI & Technology", "Software Architecture", "Web Development", "Product Strategy", "Backend Engineering", "UI/UX Design", "DevOps"];

const categoryColors: Record<string, string> = {
  "Mobile Development": "text-sky-400 bg-sky-400/10",
  "AI & Technology": "text-violet-400 bg-violet-400/10",
  "Software Architecture": "text-indigo-400 bg-indigo-400/10",
  "Web Development": "text-blue-400 bg-blue-400/10",
  "Product Strategy": "text-amber-400 bg-amber-400/10",
  "Backend Engineering": "text-emerald-400 bg-emerald-400/10",
  "UI/UX Design": "text-rose-400 bg-rose-400/10",
  "DevOps": "text-cyan-400 bg-cyan-400/10",
};

export default function Blog() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = allPosts.filter((post) => {
    const matchesSearch =
      search === "" ||
      post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(search.toLowerCase()) ||
      post.tags.some((t) => t.toLowerCase().includes(search.toLowerCase()));
    const matchesCategory = activeCategory === "All" || post.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const featured = allPosts.filter((p) => p.featured);
  const nonFeatured = filtered.filter((p) => !p.featured || activeCategory !== "All" || search !== "");

  return (
    <div className="min-h-screen bg-[#020817] text-white pt-24 pb-20">
      {/* Hero */}
      <div className="container mx-auto px-4 max-w-7xl mb-16 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest bg-primary/10 text-primary border border-primary/20 mb-6">
            Insights
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
            Engineering{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-primary">
              Perspectives
            </span>
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-10">
            Practical insights on software architecture, product strategy, and emerging technologies — written by engineers who build every day.
          </p>

          {/* Search */}
          <div className="relative max-w-lg mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" />
            <input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search articles, topics, or technologies..."
              className="w-full h-12 pl-11 pr-4 rounded-xl bg-[#0a0f1c] border border-slate-700 text-white placeholder:text-slate-500 text-sm focus:outline-none focus:border-primary/60"
              data-testid="input-blog-search"
            />
          </div>
        </motion.div>
      </div>

      <div className="container mx-auto px-4 max-w-7xl">
        {/* Featured Posts */}
        {activeCategory === "All" && search === "" && (
          <div className="mb-16">
            <h2 className="text-lg font-semibold text-slate-400 mb-6 uppercase tracking-widest">Featured</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {featured.map((post, i) => {
                const catColor = categoryColors[post.category] ?? "text-primary bg-primary/10";
                return (
                  <motion.article
                    key={post.slug}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="group p-7 rounded-2xl bg-[#0a0f1c] border border-primary/20 hover:border-primary/40 transition-all"
                  >
                    <div className="flex items-center gap-2 mb-4">
                      <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${catColor}`}>
                        {post.category}
                      </span>
                      <span className="text-xs text-slate-500 flex items-center gap-1">
                        <Clock className="h-3 w-3" /> {post.readTime}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors leading-snug">
                      {post.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed mb-5 line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="h-7 w-7 rounded-full bg-primary/20 flex items-center justify-center text-xs font-bold text-primary">
                          HK
                        </div>
                        <span className="text-xs text-slate-400">{post.date}</span>
                      </div>
                      <Link href={`/blog/${post.slug}`}>
                        <button className="flex items-center gap-1.5 text-sm font-medium text-primary hover:gap-3 transition-all">
                          Read <ArrowRight className="h-3.5 w-3.5" />
                        </button>
                      </Link>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </div>
        )}

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                activeCategory === cat
                  ? "bg-primary text-white"
                  : "bg-[#0a0f1c] border border-slate-800 text-slate-400 hover:text-white hover:border-slate-600"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* All Articles */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {(activeCategory === "All" && search === "" ? allPosts.filter((p) => !p.featured) : filtered).map((post, i) => {
            const catColor = categoryColors[post.category] ?? "text-primary bg-primary/10";
            return (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="group p-6 rounded-2xl bg-[#0a0f1c] border border-slate-800 hover:border-primary/30 transition-all flex flex-col"
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${catColor}`}>
                    {post.category}
                  </span>
                  <span className="text-xs text-slate-500 flex items-center gap-1 ml-auto">
                    <Clock className="h-3 w-3" /> {post.readTime}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-primary transition-colors leading-snug flex-1">
                  {post.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4 line-clamp-2">{post.excerpt}</p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {post.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="text-xs flex items-center gap-1 text-slate-500">
                      <Tag className="h-2.5 w-2.5" />{tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-slate-800">
                  <span className="text-xs text-slate-500">{post.date}</span>
                  <Link href={`/blog/${post.slug}`}>
                    <button className="flex items-center gap-1.5 text-xs font-medium text-primary hover:gap-2.5 transition-all">
                      Read more <ArrowRight className="h-3.5 w-3.5" />
                    </button>
                  </Link>
                </div>
              </motion.article>
            );
          })}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20">
            <p className="text-slate-500">No articles found matching your search.</p>
          </div>
        )}
      </div>
    </div>
  );
}
