import { useI18n } from "@/i18n/context";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface OtherTeahouseProps {
  otherTeahousePath: string;
  otherTeahouseName: string;
}

const OtherTeahouse = ({ otherTeahousePath, otherTeahouseName }: OtherTeahouseProps) => {
  const { t } = useI18n();

  return (
    <section className="py-24 px-6 bg-secondary/20 relative">
      {/* Premium forest green glow background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-900/10 to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(34,197,94,0.08)_0%,transparent_50%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(217,119,6,0.05)_0%,transparent_50%)] pointer-events-none" />
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="bg-card p-12 rounded-2xl elevation-2 border border-border/50 text-center">
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-4">
            {t("otherTeahouse.title")}
          </h2>
          <p className="font-sans text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            {t("otherTeahouse.description")}
          </p>
          <Link
            to={otherTeahousePath}
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="inline-flex items-center gap-2 btn-dimensional px-8 py-4 text-primary-foreground font-sans font-semibold rounded-xl relative overflow-hidden group cursor-pointer"
          >
            <span className="relative z-10">
              {otherTeahouseName}
            </span>
            <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
            {/* Ripple effect */}
            <span className="absolute inset-0 bg-white/20 scale-0 group-hover:scale-100 transition-transform duration-500 rounded-xl"></span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default OtherTeahouse;
