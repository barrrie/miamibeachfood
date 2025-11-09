import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Instagram, Clock, DollarSign, ShoppingBag } from "lucide-react";
import { Organization } from "@/data/organizations";

interface OrganizationCardProps {
  organization: Organization;
}

export function OrganizationCard({ organization }: OrganizationCardProps) {
  return (
    <Card className="p-6 shadow-card hover:shadow-card-hover transition-all duration-300">
      <div className="mb-4">
        <h3 className="text-xl font-bold text-foreground mb-2">
          {organization.name}
        </h3>
        <p className="text-muted-foreground text-sm">
          {organization.summary}
        </p>
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        {organization.categories.includes("time") && (
          <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
            <Clock className="h-3 w-3" />
            Volunteers Needed
          </span>
        )}
        {organization.categories.includes("money") && (
          <span className="inline-flex items-center gap-1 rounded-full bg-secondary/10 px-3 py-1 text-xs font-medium text-secondary">
            <DollarSign className="h-3 w-3" />
            Accepting Donations
          </span>
        )}
        {organization.categories.includes("food") && (
          <span className="inline-flex items-center gap-1 rounded-full bg-accent/20 px-3 py-1 text-xs font-medium text-accent-foreground">
            <ShoppingBag className="h-3 w-3" />
            Food Drop-off
          </span>
        )}
      </div>

      <div className="flex flex-col gap-2">
        {organization.volunteerUrl && (
          <Button
            variant="default"
            size="sm"
            asChild
            className="w-full"
          >
            <a href={organization.volunteerUrl} target="_blank" rel="noopener noreferrer">
              <Clock className="mr-2 h-4 w-4" />
              Volunteer Here
              <ExternalLink className="ml-auto h-4 w-4" />
            </a>
          </Button>
        )}

        {organization.moneyDonationUrl && (
          <Button
            variant="secondary"
            size="sm"
            asChild
            className="w-full"
          >
            <a href={organization.moneyDonationUrl} target="_blank" rel="noopener noreferrer">
              <DollarSign className="mr-2 h-4 w-4" />
              Donate Money
              <ExternalLink className="ml-auto h-4 w-4" />
            </a>
          </Button>
        )}

        {organization.foodDonationInfo && (
          <Button
            variant="outline"
            size="sm"
            asChild
            className="w-full"
          >
            <a 
              href={organization.foodDonationInfo.startsWith('http') ? organization.foodDonationInfo : organization.url} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <ShoppingBag className="mr-2 h-4 w-4" />
              Donate Food
              <ExternalLink className="ml-auto h-4 w-4" />
            </a>
          </Button>
        )}

        <div className="flex gap-2 mt-2">
          {organization.social && (
            <Button
              variant="ghost"
              size="sm"
              asChild
              className="flex-1"
            >
              <a href={organization.social} target="_blank" rel="noopener noreferrer">
                <Instagram className="mr-2 h-4 w-4" />
                Follow
              </a>
            </Button>
          )}
          
          <Button
            variant="ghost"
            size="sm"
            asChild
            className="flex-1"
          >
            <a href={organization.url} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" />
              Visit Website
            </a>
          </Button>
        </div>
      </div>
    </Card>
  );
}
