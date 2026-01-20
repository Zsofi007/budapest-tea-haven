import { Leaf, Heart, Clock } from "lucide-react";

const features = [
  {
    icon: Leaf,
    title: "Prémium teák",
    description: "Világszerte válogatott, kiváló minőségű teák széles választéka.",
  },
  {
    icon: Heart,
    title: "Meghitt hangulat",
    description: "Otthonos, nyugodt környezet a rohanó város szívében.",
  },
  {
    icon: Clock,
    title: "Több mint 15 éve",
    description: "Hűséges vendégkörünk évek óta visszajáró törzsvendégekből áll.",
  },
];

const About = () => {
  return (
    <section id="about" className="py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block text-primary font-sans text-sm tracking-[0.2em] uppercase mb-4">
            Rólunk
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6">
            A tea szerelmeseinek
          </h2>
          <p className="font-sans text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            A Sirius Teaház Budapest szívében található, ahol a hagyományos tea élményt 
            ötvözzük a modern kényelem és a barátságos kiszolgálással.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card p-8 rounded-2xl border border-border hover:shadow-lg hover:border-primary/20 transition-all duration-300 text-center group"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-secondary flex items-center justify-center group-hover:bg-primary/10 transition-colors duration-300">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-serif text-2xl text-foreground mb-4">
                {feature.title}
              </h3>
              <p className="font-sans text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
