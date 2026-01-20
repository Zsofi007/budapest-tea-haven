import heroImage from "@/assets/hero-tea.jpg";
import { useI18n } from "@/i18n/context";

const Hero = () => {
  const { t } = useI18n();
  
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 80; // Account for fixed navbar height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };
  
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with bright brown/orange overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        {/* Soft brown/orange gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-950/40 via-orange-900/35 to-amber-800/25" />
        {/* Soft orange/brown radial glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(251,146,60,0.05)_0%,transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(217,119,6,0.04)_0%,transparent_50%)]" />
        {/* Darkening layer */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <span className="inline-block text-orange-300/90 font-sans text-sm tracking-[0.3em] uppercase mb-4 font-medium">
            {t("hero.location")}
          </span>
        </div>
        
        <h1 
          className="font-serif text-5xl md:text-7xl lg:text-8xl text-tea-cream font-medium mb-6 opacity-0 animate-fade-in drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]"
          style={{ animationDelay: "0.4s" }}
        >
          {t("hero.title")}
        </h1>
        
        <p 
          className="font-sans text-lg md:text-xl text-tea-cream/80 max-w-2xl mx-auto mb-10 font-light leading-relaxed opacity-0 animate-fade-in drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]"
          style={{ animationDelay: "0.6s" }}
        >
          {t("hero.subtitle")}
        </p>

        <div 
          className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-in"
          style={{ animationDelay: "0.8s" }}
        >
          <a
            href="#menu"
            onClick={(e) => handleNavClick(e, "#menu")}
            className="btn-dimensional inline-flex items-center justify-center px-8 py-4 text-primary-foreground font-sans font-semibold rounded-xl relative overflow-hidden group cursor-pointer"
          >
            <span className="relative z-10">{t("hero.ctaMenu")}</span>
            {/* Ripple effect */}
            <span className="absolute inset-0 bg-white/20 scale-0 group-hover:scale-100 transition-transform duration-500 rounded-xl"></span>
          </a>
          <a
            href="#visit"
            onClick={(e) => handleNavClick(e, "#visit")}
            className="inline-flex items-center justify-center px-8 py-4 border-2 border-orange-400/60 text-orange-300 font-sans font-semibold rounded-xl hover:bg-orange-400/10 hover:border-orange-400 hover:shadow-lg hover:shadow-orange-400/30 transition-all duration-300 backdrop-blur-sm bg-black/30 cursor-pointer"
          >
            {t("hero.ctaVisit")}
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in" style={{ animationDelay: "1.2s" }}>
        <div className="w-6 h-10 border-2 border-orange-400/50 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-orange-400/50 rounded-full mt-2 animate-steam" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
