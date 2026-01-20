import { Instagram, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 px-6 bg-tea-brown text-tea-cream">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="font-serif text-2xl mb-2">Sirius Teaház</h3>
            <p className="font-sans text-tea-cream/70 text-sm">
              A tea varázslatos világa Budapest szívében
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-tea-cream/10 flex items-center justify-center hover:bg-tea-cream/20 transition-colors duration-300"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-tea-cream/10 flex items-center justify-center hover:bg-tea-cream/20 transition-colors duration-300"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="border-t border-tea-cream/20 mt-8 pt-8 text-center">
          <p className="font-sans text-tea-cream/50 text-sm">
            © {new Date().getFullYear()} Sirius Teaház. Minden jog fenntartva.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
