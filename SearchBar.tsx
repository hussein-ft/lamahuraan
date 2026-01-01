import { Search } from "lucide-react";
import { Input } from "./ui/input";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

const SearchBar = ({ value, onChange }: SearchBarProps) => {
  return (
    <div className="relative max-w-md mx-auto">
      <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
      <Input
        type="text"
        placeholder="Search for inspiration..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="pl-12 h-12 bg-card border-border shadow-soft focus:shadow-card transition-shadow text-base"
      />
    </div>
  );
};

export default SearchBar;
