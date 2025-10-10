import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import TrainingModes from "@/components/TrainingModes";
import Modules from "@/components/Modules";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <TrainingModes />
      <Modules />
      <Footer />
    </div>
  );
};

export default Index;
