import { Card, CardContent } from "@/components/ui/card";
import { Star, User } from "lucide-react";

export default function Testimonials() {
 const testimonials = [
    {
      rating: 5,
      content: "TechDoc Profesional saved our engineering team countless hours on documentation. The quality and turnaround time exceeded our expectations.",
      author: "Sarah Johnson",
      position: "Engineering Manager, TechCorp"
    },
    {
      rating: 5,
      content: "Professional, efficient, and reliable. Our training materials are now consistently high-quality and our team can focus on core development work.",
      author: "Michael Chen",
      position: "Operations Director, IndustrialSys"
    },
    {
      rating: 5,
      content: "The documentation quality improvement was immediate. Our customer support team reports fewer technical questions thanks to clearer user manuals.",
      author: "Lisa Rodriguez",
      position: "Product Manager, ManufacturingPro"
    }
  ];

  return (
    <section className="py-20 bg-card" data-testid="section-testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4" data-testid="heading-testimonials">
            Client Testimonials
          </h2>
          <p className="text-xl text-muted-foreground" data-testid="text-testimonials-subtitle">
            What our corporate clients say about our documentation services
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="testimonial-card border border-border" data-testid={`card-testimonial-${index + 1}`}>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="text-yellow-400 flex space-x-1" data-testid={`rating-testimonial-${index + 1}`}>
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-muted-foreground mb-4 italic" data-testid={`text-testimonial-content-${index + 1}`}>
                  "{testimonial.content}"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                    <User className="text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground" data-testid={`text-testimonial-author-${index + 1}`}>
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-muted-foreground" data-testid={`text-testimonial-position-${index + 1}`}>
                      {testimonial.position}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
