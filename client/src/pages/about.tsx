import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Building, Zap, ServerCog, Handshake, Mail, Download } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="py-20 bg-card pt-32" data-testid="section-about">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl font-bold text-foreground mb-6" data-testid="heading-about">
                About TechDoc Profesional
              </h1>
              <p className="text-xl text-muted-foreground mb-6 leading-relaxed" data-testid="text-about-intro">
                I'm a technical documentation specialist focused on helping corporations streamline 
                their documentation processes while maintaining the highest professional standards.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed" data-testid="text-about-approach">
                My approach is simple yet effective: take the documentation tasks that consume your 
                valuable engineering and technical resources, and handle them with precision and 
                professionalism. Whether it's enhancing existing layouts with accurate information 
                or creating comprehensive training materials, I ensure your team can focus on what they do best.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6 mb-8">
                <div className="flex items-start space-x-3" data-testid="feature-corporate-focus">
                  <Building className="text-primary text-xl mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground">Corporate Focus</h4>
                    <p className="text-sm text-muted-foreground">Specialized in serving enterprise and corporate clients</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3" data-testid="feature-fast-delivery">
                  <Zap className="text-primary text-xl mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground">Fast Delivery</h4>
                    <p className="text-sm text-muted-foreground">Quick turnaround times without compromising quality</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3" data-testid="feature-technical-expertise">
                  <ServerCog className="text-primary text-xl mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground">Technical Expertise</h4>
                    <p className="text-sm text-muted-foreground">Deep understanding of technical documentation requirements</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3" data-testid="feature-partnership">
                  <Handshake className="text-primary text-xl mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground">Partnership Approach</h4>
                    <p className="text-sm text-muted-foreground">Long-term relationships built on trust and results</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button size="lg" className="hover-lift" data-testid="button-get-in-touch">
                    <Mail className="mr-2 h-5 w-5" />
                    Get In Touch
                  </Button>
                </Link>
                <Button variant="outline" size="lg" className="hover-lift" data-testid="button-download-capabilities">
                  <Download className="mr-2 h-5 w-5" />
                  Download Capabilities
                </Button>
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                alt="Professional freelancer workspace" 
                className="rounded-2xl shadow-lg w-full h-auto hover-lift" 
                data-testid="img-about-workspace"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
