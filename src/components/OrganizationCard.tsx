import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Instagram, Clock, DollarSign, ShoppingBag } from "lucide-react";
import { Organization } from "@/data/organizations";

interface OrganizationCardProps {
  organization: Organization;
}

export function OrganizationCard({ organization }: OrganizationCardProps) {
  return (
    <div className="card-martie p-6">
      <div className="mb-5">
        <h3 className="text-2xl font-display text-foreground mb-3">
          {organization.name}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed">
          {organization.summary}
        </p>
      </div>

      <div className="flex flex-wrap gap-2 mb-5">
        {organization.categories.includes("time") && (
          <span className="inline-flex items-center gap-1 rounded-full bg-primary/20 px-3 py-1.5 text-xs font-semibold text-primary border border-primary/30">
            <Clock className="h-3 w-3" />
            Volunteers Needed
          </span>
        )}
        {organization.categories.includes("money") && (
          <span className="inline-flex items-center gap-1 rounded-full bg-secondary/20 px-3 py-1.5 text-xs font-semibold text-secondary border border-secondary/30">
            <DollarSign className="h-3 w-3" />
            Accepting Donations
          </span>
        )}
        {organization.categories.includes("food") && (
          <span className="inline-flex items-center gap-1 rounded-full bg-accent/20 px-3 py-1.5 text-xs font-semibold text-accent-foreground border border-accent/30">
            <ShoppingBag className="h-3 w-3" />
            Food Drop-off
          </span>
        )}
      </div>

      <div className="flex flex-col gap-3">
        {organization.volunteerUrl && (
          <a
            href={organization.volunteerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-martie bg-primary text-white w-full inline-flex items-center justify-center gap-2 hover:bg-primary/90"
          >
            <Clock className="h-4 w-4" />
            Volunteer Here
            <ExternalLink className="ml-auto h-4 w-4" />
          </a>
        )}

        {organization.moneyDonationUrl && (
          <a
            href={organization.moneyDonationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-martie bg-secondary text-white w-full inline-flex items-center justify-center gap-2 hover:bg-secondary/90"
          >
            <DollarSign className="h-4 w-4" />
            Donate Money
            <ExternalLink className="ml-auto h-4 w-4" />
          </a>
        )}

        {organization.foodDonationInfo && (
          <a
            href={organization.foodDonationInfo.startsWith('http') ? organization.foodDonationInfo : organization.url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-martie bg-accent text-accent-foreground w-full inline-flex items-center justify-center gap-2 hover:bg-accent/90"
          >
            <ShoppingBag className="h-4 w-4" />
            Donate Food
            <ExternalLink className="ml-auto h-4 w-4" />
          </a>
        )}

        <div className="flex gap-2 mt-2">
          {organization.social && (
            <a
              href={organization.social}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center py-2 px-4 rounded-lg border-2 border-border hover:bg-muted transition-colors inline-flex items-center justify-center gap-2 text-sm font-medium"
            >
              <Instagram className="h-4 w-4" />
              Follow
            </a>
          )}

          <a
            href={organization.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center py-2 px-4 rounded-lg border-2 border-border hover:bg-muted transition-colors inline-flex items-center justify-center gap-2 text-sm font-medium"
          >
            <ExternalLink className="h-4 w-4" />
            Website
          </a>
        </div>
      </div>
    </div>
  );
}
