import { motion } from "framer-motion";
import { Link, useParams } from "wouter";
import { ArrowLeft, Clock, Tag, ArrowRight } from "lucide-react";

const posts: Record<string, {
  title: string;
  category: string;
  date: string;
  readTime: string;
  tags: string[];
  content: string;
}> = {
  "react-native-future-mobile": {
    title: "Why React Native is the Future of Cross-Platform Mobile Development",
    category: "Mobile Development",
    date: "May 18, 2026",
    readTime: "8 min read",
    tags: ["React Native", "Mobile", "Flutter", "iOS", "Android"],
    content: `Cross-platform mobile development has matured dramatically. When React Native first launched, it was a compelling experiment. In 2026, it's a proven production-grade platform trusted by Meta, Microsoft, and thousands of companies worldwide.

## The Performance Argument Has Changed

The old critique of React Native — "it's not as fast as native" — was never entirely accurate, and it's increasingly irrelevant today. The New Architecture (Fabric + JSI + TurboModules) eliminates the bridge entirely, enabling synchronous JavaScript-to-native communication.

In our internal benchmarks across a portfolio of 15+ applications, the performance delta between a well-built React Native app and its native counterpart is under 5% on modern hardware. That 5% does not justify a 2x increase in development cost for 95% of applications.

## The Code Sharing Reality

The promise of "write once, run everywhere" has never been entirely true — and that's fine. The real value of React Native is write most of it once, customize where it matters.

In a typical React Native project, we achieve:

- ~80% code sharing between iOS and Android
- Full native feel through platform-specific styling and navigation
- Native modules for device-specific features that require it

This translates to a real-world development cost reduction of 40-60% compared to maintaining two separate native codebases.

## When to Choose Flutter Instead

Flutter deserves its reputation. Google's cross-platform toolkit has genuine advantages in specific scenarios.

Choose Flutter when your team has no JavaScript/React background, you need pixel-perfect custom UI that differs from native conventions, you're targeting desktop alongside mobile, or you have complex animation requirements.

Choose React Native when your team already works with React/JavaScript, you need to share logic with a web application, or you're building with a lean team that can't afford specialization.

## Practical Recommendations

After 20+ React Native projects, here's our opinionated stack: React Navigation v7 for routing, Zustand or React Query for state, NativeWind for styling, React Hook Form with Zod for forms, MMKV for storage (10x faster than AsyncStorage), and TanStack Query for networking.

The ecosystem has never been more mature. If you're starting a new mobile project in 2026, React Native deserves serious consideration.`,
  },
  "ai-enterprise-software": {
    title: "How AI is Transforming Enterprise Software: Beyond the Hype",
    category: "AI & Technology",
    date: "May 10, 2026",
    readTime: "11 min read",
    tags: ["AI", "Enterprise", "LLM", "Automation"],
    content: `Every enterprise software vendor now has an "AI strategy." Most of them amount to a chatbot wrapper around GPT-4. The real AI transformation happening in enterprise software is quieter, more specific, and far more valuable.

## Where AI Actually Delivers ROI

After integrating AI into a dozen enterprise applications, we've identified the categories where AI reliably delivers measurable return on investment.

Document Intelligence — processing invoices, contracts, medical records, and compliance documents — is mature, proven, and consistently delivers 70-90% reduction in manual processing time.

Predictive Maintenance for logistics, manufacturing, and fleet management trains models on historical sensor data to predict failures before they happen. ROI here is enormous and straightforward to measure.

Support Ticket Deflection via RAG-based chatbots trained on company documentation achieves deflection rates of 60-70% when implemented correctly.

## The RAG Architecture Pattern

Retrieval-Augmented Generation has emerged as the dominant pattern for enterprise AI because it solves the two biggest LLM problems: hallucination and proprietary data access.

The pattern: embed your enterprise documents into a vector database, retrieve relevant documents at query time, inject them as context into the LLM prompt, and the model reasons over your actual data rather than generic training data.

We use Pinecone or pgvector depending on scale, OpenAI embeddings or Cohere, and GPT-4o or Claude for reasoning.

## What to Avoid

The most common AI integration mistake is building AI features that compete with the user rather than assisting them. AI copilots that suggest actions are far more trusted — and used — than AI systems that take actions autonomously.

Start small. Automate one high-volume, low-stakes workflow. Measure it. Build trust with users. Then expand.`,
  },
  "saas-architecture-scale": {
    title: "Building Scalable SaaS Architecture: Lessons from 50+ Deployments",
    category: "Software Architecture",
    date: "April 28, 2026",
    readTime: "14 min read",
    tags: ["SaaS", "Architecture", "Node.js", "PostgreSQL"],
    content: `Multi-tenant SaaS architecture is one of the most nuanced challenges in software engineering. Get it wrong at the start and you're either re-architecting under pressure or watching costs spiral.

## The Multi-Tenancy Spectrum

There are three fundamental approaches to multi-tenancy, each with clear trade-offs.

Shared Schema (Pool Model): Every tenant's data lives in the same tables, distinguished by a tenant_id column. Lowest cost, easiest to operate, but cross-tenant data isolation requires careful discipline.

Separate Schemas: Each tenant gets their own PostgreSQL schema within a shared database. Good balance of isolation and operational overhead. Our default recommendation for most SaaS products.

Separate Databases: Maximum isolation, simplest per-tenant backup and restore, but highest operational complexity. Right for regulated industries.

## Database: The Foundation That Determines Everything

PostgreSQL's Row Level Security (RLS) is the most underutilized feature in SaaS development. Combined with a current_tenant_id function seeded from a JWT session variable, you get automatic tenant isolation at the database level — making it structurally impossible for application code to accidentally leak cross-tenant data.

## Feature Flags and Plan Limits

Never hardcode plan limits in business logic. A feature flag service allows you to change plan limits without deploys, A/B test features with specific tenants, and offer enterprise customizations without code changes.

## Subscription Billing Without the Pain

Stripe is the right answer for most SaaS billing. Store the Stripe customer ID and never re-create customers. Handle webhooks idempotently. Use the billing portal rather than building your own subscription management UI. Use metered billing for usage-based pricing — don't reinvent it.

The most expensive SaaS architecture decision is premature multi-region. Don't do it. Build for a single region until you have customers demanding low latency elsewhere.`,
  },
};

const relatedPosts = [
  { slug: "react-native-future-mobile", title: "Why React Native is the Future of Mobile Development", category: "Mobile Development" },
  { slug: "ai-enterprise-software", title: "How AI is Transforming Enterprise Software", category: "AI & Technology" },
  { slug: "saas-architecture-scale", title: "Building Scalable SaaS Architecture", category: "Software Architecture" },
];

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

export default function BlogPost() {
  const params = useParams<{ slug: string }>();
  const slug = params.slug ?? "";
  const post = posts[slug];

  if (!post) {
    return (
      <div className="min-h-screen bg-[#020817] text-white pt-24 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Article Not Found</h1>
          <Link href="/blog">
            <button className="text-primary hover:underline flex items-center gap-2 mx-auto">
              <ArrowLeft className="h-4 w-4" /> Back to Blog
            </button>
          </Link>
        </div>
      </div>
    );
  }

  const catColor = categoryColors[post.category] ?? "text-primary bg-primary/10";

  const renderBlock = (block: string, i: number) => {
    if (block.startsWith("## ")) {
      return (
        <h2 key={i} className="text-2xl font-bold text-white mt-10 mb-4 leading-tight">
          {block.replace("## ", "")}
        </h2>
      );
    }
    if (block.startsWith("### ")) {
      return (
        <h3 key={i} className="text-xl font-bold text-white mt-8 mb-3">
          {block.replace("### ", "")}
        </h3>
      );
    }
    if (block.startsWith("```")) {
      const code = block.replace(/```\w*\n?/, "").replace(/```$/, "");
      return (
        <pre key={i} className="bg-[#0a0f1c] border border-slate-800 rounded-xl p-5 overflow-x-auto text-sm text-slate-300 font-mono my-6">
          <code>{code}</code>
        </pre>
      );
    }
    if (block.startsWith("- ")) {
      const items = block.split("\n").filter((l) => l.trim().startsWith("- "));
      return (
        <ul key={i} className="space-y-2 my-4">
          {items.map((item, j) => (
            <li key={j} className="flex gap-2 items-start text-slate-400">
              <span className="text-primary mt-1.5 flex-shrink-0">•</span>
              <span>{item.replace(/^- /, "")}</span>
            </li>
          ))}
        </ul>
      );
    }
    return (
      <p key={i} className="text-slate-400 mb-5 leading-relaxed">
        {block}
      </p>
    );
  };

  return (
    <div className="min-h-screen bg-[#020817] text-white pt-24 pb-20">
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-10">
          <Link href="/blog">
            <button className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm">
              <ArrowLeft className="h-4 w-4" /> Back to Insights
            </button>
          </Link>
        </motion.div>

        <motion.header initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-10">
          <div className="flex items-center gap-3 mb-5">
            <span className={`text-xs px-3 py-1.5 rounded-full font-medium ${catColor}`}>
              {post.category}
            </span>
            <span className="text-xs text-slate-500 flex items-center gap-1">
              <Clock className="h-3 w-3" /> {post.readTime}
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-6">{post.title}</h1>
          <div className="flex items-center gap-3 pb-8 border-b border-slate-800">
            <div className="h-9 w-9 rounded-full bg-primary/20 flex items-center justify-center text-sm font-bold text-primary">
              HK
            </div>
            <div>
              <p className="text-sm font-medium text-white">Hardik Kothari</p>
              <p className="text-xs text-slate-500">Founder & CEO · {post.date}</p>
            </div>
          </div>
        </motion.header>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="mb-12"
        >
          {post.content.split("\n\n").map((block, i) => renderBlock(block, i))}
        </motion.div>

        <div className="flex flex-wrap gap-2 mb-12 pt-8 border-t border-slate-800">
          {post.tags.map((tag) => (
            <span key={tag} className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full bg-slate-800 text-slate-400">
              <Tag className="h-3 w-3" /> {tag}
            </span>
          ))}
        </div>

        <div>
          <h3 className="text-lg font-bold mb-6">More Insights</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {relatedPosts
              .filter((p) => p.slug !== slug)
              .slice(0, 2)
              .map((related) => {
                const color = categoryColors[related.category] ?? "text-primary bg-primary/10";
                return (
                  <Link key={related.slug} href={`/blog/${related.slug}`}>
                    <div className="p-4 rounded-xl bg-[#0a0f1c] border border-slate-800 hover:border-primary/30 transition-all group">
                      <span className={`text-xs px-2 py-0.5 rounded-full ${color} font-medium`}>
                        {related.category}
                      </span>
                      <p className="text-sm font-medium text-slate-200 mt-2 group-hover:text-primary transition-colors line-clamp-2 leading-snug">
                        {related.title}
                      </p>
                      <div className="flex items-center gap-1 text-primary text-xs mt-3">
                        Read <ArrowRight className="h-3 w-3" />
                      </div>
                    </div>
                  </Link>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}
