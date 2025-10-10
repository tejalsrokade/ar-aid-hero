import { BookOpen, Box, Radio } from "lucide-react";
import TrainingModeCard from "./TrainingModeCard";

const TrainingModes = () => {
  const modes = [
    {
      icon: BookOpen,
      title: "Learn Mode",
      description: "Interactive guides, videos, and visual tutorials covering essential first aid procedures for burns, bleeding, and more."
    },
    {
      icon: Box,
      title: "Dummy Mode",
      description: "Practice with a 3D AR dummy you can rotate and zoom. Learn proper AED pad placement, bandaging techniques, and more."
    },
    {
      icon: Radio,
      title: "Live Mode",
      description: "Real-time AR overlay with visual markers and voice instructions to guide you through emergency procedures step-by-step."
    }
  ];

  return (
    <section id="training" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 fade-in-scroll">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Training Modes
          </h2>
          <p className="text-muted-foreground text-lg">
            Choose your learning path with our three immersive training modes
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {modes.map((mode, index) => (
            <div key={index} className="fade-in-scroll" style={{ animationDelay: `${index * 0.2}s` }}>
              <TrainingModeCard {...mode} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrainingModes;
