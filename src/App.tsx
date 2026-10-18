import React, { useEffect, useState } from 'react';
import { WelcomeView } from './components/WelcomeView';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { PortfolioGrids } from './components/PortfolioGrids';
import { VideoSection } from './components/VideoSection';
import { MouseTrailGallery } from './components/MouseTrailGallery';
import { BioSection } from './components/BioSection';
import { ServicesSection } from './components/ServicesSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { LightboxModal } from './components/LightboxModal';
import { ThemeToggle } from './components/ThemeToggle';
import { LoadingScreen } from './components/LoadingScreen';
import { ALL_PHOTOS, PhotoItem } from './data/portfolioData';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingExiting, setIsLoadingExiting] = useState(false);
  const [view, setView] = useState<'welcome' | 'main'>('welcome');
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const [selectedPhoto, setSelectedPhoto] = useState<PhotoItem | null>(null);
  const [isWelcomeExiting, setIsWelcomeExiting] = useState(false);
  const welcomeTransitionTimer = React.useRef<number | null>(null);

  useEffect(() => () => {
    if (welcomeTransitionTimer.current !== null) {
      window.clearTimeout(welcomeTransitionTimer.current);
    }
  }, []);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const exitTimer = window.setTimeout(() => setIsLoadingExiting(true), prefersReducedMotion ? 700 : 1750);
    const removeTimer = window.setTimeout(() => setIsLoading(false), prefersReducedMotion ? 800 : 2250);

    return () => {
      window.clearTimeout(exitTimer);
      window.clearTimeout(removeTimer);
    };
  }, []);

  useEffect(() => {
    if (view !== 'main' || !('IntersectionObserver' in window)) return;

    const sections = document.querySelectorAll<HTMLElement>('main > section:not(#hero), footer');
    const photoElements = document.querySelectorAll<HTMLElement>(
      '#portfolio .portfolio-photo-card, #cinematic-films .video-catalog-card, #bio .bio-portrait-frame'
    );
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -48px 0px' }
    );

    sections.forEach((section) => {
      section.classList.add('scroll-reveal');
      observer.observe(section);
    });

    photoElements.forEach((element) => {
      element.classList.add('photo-reveal-ready');
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, [view]);

  if (isLoading) {
    return <LoadingScreen isExiting={isLoadingExiting} />;
  }

  const handleOpenPhoto = (photo: PhotoItem) => {
    setSelectedPhoto(photo);
  };

  const handleClosePhoto = () => {
    setSelectedPhoto(null);
  };

  const handlePrevPhoto = () => {
    if (!selectedPhoto) return;
    const currentIndex = ALL_PHOTOS.findIndex((p) => p.id === selectedPhoto.id);
    const prevIndex = (currentIndex - 1 + ALL_PHOTOS.length) % ALL_PHOTOS.length;
    setSelectedPhoto(ALL_PHOTOS[prevIndex]);
  };

  const handleNextPhoto = () => {
    if (!selectedPhoto) return;
    const currentIndex = ALL_PHOTOS.findIndex((p) => p.id === selectedPhoto.id);
    const nextIndex = (currentIndex + 1) % ALL_PHOTOS.length;
    setSelectedPhoto(ALL_PHOTOS[nextIndex]);
  };

  const handleProceedToPortfolio = () => {
    if (isWelcomeExiting) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setView('main');
      window.scrollTo({ top: 0, behavior: 'auto' });
      return;
    }

    setIsWelcomeExiting(true);
    welcomeTransitionTimer.current = window.setTimeout(() => {
      setView('main');
      setIsWelcomeExiting(false);
      welcomeTransitionTimer.current = null;
      window.scrollTo({ top: 0, behavior: 'auto' });
    }, 650);
  };

  if (view === 'welcome') {
    return (
      <WelcomeView
        theme={theme}
        isExiting={isWelcomeExiting}
        onToggleTheme={() => setTheme((currentTheme) => currentTheme === 'dark' ? 'light' : 'dark')}
        onProceed={handleProceedToPortfolio}
      />
    );
  }

  return (
    <div data-theme={theme} className="min-h-screen bg-[#0c0d10] text-[#e5e7eb] font-sans-clean selection:bg-sky-400 selection:text-slate-950">
      <Navbar
        onShowWelcome={() => setView('welcome')}
        theme={theme}
        onToggleTheme={() => setTheme((currentTheme) => currentTheme === 'dark' ? 'light' : 'dark')}
      />

      <main>
        <HeroSection />
        <PortfolioGrids onSelectPhoto={handleOpenPhoto} />
        <VideoSection />
        <MouseTrailGallery />
        <BioSection />
        <ServicesSection />
        <ContactSection />
      </main>

      <Footer onShowWelcome={() => setView('welcome')} />

      {selectedPhoto && (
        <LightboxModal
          photo={selectedPhoto}
          onClose={handleClosePhoto}
          onPrev={handlePrevPhoto}
          onNext={handleNextPhoto}
        />
      )}
    </div>
  );
}
