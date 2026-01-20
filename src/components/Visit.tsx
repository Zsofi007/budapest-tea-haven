import { MapPin, Clock, Phone, Mail } from "lucide-react";

const Visit = () => {
  return (
    <section id="visit" className="py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block text-primary font-sans text-sm tracking-[0.2em] uppercase mb-4">
            Látogass el
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6">
            Találkozzunk a teaháznál
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Map placeholder */}
          <div className="aspect-[4/3] bg-secondary rounded-2xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2695.5!2d19.0514!3d47.4979!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDfCsDI5JzUyLjQiTiAxOcKwMDMnMDUuMCJF!5e0!3m2!1sen!2shu!4v1600000000000!5m2!1sen!2shu"
              className="w-full h-full grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
              loading="lazy"
              allowFullScreen
              title="Sirius Teaház location"
            />
          </div>

          {/* Info */}
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-serif text-xl text-foreground mb-2">Cím</h3>
                <p className="font-sans text-muted-foreground">
                  Budapest belváros<br />
                  (Pontos cím hamarosan)
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                <Clock className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-serif text-xl text-foreground mb-2">Nyitvatartás</h3>
                <p className="font-sans text-muted-foreground">
                  Hétfő - Péntek: 10:00 - 20:00<br />
                  Szombat - Vasárnap: 11:00 - 21:00
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-serif text-xl text-foreground mb-2">Telefon</h3>
                <p className="font-sans text-muted-foreground">
                  +36 1 234 5678
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-serif text-xl text-foreground mb-2">Email</h3>
                <p className="font-sans text-muted-foreground">
                  info@siriusteahaz.hu
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
