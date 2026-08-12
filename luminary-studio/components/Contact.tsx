"use client";

import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export default function Contact() {
  const [form, setForm] = useState<FormData>({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const validate = (): FormErrors => {
    const errs: FormErrors = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.email.trim()) errs.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) errs.email = "Enter a valid email";
    if (!form.message.trim()) errs.message = "Message is required";
    else if (form.message.trim().length < 10) errs.message = "Message must be at least 10 characters";
    return errs;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setLoading(true);
    // Simulate API call
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    setSuccess(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSuccess(false), 5000);
  };

  const inputClass = (field: keyof FormErrors) =>
    `w-full px-5 py-4 rounded-xl bg-white/5 border text-white placeholder-white/30 outline-none transition-all duration-200 focus:ring-2 focus:ring-cyan-500/40 ${errors[field]
      ? "border-red-500/60 focus:border-red-500"
      : "border-white/10 focus:border-cyan-500/50"
    }`;

  return (
    <section id="contact" className="py-28 bg-[#0a0f1e] relative overflow-hidden">
      {/* Top divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      {/* Background glow */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/10 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-600/10 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-cyan-400 text-sm font-semibold tracking-widest uppercase">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mt-4 mb-6">
            Let&apos;s Build Something{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Amazing
            </span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            Have a project in mind? We&apos;d love to hear about it. Drop us a
            message and we&apos;ll get back to you within 24 hours.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-white mb-8">Contact Information</h3>

            <div className="space-y-6 mb-10">
              {[
                { icon: "📍", label: "Location", value: "Chennai,TN" },
                { icon: "📧", label: "Email", value: "hello@luminarystudio.co" },
                { icon: "📞", label: "Phone", value: "+1 (415) 000-0000" },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-lg shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-white/40 text-xs uppercase tracking-wider mb-0.5">{item.label}</p>
                    <p className="text-white font-medium">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <p className="text-white/40 text-xs uppercase tracking-wider mb-4">Follow Us</p>
              <div className="flex gap-3">
                {[
                  { name: "Twitter", icon: "𝕏" },
                  { name: "LinkedIn", icon: "in" },
                  { name: "GitHub", icon: "⌥" },
                  { name: "Dribbble", icon: "◎" },
                ].map((social) => (
                  <motion.a
                    key={social.name}
                    href="#"
                    aria-label={social.name}
                    className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-cyan-400 hover:border-cyan-500/30 transition-colors text-sm font-bold"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <form onSubmit={handleSubmit} noValidate className="space-y-5" id="contact-form">
              {/* Name */}
              <div>
                <label className="block text-white/60 text-sm mb-2 font-medium" htmlFor="contact-name">
                  Your Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  placeholder="John Doe"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className={inputClass("name")}
                />
                {errors.name && (
                  <p className="mt-1 text-red-400 text-xs">{errors.name}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="block text-white/60 text-sm mb-2 font-medium" htmlFor="contact-email">
                  Email Address
                </label>
                <input
                  id="contact-email"
                  type="email"
                  placeholder="john@example.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className={inputClass("email")}
                />
                {errors.email && (
                  <p className="mt-1 text-red-400 text-xs">{errors.email}</p>
                )}
              </div>

              {/* Message */}
              <div>
                <label className="block text-white/60 text-sm mb-2 font-medium" htmlFor="contact-message">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  rows={5}
                  placeholder="Tell us about your project..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className={`${inputClass("message")} resize-none`}
                />
                {errors.message && (
                  <p className="mt-1 text-red-400 text-xs">{errors.message}</p>
                )}
              </div>

              {/* Submit */}
              <motion.button
                type="submit"
                disabled={loading}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold text-lg shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-shadow disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                whileHover={!loading ? { scale: 1.02 } : {}}
                whileTap={!loading ? { scale: 0.98 } : {}}
                id="contact-submit-btn"
              >
                {loading ? (
                  <>
                    <motion.div
                      className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                    />
                    Sending...
                  </>
                ) : (
                  <>Send Message ✦</>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Success Toast */}
      <AnimatePresence>
        {success && (
          <motion.div
            initial={{ opacity: 0, y: 60, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, y: 40, x: "-50%" }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="fixed bottom-8 left-1/2 z-50 px-6 py-4 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold shadow-2xl flex items-center gap-3"
            id="success-toast"
          >
            <span className="text-xl">✓</span>
            Message sent! We&apos;ll get back to you shortly.
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
