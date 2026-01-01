import { useState, useMemo, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SearchBar from "@/components/SearchBar";
import CategoryFilter from "@/components/CategoryFilter";
import CallSignCard from "@/components/CallSignCard";
import FeaturedQuote from "@/components/FeaturedQuote";
import Footer from "@/components/Footer";
import { callSigns, type Category } from "@/data/callsigns";
import { Helmet } from "react-helmet";
import { useFavoritesContext } from "@/contexts/FavoritesContext";
import { Button } from "@/components/ui/button";
import { Heart, X } from "lucide-react";

const Index = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const { favorites } = useFavoritesContext();
  
  const showFavoritesOnly = searchParams.get('filter') === 'favorites';

  const clearFavoritesFilter = () => {
    setSearchParams({});
  };

  const filteredCallSigns = useMemo(() => {
    return callSigns.filter((callSign) => {
      const matchesSearch = callSign.text.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = !selectedCategory || callSign.category === selectedCategory;
      const matchesFavorites = !showFavoritesOnly || favorites.includes(String(callSign.id));
      return matchesSearch && matchesCategory && matchesFavorites;
    });
  }, [searchQuery, selectedCategory, showFavoritesOnly, favorites]);

  return (
    <>
      <Helmet>
        <title>Lamahuraan - Motivational CallSigns & Inspiring Quotes Collection</title>
        <meta name="description" content="Discover and explore our curated collection of motivational call signs, wisdom quotes, and inspirational messages. Find words that inspire and transform your day." />
        <meta name="keywords" content="motivation, quotes, wisdom, inspiration, call signs, motivational quotes, inspirational messages" />
        <link rel="canonical" href="https://lamahuraancomm.com" />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Header />
        
        <main>
          <Hero />
          
          {/* Featured Quote Section */}
          <FeaturedQuote />
          
          {/* Collection Section */}
          <section id="collection" className="py-20 bg-secondary/30">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12 space-y-4">
                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
                  {showFavoritesOnly ? 'Your Favorites' : 'Explore The Collection'}
                </h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  {showFavoritesOnly 
                    ? 'Your personal collection of saved call signs'
                    : 'Discover and equip the most iconic CallSigns. Each one tells a story.'}
                </p>
              </div>
              
              {/* Favorites filter indicator */}
              {showFavoritesOnly && (
                <div className="flex justify-center mb-6">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={clearFavoritesFilter}
                    className="gap-2"
                  >
                    <Heart className="w-4 h-4 fill-primary text-primary" />
                    Showing Favorites Only
                    <X className="w-4 h-4" />
                  </Button>
                </div>
              )}
              
              {/* Search and Filter */}
              <div className="space-y-6 mb-12">
                <SearchBar value={searchQuery} onChange={setSearchQuery} />
                <CategoryFilter 
                  selectedCategory={selectedCategory} 
                  onCategoryChange={setSelectedCategory} 
                />
              </div>
              
              {/* Results count */}
              <div className="text-center mb-8">
                <p className="text-sm text-muted-foreground">
                  Showing <span className="font-semibold text-foreground">{filteredCallSigns.length}</span> call signs
                  {selectedCategory && <span> in <span className="font-semibold text-foreground">{selectedCategory}</span></span>}
                  {searchQuery && <span> matching "<span className="font-semibold text-foreground">{searchQuery}</span>"</span>}
                  {showFavoritesOnly && <span> in <span className="font-semibold text-foreground">favorites</span></span>}
                </p>
              </div>
              
              {/* Grid */}
              {filteredCallSigns.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredCallSigns.map((callSign, index) => (
                    <CallSignCard key={callSign.id} callSign={callSign} index={index} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-16">
                  <p className="text-muted-foreground text-lg">
                    {showFavoritesOnly 
                      ? 'No favorites yet. Start saving call signs you love!'
                      : 'No call signs found. Try adjusting your search or filter.'}
                  </p>
                </div>
              )}
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Index;
