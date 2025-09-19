import { Link } from "wouter";
import { Linkedin, Mail } from "lucide-react";
import logoImage from "@assets/generated_images/TechDoc_Profesional_business_logo_af94b23a.png";
import privacyPDF from "@assets/generated_images/privacy.pdf";
import termsPDF from "@assets/generated_images/terms.pdf";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12" data-testid="footer-main">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <div className="flex items-center mb-4">
              
              <span className="text-xl font-bold">TechDoc Profesional</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Professional technical documentation services for your company. 
              Free up your team's time while maintaining the highest quality standards.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-primary transition-colors" data-testid="link-linkedin">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="mailto:hello@techdocsolutions.com" className="text-gray-300 hover:text-primary transition-colors" data-testid="link-email">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4"></h4>
            <ul className="space-y-2 text-gray-300">
              <li><Link href="/services" className="hover:text-primary transition-colors" data-testid="link-footer-data-sheets"></Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors" data-testid="link-footer-manuals"></Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors" data-testid="link-footer-training"></Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors" data-testid="link-footer-cpi"></Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors" data-testid="link-footer-renders"></Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-300">
              <li><Link href="/about" className="hover:text-primary transition-colors" data-testid="link-footer-about">About</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors" data-testid="link-footer-portfolio">Services</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors" data-testid="link-footer-contact">Contact</Link></li>
              <li><a href="/portfolio"   rel="noopener noreferrer" className="hover:text-primary transition-colors" data-testid="link-footer-privacy">Privacy Policy</a></li>
              <li><a href="/portfolio"   rel="noopener noreferrer"className="hover:text-primary transition-colors" data-testid="link-footer-terms">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm" data-testid="text-copyright">
            &copy; {currentYear} TechDoc Profesional. All rights reserved.
          </p>
          <p className="text-gray-300 text-sm mt-2 md:mt-0" data-testid="text-tagline">
            Professional documentation services for enterprise clients.
          </p>
        </div>
      </div>
    </footer>
  );
}
