import { Quote, Sparkles } from "lucide-react";
import { callSigns } from "@/data/callsigns";
import { useEffect, useState } from "react";

const FeaturedQuote = () => {
  const [featured, setFeatured] = useState(callSigns[0]);
  
  useEffect(() => {
    // Pick a random featured quote
    const randomIndex = Math.floor(Math.random() * callSigns.length);
    setFeatured(callSigns[randomIndex]);
  }, []);

  return (
    <section id="featured" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 gradient-glow opacity-30" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary mb-8">
            <Sparkles className="w-4 h-4" />
            Featured Quote
          </div>
          
          <div className="relative">
            <Quote className="absolute -top-6 -left-6 w-16 h-16 text-primary/20 rotate-180" />
            <Quote className="absolute -bottom-6 -right-6 w-16 h-16 text-primary/20" />
            
            <blockquote className="font-display text-3xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight px-8 py-12">
              {featured.text}
              {featured.emoji && <span className="ml-3">{featured.emoji}</span>}
            </blockquote>
          </div>
          
          <div className="mt-8 inline-flex items-center gap-2 text-muted-foreground">
            <span className="w-8 h-px bg-border" />
            <span className="text-sm font-medium uppercase tracking-wider">{featured.category}</span>
            <span className="w-8 h-px bg-border" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedQuote;
