import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Building, Zap, ServerCog, Handshake, Mail, Download } from "lucide-react";
import workspaceImg from "@assets/generated_images/workspace.png";


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
              <p 
  className="text-xl text-muted-foreground mb-6 leading-relaxed" 
  data-testid="text-about-intro"
>
  We transform complex technical knowledge into clear documentation with precision and professionalism. 
  allowing your experts to focus on core innovations.
  
</p>

              <div className="text-muted-foreground leading-relaxed" data-testid="text-about-approach">
  <p className="mb-4">
    At TechDocProfesional, we specialize in creating clear, precise, and professional documentation — 
    from data sheets and installation manuals to technical guides and product renders.
  </p>

  <p className="mb-4">
    Our mission is to transform complex technical knowledge into accessible, reliable documentation 
    that supports your business goals. We also believe that your highly qualified resources should focus on what matters most — innovation, 
    core projects, and solving complex challenges.
  </p>

  <p className="mb-4">
     
    By combining hands-on industry experience with a passion for technical writing, TechDocPro delivers 
    documentation that not only informs but also builds trust and strengthens your brand.
  </p>
</div>


              
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
                
              </div>
            </div>
           <div className="text-center max-w-xl mx-auto flex flex-col items-center">
  <img
    src={workspaceImg}
    alt="Professional freelancer workspace"
    className="rounded-2xl w-full max-w-md h-auto hover-lift"
    data-testid="img-about-workspace"
  />
  <p className="mt-4 text-base font-normal text-foreground leading-relaxed text-justify">
    As the founder of <strong>TechDec Professional</strong>, I bring nearly two decades of expertise not only in mechanical, electrical, and electronics projects, 
    but also across diverse industrial sectors. This extensive experience allows me to fully understand our clients' 
    challenges and deliver technical and product documentation that meets the highest standards of accuracy, clarity, and professionalism.
  </p>
</div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
