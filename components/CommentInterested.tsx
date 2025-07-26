import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { Progress } from "./ui/progress";
import { SearchOperators } from "./SearchOperators";
import { PeopleSearch } from "./PeopleSearch";
import { CompanySearch } from "./CompanySearch";
import { JobSearch } from "./JobSearch";
import { AdvancedTechniques } from "./AdvancedTechniques";
import { 
  SearchIcon, 
  Users, 
  Building2, 
  Briefcase, 
  Zap, 
  BookOpen, 
  Trophy, 
  Star, 
  Target,
  CheckCircle,
  Award,
  TrendingUp,
  Sparkles
} from "lucide-react";

interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  completed: boolean;
  points: number;
  category: string;
}

interface UserProgress {
  totalPoints: number;
  level: number;
  completedAchievements: string[];
  visitedTabs: string[];
  searchesTested: number;
}

export function CommentInterested() {
  const [activeTab, setActiveTab] = useState("overview");
  const [userProgress, setUserProgress] = useState<UserProgress>({
    totalPoints: 0,
    level: 1,
    completedAchievements: [],
    visitedTabs: ['overview'],
    searchesTested: 0
  });

  const achievements: Achievement[] = [
    {
      id: "welcome",
      title: "Welcome Explorer!",
      description: "Started your Comment Interested journey",
      icon: <Sparkles className="h-5 w-5 text-yellow-500" />,
      completed: true,
      points: 10,
      category: "Getting Started"
    },
    {
      id: "operator_master",
      title: "Operator Master",
      description: "Learned all search operators",
      icon: <SearchIcon className="h-5 w-5 text-blue-500" />,
      completed: false,
      points: 25,
      category: "Search Skills"
    },
    {
      id: "people_finder",
      title: "People Finder",
      description: "Mastered people search techniques",
      icon: <Users className="h-5 w-5 text-green-500" />,
      completed: false,
      points: 25,
      category: "Search Skills"
    },
    {
      id: "company_scout",
      title: "Company Scout",
      description: "Explored company search strategies",
      icon: <Building2 className="h-5 w-5 text-purple-500" />,
      completed: false,
      points: 25,
      category: "Search Skills"
    },
    {
      id: "job_hunter",
      title: "Job Hunter",
      description: "Discovered job search secrets",
      icon: <Briefcase className="h-5 w-5 text-orange-500" />,
      completed: false,
      points: 25,
      category: "Search Skills"
    },
    {
      id: "advanced_ninja",
      title: "Search Ninja",
      description: "Completed advanced techniques",
      icon: <Zap className="h-5 w-5 text-red-500" />,
      completed: false,
      points: 35,
      category: "Expert Level"
    },
    {
      id: "completionist",
      title: "Completionist",
      description: "Visited all sections",
      icon: <Trophy className="h-5 w-5 text-gold-500" />,
      completed: false,
      points: 50,
      category: "Achievement"
    }
  ];

  // Calculate level based on points
  const calculateLevel = (points: number) => {
    return Math.floor(points / 50) + 1;
  };

  // Update progress when tab changes
  useEffect(() => {
    if (!userProgress.visitedTabs.includes(activeTab)) {
      const newVisitedTabs = [...userProgress.visitedTabs, activeTab];
      const newPoints = userProgress.totalPoints + 5; // 5 points for visiting a new tab
      
      setUserProgress(prev => ({
        ...prev,
        visitedTabs: newVisitedTabs,
        totalPoints: newPoints,
        level: calculateLevel(newPoints)
      }));

      // Check if completed all sections
      if (newVisitedTabs.length >= 6 && !userProgress.completedAchievements.includes("completionist")) {
        setTimeout(() => {
          setUserProgress(prev => ({
            ...prev,
            completedAchievements: [...prev.completedAchievements, "completionist"],
            totalPoints: prev.totalPoints + 50
          }));
        }, 1000);
      }
    }
  }, [activeTab]);

  const completedAchievements = achievements.filter(a => 
    a.completed || userProgress.completedAchievements.includes(a.id)
  );

  const progressPercentage = (userProgress.totalPoints % 50) * 2; // Progress to next level

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100">
      <div className="container mx-auto px-4 py-8">
        {/* Header with Progress */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg">
              <Sparkles className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Comment Interested
            </h1>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            Gamify your LinkedIn mastery! Complete challenges, earn badges, and level up your search skills.
          </p>

          {/* Progress Card */}
          <Card className="max-w-md mx-auto bg-white/70 backdrop-blur-sm">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-purple-600" />
                  <span className="font-semibold">Level {userProgress.level}</span>
                </div>
                <Badge variant="secondary" className="bg-purple-100 text-purple-700">
                  {userProgress.totalPoints} pts
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Progress to Level {userProgress.level + 1}</span>
                  <span>{progressPercentage}%</span>
                </div>
                <Progress value={progressPercentage} className="h-2" />
                <div className="flex items-center justify-center gap-4 text-sm">
                  <div className="flex items-center gap-1">
                    <Trophy className="h-4 w-4 text-yellow-500" />
                    <span>{completedAchievements.length}/{achievements.length}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Target className="h-4 w-4 text-blue-500" />
                    <span>{userProgress.visitedTabs.length}/6 sections</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Navigation Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
          <TabsList className="grid w-full grid-cols-6 bg-white/50 backdrop-blur-sm">
            <TabsTrigger value="overview" className="flex items-center gap-2 relative">
              <BookOpen className="h-4 w-4" />
              Overview
              {userProgress.visitedTabs.includes("overview") && (
                <CheckCircle className="h-3 w-3 text-green-500 absolute -top-1 -right-1" />
              )}
            </TabsTrigger>
            <TabsTrigger value="operators" className="flex items-center gap-2 relative">
              <SearchIcon className="h-4 w-4" />
              Operators
              {userProgress.visitedTabs.includes("operators") && (
                <CheckCircle className="h-3 w-3 text-green-500 absolute -top-1 -right-1" />
              )}
            </TabsTrigger>
            <TabsTrigger value="people" className="flex items-center gap-2 relative">
              <Users className="h-4 w-4" />
              People
              {userProgress.visitedTabs.includes("people") && (
                <CheckCircle className="h-3 w-3 text-green-500 absolute -top-1 -right-1" />
              )}
            </TabsTrigger>
            <TabsTrigger value="companies" className="flex items-center gap-2 relative">
              <Building2 className="h-4 w-4" />
              Companies
              {userProgress.visitedTabs.includes("companies") && (
                <CheckCircle className="h-3 w-3 text-green-500 absolute -top-1 -right-1" />
              )}
            </TabsTrigger>
            <TabsTrigger value="jobs" className="flex items-center gap-2 relative">
              <Briefcase className="h-4 w-4" />
              Jobs
              {userProgress.visitedTabs.includes("jobs") && (
                <CheckCircle className="h-3 w-3 text-green-500 absolute -top-1 -right-1" />
              )}
            </TabsTrigger>
            <TabsTrigger value="advanced" className="flex items-center gap-2 relative">
              <Zap className="h-4 w-4" />
              Advanced
              {userProgress.visitedTabs.includes("advanced") && (
                <CheckCircle className="h-3 w-3 text-green-500 absolute -top-1 -right-1" />
              )}
            </TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            {/* Achievement Gallery */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Trophy className="h-5 w-5 text-yellow-500" />
                  Your Achievements
                </CardTitle>
                <CardDescription>
                  Earn badges and points as you master LinkedIn search techniques
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {achievements.map((achievement) => {
                    const isCompleted = achievement.completed || userProgress.completedAchievements.includes(achievement.id);
                    return (
                      <div
                        key={achievement.id}
                        className={`p-4 rounded-lg border-2 transition-all ${
                          isCompleted
                            ? 'bg-gradient-to-br from-yellow-50 to-yellow-100 border-yellow-300'
                            : 'bg-gray-50 border-gray-200 opacity-60'
                        }`}
                      >
                        <div className="text-center space-y-2">
                          <div className="mx-auto w-fit">
                            {achievement.icon}
                          </div>
                          <h4 className="font-medium text-sm">{achievement.title}</h4>
                          <p className="text-xs text-gray-600">{achievement.description}</p>
                          <Badge variant={isCompleted ? "default" : "secondary"} className="text-xs">
                            {achievement.points} pts
                          </Badge>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Welcome to Comment Interested!</CardTitle>
                <CardDescription>
                  Your gamified journey to LinkedIn search mastery. Complete sections to earn points and unlock achievements!
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg border-2 border-transparent hover:border-blue-300 transition-all cursor-pointer"
                       onClick={() => setActiveTab("people")}>
                    <div className="flex items-center justify-between mb-3">
                      <Users className="h-8 w-8 text-blue-600" />
                      <Badge className="bg-blue-600">25 pts</Badge>
                    </div>
                    <h3 className="font-semibold mb-2">People Search</h3>
                    <p className="text-sm text-gray-600 mb-3">
                      Find professionals, colleagues, and potential connections using targeted search strategies.
                    </p>
                    <div className="flex items-center gap-1 text-sm text-blue-600">
                      <Target className="h-4 w-4" />
                      Goal: Master people finding techniques
                    </div>
                  </div>
                  
                  <div className="p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-lg border-2 border-transparent hover:border-green-300 transition-all cursor-pointer"
                       onClick={() => setActiveTab("companies")}>
                    <div className="flex items-center justify-between mb-3">
                      <Building2 className="h-8 w-8 text-green-600" />
                      <Badge className="bg-green-600">25 pts</Badge>
                    </div>
                    <h3 className="font-semibold mb-2">Company Search</h3>
                    <p className="text-sm text-gray-600 mb-3">
                      Research companies, discover industry leaders, and find potential employers or clients.
                    </p>
                    <div className="flex items-center gap-1 text-sm text-green-600">
                      <Target className="h-4 w-4" />
                      Goal: Become a company research expert
                    </div>
                  </div>
                  
                  <div className="p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg border-2 border-transparent hover:border-purple-300 transition-all cursor-pointer"
                       onClick={() => setActiveTab("jobs")}>
                    <div className="flex items-center justify-between mb-3">
                      <Briefcase className="h-8 w-8 text-purple-600" />
                      <Badge className="bg-purple-600">25 pts</Badge>
                    </div>
                    <h3 className="font-semibold mb-2">Job Search</h3>
                    <p className="text-sm text-gray-600 mb-3">
                      Discover hidden opportunities and find jobs that match your skills and career goals.
                    </p>
                    <div className="flex items-center gap-1 text-sm text-purple-600">
                      <Target className="h-4 w-4" />
                      Goal: Unlock hidden job opportunities
                    </div>
                  </div>
                </div>

                <Separator />

                <div>
                  <h3 className="font-semibold mb-4 flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-blue-600" />
                    Your Learning Path
                  </h3>
                  <div className="grid gap-4">
                    <div className="flex items-start gap-3 p-4 bg-yellow-50 rounded-lg">
                      <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white font-semibold mt-0.5">
                        1
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium">Master Search Operators</h4>
                        <p className="text-sm text-gray-600 mb-2">
                          Learn Boolean operators, quotes, and advanced search syntax
                        </p>
                        <Button 
                          size="sm" 
                          onClick={() => setActiveTab("operators")}
                          className="bg-yellow-500 hover:bg-yellow-600"
                        >
                          Start Learning (+25 pts)
                        </Button>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg">
                      <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold mt-0.5">
                        2
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium">Practice People Search</h4>
                        <p className="text-sm text-gray-600 mb-2">
                          Apply your skills to find the right professional connections
                        </p>
                        <Button 
                          size="sm" 
                          onClick={() => setActiveTab("people")}
                          className="bg-blue-500 hover:bg-blue-600"
                        >
                          Practice Now (+25 pts)
                        </Button>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3 p-4 bg-purple-50 rounded-lg">
                      <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-semibold mt-0.5">
                        3
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium">Become a Search Ninja</h4>
                        <p className="text-sm text-gray-600 mb-2">
                          Master advanced techniques and hidden LinkedIn features
                        </p>
                        <Button 
                          size="sm" 
                          onClick={() => setActiveTab("advanced")}
                          className="bg-purple-500 hover:bg-purple-600"
                        >
                          Level Up (+35 pts)
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Search Operators Tab */}
          <TabsContent value="operators">
            <div className="space-y-4">
              <Card className="bg-gradient-to-r from-yellow-50 to-orange-50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Star className="h-5 w-5 text-yellow-500" />
                    Challenge: Search Operator Master
                  </CardTitle>
                  <CardDescription>
                    Complete this section to earn 25 points and unlock the "Operator Master" achievement!
                  </CardDescription>
                </CardHeader>
              </Card>
              <SearchOperators />
            </div>
          </TabsContent>

          {/* People Search Tab */}
          <TabsContent value="people">
            <div className="space-y-4">
              <Card className="bg-gradient-to-r from-green-50 to-teal-50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Star className="h-5 w-5 text-green-500" />
                    Challenge: People Finder
                  </CardTitle>
                  <CardDescription>
                    Master people search to earn 25 points and become a "People Finder"!
                  </CardDescription>
                </CardHeader>
              </Card>
              <PeopleSearch />
            </div>
          </TabsContent>

          {/* Company Search Tab */}
          <TabsContent value="companies">
            <div className="space-y-4">
              <Card className="bg-gradient-to-r from-purple-50 to-indigo-50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Star className="h-5 w-5 text-purple-500" />
                    Challenge: Company Scout
                  </CardTitle>
                  <CardDescription>
                    Learn company research to earn 25 points and unlock "Company Scout"!
                  </CardDescription>
                </CardHeader>
              </Card>
              <CompanySearch />
            </div>
          </TabsContent>

          {/* Job Search Tab */}
          <TabsContent value="jobs">
            <div className="space-y-4">
              <Card className="bg-gradient-to-r from-orange-50 to-red-50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Star className="h-5 w-5 text-orange-500" />
                    Challenge: Job Hunter
                  </CardTitle>
                  <CardDescription>
                    Master job search techniques to earn 25 points and become a "Job Hunter"!
                  </CardDescription>
                </CardHeader>
              </Card>
              <JobSearch />
            </div>
          </TabsContent>

          {/* Advanced Techniques Tab */}
          <TabsContent value="advanced">
            <div className="space-y-4">
              <Card className="bg-gradient-to-r from-red-50 to-pink-50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Star className="h-5 w-5 text-red-500" />
                    Ultimate Challenge: Search Ninja
                  </CardTitle>
                  <CardDescription>
                    Complete advanced techniques to earn 35 points and become a "Search Ninja"!
                  </CardDescription>
                </CardHeader>
              </Card>
              <AdvancedTechniques />
            </div>
          </TabsContent>
        </Tabs>

        {/* Footer */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/70 backdrop-blur-sm rounded-full">
            <Sparkles className="h-4 w-4 text-purple-600" />
            <span className="text-sm text-gray-600">Comment Interested • Gamify Your LinkedIn Mastery</span>
          </div>
        </div>
      </div>
    </div>
  );
}