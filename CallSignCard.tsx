import { Heart, Eye } from "lucide-react";
import { Button } from "./ui/button";
import { type CallSign, type Category } from "@/data/callsigns";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import { useFavoritesContext } from "@/contexts/FavoritesContext";
import { useAuth } from "@/hooks/useAuth";
import { useNavigate } from "react-router-dom";

interface CallSignCardProps {
  callSign: CallSign;
  index: number;
}

const categoryBadgeColors: Record<Category, string> = {
  Motivation: 'bg-motivation/10 text-motivation border-motivation/20',
  Wisdom: 'bg-wisdom/10 text-wisdom border-wisdom/20',
  Religious: 'bg-religious/10 text-religious border-religious/20',
  Inspiration: 'bg-inspiration/10 text-inspiration border-inspiration/20',
  Quote: 'bg-quote/10 text-quote border-quote/20',
};

const categoryAccentColors: Record<Category, string> = {
  Motivation: 'group-hover:border-motivation/40',
  Wisdom: 'group-hover:border-wisdom/40',
  Religious: 'group-hover:border-religious/40',
  Inspiration: 'group-hover:border-inspiration/40',
  Quote: 'group-hover:border-quote/40',
};

const CallSignCard = ({ callSign, index }: CallSignCardProps) => {
  const { user } = useAuth();
  const { toggleFavorite, isFavorite } = useFavoritesContext();
  const navigate = useNavigate();
  const callSignIdStr = String(callSign.id);
  const favorite = isFavorite(callSignIdStr);

  const handlePreview = () => {
    toast.info(`Preview: "${callSign.text}"`, {
      description: `Category: ${callSign.category}`,
      duration: 3000,
    });
  };

  const handleFavorite = async () => {
    if (!user) {
      toast.info('Sign in to save favorites', {
        action: {
          label: 'Sign In',
          onClick: () => navigate('/auth'),
        },
      });
      return;
    }
    await toggleFavorite(callSignIdStr);
  };

  return (
    <article
      className={cn(
        "group relative gradient-card rounded-xl border border-border p-6 shadow-soft hover:shadow-card transition-all duration-300 animate-fade-up",
        categoryAccentColors[callSign.category]
      )}
      style={{ animationDelay: `${index * 0.05}s` }}
    >
      {/* Category badge */}
      <div className={cn(
        "inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border mb-4",
        categoryBadgeColors[callSign.category]
      )}>
        {callSign.category}
      </div>
      
      {/* Quote text */}
      <blockquote className="font-display text-lg md:text-xl text-foreground leading-relaxed mb-6 min-h-[4.5rem]">
        "{callSign.text}"
        {callSign.emoji && <span className="ml-2">{callSign.emoji}</span>}
      </blockquote>
      
      {/* Actions */}
      <div className="flex items-center gap-3">
        <Button
          variant="preview"
          size="sm"
          onClick={handlePreview}
          className="flex-1"
        >
          <Eye className="w-4 h-4" />
          Preview
        </Button>
        <Button
          variant={favorite ? "default" : "subscribe"}
          size="sm"
          onClick={handleFavorite}
          className={cn("flex-1", favorite && "gradient-warm text-primary-foreground")}
        >
          <Heart className={cn("w-4 h-4", favorite && "fill-current")} />
          {favorite ? 'Subscribed' : 'Subscribe'}
        </Button>
      </div>
      
      {/* Decorative corner */}
      <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden rounded-tr-xl">
        <div className="absolute top-0 right-0 w-8 h-8 bg-gradient-to-bl from-primary/10 to-transparent transform rotate-45 translate-x-4 -translate-y-4" />
      </div>
    </article>
  );
};

export default CallSignCard;
