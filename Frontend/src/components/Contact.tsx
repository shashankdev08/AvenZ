import React, { useState } from 'react';
import { FadeIn } from './FadeIn';
import { Mail, Phone, MapPin, Briefcase, Send } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

const CONTACT_SERVICE_ENDPOINT = import.meta.env.VITE_CONTACT_SERVICE_ENDPOINT || "https://api.web3forms.com/submit";
const CONTACT_SERVICE_KEY = import.meta.env.VITE_CONTACT_SERVICE_KEY || ""; // Define in .env to enable real mail

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    if (!CONTACT_SERVICE_KEY) {
      // Fallback: Mock submit action
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => {
          setIsSubmitted(false);
        }, 3000);
      }, 800);
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch(CONTACT_SERVICE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: CONTACT_SERVICE_KEY,
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `New Portfolio Message from ${formData.name}`
        })
      });

      const data = await response.json();
      if (response.ok && (data.success || data.ok)) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      } else {
        throw new Error(data.message || "Something went wrong. Please try again.");
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Failed to send message. Please try again later.";
      setSubmitError(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="py-28 bg-bg-primary relative overflow-hidden">
      
      {/* Background visual dot/glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-accent-purple/5 filter blur-3xl pointer-events-none z-0"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <FadeIn className="text-center mb-20">
          <span className="inline-block font-mono text-xs text-accent-purple tracking-[0.25em] uppercase mb-3 font-semibold">Contact</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-text-primary tracking-tight mb-3">Get In Touch</h2>
          <div className="h-1 w-16 bg-gradient-to-r from-accent-purple to-accent-blue mx-auto rounded-full mb-4"></div>
          <p className="text-text-secondary max-w-xl mx-auto text-sm sm:text-base font-light">
            Have a question, feedback, or a career opportunity? Let's connect.
          </p>
        </FadeIn>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Side: Contact Information */}
          <div className="lg:col-span-5 space-y-8">
            <FadeIn delay={100}>
              <h3 className="text-2xl font-bold text-white tracking-tight mb-4">
                Let's build something together
              </h3>
              <p className="text-text-secondary text-sm sm:text-base leading-relaxed font-light mb-8">
                I am actively looking for full-time roles in <span className="text-white font-medium">Backend Engineering</span>, <span className="text-white font-medium">Full-Stack Development</span>, or <span className="text-white font-medium">AI Agent Orchestration</span>. Feel free to drop a message or reach out via email.
              </p>

              <div className="space-y-4">
                {/* Email */}
                <a 
                  href="mailto:helloiamshashank@gmail.com" 
                  className="flex items-center gap-4 bg-bg-surface border border-border-custom hover:border-accent-purple/35 rounded-2xl p-4 transition-all duration-300 group"
                >
                  <div className="p-3 bg-bg-primary border border-border-custom rounded-xl group-hover:bg-accent-purple/10 group-hover:text-accent-purple transition-colors">
                    <Mail className="h-5 w-5 text-text-secondary transition-colors" />
                  </div>
                  <div>
                    <h4 className="text-xs font-mono text-text-secondary uppercase tracking-wider font-semibold">Email</h4>
                    <p className="text-sm font-bold text-white group-hover:text-accent-purple transition-colors font-mono">helloiamshashank@gmail.com</p>
                  </div>
                </a>

                {/* Phone */}
                <a 
                  href="tel:+917355573051" 
                  className="flex items-center gap-4 bg-bg-surface border border-border-custom hover:border-accent-purple/35 rounded-2xl p-4 transition-all duration-300 group"
                >
                  <div className="p-3 bg-bg-primary border border-border-custom rounded-xl group-hover:bg-accent-purple/10 group-hover:text-accent-purple transition-colors">
                    <Phone className="h-5 w-5 text-text-secondary transition-colors" />
                  </div>
                  <div>
                    <h4 className="text-xs font-mono text-text-secondary uppercase tracking-wider font-semibold">Phone</h4>
                    <p className="text-sm font-bold text-white group-hover:text-accent-purple transition-colors font-mono">+91 7355573051</p>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-center gap-4 bg-bg-surface border border-border-custom rounded-2xl p-4">
                  <div className="p-3 bg-bg-primary border border-border-custom rounded-xl">
                    <MapPin className="h-5 w-5 text-text-secondary" />
                  </div>
                  <div>
                    <h4 className="text-xs font-mono text-text-secondary uppercase tracking-wider font-semibold">Location</h4>
                    <p className="text-sm font-bold text-white font-mono">Pune, Maharashtra, India</p>
                  </div>
                </div>

                {/* Role Avail */}
                <div className="flex items-center gap-4 bg-bg-surface border border-border-custom rounded-2xl p-4">
                  <div className="p-3 bg-bg-primary border border-border-custom rounded-xl">
                    <Briefcase className="h-5 w-5 text-text-secondary" />
                  </div>
                  <div>
                    <h4 className="text-xs font-mono text-text-secondary uppercase tracking-wider font-semibold">Status</h4>
                    <p className="text-sm font-bold text-emerald-400 font-mono">Open to full-time roles</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right Side: Contact Form */}
          <div className="lg:col-span-7">
            <FadeIn delay={200} className="bg-bg-surface border border-border-custom rounded-2xl p-6 sm:p-8 shadow-xl card-hover animated-border overflow-hidden relative">
              
              {/* Accessibility screen-reader live status */}
              <div className="sr-only" aria-live="polite" role="status">
                {isSubmitting && "Sending your message..."}
                {isSubmitted && "Message sent successfully! Thank you for reaching out."}
                {submitError && `Error sending message: ${submitError}`}
              </div>

              {isSubmitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="h-14 w-14 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-4 animate-bounce">
                    <Send className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white tracking-tight">Message Sent Successfully!</h3>
                  <p className="text-text-secondary text-sm font-light">
                    Thank you for reaching out. I'll get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Input */}
                  <div>
                    <label htmlFor="name" className="block font-mono text-xs font-semibold text-text-secondary uppercase tracking-wider mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                      className="w-full bg-bg-primary border border-border-custom hover:border-accent-purple/40 focus:border-accent-purple focus:ring-1 focus:ring-accent-purple text-white outline-none rounded-xl px-4 py-3 text-sm transition-all duration-200"
                    />
                  </div>

                  {/* Email Input */}
                  <div>
                    <label htmlFor="email" className="block font-mono text-xs font-semibold text-text-secondary uppercase tracking-wider mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                      className="w-full bg-bg-primary border border-border-custom hover:border-accent-purple/40 focus:border-accent-purple focus:ring-1 focus:ring-accent-purple text-white outline-none rounded-xl px-4 py-3 text-sm transition-all duration-200"
                    />
                  </div>

                  {/* Message Input */}
                  <div>
                    <label htmlFor="message" className="block font-mono text-xs font-semibold text-text-secondary uppercase tracking-wider mb-2">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Hey Shashank, let's connect to discuss a new backend project..."
                      className="w-full bg-bg-primary border border-border-custom hover:border-accent-purple/40 focus:border-accent-purple focus:ring-1 focus:ring-accent-purple text-white outline-none rounded-xl px-4 py-3 text-sm transition-all duration-200 resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-medium bg-accent-purple hover:bg-accent-purple/90 text-white transition-all hover:-translate-y-0.5 cursor-pointer shadow-lg hover:shadow-accent-purple/20 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                    <Send className="h-4 w-4" />
                  </button>

                  {submitError && (
                    <p className="text-red-400 text-xs sm:text-sm font-mono mt-2 text-center animate-pulse" role="alert">
                      {submitError}
                    </p>
                  )}
                </form>
              )}
            </FadeIn>
          </div>

        </div>

        {/* Social Icons row at bottom */}
        <div className="flex items-center justify-center gap-6 mt-16 pt-8 border-t border-border-custom">
          <a 
            href="https://github.com/shashankdev08" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-text-secondary hover:text-white transition-colors"
            aria-label="GitHub Profile"
          >
            <GithubIcon className="h-6 w-6" />
          </a>
          <a 
            href="https://linkedin.com/in/shashankdev" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-text-secondary hover:text-white transition-colors"
            aria-label="LinkedIn Profile"
          >
            <LinkedinIcon className="h-6 w-6" />
          </a>
        </div>

      </div>
    </section>
  );
};
