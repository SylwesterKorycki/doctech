import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import HeroSection from "@/components/hero-section";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, DollarSign, Award } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <HeroSection />

      {/* Value Proposition Section */}
      <section className="py-16 bg-card" data-testid="section-value-proposition">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4" data-testid="heading-why-choose">
              Why Choose TechDoc Profesional?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-why-choose-subtitle">
              Save time and resources by outsourcing your technical documentation needs to a specialist.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-6 bg-background border border-border hover-lift" data-testid="card-time-savings">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="text-primary text-2xl" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Time Savings</h3>
                <p className="text-muted-foreground">Free up your qualified engineers and technical staff from documentation tasks, allowing them to focus on core business activities.</p>
              </CardContent>
            </Card>
            <Card className="text-center p-6 bg-background border border-border hover-lift" data-testid="card-cost-effective">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="text-primary text-2xl" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Cost Effective</h3>
                <p className="text-muted-foreground">Reduce overhead costs by outsourcing documentation work instead of hiring full-time technical writers.</p>
              </CardContent>
            </Card>
            <Card className="text-center p-6 bg-background border border-border hover-lift" data-testid="card-professional-quality">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="text-primary text-2xl" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Professional Quality</h3>
                <p className="text-muted-foreground">Get polished, professional documentation that reflects your company's high standards and technical expertise.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
