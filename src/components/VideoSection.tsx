import React, { useState, useEffect } from 'react';
import {
  Film,
  Play,
  Maximize2,
  ExternalLink,
  Volume2,
  Sparkles,
  Clapperboard,
  CheckCircle2,
  X,
  Share2,
  Tv
} from 'lucide-react';

export interface VideoItem {
  id: string;
  youtubeId: string;
  title: string;
  couple: string;
  category: string;
  tagline: string;
  description: string;
  youtubeUrl: string;
  thumbnail: string;
  durationEstimate: string;
  aspectRatio: string;
  tags: string[];
  specs: {
    resolution: string;
    cinematographer: string;
    audio: string;
    colorProfile: string;
  };
}

export const FEATURED_VIDEOS: VideoItem[] = [
  {
    id: 'dan-and-dea',
    youtubeId: 'OHwDqL_LNjI',
    title: 'Dan and Dea | Save the Date',
    couple: 'Dan & Dea',
    category: 'Cinematic Save the Date',
    tagline: 'Coastal breeze, sunlit promises, and timeless romance',
    description:
      'An intimate and heartfelt cinematic teaser directed by Daniel Obra, capturing Dan and Dea’s genuine chemistry, golden coastal glow, and lifelong promises.',
    youtubeUrl: 'https://youtu.be/OHwDqL_LNjI',
    thumbnail: 'https://i.ytimg.com/vi/OHwDqL_LNjI/maxresdefault.jpg',
    durationEstimate: 'Cinematic Film',
    aspectRatio: '16:9 Widescreen',
    tags: ['Save the Date', 'Wedding Teaser', 'Coastal Golden Hour', 'Romantic'],
    specs: {
      resolution: '4K Ultra HD',
      cinematographer: 'Daniel Obra',
      audio: 'Original Ambient & Soundtrack',
      colorProfile: 'Film Tone / Warm Gold',
    },
  },
  {
    id: 'macky-and-ghie',
    youtubeId: 'TRhTQ1C58-8',
    title: 'Macky and Ghie | Save the Date',
    couple: 'Macky & Ghie',
    category: 'Cinematic Save the Date',
    tagline: 'Emotional narrative, candid laughter, and heirloom storytelling',
    description:
      'A soulful, story-driven celebration crafted by Daniel Obra, weaving together candid laughter, quiet embraces, and the authentic anticipation of marriage.',
    youtubeUrl: 'https://youtu.be/TRhTQ1C58-8',
    thumbnail: 'https://i.ytimg.com/vi/TRhTQ1C58-8/maxresdefault.jpg',
    durationEstimate: 'Cinematic Film',
    aspectRatio: '16:9 Widescreen',
    tags: ['Save the Date', 'Emotional Narrative', 'Natural Light', 'Documentary'],
    specs: {
      resolution: '4K Ultra HD',
      cinematographer: 'Daniel Obra',
      audio: 'Original Ambient & Soundtrack',
      colorProfile: 'Organic Film Contrast',
    },
  },
];

export const VideoSection: React.FC = () => {
  const [activeVideoIndex, setActiveVideoIndex] = useState<number>(0);
  const [isPlayingMainStage, setIsPlayingMainStage] = useState<boolean>(false);
  const [modalVideo, setModalVideo] = useState<VideoItem | null>(null);
  const [copiedLink, setCopiedLink] = useState<string | null>(null);

  const activeVideo = FEATURED_VIDEOS[activeVideoIndex];

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && modalVideo) {
        setModalVideo(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [modalVideo]);

  const handleSelectVideo = (index: number, autoPlay: boolean = true) => {
    setActiveVideoIndex(index);
    if (autoPlay) {
      setIsPlayingMainStage(true);
    }
  };

  const handleCopyLink = (url: string, id: string) => {
    navigator.clipboard.writeText(url);
    setCopiedLink(id);
    setTimeout(() => setCopiedLink(null), 2500);
  };

  return (
    <section
      id="cinematic-films"
      className="py-24 px-6 max-w-7xl mx-auto scroll-mt-20 relative"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-3/4 max-w-4xl h-96 bg-gradient-to-b from-sky-500/10 via-indigo-500/5 to-transparent blur-3xl pointer-events-none -z-10" />

      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14 pb-8 border-b border-white/10">
        <div>
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-sky-400 font-semibold mb-3">
            <Film className="w-4 h-4" />
            <span>Cinematic Film & Motion</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif-luxury text-white font-normal leading-tight">
            Stories Brought to Life in Motion
          </h2>
          <p className="text-stone-400 font-sans-clean text-sm sm:text-base mt-2 max-w-2xl font-light">
            Beyond still photography, Daniel Obra directs and captures emotional wedding teasers and Save the Date films with cinema-grade glass, heartfelt audio, and heirloom color grading.
          </p>
        </div>

        {/* Quick Film Switcher Tabs */}
        <div className="flex items-center gap-2 bg-[#12141c] p-1.5 rounded-xl border border-white/10 shrink-0">
          {FEATURED_VIDEOS.map((video, idx) => (
            <button
              key={video.id}
              onClick={() => handleSelectVideo(idx, isPlayingMainStage)}
              className={`px-4 py-2 rounded-lg text-xs font-medium transition-all duration-200 flex items-center gap-2 cursor-pointer ${
                activeVideoIndex === idx
                  ? 'bg-sky-400 text-slate-950 shadow-md font-semibold'
                  : 'text-stone-300 hover:text-white hover:bg-white/5'
              }`}
            >
              <Clapperboard className="w-3.5 h-3.5" />
              <span>{video.couple}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Main Cinema Theater Stage */}
      <div className="relative mb-14">
        <div className="relative rounded-2xl overflow-hidden bg-[#0a0b0e] border border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.85)]">
          {/* Cinema Header Bar */}
          <div className="bg-[#12141c]/90 backdrop-blur-md px-5 py-3 border-b border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1.5 font-mono text-sky-400 font-semibold tracking-wider uppercase text-[11px]">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                <span>Cinema Stage</span>
              </span>
              <span className="text-stone-600 hidden sm:inline">|</span>
              <span className="text-stone-200 font-serif-luxury text-sm truncate max-w-[240px] sm:max-w-md">
                {activeVideo.title}
              </span>
            </div>

            <div className="flex items-center gap-2 ml-auto">
              <span className="hidden sm:inline-block px-2 py-0.5 rounded bg-white/5 text-[11px] font-mono text-stone-300 border border-white/10">
                {activeVideo.specs.resolution}
              </span>

              <button
                onClick={() => setModalVideo(activeVideo)}
                className="px-2.5 py-1 text-[11px] font-medium text-stone-300 hover:text-white bg-white/5 hover:bg-white/10 rounded-lg border border-white/10 transition-colors flex items-center gap-1 cursor-pointer"
                title="Watch in Theater Lightbox"
              >
                <Maximize2 className="w-3 h-3 text-sky-400" />
                <span className="hidden xs:inline">Theater View</span>
              </button>

              <a
                href={activeVideo.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-2.5 py-1 text-[11px] font-medium text-stone-300 hover:text-white bg-white/5 hover:bg-white/10 rounded-lg border border-white/10 transition-colors flex items-center gap-1"
                title="Watch on YouTube"
              >
                <ExternalLink className="w-3 h-3 text-red-400" />
                <span className="hidden xs:inline">YouTube</span>
              </a>
            </div>
          </div>

          {/* Video Player Display Container (16:9 Widescreen) */}
          <div className="relative aspect-video w-full bg-black overflow-hidden group">
            {isPlayingMainStage ? (
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${activeVideo.youtubeId}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
                title={activeVideo.title}
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            ) : (
              /* Custom High-Res Poster with Play Overlay */
              <div className="relative w-full h-full cursor-pointer" onClick={() => setIsPlayingMainStage(true)}>
                <img
                  src={activeVideo.thumbnail}
                  alt={activeVideo.title}
                  className="w-full h-full object-cover object-center filter brightness-90 contrast-105 transition-transform duration-700 group-hover:scale-105"
                />

                {/* Ambient vignette gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/40 group-hover:via-black/20 transition-colors" />

                {/* Big Center Play Button */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                  <div className="relative mb-5">
                    {/* Pulsing ring */}
                    <div className="absolute -inset-3 bg-sky-400/30 rounded-full animate-ping opacity-75" />
                    <button
                      aria-label={`Play film ${activeVideo.title}`}
                      className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-sky-400 text-slate-950 flex items-center justify-center shadow-[0_0_30px_rgba(56,189,248,0.6)] group-hover:scale-110 group-hover:bg-sky-300 transition-all duration-300"
                    >
                      <Play className="w-8 h-8 sm:w-10 sm:h-10 ml-1 fill-current" />
                    </button>
                  </div>

                  <span className="text-xs uppercase tracking-widest text-sky-300 font-mono font-semibold mb-2">
                    Click to Play Full Film
                  </span>
                  <h3 className="text-2xl sm:text-4xl font-serif-luxury text-white font-normal max-w-2xl px-4 drop-shadow-md">
                    {activeVideo.title}
                  </h3>
                  <p className="text-stone-300 text-xs sm:text-sm font-sans-clean mt-2 max-w-lg font-light drop-shadow">
                    {activeVideo.tagline}
                  </p>
                </div>

                {/* Bottom specs bar over poster */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-stone-300 font-mono pointer-events-none">
                  <span className="bg-black/60 backdrop-blur-md px-3 py-1 rounded-md border border-white/10">
                    Directed by {activeVideo.specs.cinematographer}
                  </span>
                  <span className="bg-black/60 backdrop-blur-md px-3 py-1 rounded-md border border-white/10 text-sky-300">
                    4K Cinematic Master
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Player Footer / Details */}
          <div className="p-6 bg-[#0f1118] border-t border-white/10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              <div className="lg:col-span-8 space-y-2">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-sky-400/10 text-sky-300 border border-sky-400/20">
                    {activeVideo.category}
                  </span>
                  {activeVideo.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded text-[11px] text-stone-400 bg-white/5 border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="text-stone-300 text-sm font-sans-clean font-light leading-relaxed">
                  {activeVideo.description}
                </p>
              </div>

              <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col justify-end gap-3 text-xs">
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-1">
                  <div className="flex justify-between text-stone-400">
                    <span>Cinematography:</span>
                    <span className="text-white font-medium">{activeVideo.specs.cinematographer}</span>
                  </div>
                  <div className="flex justify-between text-stone-400">
                    <span>Color Profile:</span>
                    <span className="text-stone-200">{activeVideo.specs.colorProfile}</span>
                  </div>
                  <div className="flex justify-between text-stone-400">
                    <span>Format:</span>
                    <span className="text-sky-300 font-mono">{activeVideo.specs.resolution}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleCopyLink(activeVideo.youtubeUrl, activeVideo.id)}
                    className="flex-1 py-2 px-3 text-xs font-medium text-stone-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    {copiedLink === activeVideo.id ? (
                      <>
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-300">Link Copied!</span>
                      </>
                    ) : (
                      <>
                        <Share2 className="w-3.5 h-3.5" />
                        <span>Share Video</span>
                      </>
                    )}
                  </button>

                  <a
                    href={activeVideo.youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2 px-3 text-xs font-semibold text-slate-950 bg-sky-400 hover:bg-sky-300 rounded-lg transition-colors flex items-center justify-center gap-1.5"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Watch on YouTube</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Dual Video Showcase Cards (Both videos accessible side-by-side) */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl sm:text-2xl font-serif-luxury text-white">
              Curated Video Catalog
            </h3>
            <p className="text-xs sm:text-sm text-stone-400 font-light mt-0.5">
              Select any film below to load it into the Cinema Stage or watch full-screen.
            </p>
          </div>
          <span className="text-xs font-mono text-stone-500">
            2 Featured Films Available
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {FEATURED_VIDEOS.map((video, index) => {
            const isCurrentlyActive = activeVideoIndex === index;
            return (
              <div
                key={video.id}
                className={`group relative rounded-2xl overflow-hidden bg-[#12141c] border transition-all duration-300 flex flex-col ${
                  isCurrentlyActive
                    ? 'border-sky-400/80 shadow-[0_0_25px_rgba(56,189,248,0.15)] ring-1 ring-sky-400/40'
                    : 'border-white/10 hover:border-white/30'
                }`}
              >
                {/* Active Indicator Banner */}
                {isCurrentlyActive && (
                  <div className="bg-sky-500/15 border-b border-sky-400/20 px-4 py-1.5 flex items-center justify-between text-[11px] text-sky-300 font-mono">
                    <span className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
                      <span>Currently Loaded in Cinema Stage</span>
                    </span>
                    <span className="text-stone-400">Film #{index + 1}</span>
                  </div>
                )}

                {/* Card Thumbnail Container */}
                <div
                  className="relative aspect-video w-full bg-stone-900 overflow-hidden cursor-pointer"
                  onClick={() => handleSelectVideo(index, true)}
                >
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    loading="lazy"
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:via-black/10 transition-colors" />

                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-black/60 group-hover:bg-sky-400 group-hover:text-slate-950 text-white backdrop-blur-sm border border-white/20 group-hover:border-transparent flex items-center justify-center transition-all duration-300 shadow-lg group-hover:scale-110">
                      <Play className="w-6 h-6 ml-0.5 fill-current" />
                    </div>
                  </div>

                  {/* Badges on Thumbnail */}
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <span className="px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider bg-black/70 backdrop-blur-sm text-stone-200 rounded border border-white/10">
                      {video.specs.resolution}
                    </span>
                  </div>

                  <div className="absolute bottom-3 right-3">
                    <span className="px-2 py-0.5 text-[10px] font-mono bg-black/70 backdrop-blur-sm text-stone-200 rounded border border-white/10">
                      YouTube 1080p / 4K
                    </span>
                  </div>
                </div>

                {/* Card Content & Action Bar */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <span className="text-xs uppercase tracking-wider text-sky-400 font-mono font-semibold">
                        {video.category}
                      </span>
                      <span className="text-xs text-stone-500 font-mono">
                        Film #{index + 1}
                      </span>
                    </div>

                    <h4 className="text-xl font-serif-luxury text-white group-hover:text-sky-200 transition-colors">
                      {video.title}
                    </h4>

                    <p className="text-xs text-stone-300 italic mt-0.5">
                      "{video.tagline}"
                    </p>

                    <p className="text-xs text-stone-400 font-light mt-2 line-clamp-2 leading-relaxed">
                      {video.description}
                    </p>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-2">
                    <button
                      onClick={() => handleSelectVideo(index, true)}
                      className="flex-1 py-2 px-3 text-xs font-semibold uppercase tracking-wider text-slate-950 bg-sky-400 hover:bg-sky-300 rounded-lg transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-sm"
                    >
                      <Play className="w-3.5 h-3.5 fill-current" />
                      <span>Play on Screen</span>
                    </button>

                    <button
                      onClick={() => setModalVideo(video)}
                      className="py-2 px-3 text-xs font-medium text-stone-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-colors flex items-center justify-center gap-1 cursor-pointer"
                      title="Open Theater Pop-out"
                    >
                      <Tv className="w-3.5 h-3.5 text-sky-400" />
                      <span className="hidden sm:inline">Theater</span>
                    </button>

                    <a
                      href={video.youtubeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-stone-400 hover:text-red-400 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-colors"
                      title="Open on YouTube"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Cinematic Drone & Film Production Callout Banner */}
      <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#111420] via-[#141828] to-[#111420] border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-1 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2 text-xs font-mono text-sky-400 uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Full Cinematic Videography Packages</span>
          </div>
          <h4 className="text-xl sm:text-2xl font-serif-luxury text-white">
            Looking for Same-Day-Edit (SDE) or Full Wedding Film Coverage?
          </h4>
          <p className="text-xs sm:text-sm text-stone-400 max-w-2xl font-light">
            Obra Creations offers comprehensive video coverage including 4K Drone aerial perspectives, multi-camera gimbal tracking, crisp audio recording, and fast turnaround same-day edits.
          </p>
        </div>

        <a
          href="#contact"
          className="shrink-0 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-slate-950 bg-sky-400 hover:bg-sky-300 rounded-xl transition-all shadow-md duration-200"
        >
          Inquire for Video Coverage
        </a>
      </div>

      {/* Fullscreen Theater Modal */}
      {modalVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 sm:p-8 animate-in fade-in duration-200">
          <div className="relative w-full max-w-5xl bg-[#0c0d12] rounded-2xl border border-white/20 shadow-2xl overflow-hidden flex flex-col">
            {/* Modal Header */}
            <div className="px-6 py-4 bg-[#141620] border-b border-white/10 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
                <div>
                  <h3 className="text-base sm:text-lg font-serif-luxury text-white">
                    {modalVideo.title}
                  </h3>
                  <span className="text-[11px] font-mono text-sky-400">
                    Directed by Daniel Obra · 4K UHD
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href={modalVideo.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs text-stone-300 hover:text-white bg-white/5 hover:bg-white/10 rounded-lg border border-white/10 transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-red-400" />
                  <span>Open on YouTube</span>
                </a>

                <button
                  onClick={() => setModalVideo(null)}
                  className="p-2 text-stone-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors cursor-pointer"
                  aria-label="Close Theater Modal"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Modal 16:9 Player */}
            <div className="relative aspect-video w-full bg-black">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${modalVideo.youtubeId}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
                title={modalVideo.title}
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>

            {/* Modal Footer */}
            <div className="p-4 sm:p-5 bg-[#0f1118] border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-stone-400">
              <p className="font-light max-w-2xl text-stone-300">
                {modalVideo.description}
              </p>
              <span className="text-[11px] font-mono text-stone-500 shrink-0">
                Press ESC or click close button to exit theater
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
