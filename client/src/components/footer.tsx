import { Link } from "wouter";
import { FileText, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12" data-testid="footer-main">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <div className="flex items-center mb-4">
              <FileText className="text-primary text-2xl mr-2" />
              <span className="text-xl font-bold">TechDoc Profesional</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Professional technical documentation services for corporations. 
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
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li><Link href="/services" className="hover:text-primary transition-colors" data-testid="link-footer-data-sheets">Data Sheets</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors" data-testid="link-footer-manuals">User Manuals</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors" data-testid="link-footer-training">Training Materials</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors" data-testid="link-footer-cpi">CPI Documentation</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors" data-testid="link-footer-renders">Product Renders</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-300">
              <li><Link href="/about" className="hover:text-primary transition-colors" data-testid="link-footer-about">About</Link></li>
              <li><Link href="/portfolio" className="hover:text-primary transition-colors" data-testid="link-footer-portfolio">Portfolio</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors" data-testid="link-footer-contact">Contact</Link></li>
              <li><a href="#" className="hover:text-primary transition-colors" data-testid="link-footer-privacy">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors" data-testid="link-footer-terms">Terms of Service</a></li>
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
