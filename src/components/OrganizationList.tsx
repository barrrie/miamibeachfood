import { useState, useMemo } from "react";
import { OrganizationCard } from "./OrganizationCard";
import { organizations } from "@/data/organizations";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

interface OrganizationListProps {
  filter: string[];
  onBack: () => void;
}

export function OrganizationList({ filter, onBack }: OrganizationListProps) {
  const filteredOrganizations = useMemo(() => {
    if (!filter.length) return organizations;
    
    return organizations.filter(org => 
      filter.some(f => org.categories.includes(f as any))
    );
  }, [filter]);

  const filterLabel = useMemo(() => {
    if (filter.includes("time")) return "volunteer opportunities";
    if (filter.includes("money")) return "donation opportunities";
    if (filter.includes("food")) return "food drop-off locations";
    return "opportunities";
  }, [filter]);

  return (
    <section className="py-16 px-6">
      <div className="mx-auto max-w-7xl">
        <button
          onClick={onBack}
          className="mb-10 text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-2 font-medium"
        >
          <ArrowLeft className="h-4 w-4" />
          Start Over
        </button>

        <div className="mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-display text-foreground mb-4">
            Organizations Ready for Your Help
          </h2>
          <p className="text-muted-foreground text-lg">
            Found <span className="font-semibold text-foreground">{filteredOrganizations.length}</span> {filterLabel} in Miami Beach
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredOrganizations.map(org => (
            <OrganizationCard key={org.id} organization={org} />
          ))}
        </div>

        {filteredOrganizations.length === 0 && (
          <div className="text-center py-16">
            <p className="text-muted-foreground text-lg">
              No organizations found matching your criteria. Try selecting a different option.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
