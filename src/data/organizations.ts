export interface Organization {
  id: string;
  name: string;
  url: string;
  summary: string;
  social?: string;
  newsletter?: string;
  volunteerUrl?: string;
  foodDonationInfo?: string;
  moneyDonationUrl?: string;
  categories: ("time" | "money" | "food")[];
}

export const organizations: Organization[] = [
  {
    id: "urban-oasis",
    name: "Urban Oasis Project",
    url: "https://www.urbanoasisproject.org/",
    summary: "Growing the local food movement in Miami-Dade since 2008. Making Fresh Local Food Accessible & Available to All.",
    social: "https://www.instagram.com/urban_oasis_project",
    newsletter: "https://www.urbanoasisproject.org/contact.html",
    moneyDonationUrl: "https://www.urbanoasisproject.org/farmers-markets.html#donate",
    categories: ["money"],
  },
  {
    id: "buddy-system",
    name: "Buddy System MIA",
    url: "https://www.buddysystemmia.com/",
    summary: "Empowering neighbors to support neighbors, beginning with food access and continuing with viable support for long-term stability.",
    social: "https://www.instagram.com/buddysystemmia/",
    volunteerUrl: "https://www.buddysystemmia.com/volunteer",
    foodDonationInfo: "https://forms.monday.com/forms/aebe80435336ee4695ba7a7694d418b7?r=use1",
    moneyDonationUrl: "https://givebutter.com/2newfridges",
    categories: ["time", "food", "money"],
  },
  {
    id: "food-not-bombs",
    name: "Food Not Bombs Miami",
    url: "https://www.instagram.com/foodnotbombsmiami/",
    summary: "Community-driven initiative providing free meals to those in need.",
    social: "https://www.instagram.com/foodnotbombsmiami/",
    categories: ["time", "food"],
  },
  {
    id: "jcs",
    name: "JCS (Jewish Community Services)",
    url: "https://jcsfl.org",
    summary: "Providing comprehensive social services including food assistance programs.",
    moneyDonationUrl: "https://jcsfl.org/donate/milk-and-honey/",
    categories: ["money"],
  },
  {
    id: "feeding-south-florida",
    name: "Feeding South Florida",
    url: "https://feedingsouthflorida.org/disaster",
    summary: "The largest food bank in South Florida, dedicated to ending hunger in our community.",
    volunteerUrl: "https://feedingsouthflorida.org/volunteer/",
    foodDonationInfo: "Donate Food Items at 2501 SW 32nd Terrace, Pembroke Park, FL 33023. Donation Hours: Mon. - Fri., 8 a.m. - 4 p.m.",
    moneyDonationUrl: "https://feedingsouthflorida.org/give-money/",
    categories: ["time", "food", "money"],
  },
  {
    id: "farm-share",
    name: "Farm Share",
    url: "https://www.farmshare.org/",
    summary: "Florida's leading food bank providing farm-fresh food to families in need.",
    volunteerUrl: "https://www.farmshare.org/how-to-help",
    moneyDonationUrl: "https://farmshare.networkforgood.com/projects/100576-farm-share-feed-the-hungry-fund",
    categories: ["time", "money"],
  },
  {
    id: "united-way-miami",
    name: "United Way Miami",
    url: "https://unitedwaymiami.org/",
    summary: "Building stronger communities by addressing critical needs including food insecurity.",
    categories: ["time", "money"],
  },
];
