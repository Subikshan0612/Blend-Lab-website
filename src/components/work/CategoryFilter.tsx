import { cn } from "@/lib/utils";

interface CategoryFilterProps {
  categories: readonly string[];
  active: string;
  onChange: (category: string) => void;
}

export function CategoryFilter({ categories, active, onChange }: CategoryFilterProps) {
  return (
    <div role="tablist" aria-label="Filter projects" className="flex flex-wrap gap-2">
      {categories.map((category) => {
        const selected = category === active;
        return (
          <button
            key={category}
            type="button"
            role="tab"
            aria-selected={selected}
            onClick={() => onChange(category)}
            className={cn(
              "h-10 border px-4 font-mono text-[0.7rem] uppercase tracking-[0.18em] transition-colors duration-300",
              selected
                ? "border-cyan bg-cyan/10 text-cyan"
                : "border-border text-muted-foreground hover:border-border-strong hover:text-foreground",
            )}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}
