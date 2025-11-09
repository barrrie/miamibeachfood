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
    summary: "Growing the local food movement in Miami-Dade since 2008. Making fresh local food accessible and available to all through farmers markets and community programs. They provide produce boxes from local farms at farmers markets and through online ordering.",
    social: "https://www.instagram.com/urban_oasis_project",
    newsletter: "https://www.urbanoasisproject.org/contact.html",
    moneyDonationUrl: "https://www.urbanoasisproject.org/farmers-markets.html#donate",
    categories: ["money"],
  },
  {
    id: "buddy-system",
    name: "Buddy System MIA",
    url: "https://www.buddysystemmia.com/",
    summary: "Empowering neighbors to support neighbors, beginning with food access and continuing with viable support for long-term stability. They operate community fridges and food distribution programs throughout Miami Beach. Currently fundraising for two new community fridges to expand their reach.",
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
    summary: "Community-driven initiative providing free meals to those in need. Volunteers prepare and distribute vegetarian meals in public spaces throughout Miami. They rely entirely on volunteer support and food donations to serve the community.",
    social: "https://www.instagram.com/foodnotbombsmiami/",
    categories: ["time", "food"],
  },
  {
    id: "jcs",
    name: "JCS (Jewish Community Services)",
    url: "https://jcsfl.org",
    summary: "Providing comprehensive social services including food assistance programs to South Florida residents. Their Milk and Honey Food Pantry serves individuals and families facing food insecurity. Services are available to all community members regardless of background or affiliation.",
    moneyDonationUrl: "https://jcsfl.org/donate/milk-and-honey/",
    categories: ["money"],
  },
  {
    id: "feeding-south-florida",
    name: "Feeding South Florida",
    url: "https://feedingsouthflorida.org/disaster",
    summary: "The largest food bank in South Florida, dedicated to ending hunger in our community. They distribute millions of pounds of food annually through a network of partner agencies and direct distribution programs. Volunteers are essential to their warehouse operations, mobile pantries, and disaster relief efforts.",
    volunteerUrl: "https://feedingsouthflorida.org/volunteer/",
    foodDonationInfo: "Donate Food Items at 2501 SW 32nd Terrace, Pembroke Park, FL 33023. Donation Hours: Mon. - Fri., 8 a.m. - 4 p.m.",
    moneyDonationUrl: "https://feedingsouthflorida.org/give-money/",
    categories: ["time", "food", "money"],
  },
  {
    id: "farm-share",
    name: "Farm Share",
    url: "https://www.farmshare.org/",
    summary: "Florida's leading food bank providing farm-fresh food to families in need. They rescue surplus crops from farms and distribute fresh produce throughout the state. Mobile food distributions bring nutritious food directly to underserved communities.",
    volunteerUrl: "https://www.farmshare.org/how-to-help",
    moneyDonationUrl: "https://farmshare.networkforgood.com/projects/100576-farm-share-feed-the-hungry-fund",
    categories: ["time", "money"],
  },
  {
    id: "united-way-miami",
    name: "United Way Miami",
    url: "https://unitedwaymiami.org/",
    summary: "Building stronger communities by addressing critical needs including food insecurity, education, and financial stability. They coordinate volunteers and funding across multiple community programs in Miami-Dade. Your contribution supports a network of vetted nonprofit partners working to end hunger.",
    categories: ["time", "money"],
  },
  {
    id: "victory-for-youth",
    name: "Victory for Youth",
    url: "https://www.victoryforyouth.org/",
    summary: "Providing support and resources to youth and families in the Miami community through mentorship, education, and basic needs assistance. Their programs include food support for families experiencing hardship. They welcome volunteers and donations to expand their impact on young people's lives.",
    categories: ["time", "money"],
  },
  {
    id: "axis-helps",
    name: "Axis",
    url: "https://www.axishelps.org/individual/food-distributions",
    summary: "Offering food distributions and support services to individuals and families in need. They provide regular food distribution events throughout Miami-Dade County. Volunteers help with setup, distribution, and serving community members with dignity and respect.",
    categories: ["time", "food"],
  },
  {
    id: "jcs-resource-directory",
    name: "JCS Resource Directory",
    url: "https://jcs.myresourcedirectory.com/index.php?option=com_cpx&common_id=824&task=search.query&code=BD&name=Food-icon-food",
    summary: "Comprehensive directory of food assistance resources in the Miami area. This searchable database connects you with food pantries, meal programs, and emergency food assistance near you. Use this resource to find additional help beyond the organizations listed here.",
    categories: ["food"],
  },
];
