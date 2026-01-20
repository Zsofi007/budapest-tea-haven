import Navigation from "@/components/Navigation";
import Hero from "@/components/Altair/Hero";
import About from "@/components/Altair/About";
import AboutTea from "@/components/Altair/AboutTea";
import TeaMenu from "@/components/Altair/TeaMenu";
import Visit from "@/components/Altair/Visit";
import Footer from "@/components/Altair/Footer";
import OtherTeahouse from "@/components/Altair/OtherTeahouse";

const Altair = () => {
  return (
    <div 
      className="min-h-screen font-sans altair-theme"
      style={{ 
        background: 'hsl(150, 35%, 8%)', 
        color: 'hsl(150, 15%, 96%)',
        // Override CSS variables for Altair green theme
        '--background': '150 35% 8%',
        '--foreground': '150 15% 96%',
        '--card': '150 30% 12%',
        '--card-foreground': '150 15% 96%',
        '--popover': '150 30% 12%',
        '--popover-foreground': '150 15% 96%',
        '--primary-foreground': '150 35% 8%',
        '--secondary': '150 25% 16%',
        '--secondary-foreground': '150 15% 92%',
        '--muted': '150 25% 14%',
        '--muted-foreground': '150 15% 72%',
        '--accent-foreground': '150 15% 96%',
        '--destructive-foreground': '150 35% 8%',
        '--border': '150 25% 20%',
        '--input': '150 25% 20%',
        '--shadow-sm': '0 1px 2px rgba(0, 0, 0, 0.5), 0 0 4px rgba(34, 197, 94, 0.08)',
        '--shadow-md': '0 4px 6px rgba(0, 0, 0, 0.6), 0 2px 4px rgba(0, 0, 0, 0.5), 0 0 8px rgba(34, 197, 94, 0.12), 0 0 4px rgba(217, 119, 6, 0.1)',
        '--shadow-lg': '0 10px 15px rgba(0, 0, 0, 0.7), 0 4px 6px rgba(0, 0, 0, 0.6), 0 0 15px rgba(34, 197, 94, 0.15), 0 0 8px rgba(217, 119, 6, 0.12)',
        '--shadow-xl': '0 20px 25px rgba(0, 0, 0, 0.8), 0 10px 10px rgba(0, 0, 0, 0.7), 0 0 25px rgba(34, 197, 94, 0.2), 0 0 12px rgba(217, 119, 6, 0.15)',
        '--shadow-2xl': '0 25px 50px rgba(0, 0, 0, 0.9), 0 0 40px rgba(34, 197, 94, 0.25), 0 0 20px rgba(217, 119, 6, 0.2)',
        '--tea-brown': '150 30% 16%',
        '--tea-cream': '150 20% 88%',
        '--tea-sage': '150 25% 30%',
        '--tea-dark': '150 40% 6%',
        '--tea-wood': '150 30% 14%',
        '--tea-black': '150 35% 10%',
      } as React.CSSProperties}
    >
      <Navigation />
      <Hero />
      <About />
      <AboutTea />
      <TeaMenu />
      <Visit />
      <OtherTeahouse otherTeahousePath="/" otherTeahouseName="Sirius Teaház" />
      <Footer />
    </div>
  );
};

export default Altair;
