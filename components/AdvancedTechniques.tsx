import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Copy, Zap, Brain, Network, TrendingUp, Users, Target } from "lucide-react";
import { toast } from "sonner";

export function AdvancedTechniques() {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success("Copied to clipboard!");
  };

  const advancedTechniques = [
    {
      title: "X-Ray Search (Google + LinkedIn)",
      icon: <Brain className="h-5 w-5" />,
      description: "Use Google to search LinkedIn profiles with advanced operators",
      examples: [
        {
          query: 'site:linkedin.com/in/ "product manager" "fintech" -intern',
          purpose: "Find fintech product managers using Google",
          platform: "Google"
        },
        {
          query: 'site:linkedin.com/company/ "series A" "AI" "machine learning"',
          purpose: "Find Series A AI companies",
          platform: "Google"
        }
      ]
    },
    {
      title: "Cross-Platform Intelligence",
      icon: <Network className="h-5 w-5" />,
      description: "Combine LinkedIn with other platforms for comprehensive research",
      examples: [
        {
          query: 'site:twitter.com "[Company Name] hiring" OR "join our team"',
          purpose: "Find hiring announcements on Twitter",
          platform: "Google"
        },
        {
          query: 'site:github.com "company:[CompanyName]"',
          purpose: "Find company developers on GitHub",
          platform: "Google"
        }
      ]
    },
    {
      title: "Temporal Search Strategies",
      icon: <TrendingUp className="h-5 w-5" />,
      description: "Use time-based filters and trends for strategic searching",
      examples: [
        {
          query: "Recently updated profiles + job title filters",
          purpose: "Find people actively updating profiles (potentially job seeking)",
          platform: "LinkedIn"
        },
        {
          query: "Posted in last 24 hours + industry keywords",
          purpose: "Find trending topics and active professionals",
          platform: "LinkedIn"
        }
      ]
    },
    {
      title: "Social Proof Mining",
      icon: <Users className="h-5 w-5" />,
      description: "Leverage social signals and network effects",
      examples: [
        {
          query: '"congratulations" AND "new job" AND "product manager"',
          purpose: "Find people celebrating new PM roles",
          platform: "LinkedIn Posts"
        },
        {
          query: '"excited to announce" AND startup AND founding',
          purpose: "Find new startup announcements",
          platform: "LinkedIn Posts"
        }
      ]
    }
  ];

  const expertStrategies = [
    {
      strategy: "Boolean Logic Mastery",
      description: "Complex boolean combinations for precise results",
      example: '(title:"VP" OR title:"Director") AND (company:Tesla OR company:SpaceX) AND NOT title:intern',
      tip: "Use parentheses to group conditions and create sophisticated queries"
    },
    {
      strategy: "Skill Adjacency Mapping",
      description: "Find professionals with complementary skills",
      example: '"product manager" AND (SQL OR analytics OR "data analysis") AND startup',
      tip: "Search for skill combinations that often work together"
    },
    {
      strategy: "Network Triangulation",
      description: "Use mutual connections to expand your reach",
      example: "Search 2nd connections → Check mutual connections → Find warm introductions",
      tip: "Leverage your network's network for maximum reach"
    },
    {
      strategy: "Content Signal Analysis",
      description: "Analyze posting patterns and engagement",
      example: "Find active content creators in your industry for thought leadership insights",
      tip: "Look for consistent posters with high engagement for industry influence"
    }
  ];

  const automationTips = [
    {
      title: "Search Alerts & Monitoring",
      description: "Set up automated monitoring for ongoing intelligence",
      techniques: [
        "Save searches with email alerts for new matches",
        "Monitor competitor hiring patterns",
        "Track industry keyword trends",
        "Set up company follower alerts"
      ]
    },
    {
      title: "Data Export & Analysis",
      description: "Extract and analyze LinkedIn data systematically",
      techniques: [
        "Export search results for analysis",
        "Track contact response rates",
        "Monitor profile view patterns",
        "Analyze network growth metrics"
      ]
    },
    {
      title: "CRM Integration",
      description: "Connect LinkedIn insights with your workflow",
      techniques: [
        "Sync LinkedIn contacts with CRM",
        "Track engagement across platforms",
        "Automate follow-up sequences",
        "Score leads based on LinkedIn activity"
      ]
    }
  ];

  const ninjaHacks = [
    {
      hack: "The Alumni Hack",
      description: "Find alumni at target companies for warm introductions",
      execution: "Search your school → Filter by company → Reach out with shared experience"
    },
    {
      hack: "The Event Hack",
      description: "Find attendees of industry events before/after networking",
      execution: "Search event name + attendee titles → Connect with context about the event"
    },
    {
      hack: "The Promotion Hack",
      description: "Catch professionals during career transitions",
      execution: 'Search "excited to announce" + "new role" → Connect during their excitement'
    },
    {
      hack: "The Content Hack",
      description: "Engage with content before making connection requests",
      execution: "Comment thoughtfully on posts → Build rapport → Connect with context"
    },
    {
      hack: "The Geographic Hack",
      description: "Use location for hyper-local networking",
      execution: "Search specific cities/regions → Target professionals in your area for meetups"
    },
    {
      hack: "The Skills Gap Hack",
      description: "Find learning opportunities and mentors",
      execution: "Search for skills you want to learn → Connect with experts for advice"
    }
  ];

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="h-5 w-5" />
            Advanced LinkedIn Search Techniques
          </CardTitle>
          <CardDescription>
            Master-level strategies that go beyond basic LinkedIn search to give you a competitive edge.
          </CardDescription>
        </CardHeader>
      </Card>

      {/* Advanced Techniques */}
      <div className="grid gap-6">
        {advancedTechniques.map((technique, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                {technique.icon}
                {technique.title}
              </CardTitle>
              <CardDescription>{technique.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {technique.examples.map((example, exampleIndex) => (
                  <div key={exampleIndex} className="border rounded-lg p-4 bg-gray-50">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="text-xs">
                          {example.platform}
                        </Badge>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => copyToClipboard(example.query)}
                        className="h-6 w-6 p-0"
                      >
                        <Copy className="h-3 w-3" />
                      </Button>
                    </div>
                    <code className="block text-sm font-mono bg-white p-2 rounded border mb-2 break-all">
                      {example.query}
                    </code>
                    <p className="text-sm text-gray-600">{example.purpose}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Expert Strategies */}
      <Card className="bg-gradient-to-r from-indigo-50 to-blue-50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="h-5 w-5" />
            Expert Search Strategies
          </CardTitle>
          <CardDescription>
            Advanced methodologies used by top recruiters and sales professionals.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            {expertStrategies.map((strategy, index) => (
              <div key={index} className="border rounded-lg p-4 bg-white">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium mb-2">{strategy.strategy}</h4>
                    <p className="text-sm text-gray-600 mb-2">{strategy.description}</p>
                    <code className="block text-xs font-mono bg-gray-100 p-2 rounded mb-2 break-all">
                      {strategy.example}
                    </code>
                    <p className="text-xs text-indigo-700 bg-indigo-100 px-2 py-1 rounded">
                      💡 {strategy.tip}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Automation Tips */}
      <Card>
        <CardHeader>
          <CardTitle>Automation & Workflow Optimization</CardTitle>
          <CardDescription>
            Scale your LinkedIn search efforts with smart automation and workflows.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-6">
            {automationTips.map((tip, index) => (
              <div key={index} className="border rounded-lg p-4">
                <h4 className="font-medium mb-3">{tip.title}</h4>
                <p className="text-sm text-gray-600 mb-3">{tip.description}</p>
                <div className="space-y-2">
                  {tip.techniques.map((technique, techIndex) => (
                    <div key={techIndex} className="flex items-center gap-2 text-xs">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                      <span>{technique}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Ninja Hacks */}
      <Card className="bg-gradient-to-r from-purple-50 to-pink-50">
        <CardHeader>
          <CardTitle>LinkedIn Ninja Hacks</CardTitle>
          <CardDescription>
            Secret techniques used by power users to maximize LinkedIn effectiveness.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            {ninjaHacks.map((hack, index) => (
              <div key={index} className="border rounded-lg p-4 bg-white">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-lg">🥷</span>
                  <h4 className="font-medium">{hack.hack}</h4>
                </div>
                <p className="text-sm text-gray-600 mb-2">{hack.description}</p>
                <div className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded">
                  <strong>How:</strong> {hack.execution}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Warning Card */}
      <Card className="border-orange-200 bg-orange-50">
        <CardHeader>
          <CardTitle className="text-orange-800">Important Considerations</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2 text-sm text-orange-700">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
              <span>Always respect LinkedIn's terms of service and rate limits</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
              <span>Focus on quality over quantity in your outreach</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
              <span>Be genuine and add value in every interaction</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
              <span>Avoid automated messaging; personalize your approach</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}