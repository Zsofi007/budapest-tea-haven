import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import TeaMenu from "@/components/TeaMenu";
import Visit from "@/components/Visit";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Navigation />
      <Hero />
      <About />
      <TeaMenu />
      <Visit />
      <Footer />
    </div>
  );
};

export default Index;
