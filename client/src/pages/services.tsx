import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import ServicesGrid from "@/components/services-grid";

export default function Services() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-16">
        <ServicesGrid />
      </div>
      <Footer />
    </div>
  );
}
