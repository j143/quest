import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Copy, Building2, TrendingUp, MapPin, Users2 } from "lucide-react";
import { toast } from "sonner";
import { SearchDemo } from "./SearchDemo";

export function CompanySearch() {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success("Copied to clipboard!");
  };

  const companySearchTypes = [
    {
      title: "Industry Research",
      icon: <TrendingUp className="h-5 w-5" />,
      description: "Discover companies in specific industries or sectors",
      searches: [
        {
          query: "artificial intelligence startup",
          purpose: "Find AI startups",
          demoResults: [
            {
              id: "c1",
              type: "company" as const,
              name: "OpenAI Research",
              headline: "Artificial Intelligence • Machine Learning • Research",
              employees: "500-1,000 employees",
              industry: "Artificial Intelligence",
              avatarColor: "#059669",
              isHighlighted: true
            },
            {
              id: "c2",
              type: "company" as const,
              name: "DeepMind Technologies",
              headline: "AI Safety • Research • Deep Learning",
              employees: "1,000-5,000 employees", 
              industry: "AI Research",
              avatarColor: "#3B82F6"
            },
            {
              id: "c3",
              type: "company" as const,
              name: "Anthropic",
              headline: "AI Safety • Language Models • Research",
              employees: "100-500 employees",
              industry: "Artificial Intelligence",
              avatarColor: "#8B5CF6",
              isHighlighted: true
            }
          ]
        },
        {
          query: "fintech company London",
          purpose: "Find fintech companies in London",
          demoResults: [
            {
              id: "c4",
              type: "company" as const,
              name: "Revolut",
              headline: "Digital Banking • Fintech • Financial Services",
              employees: "5,000-10,000 employees",
              industry: "Financial Technology",
              avatarColor: "#EF4444",
              isHighlighted: true
            },
            {
              id: "c5",
              type: "company" as const,
              name: "Monzo Bank",
              headline: "Mobile Banking • Digital Finance • Consumer Banking",
              employees: "1,000-5,000 employees",
              industry: "Banking",
              avatarColor: "#F59E0B"
            }
          ]
        },
        {
          query: "biotech pharmaceutical research",
          purpose: "Find biotech and pharma companies",
          demoResults: [
            {
              id: "c6",
              type: "company" as const,
              name: "Moderna Inc.",
              headline: "Biotechnology • mRNA Technology • Vaccine Development",
              employees: "5,000-10,000 employees",
              industry: "Biotechnology",
              avatarColor: "#10B981",
              isHighlighted: true
            },
            {
              id: "c7",
              type: "company" as const,
              name: "Ginkgo Bioworks",
              headline: "Synthetic Biology • Bioengineering • Platform Technology",
              employees: "1,000-5,000 employees",
              industry: "Biotechnology",
              avatarColor: "#A855F7"
            }
          ]
        }
      ]
    },
    {
      title: "Competitor Analysis",
      icon: <Building2 className="h-5 w-5" />,
      description: "Research competitors and similar companies",
      searches: [
        {
          query: "SaaS CRM software",
          purpose: "Find CRM software companies",
          demoResults: [
            {
              id: "c8",
              type: "company" as const,
              name: "Salesforce",
              headline: "CRM • Sales Cloud • Customer Success Platform",
              employees: "50,000+ employees",
              industry: "Software",
              avatarColor: "#0EA5E9",
              isHighlighted: true
            },
            {
              id: "c9",
              type: "company" as const,
              name: "HubSpot",
              headline: "Inbound Marketing • CRM • Sales Software",
              employees: "5,000-10,000 employees",
              industry: "Marketing Software",
              avatarColor: "#F97316"
            }
          ]
        },
        {
          query: "e-commerce platform series B",
          purpose: "Find e-commerce platforms at Series B stage",
          demoResults: [
            {
              id: "c10",
              type: "company" as const,
              name: "Faire Wholesale",
              headline: "B2B Marketplace • E-commerce • Wholesale Platform",
              employees: "1,000-5,000 employees",
              industry: "E-commerce",
              avatarColor: "#DC2626",
              isHighlighted: true
            }
          ]
        },
        {
          query: "healthcare technology remote",
          purpose: "Find remote healthcare tech companies",
          demoResults: [
            {
              id: "c11",
              type: "company" as const,
              name: "Teladoc Health",
              headline: "Telemedicine • Remote Healthcare • Digital Health",
              employees: "10,000+ employees",
              industry: "Healthcare Technology",
              avatarColor: "#059669",
              isHighlighted: true
            }
          ]
        }
      ]
    },
    {
      title: "Partnership Opportunities",
      icon: <Users2 className="h-5 w-5" />,
      description: "Find potential business partners and collaborators",
      searches: [
        {
          query: "marketing agency B2B tech",
          purpose: "Find B2B tech marketing agencies",
          demoResults: [
            {
              id: "c12",
              type: "company" as const,
              name: "Demandbase",
              headline: "B2B Marketing • Account-Based Marketing • Sales Intelligence",
              employees: "1,000-5,000 employees",
              industry: "Marketing Services",
              avatarColor: "#7C3AED",
              isHighlighted: true
            }
          ]
        },
        {
          query: "consulting firm digital transformation",
          purpose: "Find digital transformation consultants",
          demoResults: [
            {
              id: "c13",
              type: "company" as const,
              name: "Accenture",
              headline: "Digital Transformation • Technology Consulting • Innovation",
              employees: "50,000+ employees",
              industry: "Consulting",
              avatarColor: "#A855F7",
              isHighlighted: true
            }
          ]
        },
        {
          query: "software development outsourcing",
          purpose: "Find software development partners",
          demoResults: [
            {
              id: "c14",
              type: "company" as const,
              name: "Toptal",
              headline: "Freelance Software Development • Top Talent Network",
              employees: "1,000-5,000 employees",
              industry: "Technology Services",
              avatarColor: "#0891B2",
              isHighlighted: true
            }
          ]
        }
      ]
    },
    {
      title: "Investment Research",
      icon: <MapPin className="h-5 w-5" />,
      description: "Research companies for investment opportunities",
      searches: [
        {
          query: "startup funded 2024",
          purpose: "Find recently funded startups",
          demoResults: [
            {
              id: "c15",
              type: "company" as const,
              name: "Anthropic",
              headline: "AI Safety • $4B Series C (2024) • Constitutional AI",
              employees: "100-500 employees",
              industry: "Artificial Intelligence",
              avatarColor: "#059669",
              isHighlighted: true
            }
          ]
        },
        {
          query: "unicorn company valuation",
          purpose: "Find unicorn companies",
          demoResults: [
            {
              id: "c16",
              type: "company" as const,
              name: "Stripe",
              headline: "Payment Processing • $95B Valuation • Fintech Unicorn",
              employees: "5,000-10,000 employees",
              industry: "Financial Services",
              avatarColor: "#6366F1",
              isHighlighted: true
            }
          ]
        },
        {
          query: "IPO technology company",
          purpose: "Find tech companies going public",
          demoResults: [
            {
              id: "c17",
              type: "company" as const,
              name: "Reddit Inc.",
              headline: "Social Media Platform • Recent IPO (2024) • Community Platform",
              employees: "2,000-5,000 employees",
              industry: "Social Media",
              avatarColor: "#FF4500",
              isHighlighted: true
            }
          ]
        }
      ]
    }
  ];

  const companyFilters = [
    {
      filter: "Company Size",
      options: ["1-10", "11-50", "51-200", "201-500", "501-1000", "1000+"],
      tip: "Filter by employee count to find companies at your target scale"
    },
    {
      filter: "Industry",
      options: ["Technology", "Healthcare", "Finance", "Education", "Manufacturing"],
      tip: "Narrow down to specific industries relevant to your interests"
    },
    {
      filter: "Headquarters Location",
      options: ["San Francisco", "New York", "London", "Singapore", "Remote"],
      tip: "Find companies in specific geographic regions"
    },
    {
      filter: "Founded",
      options: ["Last year", "Last 2 years", "Last 5 years", "Last 10 years"],
      tip: "Target companies founded in specific time periods"
    }
  ];

  const advancedTechniques = [
    {
      technique: "Employee Growth Tracking",
      description: "Monitor hiring trends to identify growing companies",
      example: "Look at companies with 20%+ employee growth in the last 6 months"
    },
    {
      technique: "Recent News & Updates",
      description: "Find companies in the news for funding, partnerships, or launches",
      example: "Check company updates for recent funding announcements"
    },
    {
      technique: "Leadership Changes",
      description: "Track executive movements and new hires",
      example: "Companies hiring new C-level executives often signal growth"
    },
    {
      technique: "Alumni Networks",
      description: "Find companies where your school/previous company alumni work",
      example: "Use 'People you may know' to discover connections at target companies"
    }
  ];

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Building2 className="h-5 w-5" />
            Company Search Strategies
          </CardTitle>
          <CardDescription>
            Discover companies, research competitors, and find partnership opportunities using LinkedIn's company search.
          </CardDescription>
        </CardHeader>
      </Card>

      {/* Company Search Types */}
      <div className="grid gap-6">
        {companySearchTypes.map((type, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                {type.icon}
                {type.title}
              </CardTitle>
              <CardDescription>{type.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {type.searches.map((search, searchIndex) => (
                  <div key={searchIndex} className="space-y-3">
                    <div className="flex items-center justify-between">
                      <Badge variant="outline" className="text-xs">
                        Search Example {searchIndex + 1}
                      </Badge>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => copyToClipboard(search.query)}
                        className="h-6 w-6 p-0"
                      >
                        <Copy className="h-3 w-3" />
                      </Button>
                    </div>
                    <div className="text-sm text-gray-600 mb-2">{search.purpose}</div>
                    
                    <SearchDemo
                      query={search.query}
                      results={search.demoResults || []}
                      explanation="Shows companies matching your search criteria"
                      searchType="companies"
                    />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Company Filters */}
      <Card>
        <CardHeader>
          <CardTitle>Essential Company Filters</CardTitle>
          <CardDescription>
            Use these filters to narrow down companies based on specific criteria.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            {companyFilters.map((filter, index) => (
              <div key={index} className="border rounded-lg p-4">
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant="secondary">{filter.filter}</Badge>
                </div>
                <div className="space-y-2">
                  <div className="flex flex-wrap gap-1">
                    {filter.options.map((option, optionIndex) => (
                      <Badge key={optionIndex} variant="outline" className="text-xs">
                        {option}
                      </Badge>
                    ))}
                  </div>
                  <p className="text-xs text-gray-600">{filter.tip}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Advanced Techniques */}
      <Card className="bg-gradient-to-r from-green-50 to-emerald-50">
        <CardHeader>
          <CardTitle>Advanced Company Research Techniques</CardTitle>
          <CardDescription>
            Go beyond basic search with these advanced strategies for company research.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            {advancedTechniques.map((technique, index) => (
              <div key={index} className="flex items-start gap-3 p-4 bg-white rounded-lg border">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <h4 className="font-medium mb-1">{technique.technique}</h4>
                  <p className="text-sm text-gray-600 mb-2">{technique.description}</p>
                  <p className="text-xs text-green-700 bg-green-100 px-2 py-1 rounded">
                    💡 {technique.example}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Quick Tips */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Company Search Tips</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-sm">Follow companies you're interested in for updates</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-sm">Check the 'People' tab to see who works there</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-sm">Use 'Similar companies' for competitive analysis</span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm">Look at recent posts to gauge company culture</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm">Check 'Jobs' tab for hiring activity</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm">Review 'About' section for recent milestones</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}