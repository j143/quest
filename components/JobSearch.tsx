import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Copy, Briefcase, Target, Clock, Star } from "lucide-react";
import { toast } from "sonner";
import { SearchDemo } from "./SearchDemo";

export function JobSearch() {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success("Copied to clipboard!");
  };

  const jobSearchStrategies = [
    {
      title: "Strategic Keyword Search",
      icon: <Target className="h-5 w-5" />,
      description: "Use targeted keywords to find relevant opportunities",
      searches: [
        {
          query: "\"senior software engineer\" Python remote",
          purpose: "Find senior Python developer roles that are remote",
          demoResults: [
            {
              id: "j1",
              type: "job" as const,
              title: "Senior Software Engineer - Python",
              company: "GitLab",
              location: "Remote Worldwide",
              avatarColor: "#FC6D26",
              isHighlighted: true
            },
            {
              id: "j2",
              type: "job" as const,
              title: "Senior Python Developer",
              company: "Spotify",
              location: "Remote (US)",
              avatarColor: "#1DB954"
            },
            {
              id: "j3",
              type: "job" as const,
              title: "Senior Software Engineer (Python/Django)",
              company: "Dropbox",
              location: "Remote",
              avatarColor: "#0061FF",
              isHighlighted: true
            }
          ]
        },
        {
          query: "\"product manager\" AND (startup OR \"series A\")",
          purpose: "Find PM roles at early-stage companies",
          demoResults: [
            {
              id: "j4",
              type: "job" as const,
              title: "Product Manager",
              company: "Notion (Series A)",
              location: "San Francisco, CA",
              avatarColor: "#000000",
              isHighlighted: true
            },
            {
              id: "j5",
              type: "job" as const,
              title: "Senior Product Manager",
              company: "Linear (Startup)",
              location: "Remote",
              avatarColor: "#5E6AD2"
            }
          ]
        },
        {
          query: "\"data scientist\" -intern -entry",
          purpose: "Find experienced data scientist positions",
          demoResults: [
            {
              id: "j6",
              type: "job" as const,
              title: "Senior Data Scientist",
              company: "Netflix",
              location: "Los Gatos, CA",
              avatarColor: "#E50914",
              isHighlighted: true
            },
            {
              id: "j7",
              type: "job" as const,
              title: "Data Scientist III",
              company: "Uber",
              location: "San Francisco, CA",
              avatarColor: "#000000"
            }
          ]
        }
      ]
    },
    {
      title: "Company-Specific Search",
      icon: <Briefcase className="h-5 w-5" />,
      description: "Target specific companies or company types",
      searches: [
        {
          query: "company:Google OR company:Apple OR company:Microsoft",
          purpose: "Find jobs at top tech companies",
          demoResults: [
            {
              id: "j8",
              type: "job" as const,
              title: "Software Engineer III",
              company: "Google",
              location: "Mountain View, CA",
              avatarColor: "#4285F4",
              isHighlighted: true
            },
            {
              id: "j9",
              type: "job" as const,
              title: "iOS Engineer",
              company: "Apple",
              location: "Cupertino, CA",
              avatarColor: "#000000"
            },
            {
              id: "j10",
              type: "job" as const,
              title: "Cloud Solutions Architect",
              company: "Microsoft",
              location: "Redmond, WA",
              avatarColor: "#00BCF2",
              isHighlighted: true
            }
          ]
        },
        {
          query: "fintech AND (engineer OR developer)",
          purpose: "Find engineering roles in fintech companies",
          demoResults: [
            {
              id: "j11",
              type: "job" as const,
              title: "Backend Engineer",
              company: "Stripe",
              location: "San Francisco, CA",
              avatarColor: "#6772E5",
              isHighlighted: true
            },
            {
              id: "j12",
              type: "job" as const,
              title: "Full Stack Developer",
              company: "Plaid",
              location: "Remote",
              avatarColor: "#00D4AA"
            }
          ]
        },
        {
          query: "healthcare startup \"product marketing\"",
          purpose: "Find product marketing roles in healthcare startups",
          demoResults: [
            {
              id: "j13",
              type: "job" as const,
              title: "Product Marketing Manager",
              company: "Teladoc Health",
              location: "Purchase, NY",
              avatarColor: "#00A0B0",
              isHighlighted: true
            }
          ]
        }
      ]
    },
    {
      title: "Skills-Based Search",
      icon: <Star className="h-5 w-5" />,
      description: "Search based on your specific skills and technologies",
      searches: [
        {
          query: "React AND (TypeScript OR JavaScript) AND \"front-end\"",
          purpose: "Find front-end roles requiring React and TypeScript",
          demoResults: [
            {
              id: "j14",
              type: "job" as const,
              title: "Frontend Engineer (React/TypeScript)",
              company: "Vercel",
              location: "Remote",
              avatarColor: "#000000",
              isHighlighted: true
            },
            {
              id: "j15",
              type: "job" as const,
              title: "Senior Frontend Developer",
              company: "Figma",
              location: "San Francisco, CA",
              avatarColor: "#F24E1E"
            }
          ]
        },
        {
          query: "\"machine learning\" AND (TensorFlow OR PyTorch)",
          purpose: "Find ML roles with specific framework requirements",
          demoResults: [
            {
              id: "j16",
              type: "job" as const,
              title: "Machine Learning Engineer",
              company: "OpenAI",
              location: "San Francisco, CA",
              avatarColor: "#412991",
              isHighlighted: true
            },
            {
              id: "j17",
              type: "job" as const,
              title: "ML Research Scientist",
              company: "DeepMind",
              location: "London, UK",
              avatarColor: "#4285F4"
            }
          ]
        },
        {
          query: "Salesforce AND administrator AND remote",
          purpose: "Find remote Salesforce admin positions",
          demoResults: [
            {
              id: "j18",
              type: "job" as const,
              title: "Salesforce Administrator",
              company: "HubSpot",
              location: "Remote",
              avatarColor: "#FF7A59",
              isHighlighted: true
            }
          ]
        }
      ]
    },
    {
      title: "Hidden Opportunities",
      icon: <Clock className="h-5 w-5" />,
      description: "Find jobs that others might miss",
      searches: [
        {
          query: "\"we are hiring\" OR \"join our team\" -\"apply now\"",
          purpose: "Find companies announcing hiring in posts",
          demoResults: [
            {
              id: "j19",
              type: "job" as const,
              title: "Growth Engineer",
              company: "Startup Stealth Mode",
              location: "San Francisco, CA",
              avatarColor: "#8B5CF6",
              isHighlighted: true
            }
          ]
        },
        {
          query: "recently posted:24h",
          purpose: "Find the newest job postings",
          demoResults: [
            {
              id: "j20",
              type: "job" as const,
              title: "Product Designer",
              company: "Linear",
              location: "Remote",
              avatarColor: "#5E6AD2",
              isHighlighted: true
            }
          ]
        },
        {
          query: "contract OR freelance OR consultant",
          purpose: "Find contract and freelance opportunities",
          demoResults: [
            {
              id: "j21",
              type: "job" as const,
              title: "Freelance UX Designer",
              company: "Various Clients",
              location: "Remote",
              avatarColor: "#F59E0B",
              isHighlighted: true
            }
          ]
        }
      ]
    }
  ];

  const jobFilters = [
    {
      name: "Date Posted",
      values: ["Past 24 hours", "Past week", "Past month"],
      tip: "Apply early to new postings for better chances"
    },
    {
      name: "Experience Level",
      values: ["Internship", "Entry level", "Associate", "Mid-senior", "Director+"],
      tip: "Match your experience level to increase relevance"
    },
    {
      name: "Job Type",
      values: ["Full-time", "Part-time", "Contract", "Temporary", "Volunteer"],
      tip: "Filter by employment type that fits your needs"
    },
    {
      name: "Location",
      values: ["On-site", "Remote", "Hybrid", "Specific city"],
      tip: "Use location filters to find roles that match your preferences"
    },
    {
      name: "Company Size",
      values: ["Startup (1-50)", "Small (51-200)", "Medium (201-1000)", "Large (1000+)"],
      tip: "Different company sizes offer different opportunities and culture"
    },
    {
      name: "Industry",
      values: ["Technology", "Healthcare", "Finance", "Education", "Non-profit"],
      tip: "Focus on industries that align with your interests"
    }
  ];

  const jobSearchTips = [
    {
      tip: "Set Up Job Alerts",
      description: "Create saved searches with alerts to get notified of new matching jobs",
      icon: "🔔"
    },
    {
      tip: "Use Easy Apply Strategically",
      description: "Easy Apply jobs have more competition; consider direct applications too",
      icon: "⚡"
    },
    {
      tip: "Research the Hiring Manager",
      description: "Find and connect with hiring managers or team members before applying",
      icon: "🔍"
    },
    {
      tip: "Check Company Updates",
      description: "Look at recent company posts to understand their current priorities",
      icon: "📈"
    },
    {
      tip: "Network Before Applying",
      description: "Connect with current employees to learn about company culture",
      icon: "🤝"
    },
    {
      tip: "Optimize Your Profile",
      description: "Ensure your LinkedIn profile matches the keywords in job descriptions",
      icon: "✨"
    }
  ];

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Briefcase className="h-5 w-5" />
            Job Search Strategies
          </CardTitle>
          <CardDescription>
            Master LinkedIn job search to find hidden opportunities and land your dream job.
          </CardDescription>
        </CardHeader>
      </Card>

      {/* Job Search Strategies */}
      <div className="grid gap-6">
        {jobSearchStrategies.map((strategy, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                {strategy.icon}
                {strategy.title}
              </CardTitle>
              <CardDescription>{strategy.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {strategy.searches.map((search, searchIndex) => (
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
                      explanation="Shows job postings matching your search criteria"
                      searchType="jobs"
                    />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Job Filters */}
      <Card>
        <CardHeader>
          <CardTitle>Essential Job Search Filters</CardTitle>
          <CardDescription>
            Use these filters to narrow down job results and find the most relevant opportunities.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {jobFilters.map((filter, index) => (
              <div key={index} className="border rounded-lg p-4">
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant="secondary">{filter.name}</Badge>
                </div>
                <div className="space-y-2">
                  <div className="flex flex-wrap gap-1">
                    {filter.values.slice(0, 3).map((value, valueIndex) => (
                      <Badge key={valueIndex} variant="outline" className="text-xs">
                        {value}
                      </Badge>
                    ))}
                    {filter.values.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{filter.values.length - 3} more
                      </Badge>
                    )}
                  </div>
                  <p className="text-xs text-gray-600">{filter.tip}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Job Search Tips */}
      <Card className="bg-gradient-to-r from-orange-50 to-red-50">
        <CardHeader>
          <CardTitle>Pro Job Search Tips</CardTitle>
          <CardDescription>
            Expert strategies to maximize your job search success on LinkedIn.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            {jobSearchTips.map((tip, index) => (
              <div key={index} className="flex items-start gap-3 p-4 bg-white rounded-lg border">
                <div className="text-2xl">{tip.icon}</div>
                <div>
                  <h4 className="font-medium mb-1">{tip.tip}</h4>
                  <p className="text-sm text-gray-600">{tip.description}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Application Strategy */}
      <Card>
        <CardHeader>
          <CardTitle>Application Strategy Framework</CardTitle>
          <CardDescription>
            Follow this framework to increase your application success rate.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                1
              </div>
              <div>
                <h4 className="font-medium">Research First</h4>
                <p className="text-sm text-gray-600">
                  Study the company, role, and hiring manager before applying. Customize your approach.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                2
              </div>
              <div>
                <h4 className="font-medium">Connect Before Applying</h4>
                <p className="text-sm text-gray-600">
                  Try to connect with someone at the company or reach out to the hiring manager directly.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                3
              </div>
              <div>
                <h4 className="font-medium">Tailor Your Application</h4>
                <p className="text-sm text-gray-600">
                  Match your resume and cover letter keywords to the job description.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                4
              </div>
              <div>
                <h4 className="font-medium">Follow Up Strategically</h4>
                <p className="text-sm text-gray-600">
                  Send a thoughtful follow-up message 1-2 weeks after applying if you haven't heard back.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}