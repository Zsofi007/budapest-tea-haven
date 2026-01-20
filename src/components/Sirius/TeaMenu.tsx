import { useI18n } from "@/i18n/context";

const TeaMenu = () => {
  const { t } = useI18n();
  
  const teas = [
    {
      nameKey: "menu.categories.black.name",
      descriptionKey: "menu.categories.black.description",
      itemsKey: "menu.categories.black.items",
      color: "bg-tea-black/30",
    },
    {
      nameKey: "menu.categories.oolong.name",
      descriptionKey: "menu.categories.oolong.description",
      itemsKey: "menu.categories.oolong.items",
      color: "bg-amber-900/25",
    },
    {
      nameKey: "menu.categories.green.name",
      descriptionKey: "menu.categories.green.description",
      itemsKey: "menu.categories.green.items",
      color: "bg-orange-900/20",
    },
    {
      nameKey: "menu.categories.white.name",
      descriptionKey: "menu.categories.white.description",
      itemsKey: "menu.categories.white.items",
      color: "bg-tea-wood/30",
    },
    {
      nameKey: "menu.categories.puerh.name",
      descriptionKey: "menu.categories.puerh.description",
      itemsKey: "menu.categories.puerh.items",
      color: "bg-tea-black/40",
    },
    {
      nameKey: "menu.categories.fruit.name",
      descriptionKey: "menu.categories.fruit.description",
      itemsKey: "menu.categories.fruit.items",
      color: "bg-amber-900/25",
    },
    {
      nameKey: "menu.categories.herbal.name",
      descriptionKey: "menu.categories.herbal.description",
      itemsKey: "menu.categories.herbal.items",
      color: "bg-orange-900/20",
    },
    {
      nameKey: "menu.categories.rooibos.name",
      descriptionKey: "menu.categories.rooibos.description",
      itemsKey: "menu.categories.rooibos.items",
      color: "bg-tea-wood/30",
    },
  ];

  return (
    <section id="menu" className="py-24 px-6 bg-secondary/20 relative">
      {/* Bright brown/orange glow background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-900/12 to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(251,146,60,0.1)_0%,transparent_50%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(217,119,6,0.08)_0%,transparent_50%)] pointer-events-none" />
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block text-orange-300 font-sans text-sm tracking-[0.2em] uppercase mb-4 font-medium">
            {t("menu.sectionLabel")}
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6">
            {t("menu.title")}
          </h2>
          <p className="font-sans text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            {t("menu.subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teas.map((category, index) => (
            <div
              key={index}
              className={`${category.color} p-8 rounded-2xl elevation-2 hover:elevation-4 hover:border-orange-500/50 border border-border/50 transition-all duration-300 group cursor-pointer relative overflow-hidden`}
              style={{ 
                animationDelay: `${index * 0.05}s`,
                animation: 'fade-in 0.6s ease-out forwards',
                background: category.color.includes('brown') || category.color.includes('orange') || category.color.includes('wood') || category.color.includes('black') || category.color.includes('blue')
                  ? `linear-gradient(135deg, hsl(25, 35%, 18%) 0%, hsl(25, 38%, 20%) 100%)`
                  : undefined
              }}
            >
              {/* Bright orange/brown hover glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 via-orange-500/0 to-orange-500/0 group-hover:from-orange-500/15 group-hover:via-orange-400/8 group-hover:to-transparent transition-all duration-500 rounded-2xl" />
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/0 via-amber-500/0 to-amber-500/0 group-hover:from-amber-500/10 group-hover:via-amber-400/6 group-hover:to-transparent transition-all duration-500 rounded-2xl" />
              
              <div className="relative z-10">
                <h3 className="font-serif text-2xl text-foreground mb-2 group-hover:text-orange-200 transition-colors duration-300">
                  {t(category.nameKey)}
                </h3>
                <p className="font-sans text-sm text-muted-foreground mb-6">
                  {t(category.descriptionKey)}
                </p>
                <ul className="space-y-2">
                  {(t(category.itemsKey) as string[]).map((item, idx) => (
                    <li
                      key={idx}
                      className="font-sans text-foreground/80 flex items-center gap-2 group-hover:text-foreground transition-colors duration-300"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-300 group-hover:scale-125 transition-transform duration-300" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="font-sans text-muted-foreground italic">
            {t("menu.footer")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default TeaMenu;
