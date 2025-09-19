import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TrendingUp, Book, List, Box, GraduationCap, Edit, Rocket } from "lucide-react";

export default function ServicesGrid() {
  const services = [
    {
      icon: <Table className="text-blue-600 text-xl text-muted-foreground text-lg leading-relaxed text-justify" />,
      title: "Complex Service",
      description: "Professional documentation created from scratch. The complete documentation package your product needs.",
      features: ["Layout Design", "Graphic design", "Filling with data"]
    },
    {
      icon: <TrendingUp className="text-green-600 text-xl" />,
      title: "Data Sheets",
      description: "Professional product data sheets with technical specifications, performance metrics, and compliance information.",
      features: ["Technical specifications", "Performance data", "Compliance standards"]
    },
    {
      icon: <Book className="text-purple-600 text-xl" />,
      title: "User Manuals",
      description: "Comprehensive user manuals with step-by-step instructions, troubleshooting guides, and safety information.",
      features: ["Step-by-step procedures", "Troubleshooting guides", "Safety protocols"]
    },
    {
      icon: <List className="text-orange-600 text-xl" />,
      title: "Work Instructions",
      description: "Detailed work instructions for manufacturing, assembly, and quality control processes.",
      features: ["Manufacturing procedures", "Assembly instructions", "Quality control steps"]
    },
    {
      icon: <Box className="text-red-600 text-xl" />,
      title: "Product Renders",
      description: "Professional 3D product renders and technical illustrations for documentation and marketing materials.",
      features: ["3D visualizations", "Technical illustrations", "Assembly diagrams"]
    },
    {
      icon: <GraduationCap className="text-indigo-600 text-xl" />,
      title: "Training Materials",
      description: "Field training and installation training materials including presentations, handouts, and assessment tools.",
      features: ["Training presentations", "Installation guides", "Assessment materials"]
    }
  ];

  return (
    <section className="py-20 bg-background" data-testid="section-services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4" data-testid="heading-services">
            Comprehensive Documentation Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-services-description">
            From enhancing your existing layouts to creating complete documentation packages from scratch.
          </p>
        </div>

        {/* Current Service Approach */}
        <div className="mb-18">
          <h3 className="text-2xl font-semibold text-foreground mb-8 text-center" data-testid="heading-current-approach">
            
          </h3>
          <div className="bg-accent/50 border border-border rounded-lg p-8 mb-12">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <Edit className="text-primary-foreground text-xl" />
              </div>
              <div>
                <h4 className="text-3xl font-semibold text-foreground mb-2" data-testid="heading-layout-enhancement">
                  Client Layout Enhancement
                </h4>
                <p className="text-muted-foreground text-lg leading-relaxed" data-testid="text-layout-enhancement">
                  You provide the document layout and structure. We focus on adding accurate technical information, 
                  professional formatting, and ensuring consistency across all materials. This approach allows 
                  for faster turnaround times while maintaining your established brand guidelines.

                  During the implementation of your project, we will be in constant contact so that the final result is 100% satisfactory to you.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="service-card" data-testid={`card-service-${service.title.toLowerCase().replace(/\s+/g, '-')}`}>
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  {service.icon}
                </div>
                <CardTitle className="text-xl font-semibold text-foreground">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">  
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Future Services */}
        <div className="bg-gradient-to-r from-primary/5 to-purple-500/5 border border-primary/20 rounded-lg p-8" data-testid="section-future-services">
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-gradient-to-r from-primary to-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <Rocket className="text-white text-xl" />
            </div>
            <div>
              <h4 className="text-xl font-semibold text-foreground mb-2" data-testid="heading-future-expansion">
                Customer Focus
              </h4>
              <p className="text-muted-foreground text-lg leading-relaxed mb-4" data-testid="text-future-expansion">
                The entire process is carried out in close cooperation with the client 
                and the flow of information is synchronized to ensure the best quality and reflection of your expectations.
              </p>
              <div className="flex items-center text-sm text-muted-foreground">
                <span data-testid="text-coming-soon">2026 - Complete Documentation Solutions</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
