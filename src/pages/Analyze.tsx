
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Clock, Code, ArrowLeft, Play, AlertCircle, CheckCircle2, Loader2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

interface AnalysisResult {
  complexity: string;
  error?: string;
  details?: {
    loops: number;
    recursion: boolean;
    functions: number;
  };
}

const Analyze = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [code, setCode] = useState("");
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const analyzeCode = async () => {
    if (!code.trim()) {
      toast({
        title: "No code provided",
        description: "Please enter some code to analyze",
        variant: "destructive",
      });
      return;
    }

    setIsAnalyzing(true);
    
    try {
      // Simulate the backend analysis for now
      // In a real implementation, this would call your Python FastAPI backend
      await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate API call
      
      // Simple client-side analysis for demo purposes
      const lines = code.split('\n');
      let loops = 0;
      let recursion = false;
      let functions = 0;
      
      lines.forEach(line => {
        if (line.includes('for ') || line.includes('while ')) loops++;
        if (line.includes('def ')) functions++;
        // Simple recursion detection (very basic)
        const funcName = line.match(/def\s+(\w+)/);
        if (funcName && code.includes(funcName[1] + '(')) {
          recursion = true;
        }
      });

      let complexity;
      if (recursion) {
        complexity = "O(2^n)";
      } else if (loops === 0) {
        complexity = "O(1)";
      } else if (loops === 1) {
        complexity = "O(n)";
      } else if (loops === 2) {
        complexity = "O(n²)";
      } else {
        complexity = `O(n^${loops})`;
      }

      setResult({
        complexity,
        details: { loops, recursion, functions }
      });

      toast({
        title: "Analysis complete",
        description: `Time complexity: ${complexity}`,
      });
    } catch (error) {
      setResult({
        complexity: "",
        error: "Analysis failed. Please check your code syntax."
      });
      toast({
        title: "Analysis failed",
        description: "There was an error analyzing your code",
        variant: "destructive",
      });
    } finally {
      setIsAnalyzing(false);
    }
  };

  const getComplexityColor = (complexity: string) => {
    if (complexity.includes("O(1)")) return "bg-green-500/20 text-green-400 border-green-500/30";
    if (complexity.includes("O(n)") && !complexity.includes("^")) return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
    if (complexity.includes("O(n²)") || complexity.includes("O(n^2)")) return "bg-orange-500/20 text-orange-400 border-orange-500/30";
    return "bg-red-500/20 text-red-400 border-red-500/30";
  };

  const getComplexityDescription = (complexity: string) => {
    if (complexity.includes("O(1)")) return "Excellent! Constant time complexity.";
    if (complexity.includes("O(n)") && !complexity.includes("^")) return "Good! Linear time complexity.";
    if (complexity.includes("O(n²)") || complexity.includes("O(n^2)")) return "Consider optimization. Quadratic time complexity.";
    return "High complexity. Consider algorithm optimization.";
  };

  return (
    <div className="min-h-screen gradient-bg">
      {/* Header */}
      <header className="border-b border-border/20 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center glow-blue">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-foreground">TIME SCOPE</h1>
                <p className="text-sm text-muted-foreground">Code Complexity Analyzer</p>
              </div>
            </div>
            <Button 
              variant="outline" 
              onClick={() => navigate("/")}
              className="border-border/30 hover:bg-accent/10"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Code Input */}
          <Card className="bg-card/50 border-border/20 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center text-foreground">
                <Code className="w-5 h-5 mr-2 text-primary" />
                Code Input
              </CardTitle>
              <CardDescription>
                Paste your Python code below for complexity analysis
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Textarea
                placeholder="def example_function():&#10;    for i in range(n):&#10;        for j in range(n):&#10;            print(i, j)&#10;    return result"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                className="min-h-[300px] font-mono code-bg border-border/30 focus:border-primary/50"
              />
              <Button 
                onClick={analyzeCode} 
                disabled={isAnalyzing}
                className="w-full bg-primary hover:bg-primary/90 glow-blue"
              >
                {isAnalyzing ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Analyzing...
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4 mr-2" />
                    Analyze Code
                  </>
                )}
              </Button>
            </CardContent>
          </Card>

          {/* Results */}
          <Card className="bg-card/50 border-border/20 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center text-foreground">
                <Clock className="w-5 h-5 mr-2 text-primary" />
                Analysis Results
              </CardTitle>
              <CardDescription>
                Time complexity and performance insights
              </CardDescription>
            </CardHeader>
            <CardContent>
              {!result ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-8 h-8 text-primary/50" />
                  </div>
                  <p className="text-muted-foreground">Enter code above and click "Analyze Code" to see results</p>
                </div>
              ) : result.error ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-red-500/10 flex items-center justify-center mx-auto mb-4">
                    <AlertCircle className="w-8 h-8 text-red-400" />
                  </div>
                  <p className="text-red-400 font-medium mb-2">Analysis Error</p>
                  <p className="text-muted-foreground text-sm">{result.error}</p>
                </div>
              ) : (
                <div className="space-y-6">
                  {/* Main Result */}
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 glow-blue">
                      <CheckCircle2 className="w-8 h-8 text-primary" />
                    </div>
                    <Badge className={`text-lg px-4 py-2 ${getComplexityColor(result.complexity)}`}>
                      {result.complexity}
                    </Badge>
                    <p className="text-muted-foreground mt-2">
                      {getComplexityDescription(result.complexity)}
                    </p>
                  </div>

                  {/* Details */}
                  {result.details && (
                    <div className="grid grid-cols-3 gap-4">
                      <div className="text-center p-4 rounded-lg bg-secondary/50">
                        <div className="text-2xl font-bold text-primary">{result.details.loops}</div>
                        <div className="text-sm text-muted-foreground">Loops</div>
                      </div>
                      <div className="text-center p-4 rounded-lg bg-secondary/50">
                        <div className="text-2xl font-bold text-primary">{result.details.functions}</div>
                        <div className="text-sm text-muted-foreground">Functions</div>
                      </div>
                      <div className="text-center p-4 rounded-lg bg-secondary/50">
                        <div className="text-2xl font-bold text-primary">
                          {result.details.recursion ? "Yes" : "No"}
                        </div>
                        <div className="text-sm text-muted-foreground">Recursion</div>
                      </div>
                    </div>
                  )}

                  {/* Recommendations */}
                  <Card className="bg-secondary/30 border-border/20">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-sm text-foreground">Optimization Tips</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <ul className="text-sm text-muted-foreground space-y-1">
                        {result.complexity.includes("O(2^n)") && (
                          <li>• Consider memoization or dynamic programming</li>
                        )}
                        {result.complexity.includes("O(n²)") && (
                          <li>• Look for opportunities to reduce nested loops</li>
                        )}
                        {result.details?.loops > 2 && (
                          <li>• Consider algorithmic improvements to reduce iterations</li>
                        )}
                        <li>• Profile your code with real data to verify performance</li>
                        <li>• Consider data structure optimizations</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Analyze;
