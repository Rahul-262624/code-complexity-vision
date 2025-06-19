
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Code, Zap, ArrowRight, Activity, Target } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  const handleAnalyze = () => {
    navigate("/analyze");
  };

  return (
    <div className="min-h-screen gradient-bg">
      {/* Header */}
      <header className="border-b border-border/20 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center glow-blue">
              <Clock className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-foreground">TIME SCOPE</h1>
              <p className="text-sm text-muted-foreground">Code Complexity Analyzer</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6 glow-accent">
            <Activity className="w-10 h-10 text-primary" />
          </div>
          <h2 className="text-5xl font-bold text-foreground mb-6 bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
            Analyze Code Complexity
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Discover the time complexity of your code with advanced AST analysis. 
            Get instant insights into performance characteristics and optimization opportunities.
          </p>
          
          <Button 
            onClick={handleAnalyze}
            size="lg" 
            className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 glow-blue group"
          >
            Start Analysis
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="bg-card/50 border-border/20 backdrop-blur-sm hover:bg-card/70 transition-all duration-300">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                <Code className="w-6 h-6 text-primary" />
              </div>
              <CardTitle className="text-foreground">AST Analysis</CardTitle>
              <CardDescription>
                Deep code analysis using Abstract Syntax Trees for accurate complexity detection
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="bg-card/50 border-border/20 backdrop-blur-sm hover:bg-card/70 transition-all duration-300">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <CardTitle className="text-foreground">Instant Results</CardTitle>
              <CardDescription>
                Get immediate feedback on your code's time complexity with detailed explanations
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="bg-card/50 border-border/20 backdrop-blur-sm hover:bg-card/70 transition-all duration-300">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <CardTitle className="text-foreground">Optimization Insights</CardTitle>
              <CardDescription>
                Receive actionable recommendations to improve your code's performance
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        {/* How it Works */}
        <Card className="bg-card/30 border-border/20 backdrop-blur-sm">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-foreground">How TIME SCOPE Works</CardTitle>
            <CardDescription className="text-lg">
              Our advanced algorithm analyzes your code structure to determine computational complexity
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto text-primary font-bold">
                  1
                </div>
                <h3 className="font-semibold text-foreground">Paste Code</h3>
                <p className="text-sm text-muted-foreground">Input your code snippet</p>
              </div>
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto text-primary font-bold">
                  2
                </div>
                <h3 className="font-semibold text-foreground">AST Parse</h3>
                <p className="text-sm text-muted-foreground">Parse into syntax tree</p>
              </div>
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto text-primary font-bold">
                  3
                </div>
                <h3 className="font-semibold text-foreground">Analyze</h3>
                <p className="text-sm text-muted-foreground">Detect loops & recursion</p>
              </div>
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto text-primary font-bold">
                  4
                </div>
                <h3 className="font-semibold text-foreground">Results</h3>
                <p className="text-sm text-muted-foreground">Get complexity rating</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/20 mt-20">
        <div className="container mx-auto px-6 py-8 text-center">
          <p className="text-muted-foreground">
            © 2024 TIME SCOPE. Empowering developers with code complexity insights.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
