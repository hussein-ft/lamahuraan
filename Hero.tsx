import { ArrowDown, Quote } from "lucide-react";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden gradient-hero">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] gradient-glow opacity-50" />
      </div>
      
      {/* Floating quotes decoration */}
      <div className="absolute top-1/4 left-[15%] opacity-10">
        <Quote className="w-24 h-24 text-primary rotate-12" />
      </div>
      <div className="absolute bottom-1/4 right-[15%] opacity-10">
        <Quote className="w-16 h-16 text-accent -rotate-12" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary animate-fade-up">
            <Sparkles className="w-4 h-4" />
            Discover Iconic CallSigns
          </div>
          
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-foreground leading-tight animate-fade-up" style={{ animationDelay: '0.1s' }}>
            Words That
            <span className="block text-gradient">Inspire & Transform</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Explore our curated collection of motivational call signs, wisdom quotes, and inspirational messages. Each one tells a story, each one can change your day.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <Button variant="hero" size="xl" asChild>
              <a href="#collection">
                Explore Collection
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#categories">
                Browse Categories
              </a>
            </Button>
          </div>
          
          <div className="pt-12 animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <a href="#collection" className="inline-flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group">
              <span className="text-sm">Scroll to explore</span>
              <ArrowDown className="w-5 h-5 animate-bounce" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

const Sparkles = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/>
    <path d="M5 3v4"/>
    <path d="M19 17v4"/>
    <path d="M3 5h4"/>
    <path d="M17 19h4"/>
  </svg>
);
