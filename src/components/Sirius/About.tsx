import { Leaf, Heart, Clock, Coffee, BookOpen, Users } from "lucide-react";
import { useI18n } from "@/i18n/context";

const About = () => {
  const { t } = useI18n();
  
  const features = [
    {
      icon: Leaf,
      titleKey: "about.features.tea80.title",
      descriptionKey: "about.features.tea80.description",
    },
    {
      icon: Coffee,
      titleKey: "about.features.coffee.title",
      descriptionKey: "about.features.coffee.description",
    },
    {
      icon: Heart,
      titleKey: "about.features.cozy.title",
      descriptionKey: "about.features.cozy.description",
    },
    {
      icon: BookOpen,
      titleKey: "about.features.books.title",
      descriptionKey: "about.features.books.description",
    },
    {
      icon: Users,
      titleKey: "about.features.community.title",
      descriptionKey: "about.features.community.description",
    },
    {
      icon: Clock,
      titleKey: "about.features.since2002.title",
      descriptionKey: "about.features.since2002.description",
    },
  ];

  return (
    <section id="about" className="py-24 px-6 bg-background relative">
      {/* Bright brown/orange glow background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-900/12 to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(251,146,60,0.1)_0%,transparent_50%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(217,119,6,0.08)_0%,transparent_50%)] pointer-events-none" />
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block text-orange-300 font-sans text-sm tracking-[0.2em] uppercase mb-4 font-medium">
            {t("about.sectionLabel")}
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6">
            {t("about.title")}
          </h2>
          <div className="font-sans text-muted-foreground max-w-3xl mx-auto text-lg leading-relaxed space-y-4 text-left">
            <p>{t("about.history1")}</p>
            <p>{t("about.history2")}</p>
            <p>{t("about.history3")}</p>
            <p>{t("about.history4")}</p>
            <p>{t("about.history5")}</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-2xl elevation-2 hover:elevation-4 border border-border/50 hover:border-orange-500/50 transition-all duration-300 group cursor-pointer relative overflow-hidden"
              style={{ 
                background: 'linear-gradient(135deg, hsl(25, 35%, 14%) 0%, hsl(25, 38%, 16%) 100%)',
                animationDelay: `${index * 0.1}s`,
                animation: 'fade-in 0.6s ease-out forwards'
              }}
            >
              {/* Bright orange/brown gradient overlay on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-orange-500/0 to-orange-500/0 group-hover:from-orange-500/15 group-hover:via-orange-400/8 group-hover:to-transparent transition-all duration-300 pointer-events-none" />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-amber-500/0 to-amber-500/0 group-hover:from-amber-500/10 group-hover:via-amber-400/6 group-hover:to-transparent transition-all duration-300 pointer-events-none" />
              
              <div className="relative z-10">
                <div className="w-14 h-14 mb-4 rounded-full bg-gradient-to-br from-orange-800/60 to-orange-700/50 flex items-center justify-center group-hover:from-orange-500/40 group-hover:to-orange-400/25 group-hover:scale-110 transition-all duration-300 elevation-1 group-hover:elevation-2 group-hover:shadow-[0_0_25px_rgba(251,146,60,0.5),0_0_15px_rgba(217,119,6,0.3)]">
                  <feature.icon className="w-7 h-7 text-orange-300 group-hover:text-orange-200 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="font-serif text-xl text-foreground mb-2 group-hover:text-orange-200 transition-colors duration-300">
                  {t(feature.titleKey)}
                </h3>
                <p className="font-sans text-muted-foreground leading-relaxed text-sm">
                  {t(feature.descriptionKey)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
