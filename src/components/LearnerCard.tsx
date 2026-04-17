import { Card } from "./ui/card";

interface LearnerCardProps {
  name: string;
  image: string;
  companyLogo: React.ReactNode;
}

export const LearnerCard = ({ name, image, companyLogo }: LearnerCardProps) => {
  return (
    <Card className="relative w-40 md:w-48 flex-shrink-0 overflow-hidden rounded-2xl border border-border bg-white shadow-card hover:shadow-glow transition-all duration-300">
      <div className="flex flex-col h-full">
        {/* Company Logo Area */}
        <div className="h-10 flex items-center justify-center p-2 bg-white/80 backdrop-blur-sm z-10 border-b border-border/50">
          <div className="scale-90 font-bold text-xs flex items-center gap-1">
            {companyLogo}
          </div>
        </div>
        
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
