import { useState } from "react";
import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { X, MessageCircle } from "lucide-react";
import NotFound from "@/pages/not-found";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Pages
import Home from "@/pages/Home";
import About from "@/pages/About";
import Services from "@/pages/Services";
import ServiceDetail from "@/pages/ServiceDetail";
import Portfolio from "@/pages/Portfolio";
import ProjectDetail from "@/pages/ProjectDetail";
import Technologies from "@/pages/Technologies";
import Industries from "@/pages/Industries";
import Careers from "@/pages/Careers";
import Blog from "@/pages/Blog";
import BlogPost from "@/pages/BlogPost";
import Contact from "@/pages/Contact";

const queryClient = new QueryClient();

const WHATSAPP_NUMBER = "917777994472";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hi Jinambe Technologies! I'd like to discuss a project with you."
);
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

function WhatsAppButton() {
  const [tooltip, setTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Tooltip bubble */}
      {tooltip && (
        <div className="relative flex items-center gap-2 bg-white text-gray-800 text-sm font-medium px-4 py-2.5 rounded-2xl shadow-xl max-w-[220px]">
          <span>Chat with us on WhatsApp</span>
          <button
            onClick={() => setTooltip(false)}
            className="flex-shrink-0 text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Dismiss"
          >
            <X className="h-3.5 w-3.5" />
          </button>
          {/* Arrow pointing down-right */}
          <span className="absolute -bottom-2 right-5 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-white" />
        </div>
      )}

      {/* Main WhatsApp button */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="relative flex items-center justify-center h-14 w-14 rounded-full shadow-2xl transition-transform hover:scale-110 active:scale-95"
        style={{ backgroundColor: "#25D366" }}
        onClick={() => setTooltip(false)}
      >
        {/* Pulse ring */}
        <span
          className="absolute inset-0 rounded-full animate-ping opacity-40"
          style={{ backgroundColor: "#25D366" }}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="white"
          className="h-7 w-7 relative z-10"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.529 5.857L.057 23.5a.5.5 0 0 0 .623.624l5.757-1.484A11.94 11.94 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.885 0-3.65-.51-5.17-1.396l-.37-.215-3.818.984.999-3.713-.234-.383A9.943 9.943 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
        </svg>
      </a>
    </div>
  );
}

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen dark bg-background text-foreground">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/services" component={Services} />
      <Route path="/services/:slug" component={ServiceDetail} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/portfolio/:slug" component={ProjectDetail} />
      <Route path="/technologies" component={Technologies} />
      <Route path="/industries" component={Industries} />
      <Route path="/careers" component={Careers} />
      <Route path="/blog" component={Blog} />
      <Route path="/blog/:slug" component={BlogPost} />
      <Route path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Layout>
            <Router />
          </Layout>
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
