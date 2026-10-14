import React, { useState } from 'react';
import { Copy, Check, Send, MapPin, Sparkles, ArrowUpRight, Phone } from 'lucide-react';
import { GithubIcon, LinkedinIcon, CodeChefIcon } from './SocialIcons';
import { portfolioData } from '../data/portfolioData';

export default function Contact() {
  const { personal } = portfolioData;
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    const mailtoSubject = encodeURIComponent(formData.subject || `Portfolio Inquiry from ${formData.name}`);
    const mailtoBody = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    
    setFormSubmitted(true);
    window.location.href = `mailto:${personal.email}?subject=${mailtoSubject}&body=${mailtoBody}`;
  };

  return (
    <section id="contact" className="py-20 md:py-28 border-t border-stone-200/80 bg-stone-50/50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-4">
          <span className="font-mono-code text-xs font-semibold text-stone-500 uppercase tracking-widest">
            06 / Get in Touch
          </span>
          <div className="h-px bg-stone-200 flex-1" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Direct Details Column */}
          <div className="lg:col-span-5 space-y-5">
            <div>
              <h2 className="text-3xl sm:text-4xl font-editorial font-bold text-stone-900 leading-tight mb-3">
                Let's connect & build something impactful.
              </h2>
              <p className="text-stone-600 text-sm leading-relaxed mb-6">
                I am actively seeking software engineering internships, technical collaborations, and mentorship opportunities. Feel free to reach out via email, phone, or LinkedIn!
              </p>
            </div>

            {/* Email Card with 1-click Copy */}
            <div className="bg-white p-5 rounded-2xl border border-stone-200 shadow-xs">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs uppercase tracking-wider font-mono-code text-stone-400 font-semibold">
                  Primary Email
                </span>
                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-stone-700 hover:text-stone-950 px-2.5 py-1 rounded-md bg-stone-100 hover:bg-stone-200 transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>
              </div>

              <a
                href={`mailto:${personal.email}`}
                className="text-stone-900 font-medium text-sm sm:text-base hover:underline block break-all"
              >
                {personal.email}
              </a>
            </div>

            {/* Phone & Location Info */}
            <div className="bg-white p-5 rounded-2xl border border-stone-200 shadow-xs space-y-3">
              <div className="flex items-center justify-between text-xs text-stone-600">
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-stone-800 shrink-0" />
                  <div>
                    <span className="font-semibold text-stone-900 block">Phone</span>
                    <a href={`tel:${personal.phone.replace(/[^0-9+]/g, '')}`} className="hover:underline">
                      {personal.phone}
                    </a>
                  </div>
                </div>
                <a
                  href={`tel:${personal.phone.replace(/[^0-9+]/g, '')}`}
                  className="px-2.5 py-1 rounded bg-stone-100 hover:bg-stone-200 text-stone-700 font-medium text-[11px]"
                >
                  Call
                </a>
              </div>

              <div className="flex items-start gap-3 text-xs text-stone-600 pt-3 border-t border-stone-100">
                <MapPin className="w-4 h-4 text-stone-800 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-stone-900 block">Current Location</span>
                  <span>{personal.location} (Open to Remote & On-Site Internships)</span>
                </div>
              </div>

              <div className="flex items-start gap-3 text-xs text-stone-600 pt-3 border-t border-stone-100">
                <Sparkles className="w-4 h-4 text-stone-800 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-stone-900 block">Response Time</span>
                  <span>Usually responds within 24 hours</span>
                </div>
              </div>
            </div>

            {/* Social & Coding Network Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              <a
                href={personal.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-3.5 bg-white rounded-xl border border-stone-200 hover:border-stone-400 shadow-xs flex items-center justify-between group transition-all"
              >
                <div className="flex items-center gap-2">
                  <LinkedinIcon className="w-4 h-4 text-[#0A66C2]" />
                  <span className="text-xs font-semibold text-stone-800">LinkedIn</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-stone-400 group-hover:text-stone-900 transition-transform" />
              </a>

              <a
                href={personal.socials.github}
                target="_blank"
                rel="noreferrer"
                className="p-3.5 bg-white rounded-xl border border-stone-200 hover:border-stone-400 shadow-xs flex items-center justify-between group transition-all"
              >
                <div className="flex items-center gap-2">
                  <GithubIcon className="w-4 h-4 text-stone-900" />
                  <span className="text-xs font-semibold text-stone-800">GitHub</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-stone-400 group-hover:text-stone-900 transition-transform" />
              </a>

              <a
                href={personal.socials.codechef}
                target="_blank"
                rel="noreferrer"
                className="p-3.5 bg-white rounded-xl border border-stone-200 hover:border-stone-400 shadow-xs flex items-center justify-between group transition-all"
              >
                <div className="flex items-center gap-2">
                  <CodeChefIcon className="w-4 h-4 text-[#5B4638]" />
                  <span className="text-xs font-semibold text-stone-800">CodeChef</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-stone-400 group-hover:text-stone-900 transition-transform" />
              </a>
            </div>
          </div>

          {/* Interactive Form Column */}
          <div className="lg:col-span-7">
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-stone-200 shadow-xs">
              <h3 className="font-editorial text-2xl font-bold text-stone-900 mb-1">
                Send a Direct Message
              </h3>
              <p className="text-xs text-stone-500 mb-6 font-mono-code">
                Fill in the details below to compose an instant message to Nandini.
              </p>

              {formSubmitted ? (
                <div className="p-6 rounded-xl bg-emerald-50 border border-emerald-200 text-center space-y-2">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                    <Check className="w-5 h-5" />
                  </div>
                  <h4 className="font-semibold text-emerald-900 text-base">
                    Email Client Opened!
                  </h4>
                  <p className="text-xs text-emerald-700 max-w-sm mx-auto">
                    Thank you, {formData.name}. Your message draft has been passed to your email client. Looking forward to connecting!
                  </p>
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="mt-3 text-xs font-semibold text-emerald-800 underline hover:text-emerald-950"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-stone-600 mb-1.5 font-mono-code">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Priyanshu Sharma"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-stone-200 text-sm focus:outline-hidden focus:border-stone-900 bg-stone-50/50"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-stone-600 mb-1.5 font-mono-code">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="priyanshu@example.com"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-stone-200 text-sm focus:outline-hidden focus:border-stone-900 bg-stone-50/50"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-stone-600 mb-1.5 font-mono-code">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="e.g. Internship Opportunity / Collaboration"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-stone-200 text-sm focus:outline-hidden focus:border-stone-900 bg-stone-50/50"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-stone-600 mb-1.5 font-mono-code">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Hello Nandini, I came across your portfolio and wanted to discuss..."
                      className="w-full px-3.5 py-2.5 rounded-lg border border-stone-200 text-sm focus:outline-hidden focus:border-stone-900 bg-stone-50/50 resize-y"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-[#FAF9F5] bg-stone-900 hover:bg-stone-800 transition-all shadow-sm hover:shadow"
                  >
                    <Send className="w-4 h-4" />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
