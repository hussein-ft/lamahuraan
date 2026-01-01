import { categories, getCategoryIcon, type Category } from "@/data/callsigns";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

interface CategoryFilterProps {
  selectedCategory: Category | null;
  onCategoryChange: (category: Category | null) => void;
}

const CategoryFilter = ({ selectedCategory, onCategoryChange }: CategoryFilterProps) => {
  const categoryColors: Record<Category, string> = {
    Motivation: 'hover:border-motivation hover:bg-motivation/10 data-[selected=true]:border-motivation data-[selected=true]:bg-motivation/10 data-[selected=true]:text-motivation',
    Wisdom: 'hover:border-wisdom hover:bg-wisdom/10 data-[selected=true]:border-wisdom data-[selected=true]:bg-wisdom/10 data-[selected=true]:text-wisdom',
    Religious: 'hover:border-religious hover:bg-religious/10 data-[selected=true]:border-religious data-[selected=true]:bg-religious/10 data-[selected=true]:text-religious',
    Inspiration: 'hover:border-inspiration hover:bg-inspiration/10 data-[selected=true]:border-inspiration data-[selected=true]:bg-inspiration/10 data-[selected=true]:text-inspiration',
    Quote: 'hover:border-quote hover:bg-quote/10 data-[selected=true]:border-quote data-[selected=true]:bg-quote/10 data-[selected=true]:text-quote',
  };

  return (
    <div id="categories" className="flex flex-wrap items-center justify-center gap-3">
      <Button
        variant="category"
        size="sm"
        onClick={() => onCategoryChange(null)}
        data-selected={selectedCategory === null}
        className={cn(
          "transition-all duration-300",
          selectedCategory === null && "border-primary bg-primary/10 text-primary"
        )}
      >
        All
      </Button>
      {categories.map((category) => (
        <Button
          key={category}
          variant="category"
          size="sm"
          onClick={() => onCategoryChange(category)}
          data-selected={selectedCategory === category}
          className={cn(
            "transition-all duration-300",
            categoryColors[category]
          )}
        >
          <span>{getCategoryIcon(category)}</span>
          {category}
        </Button>
      ))}
    </div>
  );
};

export default CategoryFilter;
