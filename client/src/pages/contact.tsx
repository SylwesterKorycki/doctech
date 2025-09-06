import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import ContactForm from "@/components/contact-form";
import TestimonialsSection from "@/components/testimonials";
import PricingTable from "@/components/pricing-table";

export default function Contact() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-16">
        <ContactForm />
        <PricingTable />
        <TestimonialsSection />
      </div>
      <Footer />
    </div>
  );
}
