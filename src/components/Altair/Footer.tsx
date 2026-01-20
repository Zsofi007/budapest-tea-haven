import { Facebook, MapPin, Phone, Clock } from "lucide-react";
import { useI18n } from "@/i18n/context";

const Footer = () => {
  const { t } = useI18n();
  
  return (
    <footer className="py-12 px-6 bg-tea-dark text-tea-cream border-t border-emerald-600/30 relative" style={{ background: 'hsl(150, 40%, 6%)' }}>
      {/* Premium green/gold glow at top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-serif text-2xl mb-4">{t("altair.footer.name")}</h3>
            <p className="font-sans text-tea-cream/70 text-sm leading-relaxed">
              {t("altair.footer.description")}
            </p>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-4">{t("altair.footer.contact")}</h4>
            <div className="space-y-3 font-sans text-tea-cream/70 text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>{t("altair.visit.address.line1")}, {t("altair.visit.address.line2")}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <a href="tel:+36202499872" className="hover:text-tea-cream transition-colors">
                  {t("altair.visit.phone.number")}
                </a>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>{t("altair.visit.hours.text")}</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-4">{t("altair.footer.follow")}</h4>
            <div className="flex items-center gap-4">
              <a
                href="https://www.facebook.com/siriusteahaz"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-tea-wood/50 flex items-center justify-center hover:bg-emerald-500/30 hover:scale-110 transition-all duration-300 elevation-1 hover:elevation-2 hover:shadow-[0_0_25px_rgba(34,197,94,0.5),0_0_12px_rgba(217,119,6,0.3)]"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
            <div className="mt-4 space-y-2 font-sans text-tea-cream/60 text-xs">
              <p>
                <a href="/" className="hover:text-tea-cream transition-colors">
                  Sirius Teaház
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
            {t("altair.footer.copyright", { year: new Date().getFullYear().toString() })}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
