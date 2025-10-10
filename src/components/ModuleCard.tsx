import { LucideIcon } from "lucide-react";

interface ModuleCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const ModuleCard = ({ icon: Icon, title, description }: ModuleCardProps) => {
  return (
    <div className="bg-card rounded-[20px] p-6 shadow-lg hover-glow cursor-pointer border border-border">
      <div className="w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center mb-4">
        <Icon className="w-7 h-7 text-accent" />
      </div>
      <h3 className="text-xl font-semibold text-foreground mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm">{description}</p>
    </div>
  );
};

export default ModuleCard;
