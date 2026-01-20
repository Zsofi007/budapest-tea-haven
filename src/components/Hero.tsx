import heroImage from "@/assets/hero-tea.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-tea-brown/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <span className="inline-block text-tea-cream/80 font-sans text-sm tracking-[0.3em] uppercase mb-4">
            Budapest belvárosában
          </span>
        </div>
        
        <h1 
          className="font-serif text-5xl md:text-7xl lg:text-8xl text-tea-cream font-medium mb-6 opacity-0 animate-fade-in"
          style={{ animationDelay: "0.4s" }}
        >
          Sirius Teaház
        </h1>
        
        <p 
          className="font-sans text-lg md:text-xl text-tea-cream/90 max-w-2xl mx-auto mb-10 font-light leading-relaxed opacity-0 animate-fade-in"
          style={{ animationDelay: "0.6s" }}
        >
          Fedezd fel a tea varázslatos világát egy meghitt, otthonos környezetben. 
          Több mint 100 féle teával és házi süteményekkel várunk.
        </p>

        <div 
          className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-in"
          style={{ animationDelay: "0.8s" }}
        >
          <a
            href="#menu"
            className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground font-sans font-medium rounded-lg hover:bg-tea-terracotta transition-colors duration-300"
          >
            Teakínálatunk
          </a>
          <a
            href="#visit"
            className="inline-flex items-center justify-center px-8 py-4 border-2 border-tea-cream text-tea-cream font-sans font-medium rounded-lg hover:bg-tea-cream hover:text-tea-brown transition-colors duration-300"
          >
            Látogass el hozzánk
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in" style={{ animationDelay: "1.2s" }}>
        <div className="w-6 h-10 border-2 border-tea-cream/50 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-tea-cream/50 rounded-full mt-2 animate-steam" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
