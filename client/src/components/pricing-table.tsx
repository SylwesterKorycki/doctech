import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { Table, Book, GraduationCap, Box, Calculator } from "lucide-react";

export default function PricingTable() {
  const pricingTiers = [
    {
      icon: <Table className="text-2xl text-blue-600 mb-2" />,
      title: "Data Sheets",
      price: "$150",
      unit: "per page",
      features: [
        "Technical specifications",
        "Performance data", 
        "Formatting & layout",
        "2 revisions included"
      ],
      popular: false
    },
    {
      icon: <Book className="text-2xl text-green-600 mb-2" />,
      title: "User Manuals",
      price: "$75",
      unit: "per page",
      features: [
        "Step-by-step instructions",
        "Safety information",
        "Troubleshooting guides",
        "2 revisions included"
      ],
      popular: false
    },
    {
      icon: <GraduationCap className="text-2xl text-purple-600 mb-2" />,
      title: "Training Materials",
      price: "$200",
      unit: "per hour of content",
      features: [
        "Presentation slides",
        "Handout materials",
        "Assessment tools",
        "3 revisions included"
      ],
      popular: false
    },
    {
      icon: <Box className="text-2xl text-red-600 mb-2" />,
      title: "Custom Projects",
      price: "$85",
      unit: "per hour",
      features: [
        "Product renders",
        "CPI documentation",
        "Custom layouts",
        "Unlimited revisions"
      ],
      popular: true
    }
  ];

  return (
    <section className="py-20 bg-background" data-testid="section-pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4" data-testid="heading-pricing">
            Transparent Pricing
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-pricing-description">
            Clear, competitive pricing for professional documentation services. All prices include revisions and quality assurance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pricingTiers.map((tier, index) => (
            <Card 
              key={index} 
              className={`hover-lift relative ${tier.popular ? 'border-primary' : 'border-border'}`}
              data-testid={`card-pricing-${tier.title.toLowerCase().replace(/\s+/g, '-')}`}
            >
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-primary text-primary-foreground" data-testid="badge-most-popular">
                    Most Popular
                  </Badge>
                </div>
              )}
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  {tier.icon}
                </div>
                <CardTitle className="text-lg font-semibold text-foreground">
                  {tier.title}
                </CardTitle>
                <div className="text-center mb-4">
                  <div className="text-3xl font-bold text-primary" data-testid={`text-price-${tier.title.toLowerCase().replace(/\s+/g, '-')}`}>
                    {tier.price}
                  </div>
                  <div className="text-sm text-muted-foreground">{tier.unit}</div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-muted-foreground space-y-2">
                  {tier.features.map((feature, featureIndex) => (
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

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6" data-testid="text-volume-discount">
            Volume discounts available for large projects. Get a custom quote for your specific needs.
          </p>
          <Link href="/contact">
            <Button size="lg" className="hover-lift" data-testid="button-custom-quote">
              <Calculator className="mr-2 h-5 w-5" />
              Get Custom Quote
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
