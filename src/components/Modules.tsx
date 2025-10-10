import { Heart, Flame, Droplet, Wind, AlertTriangle } from "lucide-react";
import ModuleCard from "./ModuleCard";

const Modules = () => {
  const modules = [
    {
      icon: Heart,
      title: "AED",
      description: "Learn automated external defibrillator operation and cardiac emergency response."
    },
    {
      icon: Flame,
      title: "Burns",
      description: "Master burn assessment, classification, and proper treatment techniques."
    },
    {
      icon: Droplet,
      title: "Bleeding",
      description: "Control bleeding with pressure points, tourniquets, and wound management."
    },
    {
      icon: Wind,
      title: "Choking",
      description: "Perform Heimlich maneuver and airway obstruction relief procedures."
    },
    {
      icon: AlertTriangle,
      title: "Snakebite",
      description: "Identify venomous snakes and administer appropriate first aid treatment."
    }
  ];

  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 fade-in-scroll">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Training Modules
          </h2>
          <p className="text-muted-foreground text-lg">
            Master essential first aid skills with our comprehensive modules
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {modules.map((module, index) => (
            <div key={index} className="fade-in-scroll" style={{ animationDelay: `${index * 0.15}s` }}>
              <ModuleCard {...module} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Modules;
