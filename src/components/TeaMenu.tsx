const teas = [
  {
    name: "Zöld teák",
    description: "Japán és kínai hagyományok legjava",
    items: ["Sencha", "Gyokuro", "Matcha", "Lung Ching"],
    color: "bg-tea-sage/20",
  },
  {
    name: "Fekete teák",
    description: "Erőteljes, klasszikus ízek",
    items: ["Earl Grey", "Darjeeling", "Assam", "Ceylon"],
    color: "bg-tea-brown/10",
  },
  {
    name: "Fehér teák",
    description: "Finom, lágy aromák",
    items: ["Bai Mu Dan", "Silver Needle", "Jasmine White"],
    color: "bg-tea-cream",
  },
  {
    name: "Gyümölcsös teák",
    description: "Frissítő, gyümölcsös variációk",
    items: ["Erdei gyümölcs", "Citrus mix", "Trópusi álom"],
    color: "bg-tea-terracotta/15",
  },
];

const TeaMenu = () => {
  return (
    <section id="menu" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block text-primary font-sans text-sm tracking-[0.2em] uppercase mb-4">
            Teakínálat
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6">
            Válogatott teáink
          </h2>
          <p className="font-sans text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            Több mint 100 féle teából válogathatsz, a klasszikusoktól az egzotikus ízekig.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teas.map((category, index) => (
            <div
              key={index}
              className={`${category.color} p-8 rounded-2xl hover:shadow-lg transition-all duration-300 group`}
            >
              <h3 className="font-serif text-2xl text-foreground mb-2">
                {category.name}
              </h3>
              <p className="font-sans text-sm text-muted-foreground mb-6">
                {category.description}
              </p>
              <ul className="space-y-2">
                {category.items.map((item, idx) => (
                  <li
                    key={idx}
                    className="font-sans text-foreground/80 flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="font-sans text-muted-foreground italic">
            ...és még sok más! Kérjétek teljes teakínálatunkat a helyszínen.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TeaMenu;
