import teahouseImage from "@/assets/teahouse.png";
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
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Split layout for portrait image */}
      <div className="absolute inset-0 flex">
        {/* Image side - takes up appropriate space for portrait */}
        <div className="relative w-full md:w-1/2 lg:w-2/5 h-full overflow-hidden">
          <img
            src={teahouseImage}
            alt="Altair Teaház"
            className="w-full h-full object-cover object-center"
          />
          {/* Overlay for portrait side */}
          <div className="absolute inset-0 bg-gradient-to-r from-tea-dark/50 via-tea-wood/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30" />
        </div>
        
        {/* Content side background */}
        <div className="hidden md:block absolute right-0 top-0 bottom-0 w-full md:w-1/2 lg:w-3/5 bg-gradient-to-br from-tea-dark via-tea-wood/90 to-emerald-950/40">
          {/* Premium radial glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(34,197,94,0.06)_0%,transparent_70%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(217,119,6,0.04)_0%,transparent_60%)]" />
          {/* Lighter darkening layer */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/25" />
        </div>
      </div>

      {/* Content - positioned for split layout */}
      <div className="relative z-10 w-full md:w-1/2 lg:w-3/5 ml-auto px-6 md:px-12 lg:px-16 py-24">
        <div className="max-w-2xl mx-auto md:mx-0">
          <div className="opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <span className="inline-block text-emerald-300/90 font-sans text-sm tracking-[0.3em] uppercase mb-4 font-medium">
              {t("altair.hero.location")}
            </span>
          </div>
          
          <h1 
            className="font-serif text-4xl md:text-6xl lg:text-7xl text-tea-cream font-medium mb-6 opacity-0 animate-fade-in drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)] text-left md:text-left"
            style={{ animationDelay: "0.4s" }}
          >
            {t("altair.hero.title")}
          </h1>
          
          <p 
            className="font-sans text-lg md:text-xl text-tea-cream/90 mb-10 font-light leading-relaxed opacity-0 animate-fade-in drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)] text-left"
            style={{ animationDelay: "0.6s" }}
          >
            {t("altair.hero.subtitle")}
          </p>

          <div 
            className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in justify-start"
            style={{ animationDelay: "0.8s" }}
          >
          <a
            href="#menu"
            onClick={(e) => handleNavClick(e, "#menu")}
            className="btn-dimensional inline-flex items-center justify-center px-8 py-4 text-primary-foreground font-sans font-semibold rounded-xl relative overflow-hidden group cursor-pointer"
          >
            <span className="relative z-10">{t("altair.hero.ctaMenu")}</span>
            {/* Ripple effect */}
            <span className="absolute inset-0 bg-white/20 scale-0 group-hover:scale-100 transition-transform duration-500 rounded-xl"></span>
          </a>
          <a
            href="#visit"
            onClick={(e) => handleNavClick(e, "#visit")}
            className="inline-flex items-center justify-center px-8 py-4 border-2 border-emerald-400/60 text-emerald-300 font-sans font-semibold rounded-xl hover:bg-emerald-400/10 hover:border-emerald-400 hover:shadow-lg hover:shadow-emerald-400/30 transition-all duration-300 backdrop-blur-sm bg-black/30 cursor-pointer"
          >
            {t("altair.hero.ctaVisit")}
          </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator - centered */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in" style={{ animationDelay: "1.2s" }}>
        <div className="w-6 h-10 border-2 border-emerald-400/50 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-emerald-400/50 rounded-full mt-2 animate-steam" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
