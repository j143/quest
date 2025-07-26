import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";
import { Copy, Search } from "lucide-react";
import { Button } from "./ui/button";
import { toast } from "sonner@2.0.3";
import { SearchDemo } from "./SearchDemo";

export function SearchOperators() {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success("Copied to clipboard!");
  };

  const operators = [
    {
      category: "Boolean Operators",
      operators: [
        {
          operator: "AND",
          description: "Include both terms in results",
          example: "marketing AND manager",
          explanation: "Finds profiles with both 'marketing' and 'manager'"
        },
        {
          operator: "OR",
          description: "Include either term in results",
          example: "CEO OR founder",
          explanation: "Finds profiles with either 'CEO' or 'founder'"
        },
        {
          operator: "NOT",
          description: "Exclude specific terms",
          example: "developer NOT intern",
          explanation: "Finds developers but excludes interns"
        }
      ]
    },
    {
      category: "Phrase & Wildcard Operators",
      operators: [
        {
          operator: '""',
          description: "Search for exact phrases",
          example: '"product manager"',
          explanation: "Finds exact phrase 'product manager', not separate words"
        },
        {
          operator: "*",
          description: "Wildcard for unknown words",
          example: "director * marketing",
          explanation: "Finds 'director of marketing', 'director for marketing', etc."
        }
      ]
    },
    {
      category: "LinkedIn-Specific Operators",
      operators: [
        {
          operator: "title:",
          description: "Search in job titles only",
          example: 'title:"software engineer"',
          explanation: "Searches for 'software engineer' in job titles specifically"
        },
        {
          operator: "company:",
          description: "Search by current company",
          example: "company:Google",
          explanation: "Finds people currently working at Google"
        },
        {
          operator: "school:",
          description: "Search by education",
          example: "school:Stanford",
          explanation: "Finds people who attended Stanford University"
        },
        {
          operator: "industry:",
          description: "Filter by industry",
          example: "industry:technology",
          explanation: "Finds people in the technology industry"
        }
      ]
    },
    {
      category: "Advanced Combinations",
      operators: [
        {
          operator: "Parentheses ()",
          description: "Group search terms",
          example: "(CEO OR founder) AND startup",
          explanation: "Finds CEOs or founders who work at startups"
        },
        {
          operator: "Minus -",
          description: "Exclude terms (alternative to NOT)",
          example: "engineer -intern",
          explanation: "Same as 'engineer NOT intern'"
        }
      ]
    }
  ];

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Search className="h-5 w-5" />
            LinkedIn Search Operators
          </CardTitle>
          <CardDescription>
            Master these search operators to find exactly what you're looking for on LinkedIn. 
            Click any example to copy it to your clipboard.
          </CardDescription>
        </CardHeader>
      </Card>

      {operators.map((category, categoryIndex) => (
        <Card key={categoryIndex}>
          <CardHeader>
            <CardTitle className="text-lg">{category.category}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {category.operators.map((op, index) => (
                <div key={index} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <Badge variant="secondary" className="font-mono">
                        {op.operator}
                      </Badge>
                      <span className="font-medium">{op.description}</span>
                    </div>
                  </div>
                  
                  <div className="mt-3 space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-600">Example:</span>
                      <code className="px-2 py-1 bg-gray-100 rounded text-sm font-mono">
                        {op.example}
                      </code>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => copyToClipboard(op.example)}
                        className="h-6 w-6 p-0"
                      >
                        <Copy className="h-3 w-3" />
                      </Button>
                    </div>
                    <p className="text-sm text-gray-600">{op.explanation}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}

      <Card className="bg-gradient-to-r from-blue-50 to-indigo-50">
        <CardHeader>
          <CardTitle className="text-lg">Pro Tips for Using Operators</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-semibold mt-0.5">
                💡
              </div>
              <div>
                <h4 className="font-medium">Combine Multiple Operators</h4>
                <p className="text-sm text-gray-600">
                  Use multiple operators together: <code className="bg-white px-1 rounded">title:"data scientist" AND company:Netflix</code>
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-semibold mt-0.5">
                🎯
              </div>
              <div>
                <h4 className="font-medium">Start Broad, Then Narrow</h4>
                <p className="text-sm text-gray-600">
                  Begin with general terms, then add operators to refine your results
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-white text-sm font-semibold mt-0.5">
                🔍
              </div>
              <div>
                <h4 className="font-medium">Case Doesn't Matter</h4>
                <p className="text-sm text-gray-600">
                  LinkedIn search is case-insensitive: "CEO" and "ceo" return the same results
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Interactive Demonstrations */}
      <Card>
        <CardHeader>
          <CardTitle>See Operators in Action</CardTitle>
          <CardDescription>
            Try these interactive examples to see how different operators affect your search results.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h4 className="font-medium mb-2">Boolean AND Operator</h4>
            <p className="text-sm text-gray-600 mb-3">Shows profiles that contain BOTH terms</p>
            <SearchDemo
              query="marketing AND manager"
              results={[
                {
                  id: "op1",
                  type: "person",
                  name: "Sarah Wilson",
                  title: "Marketing Manager",
                  company: "TechCorp",
                  location: "New York, NY",
                  connectionLevel: "2nd",
                  avatarColor: "#3B82F6",
                  isHighlighted: true
                },
                {
                  id: "op2", 
                  type: "person",
                  name: "Mike Chen",
                  title: "Senior Marketing Manager",
                  company: "StartupInc",
                  location: "San Francisco, CA",
                  connectionLevel: "3rd",
                  avatarColor: "#10B981",
                  isHighlighted: true
                }
              ]}
              explanation="Both 'marketing' and 'manager' appear in results"
              searchType="people"
            />
          </div>

          <div>
            <h4 className="font-medium mb-2">Quote Operator for Exact Phrases</h4>
            <p className="text-sm text-gray-600 mb-3">Shows profiles with the exact phrase</p>
            <SearchDemo
              query={'"product manager"'}
              results={[
                {
                  id: "op3",
                  type: "person",
                  name: "Lisa Rodriguez",
                  title: "Product Manager",
                  company: "Spotify",
                  location: "Stockholm, Sweden",
                  connectionLevel: "2nd",
                  avatarColor: "#1DB954",
                  isHighlighted: true
                },
                {
                  id: "op4",
                  type: "person", 
                  name: "James Park",
                  title: "Senior Product Manager",
                  company: "Airbnb",
                  location: "San Francisco, CA",
                  connectionLevel: "3rd",
                  avatarColor: "#FF5A5F",
                  isHighlighted: true
                }
              ]}
              explanation="Exact phrase 'product manager' found in titles"
              searchType="people"
            />
          </div>

          <div>
            <h4 className="font-medium mb-2">NOT Operator for Exclusions</h4>
            <p className="text-sm text-gray-600 mb-3">Shows engineers but excludes interns</p>
            <SearchDemo
              query="engineer NOT intern"
              results={[
                {
                  id: "op5",
                  type: "person",
                  name: "Alex Kumar",
                  title: "Software Engineer",
                  company: "Google",
                  location: "Mountain View, CA",
                  connectionLevel: "2nd",
                  avatarColor: "#4285F4",
                  isHighlighted: true
                },
                {
                  id: "op6",
                  type: "person",
                  name: "Rachel Kim",
                  title: "Senior Engineer", 
                  company: "Microsoft",
                  location: "Seattle, WA",
                  connectionLevel: "3rd",
                  avatarColor: "#00BCF2",
                  isHighlighted: true
                }
              ]}
              explanation="Engineers shown, interns excluded from results"
              searchType="people"
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}