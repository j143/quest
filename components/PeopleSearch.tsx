import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Copy, Users, Target, Filter, Lightbulb } from "lucide-react";
import { toast } from "sonner";
import { SearchDemo } from "./SearchDemo";

export function PeopleSearch() {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success("Copied to clipboard!");
  };

  const searchScenarios = [
    {
      title: "Find Industry Experts",
      icon: "🎯",
      description: "Locate thought leaders and experts in your field",
      searches: [
        {
          query: "title:\"chief technology officer\" AND industry:technology",
          purpose: "Find CTOs in tech companies",
          demoResults: [
            {
              id: "1",
              type: "person" as const,
              name: "Sarah Chen",
              title: "Chief Technology Officer",
              company: "TechFlow Solutions",
              location: "San Francisco, CA",
              connectionLevel: "2nd",
              avatarColor: "#3B82F6",
              isHighlighted: true
            },
            {
              id: "2", 
              type: "person" as const,
              name: "Marcus Rodriguez",
              title: "CTO & Co-founder",
              company: "DataVision AI",
              location: "Austin, TX", 
              connectionLevel: "3rd",
              avatarColor: "#10B981"
            },
            {
              id: "3",
              type: "person" as const,
              name: "Emily Watson",
              title: "Chief Technology Officer",
              company: "CloudScale Systems",
              location: "Seattle, WA",
              connectionLevel: "2nd", 
              avatarColor: "#8B5CF6",
              isHighlighted: true
            }
          ]
        },
        {
          query: "\"machine learning\" AND title:director",
          purpose: "Find ML directors and leaders",
          demoResults: [
            {
              id: "4",
              type: "person" as const,
              name: "Dr. James Liu",
              title: "Director of Machine Learning",
              company: "Meta",
              location: "Menlo Park, CA",
              connectionLevel: "3rd",
              avatarColor: "#F59E0B",
              isHighlighted: true
            },
            {
              id: "5",
              type: "person" as const,
              name: "Rachel Kumar",
              title: "ML Engineering Director", 
              company: "Uber",
              location: "San Francisco, CA",
              connectionLevel: "2nd",
              avatarColor: "#EF4444"
            }
          ]
        }
      ]
    },
    {
      title: "Recruiting & Hiring",
      icon: "👥",
      description: "Find potential candidates for your team",
      searches: [
        {
          query: "title:\"full stack developer\" AND (Python OR JavaScript)",
          purpose: "Find full-stack developers with specific skills",
          demoResults: [
            {
              id: "6",
              type: "person" as const,
              name: "Alex Thompson",
              title: "Senior Full Stack Developer",
              company: "Stripe",
              location: "Remote",
              connectionLevel: "2nd",
              avatarColor: "#06B6D4",
              isHighlighted: true
            },
            {
              id: "7",
              type: "person" as const,
              name: "Maya Patel",
              title: "Full Stack Engineer",
              company: "Shopify",
              location: "Toronto, ON",
              connectionLevel: "3rd",
              avatarColor: "#84CC16"
            },
            {
              id: "8",
              type: "person" as const,
              name: "David Kim",
              title: "Full Stack Developer",
              company: "Discord",
              location: "San Francisco, CA",
              connectionLevel: "2nd",
              avatarColor: "#A855F7",
              isHighlighted: true
            }
          ]
        },
        {
          query: "title:\"product manager\" AND company:(Uber OR Lyft OR Airbnb)",
          purpose: "Find PMs from top tech companies",
          demoResults: [
            {
              id: "9",
              type: "person" as const,
              name: "Jessica Wong",
              title: "Senior Product Manager",
              company: "Uber",
              location: "San Francisco, CA",
              connectionLevel: "2nd",
              avatarColor: "#F59E0B",
              isHighlighted: true
            },
            {
              id: "10",
              type: "person" as const,
              name: "Michael Torres",
              title: "Product Manager",
              company: "Airbnb",
              location: "San Francisco, CA",
              connectionLevel: "3rd",
              avatarColor: "#EF4444"
            }
          ]
        }
      ]
    },
    {
      title: "Networking & Partnerships",
      icon: "🤝",
      description: "Connect with professionals in your industry",
      searches: [
        {
          query: "title:founder AND industry:\"financial services\"",
          purpose: "Find fintech founders",
          demoResults: [
            {
              id: "11",
              type: "person" as const,
              name: "Robert Chen",
              title: "Founder & CEO",
              company: "FinTech Innovations",
              location: "New York, NY",
              connectionLevel: "3rd",
              avatarColor: "#059669",
              isHighlighted: true
            },
            {
              id: "12",
              type: "person" as const,
              name: "Lisa Rodriguez",
              title: "Co-founder",
              company: "PayFlow Solutions",
              location: "Austin, TX",
              connectionLevel: "2nd",
              avatarColor: "#DC2626"
            }
          ]
        },
        {
          query: "\"business development\" AND company:startup",
          purpose: "Find BD professionals at startups",
          demoResults: [
            {
              id: "13",
              type: "person" as const,
              name: "Jason Park",
              title: "Head of Business Development",
              company: "CloudTech Startup",
              location: "San Francisco, CA",
              connectionLevel: "2nd",
              avatarColor: "#7C3AED",
              isHighlighted: true
            },
            {
              id: "14",
              type: "person" as const,
              name: "Amanda Foster",
              title: "Business Development Manager",
              company: "AI Ventures",
              location: "Boston, MA",
              connectionLevel: "3rd",
              avatarColor: "#0891B2"
            }
          ]
        }
      ]
    },
    {
      title: "Sales Prospecting",
      icon: "💼",
      description: "Identify potential clients and decision makers",
      searches: [
        {
          query: "title:(\"head of marketing\" OR \"marketing director\")",
          purpose: "Find marketing decision makers",
          demoResults: [
            {
              id: "15",
              type: "person" as const,
              name: "Catherine Williams",
              title: "Head of Marketing",
              company: "SaaS Solutions Inc",
              location: "Chicago, IL",
              connectionLevel: "2nd",
              avatarColor: "#BE185D",
              isHighlighted: true
            },
            {
              id: "16",
              type: "person" as const,
              name: "Tom Anderson",
              title: "Marketing Director",
              company: "TechFlow Systems",
              location: "Seattle, WA",
              connectionLevel: "3rd",
              avatarColor: "#059669"
            }
          ]
        },
        {
          query: "title:\"chief financial officer\" AND company:\"series a\"",
          purpose: "Find CFOs at Series A companies",
          demoResults: [
            {
              id: "17",
              type: "person" as const,
              name: "Jennifer Liu",
              title: "Chief Financial Officer",
              company: "GrowthTech (Series A)",
              location: "San Francisco, CA",
              connectionLevel: "3rd",
              avatarColor: "#EA580C",
              isHighlighted: true
            },
            {
              id: "18",
              type: "person" as const,
              name: "Mark Johnson",
              title: "CFO",
              company: "HealthTech Solutions",
              location: "Boston, MA",
              connectionLevel: "2nd",
              avatarColor: "#1D4ED8"
            }
          ]
        }
      ]
    }
  ];

  const filterStrategies = [
    {
      filter: "Location",
      tip: "Use specific cities or regions",
      example: "Search in 'San Francisco Bay Area' for tech professionals"
    },
    {
      filter: "Current Company",
      tip: "Target competitors or specific companies",
      example: "Find talent from companies you admire"
    },
    {
      filter: "Past Company",
      tip: "Find alumni from specific companies",
      example: "Former Google employees now at startups"
    },
    {
      filter: "School",
      tip: "Connect with fellow alumni",
      example: "MIT graduates in biotech industry"
    },
    {
      filter: "Industry",
      tip: "Narrow by specific industries",
      example: "Focus on 'Artificial Intelligence' industry"
    },
    {
      filter: "Connection Level",
      tip: "Prioritize 2nd or 3rd connections",
      example: "People you can get introduced to"
    }
  ];

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="h-5 w-5" />
            People Search Strategies
          </CardTitle>
          <CardDescription>
            Master the art of finding the right people on LinkedIn with targeted search techniques and filters.
          </CardDescription>
        </CardHeader>
      </Card>

      {/* Search Scenarios */}
      <div className="grid gap-6">
        {searchScenarios.map((scenario, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <span className="text-xl">{scenario.icon}</span>
                {scenario.title}
              </CardTitle>
              <CardDescription>{scenario.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {scenario.searches.map((search, searchIndex) => (
                  <div key={searchIndex} className="space-y-3">
                    <div className="flex items-center justify-between">
                      <Badge variant="outline" className="text-xs">
                        Example {searchIndex + 1}
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
                      explanation="Shows profiles matching your search criteria"
                      searchType="people"
                    />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Filter Strategies */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Filter className="h-5 w-5" />
            Essential Filters for People Search
          </CardTitle>
          <CardDescription>
            Use these filters strategically to narrow down your people search results.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            {filterStrategies.map((filter, index) => (
              <div key={index} className="border rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="secondary">{filter.filter}</Badge>
                </div>
                <p className="font-medium text-sm mb-1">{filter.tip}</p>
                <p className="text-xs text-gray-600">{filter.example}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Advanced People Search Tips */}
      <Card className="bg-gradient-to-r from-purple-50 to-pink-50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Lightbulb className="h-5 w-5" />
            Advanced People Search Tips
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                1
              </div>
              <div>
                <h4 className="font-medium">Use Mutual Connections</h4>
                <p className="text-sm text-gray-600">
                  Sort by "Mutual connections" to find people you can easily get introduced to through your network.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                2
              </div>
              <div>
                <h4 className="font-medium">Search by Keywords in Profiles</h4>
                <p className="text-sm text-gray-600">
                  LinkedIn searches through headlines, summaries, and experience descriptions, not just job titles.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                3
              </div>
              <div>
                <h4 className="font-medium">Use Years of Experience Filter</h4>
                <p className="text-sm text-gray-600">
                  Filter by seniority level to find people at the right career stage for your needs.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                4
              </div>
              <div>
                <h4 className="font-medium">Save Your Searches</h4>
                <p className="text-sm text-gray-600">
                  Save effective search queries to reuse them and get alerts when new people match your criteria.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}