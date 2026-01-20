import { MapPin, Clock, Phone } from "lucide-react";
import { useI18n } from "@/i18n/context";

const Visit = () => {
  const { t } = useI18n();
  
  return (
    <section id="visit" className="py-24 px-6 bg-background relative">
      {/* Premium forest green glow background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-900/8 to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(34,197,94,0.06)_0%,transparent_50%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(217,119,6,0.04)_0%,transparent_50%)] pointer-events-none" />
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block text-emerald-300/80 font-sans text-sm tracking-[0.2em] uppercase mb-4 font-medium">
            {t("altair.visit.sectionLabel")}
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6">
            {t("altair.visit.title")}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Map */}
          <div className="aspect-[4/3] bg-secondary rounded-2xl overflow-hidden elevation-2 hover:elevation-4 transition-all duration-300">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2695.5!2d19.0514!3d47.4979!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741dc3b5b5b5b5b%3A0x5b5b5b5b5b5b5b5b!2sBródy%20Sándor%20u.%20-%20Puskin%20u.%2C%201088%20Budapest%2C%20Hungary!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
              className="w-full h-full grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              title="Altair Teaház location - Bródy Sándor u. - Puskin u. corner, Budapest"
            />
          </div>

          {/* Info */}
          <div className="space-y-8">
            <div className="flex items-start gap-4 group">
              <div className="w-12 h-12 rounded-full bg-tea-wood/50 elevation-1 group-hover:elevation-2 group-hover:shadow-[0_0_25px_rgba(34,197,94,0.4),0_0_12px_rgba(217,119,6,0.2)] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-emerald-500/30 group-hover:to-emerald-400/15">
                <MapPin className="w-5 h-5 text-emerald-300/80" />
              </div>
              <div>
                <h3 className="font-serif text-xl text-foreground mb-2">{t("altair.visit.address.label")}</h3>
                <p className="font-sans text-muted-foreground">
                  {t("altair.visit.address.line1")}<br />
                  {t("altair.visit.address.line2")}<br />
                  {t("altair.visit.address.line3")}
                </p>
                <p className="font-sans text-muted-foreground/70 text-sm mt-2">
                  {t("altair.visit.address.note")}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 group">
              <div className="w-12 h-12 rounded-full bg-tea-wood/50 elevation-1 group-hover:elevation-2 group-hover:shadow-[0_0_25px_rgba(34,197,94,0.4),0_0_12px_rgba(217,119,6,0.2)] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-emerald-500/30 group-hover:to-emerald-400/15">
                <Clock className="w-5 h-5 text-emerald-300/80" />
              </div>
              <div>
                <h3 className="font-serif text-xl text-foreground mb-2">{t("altair.visit.hours.label")}</h3>
                <p className="font-sans text-muted-foreground">
                  {t("altair.visit.hours.text")}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 group">
              <div className="w-12 h-12 rounded-full bg-tea-wood/50 elevation-1 group-hover:elevation-2 group-hover:shadow-[0_0_25px_rgba(34,197,94,0.4),0_0_12px_rgba(217,119,6,0.2)] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-emerald-500/30 group-hover:to-emerald-400/15">
                <Phone className="w-5 h-5 text-emerald-300/80" />
              </div>
              <div>
                <h3 className="font-serif text-xl text-foreground mb-2">{t("altair.visit.phone.label")}</h3>
                <p className="font-sans text-muted-foreground">
                  <a href="tel:+36202499872" className="hover:text-emerald-200 transition-colors">
                    {t("altair.visit.phone.number")}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Visit;
