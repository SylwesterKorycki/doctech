import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Rocket, Play, CheckCircle, Shield, Handshake } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="pt-20 pb-16 bg-gradient-to-br from-background via-background to-secondary/30" data-testid="section-hero">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight mb-6" data-testid="heading-hero">
              Professional <span className="gradient-text">Technical Documentation</span> Services
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed" data-testid="text-hero-description">
              Free up your qualified resources from time-consuming documentation tasks. 
              I specialize in creating professional data sheets, manuals, training materials, 
              and product renders that save your team valuable time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link href="/contact">
                <Button size="lg" className="hover-lift" data-testid="button-start-project">
                  <Rocket className="mr-2 h-5 w-5" />
                  Start Your Project
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button variant="outline" size="lg" className="hover-lift" data-testid="button-view-portfolio">
                  <Play className="mr-2 h-5 w-5" />
                  View Portfolio
                </Button>
              </Link>
            </div>
            <div className="flex items-center space-x-8 text-sm text-muted-foreground">
              <div className="flex items-center" data-testid="feature-fast-turnaround">
                <CheckCircle className="text-green-500 mr-2 h-4 w-4" />
                <span>Fast Turnaround</span>
              </div>
              <div className="flex items-center" data-testid="feature-professional-quality">
                <Shield className="text-green-500 mr-2 h-4 w-4" />
                <span>Professional Quality</span>
              </div>
              <div className="flex items-center" data-testid="feature-trusted">
                <Handshake className="text-green-500 mr-2 h-4 w-4" />
                <span>Trusted by Corporations</span>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <img 
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Professional workspace with technical documentation" 
              className="rounded-2xl shadow-2xl w-full h-auto hover-lift" 
              data-testid="img-hero-workspace"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
