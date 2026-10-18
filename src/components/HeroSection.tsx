import React from 'react';
import { ArrowDown, Mail, Sparkles, Camera, Film, Compass, Phone, Facebook } from 'lucide-react';
import { getImageUrl } from '../lib/imageAssets';

export const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="hero-section relative min-h-[92vh] flex items-center justify-center overflow-hidden border-b border-white/10">
      {/* Background imagery with measured contrast scrim */}
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        <img
          src={getImageUrl('/src/assets/images/Logo.png')}
          alt="Obra Creations Logo"
          fetchPriority="high"
          className="hero-backdrop w-full max-w-full h-full max-h-[75vh] object-contain object-center select-none"
        />
        <div className="hero-backdrop-scrim absolute inset-0" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 text-center">
        {/* Studio Emblem */}
        <div className="hero-reveal hero-reveal-1 mx-auto w-16 h-16 rounded-full bg-white p-2 shadow-2xl shadow-sky-500/20 border-2 border-sky-400/50 mb-6 flex items-center justify-center hover:scale-105 transition-transform">
          <img src={getImageUrl('/src/assets/images/Logo.png')} alt="Obra Creations Logo" className="w-full h-full object-contain" />
        </div>

        {/* Editorial Subtitle / Studio Credential */}
        <div className="hero-reveal hero-reveal-2 inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/15 rounded-full backdrop-blur-md mb-8">
          <Sparkles className="w-3.5 h-3.5 text-sky-300" />
          <span className="text-xs uppercase tracking-[0.2em] text-stone-300 font-medium">
            Timeless Photography & Cinematic Video
          </span>
          <span className="text-stone-500">·</span>
          <span className="text-xs text-sky-300 font-medium">Est. 2019</span>
        </div>

        {/* Primary Hero Title with Exact User Name */}
        <h1 className="hero-reveal hero-reveal-3 text-4xl sm:text-6xl md:text-7xl font-serif-luxury font-normal text-white tracking-tight leading-[1.08] mb-6 text-balance">
          Obra Creations <br />
          <span className="italic font-light text-stone-300">by Daniel Obra</span>
        </h1>

        {/* Narrative lead */}
        <p className="hero-reveal hero-reveal-4 max-w-2xl mx-auto text-stone-300 font-sans-clean text-base sm:text-lg leading-relaxed mb-10 font-light text-balance">
          Framing the authentic emotion, quiet intimacy, and grand celebrations of your life's greatest milestones with artistic precision and cinematic flair.
        </p>

        {/* Action Buttons */}
        <div className="hero-reveal hero-reveal-5 flex flex-col sm:flex-row items-center justify-center gap-3 mb-6">
          <a
            href="#portfolio"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white text-stone-950 hover:bg-stone-100 font-medium text-sm rounded-xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            <span>Explore Portfolio Grids</span>
            <ArrowDown className="w-4 h-4" />
          </a>

          <a
            href="tel:+639764585099"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-sky-500/20 hover:bg-sky-500/30 text-sky-200 border border-sky-400/30 font-medium text-sm rounded-xl transition-all hover:-translate-y-0.5 font-mono"
          >
            <Phone className="w-4 h-4 text-sky-400" />
            <span>+63 976 458 5099</span>
          </a>

          <a
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white/5 hover:bg-white/10 text-stone-200 border border-white/15 font-medium text-sm rounded-xl transition-all hover:-translate-y-0.5"
          >
            <Mail className="w-4 h-4 text-sky-300" />
            <span>Book Consultation</span>
          </a>
        </div>

        {/* Quick Contact Micro-Bar */}
        <div className="hero-reveal hero-reveal-6 flex flex-wrap items-center justify-center gap-4 text-xs text-stone-400 font-mono mb-12">
          <a href="tel:+639764585099" className="flex items-center gap-1.5 text-stone-300 hover:text-white transition-colors">
            <Phone className="w-3 h-3 text-sky-400" />
            <span>+639764585099</span>
          </a>
          <span className="text-stone-600">·</span>
          <a
            href="https://www.facebook.com/ObraCreations2019"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-stone-300 hover:text-white transition-colors"
          >
            <Facebook className="w-3 h-3 text-blue-400" />
            <span>www.facebook.com/ObraCreations2019</span>
          </a>
          <span className="text-stone-600">·</span>
          <a
            href="mailto:obracreations2022@gmail.com"
            className="flex items-center gap-1.5 text-stone-300 hover:text-white transition-colors"
          >
            <Mail className="w-3 h-3 text-sky-400" />
            <span>obracreations2022@gmail.com</span>
          </a>
        </div>

        {/* Stats & Capabilities Strip */}
        <div className="hero-stats pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
          <div className="hero-stat p-4 rounded-xl bg-white/[0.03] border border-white/5 backdrop-blur-sm">
            <span className="text-xs uppercase tracking-wider text-stone-400 block mb-1">Experience</span>
            <span className="text-2xl font-serif-luxury text-white font-semibold">Since 2019</span>
            <p className="text-[11px] text-stone-400 mt-1">Over 7 years behind the lens</p>
          </div>
          <div className="hero-stat p-4 rounded-xl bg-white/[0.03] border border-white/5 backdrop-blur-sm">
            <span className="text-xs uppercase tracking-wider text-stone-400 block mb-1">Weddings & Prenup</span>
            <span className="text-2xl font-serif-luxury text-white font-semibold">Countless Stories</span>
            <p className="text-[11px] text-stone-400 mt-1">Preserved for generations</p>
          </div>
          <div className="hero-stat p-4 rounded-xl bg-white/[0.03] border border-white/5 backdrop-blur-sm">
            <span className="text-xs uppercase tracking-wider text-stone-400 block mb-1">Cinematics</span>
            <span className="text-2xl font-serif-luxury text-white font-semibold">Same-Day Edit</span>
            <p className="text-[11px] text-stone-400 mt-1">Relive what happened on your special day</p>
          </div>
          <div className="hero-stat p-4 rounded-xl bg-white/[0.03] border border-white/5 backdrop-blur-sm">
            <span className="text-xs uppercase tracking-wider text-stone-400 block mb-1">Aerial Tech</span>
            <span className="text-2xl font-serif-luxury text-white font-semibold">Excellent Aerials</span>
            <p className="text-[11px] text-stone-400 mt-1">Epic landscape establishing shots</p>
          </div>
        </div>
      </div>
    </section>
  );
};
