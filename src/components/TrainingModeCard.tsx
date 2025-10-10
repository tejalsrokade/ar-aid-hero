import { LucideIcon } from "lucide-react";

interface TrainingModeCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const TrainingModeCard = ({ icon: Icon, title, description }: TrainingModeCardProps) => {
  return (
    <div className="bg-card rounded-[20px] p-8 shadow-lg hover-scale cursor-pointer border border-border">
      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-6">
        <Icon className="w-8 h-8 text-white" />
      </div>
      <h3 className="text-2xl font-semibold text-foreground mb-3">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
};

export default TrainingModeCard;
