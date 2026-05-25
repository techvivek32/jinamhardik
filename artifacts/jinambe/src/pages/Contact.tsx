import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { useSubmitContact } from "@workspace/api-client-react";
import { Mail, Phone, MapPin, Clock, Send, MessageCircle } from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Enter a valid email address"),
  phone: z.string().optional(),
  company: z.string().optional(),
  service: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactForm = z.infer<typeof contactSchema>;

const services = [
  "Website Development",
  "Mobile App Development",
  "Custom Software Development",
  "UI/UX Design",
  "SaaS Development",
  "CRM/ERP Development",
  "E-commerce Development",
  "API Integration",
  "Cloud Solutions",
  "Maintenance & Support",
  "Other",
];

const contactDetails = [
  {
    icon: Mail,
    label: "Email Us",
    value: "jainhk12@gmail.com",
    href: "mailto:jainhk12@gmail.com",
    color: "text-blue-400",
    bg: "bg-blue-400/10",
  },
  {
    icon: Phone,
    label: "Call Us",
    value: "+91 7777994472",
    href: "tel:+917777994472",
    color: "text-sky-400",
    bg: "bg-sky-400/10",
  },
  {
    icon: MapPin,
    label: "Office",
    value: "D403, PNTC Tower, Satellite, Ahmedabad – 380015",
    href: "https://maps.google.com/?q=PNTC+Tower,Satellite,Ahmedabad",
    color: "text-indigo-400",
    bg: "bg-indigo-400/10",
  },
  {
    icon: Clock,
    label: "Working Hours",
    value: "Mon – Sat: 9:00 AM – 7:00 PM IST",
    href: null,
    color: "text-purple-400",
    bg: "bg-purple-400/10",
  },
];

export default function Contact() {
  const { toast } = useToast();
  const submitContact = useSubmitContact();

  const form = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      service: "",
      message: "",
    },
  });

  const onSubmit = (data: ContactForm) => {
    submitContact.mutate(
      {
        data: {
          name: data.name,
          email: data.email,
          phone: data.phone || null,
          company: data.company || null,
          service: data.service || null,
          message: data.message,
        },
      },
      {
        onSuccess: (res) => {
          toast({
            title: "Message sent successfully!",
            description: res.message,
          });
          form.reset();
        },
        onError: () => {
          toast({
            title: "Something went wrong",
            description: "Please try again or contact us directly via email.",
            variant: "destructive",
          });
        },
      }
    );
  };

  return (
    <div className="min-h-screen bg-[#020817] text-white pt-24 pb-20">
      {/* Header */}
      <div className="container mx-auto px-4 max-w-7xl mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest bg-primary/10 text-primary border border-primary/20 mb-6">
            Contact Us
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
            Let's Build Something{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-primary">
              Extraordinary
            </span>
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Share your vision with us. Our team will respond within 24 hours with a tailored approach to your project.
          </p>
        </motion.div>
      </div>

      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid lg:grid-cols-5 gap-10">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            {contactDetails.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group"
              >
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 p-5 rounded-2xl bg-[#0a0f1c] border border-slate-800 hover:border-primary/40 transition-all group-hover:bg-[#0c1525]"
                  >
                    <div className={`p-3 rounded-xl ${item.bg} flex-shrink-0`}>
                      <item.icon className={`h-5 w-5 ${item.color}`} />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 mb-1 uppercase tracking-wider font-medium">{item.label}</p>
                      <p className="text-slate-200 font-medium text-sm leading-relaxed">{item.value}</p>
                    </div>
                  </a>
                ) : (
                  <div className="flex items-start gap-4 p-5 rounded-2xl bg-[#0a0f1c] border border-slate-800">
                    <div className={`p-3 rounded-xl ${item.bg} flex-shrink-0`}>
                      <item.icon className={`h-5 w-5 ${item.color}`} />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 mb-1 uppercase tracking-wider font-medium">{item.label}</p>
                      <p className="text-slate-200 font-medium text-sm">{item.value}</p>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}

            {/* WhatsApp CTA */}
            <motion.a
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.45 }}
              href="https://wa.me/917777994472?text=Hi%20Jinambe%20Technologies!%20I%27d%20like%20to%20discuss%20a%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-5 rounded-2xl bg-green-500/10 border border-green-500/30 hover:border-green-500/60 transition-all"
              data-testid="link-whatsapp"
            >
              <div className="p-3 rounded-xl bg-green-500/20 flex-shrink-0">
                <MessageCircle className="h-5 w-5 text-green-400" />
              </div>
              <div>
                <p className="text-xs text-green-500/70 mb-0.5 uppercase tracking-wider font-medium">Quick Chat</p>
                <p className="text-green-300 font-semibold text-sm">Message us on WhatsApp</p>
              </div>
            </motion.a>

            {/* Google Maps */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="rounded-2xl overflow-hidden border border-slate-800 h-52"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.3748607513866!2d72.52052391489624!3d23.03255298498046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9b7e6cfd5c0d%3A0x3d2a23d5b8afdf0!2sPNTC%20Tower%2C%20Satellite%2C%20Ahmedabad!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Jinambe Technologies Office Location"
              />
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-3 bg-[#0a0f1c] rounded-3xl border border-slate-800 p-8 md:p-10"
          >
            <h2 className="text-2xl font-bold mb-2">Send Us a Message</h2>
            <p className="text-slate-400 text-sm mb-8">Fill out the form and our team will get back to you within one business day.</p>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-slate-300">Full Name *</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="Hardik Kothari"
                            className="bg-[#020817] border-slate-700 text-white placeholder:text-slate-600 focus:border-primary/60"
                            data-testid="input-name"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-slate-300">Email Address *</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            type="email"
                            placeholder="you@company.com"
                            className="bg-[#020817] border-slate-700 text-white placeholder:text-slate-600 focus:border-primary/60"
                            data-testid="input-email"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-slate-300">Phone Number</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="+91 98765 43210"
                            className="bg-[#020817] border-slate-700 text-white placeholder:text-slate-600 focus:border-primary/60"
                            data-testid="input-phone"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-slate-300">Company Name</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="Your Company Ltd."
                            className="bg-[#020817] border-slate-700 text-white placeholder:text-slate-600 focus:border-primary/60"
                            data-testid="input-company"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="service"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-slate-300">Service of Interest</FormLabel>
                      <FormControl>
                        <select
                          {...field}
                          className="w-full rounded-md border border-slate-700 bg-[#020817] text-white px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary/60 focus:border-primary/60"
                          data-testid="select-service"
                        >
                          <option value="">Select a service...</option>
                          {services.map((s) => (
                            <option key={s} value={s}>{s}</option>
                          ))}
                        </select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-slate-300">Project Description *</FormLabel>
                      <FormControl>
                        <Textarea
                          {...field}
                          placeholder="Tell us about your project goals, timeline, and any specific requirements..."
                          className="bg-[#020817] border-slate-700 text-white placeholder:text-slate-600 focus:border-primary/60 min-h-[140px] resize-none"
                          data-testid="textarea-message"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  disabled={submitContact.isPending}
                  className="w-full h-12 text-base bg-primary hover:bg-primary/90 text-white shadow-[0_0_20px_rgba(37,99,235,0.35)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] transition-all"
                  data-testid="button-submit"
                >
                  {submitContact.isPending ? (
                    <span className="flex items-center gap-2">
                      <span className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Send className="h-4 w-4" />
                      Send Message
                    </span>
                  )}
                </Button>

                <p className="text-xs text-slate-500 text-center">
                  By submitting, you agree to our privacy policy. We never share your data with third parties.
                </p>
              </form>
            </Form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
