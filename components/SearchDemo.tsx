import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Search, Play, RotateCcw, Users, Building2, MapPin, Star } from "lucide-react";

interface SearchResult {
  id: string;
  type: "person" | "company" | "job";
  name: string;
  title?: string;
  company?: string;
  location?: string;
  headline?: string;
  employees?: string;
  industry?: string;
  connectionLevel?: string;
  avatarColor: string;
  isHighlighted?: boolean;
}

interface SearchDemoProps {
  query: string;
  results: SearchResult[];
  explanation: string;
  searchType: "people" | "companies" | "jobs";
}

export function SearchDemo({ query, results, explanation, searchType }: SearchDemoProps) {
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentQuery, setCurrentQuery] = useState("");
  const [showResults, setShowResults] = useState(false);
  const [visibleResults, setVisibleResults] = useState<SearchResult[]>([]);

  const startDemo = async () => {
    setIsAnimating(true);
    setCurrentQuery("");
    setShowResults(false);
    setVisibleResults([]);

    // Animate typing
    for (let i = 0; i <= query.length; i++) {
      setCurrentQuery(query.slice(0, i));
      await new Promise(resolve => setTimeout(resolve, 50));
    }

    // Wait a moment then show results
    await new Promise(resolve => setTimeout(resolve, 500));
    setShowResults(true);

    // Animate results appearing one by one
    for (let i = 0; i < results.length; i++) {
      await new Promise(resolve => setTimeout(resolve, 200));
      setVisibleResults(prev => [...prev, results[i]]);
    }

    setIsAnimating(false);
  };

  const resetDemo = () => {
    setCurrentQuery("");
    setShowResults(false);
    setVisibleResults([]);
    setIsAnimating(false);
  };

  const getSearchIcon = () => {
    switch (searchType) {
      case "people": return <Users className="h-4 w-4" />;
      case "companies": return <Building2 className="h-4 w-4" />;
      case "jobs": return <Search className="h-4 w-4" />;
      default: return <Search className="h-4 w-4" />;
    }
  };

  const renderResult = (result: SearchResult, index: number) => {
    switch (result.type) {
      case "person":
        return (
          <motion.div
            key={result.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className={`border rounded-lg p-4 bg-white ${result.isHighlighted ? 'border-blue-200 bg-blue-50' : ''}`}
          >
            <div className="flex items-start gap-3">
              <div 
                className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-semibold`}
                style={{ backgroundColor: result.avatarColor }}
              >
                {result.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
              </div>
              <div className="flex-1">
                <h4 className="font-medium">{result.name}</h4>
                <p className="text-sm text-gray-600">{result.title}</p>
                <p className="text-sm text-gray-500">{result.company}</p>
                <div className="flex items-center gap-4 mt-2">
                  <div className="flex items-center gap-1 text-xs text-gray-500">
                    <MapPin className="h-3 w-3" />
                    {result.location}
                  </div>
                  {result.connectionLevel && (
                    <Badge variant="outline" className="text-xs">
                      {result.connectionLevel}
                    </Badge>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        );

      case "company":
        return (
          <motion.div
            key={result.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className={`border rounded-lg p-4 bg-white ${result.isHighlighted ? 'border-blue-200 bg-blue-50' : ''}`}
          >
            <div className="flex items-start gap-3">
              <div 
                className={`w-12 h-12 rounded-lg flex items-center justify-center text-white font-semibold`}
                style={{ backgroundColor: result.avatarColor }}
              >
                <Building2 className="h-6 w-6" />
              </div>
              <div className="flex-1">
                <h4 className="font-medium">{result.name}</h4>
                <p className="text-sm text-gray-600">{result.headline}</p>
                <div className="flex items-center gap-4 mt-2">
                  <div className="flex items-center gap-1 text-xs text-gray-500">
                    <Users className="h-3 w-3" />
                    {result.employees}
                  </div>
                  <div className="flex items-center gap-1 text-xs text-gray-500">
                    <Star className="h-3 w-3" />
                    {result.industry}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        );

      case "job":
        return (
          <motion.div
            key={result.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className={`border rounded-lg p-4 bg-white ${result.isHighlighted ? 'border-green-200 bg-green-50' : ''}`}
          >
            <div className="flex items-start gap-3">
              <div 
                className={`w-12 h-12 rounded-lg flex items-center justify-center text-white font-semibold`}
                style={{ backgroundColor: result.avatarColor }}
              >
                <Search className="h-6 w-6" />
              </div>
              <div className="flex-1">
                <h4 className="font-medium">{result.title}</h4>
                <p className="text-sm text-gray-600">{result.company}</p>
                <div className="flex items-center gap-4 mt-2">
                  <div className="flex items-center gap-1 text-xs text-gray-500">
                    <MapPin className="h-3 w-3" />
                    {result.location}
                  </div>
                  <Badge variant="outline" className="text-xs text-green-600">
                    Easy Apply
                  </Badge>
                </div>
              </div>
            </div>
          </motion.div>
        );
    }
  };

  return (
    <Card className="overflow-hidden">
      <CardContent className="p-0">
        {/* Mock LinkedIn Search Bar */}
        <div className="bg-white border-b p-4">
          <div className="flex items-center gap-3 mb-3">
            <div className="flex items-center gap-2">
              {getSearchIcon()}
              <span className="font-medium capitalize">{searchType}</span>
            </div>
            <div className="flex gap-2">
              <Button
                onClick={startDemo}
                disabled={isAnimating}
                size="sm"
                className="h-7"
              >
                <Play className="h-3 w-3 mr-1" />
                Demo
              </Button>
              <Button
                onClick={resetDemo}
                variant="outline"
                size="sm"
                className="h-7"
              >
                <RotateCcw className="h-3 w-3 mr-1" />
                Reset
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="flex items-center gap-2 p-3 border rounded-lg bg-gray-50">
              <Search className="h-4 w-4 text-gray-400" />
              <motion.div className="flex-1 font-mono text-sm">
                {currentQuery}
                {isAnimating && currentQuery.length < query.length && (
                  <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.5, repeat: Infinity }}
                    className="ml-0.5"
                  >
                    |
                  </motion.span>
                )}
              </motion.div>
            </div>
          </div>
        </div>

        {/* Results Area */}
        <div className="p-4">
          <AnimatePresence>
            {showResults && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="text-sm text-gray-600">
                    About {results.length} results
                  </div>
                  <div className="text-xs text-blue-600 bg-blue-50 px-2 py-1 rounded">
                    {explanation}
                  </div>
                </div>
                
                <div className="space-y-3">
                  {visibleResults.map((result, index) => renderResult(result, index))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </CardContent>
    </Card>
  );
}