import { Facebook, MapPin, Phone, Clock } from "lucide-react";
import { useI18n } from "@/i18n/context";

const Footer = () => {
  const { t } = useI18n();
  
  return (
    <footer className="py-12 px-6 bg-tea-dark text-tea-cream border-t border-orange-600/30 relative" style={{ background: 'hsl(25, 40%, 8%)' }}>
      {/* Bright orange/brown glow at top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/60 to-transparent" />
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-serif text-2xl mb-4">{t("footer.name")}</h3>
            <p className="font-sans text-tea-cream/70 text-sm leading-relaxed">
              {t("footer.description")}
            </p>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-4">{t("footer.contact")}</h4>
            <div className="space-y-3 font-sans text-tea-cream/70 text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>{t("visit.address.line1")}, {t("visit.address.line2")}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <a href="tel:+3612661708" className="hover:text-tea-cream transition-colors">
                  {t("visit.phone.number")}
                </a>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>{t("visit.hours.text")}</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-4">{t("footer.follow")}</h4>
            <div className="flex items-center gap-4">
              <a
                href="https://www.facebook.com/siriusteahaz"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-orange-800/40 flex items-center justify-center hover:bg-orange-500/35 hover:scale-110 transition-all duration-300 elevation-1 hover:elevation-2 hover:shadow-[0_0_25px_rgba(251,146,60,0.6),0_0_15px_rgba(217,119,6,0.4)]"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
            <div className="mt-4 space-y-2 font-sans text-tea-cream/60 text-xs">
              <p>
                <a href="/altair" className="hover:text-tea-cream transition-colors">
                  Altair Teaház
                </a>
              </p>
              <p>
                <a href="https://sirius-se.hu/" target="_blank" rel="noopener noreferrer" className="hover:text-tea-cream transition-colors">
                  Sirius Repülő Klub
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-tea-cream/20 pt-8 text-center">
          <p className="font-sans text-tea-cream/50 text-sm">
            {t("footer.copyright", { year: new Date().getFullYear().toString() })}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
