import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { SearchOperators } from "./SearchOperators";
import { PeopleSearch } from "./PeopleSearch";
import { CompanySearch } from "./CompanySearch";
import { JobSearch } from "./JobSearch";
import { AdvancedTechniques } from "./AdvancedTechniques";
import { SearchIcon, Users, Building2, Briefcase, Zap, BookOpen } from "lucide-react";

export function LinkedInSearchTips() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-3 bg-blue-600 rounded-lg">
              <SearchIcon className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              LinkedIn Search Mastery
            </h1>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Master the art of LinkedIn searching with our comprehensive guide. Learn advanced techniques, 
            search operators, and best practices to find exactly what you're looking for.
          </p>
        </div>

        {/* Navigation Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
          <TabsList className="grid w-full grid-cols-6 bg-white/50 backdrop-blur-sm">
            <TabsTrigger value="overview" className="flex items-center gap-2">
              <BookOpen className="h-4 w-4" />
              Overview
            </TabsTrigger>
            <TabsTrigger value="operators" className="flex items-center gap-2">
              <SearchIcon className="h-4 w-4" />
              Operators
            </TabsTrigger>
            <TabsTrigger value="people" className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              People
            </TabsTrigger>
            <TabsTrigger value="companies" className="flex items-center gap-2">
              <Building2 className="h-4 w-4" />
              Companies
            </TabsTrigger>
            <TabsTrigger value="jobs" className="flex items-center gap-2">
              <Briefcase className="h-4 w-4" />
              Jobs
            </TabsTrigger>
            <TabsTrigger value="advanced" className="flex items-center gap-2">
              <Zap className="h-4 w-4" />
              Advanced
            </TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Welcome to LinkedIn Search Mastery</CardTitle>
                <CardDescription>
                  Learn how to leverage LinkedIn's powerful search capabilities to find the right people, 
                  companies, jobs, and content for your professional goals.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg">
                    <Users className="h-8 w-8 text-blue-600 mb-3" />
                    <h3 className="font-semibold mb-2">People Search</h3>
                    <p className="text-sm text-gray-600">
                      Find professionals, colleagues, and potential connections using targeted search strategies.
                    </p>
                  </div>
                  
                  <div className="p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-lg">
                    <Building2 className="h-8 w-8 text-green-600 mb-3" />
                    <h3 className="font-semibold mb-2">Company Search</h3>
                    <p className="text-sm text-gray-600">
                      Research companies, discover industry leaders, and find potential employers or clients.
                    </p>
                  </div>
                  
                  <div className="p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg">
                    <Briefcase className="h-8 w-8 text-purple-600 mb-3" />
                    <h3 className="font-semibold mb-2">Job Search</h3>
                    <p className="text-sm text-gray-600">
                      Discover hidden opportunities and find jobs that match your skills and career goals.
                    </p>
                  </div>
                </div>

                <Separator />

                <div>
                  <h3 className="font-semibold mb-4">Quick Tips to Get Started</h3>
                  <div className="grid gap-4">
                    <div className="flex items-start gap-3 p-4 bg-yellow-50 rounded-lg">
                      <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center text-white text-sm font-semibold mt-0.5">
                        1
                      </div>
                      <div>
                        <h4 className="font-medium">Use Boolean Operators</h4>
                        <p className="text-sm text-gray-600">
                          Combine keywords with AND, OR, NOT to refine your searches
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg">
                      <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-semibold mt-0.5">
                        2
                      </div>
                      <div>
                        <h4 className="font-medium">Use Quotes for Exact Phrases</h4>
                        <p className="text-sm text-gray-600">
                          Search for "product manager" instead of product manager for exact matches
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3 p-4 bg-green-50 rounded-lg">
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-semibold mt-0.5">
                        3
                      </div>
                      <div>
                        <h4 className="font-medium">Leverage Filters</h4>
                        <p className="text-sm text-gray-600">
                          Use location, industry, company size, and connection filters to narrow results
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Search Operators Tab */}
          <TabsContent value="operators">
            <SearchOperators />
          </TabsContent>

          {/* People Search Tab */}
          <TabsContent value="people">
            <PeopleSearch />
          </TabsContent>

          {/* Company Search Tab */}
          <TabsContent value="companies">
            <CompanySearch />
          </TabsContent>

          {/* Job Search Tab */}
          <TabsContent value="jobs">
            <JobSearch />
          </TabsContent>

          {/* Advanced Techniques Tab */}
          <TabsContent value="advanced">
            <AdvancedTechniques />
          </TabsContent>
        </Tabs>

        {/* Footer */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/50 backdrop-blur-sm rounded-full">
            <SearchIcon className="h-4 w-4 text-blue-600" />
            <span className="text-sm text-gray-600">Master LinkedIn Search • Find Your Next Opportunity</span>
          </div>
        </div>
      </div>
    </div>
  );
}