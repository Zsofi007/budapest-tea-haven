import Navigation from "@/components/Navigation";
import Hero from "@/components/Sirius/Hero";
import About from "@/components/Sirius/About";
import AboutTea from "@/components/Sirius/AboutTea";
import TeaMenu from "@/components/Sirius/TeaMenu";
import Visit from "@/components/Sirius/Visit";
import Footer from "@/components/Sirius/Footer";
import OtherTeahouse from "@/components/Sirius/OtherTeahouse";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Navigation />
      <Hero />
      <About />
      <AboutTea />
      <TeaMenu />
      <Visit />
      <OtherTeahouse otherTeahousePath="/altair" otherTeahouseName="Altair Teaház" />
      <Footer />
    </div>
  );
};

export default Index;
