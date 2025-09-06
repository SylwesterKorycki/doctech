import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

export default function Portfolio() {
  const portfolioItems = [
    {
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
      title: "Data Sheet Enhancement",
      description: "Industrial equipment specifications"
    },
    {
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
      title: "Training Material",
      description: "Installation training presentation"
    },
    {
      image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
      title: "User Manual",
      description: "Equipment operation guide"
    },
    {
      image: "https://images.unsplash.com/photo-1553028826-f4804a6dba3b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
      title: "CPI Documentation",
      description: "Process improvement analysis"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="py-20 bg-background pt-32" data-testid="section-portfolio">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-foreground mb-4" data-testid="heading-portfolio">
              Portfolio Samples
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-portfolio-description">
              Examples of professional documentation work across various industries and document types.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {portfolioItems.map((item, index) => (
              <Card key={index} className="bg-card border border-border hover-lift overflow-hidden" data-testid={`card-portfolio-${index + 1}`}>
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-48 object-cover" 
                  data-testid={`img-portfolio-${index + 1}`}
                />
                <CardContent className="p-4">
                  <h4 className="font-semibold text-foreground mb-2" data-testid={`text-portfolio-title-${index + 1}`}>
                    {item.title}
                  </h4>
                  <p className="text-sm text-muted-foreground" data-testid={`text-portfolio-description-${index + 1}`}>
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" className="hover-lift" data-testid="button-view-full-portfolio">
              <ExternalLink className="mr-2 h-5 w-5" />
              View Full Portfolio
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
