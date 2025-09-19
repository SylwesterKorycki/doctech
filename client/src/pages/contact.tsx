import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import ContactForm from "@/components/contact-form";



export default function Contact() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-16">
        <ContactForm />
        
       
      </div>
      <Footer />
    </div>
  );
}
