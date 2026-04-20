import { Card } from "./ui/card";

interface LearnerCardProps {
  name: string;
  image: string;
}

export const LearnerCard = ({ name, image }: LearnerCardProps) => {
  return (
    <Card className="relative w-40 md:w-48 flex-shrink-0 overflow-hidden rounded-2xl border border-border bg-white shadow-card hover:shadow-glow transition-all duration-300">
      <div className="flex flex-col h-full">
        {/* Learner Image */}
        <div className="relative aspect-[4/5] overflow-hidden bg-[#e8f5e9]">
          <img 
            src={image} 
            alt={`${name} - AI Learner`} 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
            loading="lazy"
          />
        </div>
      </div>
    </Card>
  );
};
