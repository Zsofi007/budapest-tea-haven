import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useI18n } from "@/i18n/context";
import { useLocation, Link } from "react-router-dom";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useI18n();
  const location = useLocation();
  const isAltair = location.pathname === "/altair";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#about", key: "nav.about" },
    { href: "#tea", key: "nav.tea" },
    { href: "#menu", key: "nav.menu" },
    { href: "#visit", key: "nav.visit" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (href === "#") {
      // Scroll to top
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
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
    }
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? (isAltair ? "glass-altair elevation-2 py-4" : "glass elevation-2 py-4")
          : "bg-background/40 backdrop-blur-sm border-b border-border/30 py-6"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <Link 
          to={isAltair ? "/altair" : "/"}
          onClick={(e) => {
            if ((isAltair && location.pathname === "/altair") || (!isAltair && location.pathname === "/")) {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
          className="font-serif text-2xl text-foreground group relative cursor-pointer"
        >
          <span className="relative z-10">{isAltair ? "Altair" : "Sirius"}</span>
          <span className={isAltair ? "text-emerald-300 relative z-10" : "text-orange-300 relative z-10"}> Teaház</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="font-sans text-muted-foreground hover:text-foreground transition-all duration-300 relative group cursor-pointer"
            >
              {t(link.key)}
              <span className={`absolute bottom-0 left-0 w-0 h-0.5 ${isAltair ? "bg-emerald-300" : "bg-orange-300"} transition-all duration-300 group-hover:w-full`}></span>
            </a>
          ))}
          {/* Language toggle */}
          <div className="flex items-center gap-2 ml-4 pl-4 border-l border-border">
            <button
              onClick={() => setLanguage("hu")}
              className={`font-sans text-sm transition-colors duration-300 ${
                language === "hu" ? (isAltair ? "text-emerald-300 font-medium" : "text-orange-300 font-medium") : "text-muted-foreground hover:text-foreground"
              }`}
              aria-label="Magyar nyelv"
            >
              hu
            </button>
            <span className="text-muted-foreground">|</span>
            <button
              onClick={() => setLanguage("en")}
              className={`font-sans text-sm transition-colors duration-300 ${
                language === "en" ? (isAltair ? "text-emerald-300 font-medium" : "text-orange-300 font-medium") : "text-muted-foreground hover:text-foreground"
              }`}
              aria-label="English language"
            >
              en
            </button>
          </div>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className={`md:hidden absolute top-full left-0 right-0 ${isAltair ? "glass-altair" : "glass"} elevation-3 border-t border-border py-4`}>
          <div className="max-w-6xl mx-auto px-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="font-sans text-muted-foreground hover:text-foreground transition-colors duration-300 py-2 cursor-pointer"
              >
                {t(link.key)}
              </a>
            ))}
            {/* Mobile language toggle */}
            <div className="flex items-center gap-2 pt-2 border-t border-border">
              <button
                onClick={() => setLanguage("hu")}
                className={`font-sans text-sm transition-colors duration-300 ${
                  language === "hu" ? (isAltair ? "text-emerald-300 font-medium" : "text-orange-300 font-medium") : "text-muted-foreground hover:text-foreground"
                }`}
              >
                hu
              </button>
              <span className="text-muted-foreground">|</span>
              <button
                onClick={() => setLanguage("en")}
                className={`font-sans text-sm transition-colors duration-300 ${
                  language === "en" ? (isAltair ? "text-emerald-300 font-medium" : "text-orange-300 font-medium") : "text-muted-foreground hover:text-foreground"
                }`}
              >
                en
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
