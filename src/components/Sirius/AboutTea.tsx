import { Leaf, Coffee, Flower2 } from "lucide-react";
import { useI18n } from "@/i18n/context";

const AboutTea = () => {
  const { t } = useI18n();
  
  const teaTypes = [
    {
      icon: Coffee,
      nameKey: "tea.types.black.name",
      descriptionKey: "tea.types.black.description",
      color: "bg-tea-wood/30",
      glowColor: "dark", // Dark glow for black tea
    },
    {
      icon: Leaf,
      nameKey: "tea.types.oolong.name",
      descriptionKey: "tea.types.oolong.description",
      color: "bg-tea-wood/30",
      glowColor: "yellow", // Yellowish glow for oolong
    },
    {
      icon: Flower2,
      nameKey: "tea.types.green.name",
      descriptionKey: "tea.types.green.description",
      color: "bg-tea-wood/30",
      glowColor: "green", // Green glow for green tea
    },
  ];

  const otherTeas = [
    {
      nameKey: "tea.other.herbal.name",
      descriptionKey: "tea.other.herbal.description",
    },
    {
      nameKey: "tea.other.fruit.name",
      descriptionKey: "tea.other.fruit.description",
    },
    {
      nameKey: "tea.other.rooibos.name",
      descriptionKey: "tea.other.rooibos.description",
    },
  ];

  return (
    <section id="tea" className="py-24 px-6 bg-secondary/20 relative">
      {/* Bright brown/orange glow background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(251,146,60,0.1)_0%,transparent_50%)] pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-900/8 to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(217,119,6,0.08)_0%,transparent_50%)] pointer-events-none" />
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block text-orange-300 font-sans text-sm tracking-[0.2em] uppercase mb-4 font-medium">
            {t("tea.sectionLabel")}
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6">
            {t("tea.title")}
          </h2>
          <p className="font-sans text-muted-foreground max-w-3xl mx-auto text-lg leading-relaxed">
            {t("tea.intro")}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {teaTypes.map((tea, index) => {
            // Determine glow colors based on tea type
            const glowStyles = {
              dark: {
                hover: "group-hover:from-tea-black/20 group-hover:via-tea-black/10 group-hover:to-transparent",
                shadow: "group-hover:shadow-[0_0_25px_rgba(0,0,0,0.6)]",
                icon: "text-tea-cream/70",
                iconHover: "group-hover:text-tea-cream",
                titleHover: "group-hover:text-tea-cream",
                iconBg: "bg-tea-wood group-hover:from-tea-black/30 group-hover:to-tea-black/20"
              },
              yellow: {
                hover: "group-hover:from-tea-yellow/15 group-hover:via-tea-gold/8 group-hover:to-transparent",
                shadow: "group-hover:shadow-[0_0_25px_rgba(255,200,0,0.4)]",
                icon: "text-tea-yellow/80",
                iconHover: "group-hover:text-tea-yellow",
                titleHover: "group-hover:text-tea-yellow",
                iconBg: "bg-tea-wood group-hover:from-tea-yellow/30 group-hover:to-tea-gold/20"
              },
              green: {
                hover: "group-hover:from-tea-sage/15 group-hover:via-tea-sage/8 group-hover:to-transparent",
                shadow: "group-hover:shadow-[0_0_25px_rgba(100,150,100,0.4)]",
                icon: "text-foreground/80",
                iconHover: "group-hover:text-foreground",
                titleHover: "group-hover:text-foreground",
                iconBg: "bg-tea-wood group-hover:from-tea-sage/30 group-hover:to-tea-sage/20"
              }
            };
            
            const glow = glowStyles[tea.glowColor as keyof typeof glowStyles];
            
            return (
              <div
                key={index}
                className={`${tea.color} p-8 rounded-2xl border border-border/50 elevation-2 hover:elevation-4 transition-all duration-300 group relative overflow-hidden`}
                style={{ 
                  background: 'linear-gradient(135deg, hsl(25, 35%, 18%) 0%, hsl(25, 38%, 20%) 100%)'
                }}
              >
                {/* Tea-specific hover glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-transparent transition-all duration-500 rounded-2xl ${glow.hover}`} />
                
                <div className="relative z-10">
                  <div className={`w-16 h-16 mb-6 rounded-full elevation-1 flex items-center justify-center group-hover:scale-110 transition-all duration-300 ${glow.shadow} ${glow.iconBg} bg-gradient-to-br`}>
                    <tea.icon className={`w-8 h-8 ${glow.icon} ${glow.iconHover} transition-colors duration-300`} />
                  </div>
                  <h3 className={`font-serif text-2xl text-foreground mb-4 transition-colors duration-300 ${glow.titleHover}`}>
                    {t(tea.nameKey)}
                  </h3>
                  <p className="font-sans text-muted-foreground leading-relaxed text-sm">
                    {t(tea.descriptionKey)}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-card p-8 md:p-12 rounded-2xl elevation-2 border border-border">
          <h3 className="font-serif text-3xl text-foreground mb-8 text-center">
            {t("tea.other.title")}
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {otherTeas.map((tea, index) => (
              <div key={index} className="space-y-3">
                <h4 className="font-serif text-xl text-foreground">
                  {t(tea.nameKey)}
                </h4>
                <p className="font-sans text-muted-foreground leading-relaxed text-sm">
                  {t(tea.descriptionKey)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTea;
