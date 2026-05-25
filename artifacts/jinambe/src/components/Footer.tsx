import { Link } from "wouter";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#020817] border-t border-slate-800/50">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-14">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <img src="/jinambe-logo.png" alt="Jinambe Technologies" className="h-10" />
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed max-w-xs mt-4">
              Precision-engineered software for businesses that demand more. Enterprise-grade solutions, startup agility.
            </p>
            <div className="space-y-2.5 text-sm text-slate-500 pt-2">
              <a href="mailto:jainhk12@gmail.com" className="flex items-center gap-2.5 hover:text-primary transition-colors">
                <Mail className="h-4 w-4 flex-shrink-0" />
                jainhk12@gmail.com
              </a>
              <a href="tel:+917777994472" className="flex items-center gap-2.5 hover:text-primary transition-colors">
                <Phone className="h-4 w-4 flex-shrink-0" />
                +91 7777994472
              </a>
              <div className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 flex-shrink-0 mt-0.5" />
                <span>D403 PNTC Tower, Satellite,<br />Ahmedabad – 380015, Gujarat</span>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://wa.me/917777994472"
                target="_blank"
                rel="noopener noreferrer"
                className="h-9 w-9 rounded-lg bg-green-500/10 border border-green-500/20 hover:border-green-500/50 flex items-center justify-center text-green-400 transition-all"
                aria-label="WhatsApp"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
              <a
                href="mailto:jainhk12@gmail.com"
                className="h-9 w-9 rounded-lg bg-blue-500/10 border border-blue-500/20 hover:border-blue-500/50 flex items-center justify-center text-blue-400 transition-all"
                aria-label="Email"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-5 text-white text-sm uppercase tracking-wider">Services</h3>
            <ul className="space-y-2.5 text-sm">
              {[
                ["Website Development", "/services/website-development"],
                ["Mobile App Development", "/services/mobile-app"],
                ["Custom Software", "/services/custom-software"],
                ["SaaS Development", "/services/saas-development"],
                ["UI/UX Design", "/services/ui-ux-design"],
                ["CRM & ERP", "/services/crm-erp"],
                ["E-commerce", "/services/ecommerce"],
                ["Cloud Solutions", "/services/cloud-solutions"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="text-slate-400 hover:text-primary transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-5 text-white text-sm uppercase tracking-wider">Company</h3>
            <ul className="space-y-2.5 text-sm">
              {[
                ["About Us", "/about"],
                ["Portfolio", "/portfolio"],
                ["Technologies", "/technologies"],
                ["Industries", "/industries"],
                ["Careers", "/careers"],
                ["Blog", "/blog"],
                ["Contact Us", "/contact"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="text-slate-400 hover:text-primary transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="font-semibold mb-5 text-white text-sm uppercase tracking-wider">Industries</h3>
            <ul className="space-y-2.5 text-sm">
              {["Healthcare", "Education", "Finance & FinTech", "Real Estate", "E-commerce", "Logistics", "Hospitality", "Enterprise"].map((label) => (
                <li key={label}>
                  <Link href="/industries" className="text-slate-400 hover:text-primary transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800/50 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Jinambe Technologies Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-slate-600">
            <span>Founded by Hardik Kothari</span>
            <span>Ahmedabad, India</span>
            <span className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Available for new projects
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
