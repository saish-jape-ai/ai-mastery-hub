import { MoreHorizontal, ThumbsUp, MessageSquare, Repeat2, Send, Globe2, Plus } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";

interface LinkedInPostCardProps {
  name: string;
  avatar: string;
  headline: string;
  timestamp: string;
  connectionLevel: string;
  content: string;
  hashtags: string[];
  image?: string;
  likes: number;
  comments: number;
}

export const LinkedInPostCard = ({
  name,
  avatar,
  headline,
  timestamp,
  connectionLevel,
  content,
  hashtags,
  image,
  likes,
  comments
}: LinkedInPostCardProps) => {
  return (
    <Card className="flex flex-col bg-white border border-border/60 shadow-sm overflow-hidden text-left h-full max-w-full sm:max-w-[340px] mx-auto">
      {/* Header */}
      <div className="p-2.5 pb-0 flex items-start gap-2 relative">
        <img src={avatar} alt={name} className="h-10 w-10 rounded-full object-cover shrink-0" />
        <div className="flex-1 min-w-0 pr-10 sm:pr-14">
          <div className="flex flex-wrap items-baseline gap-x-1">
            <h4 className="font-bold text-[13px] text-[#191919] truncate max-w-[120px] sm:max-w-none">{name}</h4>
            <span className="text-[10px] text-muted-foreground shrink-0">• {connectionLevel}</span>
          </div>
          <p className="text-[10px] sm:text-[11px] text-muted-foreground leading-tight line-clamp-1">{headline}</p>
          <div className="flex items-center gap-1 text-[10px] text-muted-foreground mt-0.5">
            <span>{timestamp}</span>
            <span>•</span>
            <Globe2 className="h-2.5 w-2.5" />
          </div>
        </div>
        <div className="absolute top-2.5 right-2 flex items-center gap-1">
          <Button variant="ghost" size="sm" className="h-7 text-[#0a66c2] hover:bg-[#ebf4fe] flex items-center gap-0.5 font-bold px-1.5 text-[10px] sm:text-[11px]">
            <Plus className="h-3 w-3" /> Follow
          </Button>
        </div>
      </div>

      {/* Content Area - Flex Grow to push footer down */}
      <div className="flex-1 flex flex-col">
        <div className="px-2.5 py-1.5 flex-1">
          <p className="text-[12px] text-[#191919] whitespace-pre-wrap leading-normal line-clamp-[6]">
            {content}
          </p>
          <div className="mt-1 flex flex-wrap gap-1">
            {hashtags.slice(0, 3).map((tag) => (
              <span key={tag} className="text-[12px] text-[#0a66c2] font-semibold hover:underline cursor-pointer">
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Media */}
        {image && (
          <div className="mt-auto border-y border-border/40">
            <img src={image} alt="Post content" className="w-full h-auto object-cover max-h-[300px]" />
          </div>
        )}
      </div>

      {/* Reaction Stats & Action Bar always at bottom */}
      <div className="mt-auto">
        <div className="px-3 py-1.5 flex items-center justify-between border-b border-border/40 mx-3">
          <div className="flex items-center gap-1">
            <div className="flex -space-x-1">
              <div className="h-3.5 w-3.5 rounded-full bg-[#0a66c2] flex items-center justify-center text-[7px] text-white border border-white">👍</div>
              <div className="h-3.5 w-3.5 rounded-full bg-[#df704c] flex items-center justify-center text-[7px] text-white border border-white">❤️</div>
            </div>
            <span className="text-[10px] text-muted-foreground">{likes}</span>
          </div>
          <div className="text-[10px] text-muted-foreground hover:text-[#0a66c2] hover:underline cursor-pointer">
            {comments} comments
          </div>
        </div>

        {/* Action Bar */}
        <div className="px-1 py-0.5 flex items-center justify-between border-t border-border/20">
          {[
            { icon: ThumbsUp, label: "Like" },
            { icon: MessageSquare, label: "Comment" },
            { icon: Repeat2, label: "Repost" },
            { icon: Send, label: "Send" }
          ].map((action) => (
            <Button 
              key={action.label} 
              variant="ghost" 
              className="flex-1 flex items-center justify-center gap-1 h-8 text-muted-foreground font-semibold text-[10px] hover:bg-black/2"
            >
              <action.icon className="h-3.5 w-3.5" />
              <span>{action.label}</span>
            </Button>
          ))}
        </div>
      </div>
    </Card>
  );
};
