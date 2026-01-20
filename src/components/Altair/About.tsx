import { Calendar, Phone } from "lucide-react";
import { useI18n } from "@/i18n/context";

const About = () => {
  const { t } = useI18n();

  return (
    <section id="about" className="py-24 px-6 bg-background relative">
      {/* Premium forest green glow background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-900/8 to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(34,197,94,0.06)_0%,transparent_50%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(217,119,6,0.04)_0%,transparent_50%)] pointer-events-none" />
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block text-emerald-300/80 font-sans text-sm tracking-[0.2em] uppercase mb-4 font-medium">
            {t("altair.about.sectionLabel")}
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6">
            {t("altair.about.title")}
          </h2>
          <div className="font-sans text-muted-foreground max-w-3xl mx-auto text-lg leading-relaxed space-y-4 text-left">
            <p>{t("altair.about.description")}</p>
          </div>
        </div>

        <div className="flex justify-center mt-16">
          <div
            className="bg-card p-8 rounded-2xl elevation-2 hover:elevation-4 border border-border/50 hover:border-emerald-500/50 transition-all duration-300 group cursor-pointer relative overflow-hidden max-w-md w-full"
            style={{ 
              background: 'linear-gradient(135deg, hsl(150, 30%, 12%) 0%, hsl(150, 32%, 14%) 100%)',
            }}
          >
            {/* Premium green/gold gradient overlay on hover */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-500/0 to-emerald-500/0 group-hover:from-emerald-500/10 group-hover:via-emerald-400/5 group-hover:to-transparent transition-all duration-300 pointer-events-none" />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-amber-500/0 to-amber-500/0 group-hover:from-amber-500/6 group-hover:via-amber-400/3 group-hover:to-transparent transition-all duration-300 pointer-events-none" />
            
            <div className="relative z-10 text-center">
              <div className="w-16 h-16 mb-6 rounded-full bg-gradient-to-br from-tea-wood/60 to-emerald-800/40 flex items-center justify-center mx-auto group-hover:from-emerald-500/35 group-hover:to-emerald-400/20 group-hover:scale-110 transition-all duration-300 elevation-1 group-hover:elevation-2 group-hover:shadow-[0_0_25px_rgba(34,197,94,0.4),0_0_12px_rgba(217,119,6,0.2)]">
                <Calendar className="w-8 h-8 text-emerald-300/90 group-hover:text-emerald-200 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="font-serif text-2xl text-foreground mb-4 group-hover:text-emerald-200 transition-colors duration-300">
                {t("altair.about.reservation.title")}
              </h3>
              <p className="font-sans text-muted-foreground leading-relaxed mb-6">
                {t("altair.about.reservation.description")}
              </p>
              <div className="flex items-center justify-center gap-3 pt-4 border-t border-border/50">
                <Phone className="w-5 h-5 text-emerald-300/80" />
                <a 
                  href={`tel:${String(t("altair.visit.phone.number")).replace(/\s/g, "")}`}
                  className="font-sans text-foreground hover:text-emerald-200 transition-colors duration-300 font-medium"
                >
                  {t("altair.visit.phone.number")}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
