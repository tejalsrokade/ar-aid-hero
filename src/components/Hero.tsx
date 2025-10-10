import { Heart } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center gradient-bg pt-20">
      <div className="container mx-auto px-6 text-center fade-up">
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
            <Heart className="w-10 h-10 text-white" />
          </div>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
          AR-Based First Aid &<br />Emergency Training System
        </h1>
        <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
          Empowering everyone to save lives through knowledge and innovation. Our AR-Based First Aid & 
          Emergency Training System brings immersive AR learning so anyone can master vital first-aid 
          skills safely and confidently.
        </p>
      </div>
    </section>
  );
};

export default Hero;
