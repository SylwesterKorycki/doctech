import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export default function Portfolio() {
  const [openPrivacy, setOpenPrivacy] = useState(false);
  const [openTerms, setOpenTerms] = useState(false);

  return (
    <div className="min-h-screen">
      <Navigation />

      <section
        className="py-20 bg-background pt-32"
        data-testid="section-portfolio"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1
              className="text-4xl font-bold text-foreground mb-4"
              data-testid="heading-portfolio"
            >
               Legal Information
            </h1>
            <p
              className="text-xl text-muted-foreground max-w-3xl mx-auto"
              data-testid="text-portfolio-description"
            >
                Review our Privacy Policy and Terms of Service to understand how we
  handle your information and the conditions of using our
  documentation services.
            </p>
          </div>

          {/* Przyciski do modali */}
          <div className="flex justify-center gap-4">
            <Button
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg"
              onClick={() => setOpenPrivacy(true)}
            >
              Privacy Policy
            </Button>
            <Button
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg"
              onClick={() => setOpenTerms(true)}
            >
              Terms of Service
            </Button>
          </div>
        </div>
      </section>

      {/* Modal Privacy */}
      <Dialog open={openPrivacy} onOpenChange={setOpenPrivacy}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">
              Privacy Policy
            </DialogTitle>
          </DialogHeader>

          {/* Scrollowalna treść */}
          <div className="max-h-[75vh] overflow-y-auto pr-2">
            <DialogDescription className="text-left space-y-4 text-base md:text-lg leading-relaxed">
              <p>
                <strong>Effective Date:</strong> [Insert Date]
              </p>

              <p>
                [Your Company Name] (“Company”, “we”, “our”, or “us”) is
                committed to protecting your privacy. This Privacy Policy
                explains how we collect, use, and safeguard your information
                when you use our website, services, and products related to
                technical and product documentation, such as datasheets,
                manuals, renders, and installation guides.
              </p>

              <h3 className="font-semibold text-xl mt-6">
                1. Information We Collect
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Personal Information:</strong> name, email address,
                  phone number, company details, or any information you
                  voluntarily provide through contact forms or quote requests.
                </li>
                <li>
                  <strong>Project Information:</strong> documentation
                  requirements, technical specifications, and related details
                  you share for the purpose of delivering our services.
                </li>
                <li>
                  <strong>Usage Data:</strong> non-identifiable information such
                  as browser type, device, operating system, and website
                  interaction data collected via cookies or analytics tools.
                </li>
              </ul>

              <h3 className="font-semibold text-xl mt-6">
                2. How We Use Your Information
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide and deliver our documentation services.</li>
                <li>Communicate with you regarding projects, quotes, and support.</li>
                <li>Improve our services, website, and customer experience.</li>
                <li>Comply with legal obligations.</li>
              </ul>

              <h3 className="font-semibold text-xl mt-6">
                3. Sharing of Information
              </h3>
              <p>
                We do <strong>not</strong> sell, rent, or trade your personal
                information. We may share your data only in the following cases:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>With trusted service providers who support our operations.</li>
                <li>When required by law or legal processes.</li>
                <li>To protect our rights, security, or property.</li>
              </ul>

              <h3 className="font-semibold text-xl mt-6">4. Data Security</h3>
              <p>
                We implement reasonable administrative, technical, and physical
                safeguards to protect your information from unauthorized access,
                disclosure, or misuse.
              </p>

              <h3 className="font-semibold text-xl mt-6">5. Data Retention</h3>
              <p>
                We retain personal and project-related information only as long
                as necessary to fulfill the purposes outlined in this policy,
                unless a longer retention period is required by law.
              </p>

              <h3 className="font-semibold text-xl mt-6">6. Your Rights</h3>
              <p>
                Depending on your location, you may have the right to access,
                update, or delete your personal data, restrict or object to
                processing, or withdraw consent where applicable. To exercise
                these rights, please contact us at{" "}
                <strong>[Insert Contact Email]</strong>.
              </p>

              <h3 className="font-semibold text-xl mt-6">
                7. Cookies and Tracking
              </h3>
              <p>
                Our website may use cookies and similar technologies to improve
                user experience and analyze site traffic. You can manage your
                cookie preferences in your browser settings.
              </p>

              <h3 className="font-semibold text-xl mt-6">
                8. Third-Party Links
              </h3>
              <p>
                Our website or documents may contain links to third-party
                websites. We are not responsible for the privacy practices or
                content of those external sites.
              </p>

              <h3 className="font-semibold text-xl mt-6">
                9. Changes to This Policy
              </h3>
              <p>
                We may update this Privacy Policy from time to time. Any changes
                will be posted on this page with a revised “Effective Date.”
              </p>

              <h3 className="font-semibold text-xl mt-6">
                10. Contact Us
              </h3>
              <p>
                If you have any questions about this Privacy Policy or how your
                information is handled, please contact us:
              </p>
              <p>
                <strong>[Your Company Name]</strong> <br />
                [Your Company Address] <br />
                [Your Company Email] <br />
                [Your Company Phone]
              </p>
            </DialogDescription>
          </div>

          <DialogFooter>
            <Button
              className="bg-blue-600 hover:bg-blue-700 text-white"
              onClick={() => setOpenPrivacy(false)}
            >
              Close
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Modal Terms */}
      <Dialog open={openTerms} onOpenChange={setOpenTerms}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">
              Terms of Service
            </DialogTitle>
          </DialogHeader>

          {/* Scrollowalna treść */}
          <div className="max-h-[75vh] overflow-y-auto pr-2">
            <DialogDescription className="text-left space-y-4 text-base md:text-lg leading-relaxed">
              <p>
                <strong>Effective Date:</strong> [Insert Date]
              </p>

              <p>
                These Terms of Service (“Terms”) govern your use of the website,
                services, and deliverables provided by [Your Company Name]
                (“Company”, “we”, “our”, or “us”). By accessing or using our
                services, you agree to these Terms.
              </p>

              <h3 className="font-semibold text-xl mt-6">
                1. Use of Our Services
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  You may use our services solely for lawful purposes and in
                  accordance with these Terms.
                </li>
                <li>
                  You agree not to misuse, copy, or resell any deliverables
                  without written permission.
                </li>
              </ul>

              <h3 className="font-semibold text-xl mt-6">
                2. Project Engagement
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  All projects are subject to acceptance of a written proposal,
                  quote, or agreement between you and the Company.
                </li>
                <li>
                  You are responsible for providing accurate and complete
                  information necessary for the execution of the project.
                </li>
              </ul>

              <h3 className="font-semibold text-xl mt-6">
                3. Intellectual Property
              </h3>
              <p>
                Unless otherwise agreed in writing, all intellectual property
                rights in the deliverables created by the Company remain our
                property until full payment is received. Upon payment, rights to
                the final deliverables may be transferred to you as agreed.
              </p>

              <h3 className="font-semibold text-xl mt-6">4. Payments</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Payment terms will be outlined in the proposal or agreement.
                </li>
                <li>
                  Late payments may be subject to additional fees or suspension
                  of services.
                </li>
              </ul>

              <h3 className="font-semibold text-xl mt-6">
                5. Confidentiality
              </h3>
              <p>
                Both parties agree to maintain the confidentiality of all
                proprietary or sensitive information shared during the project,
                unless disclosure is required by law.
              </p>

              <h3 className="font-semibold text-xl mt-6">
                6. Limitation of Liability
              </h3>
              <p>
                To the maximum extent permitted by law, the Company shall not be
                liable for indirect, incidental, or consequential damages
                resulting from the use of our services or deliverables.
              </p>

              <h3 className="font-semibold text-xl mt-6">
                7. Termination
              </h3>
              <p>
                Either party may terminate the project or services with written
                notice if the other party materially breaches these Terms and
                fails to remedy the breach within a reasonable period.
              </p>

              <h3 className="font-semibold text-xl mt-6">
                8. Changes to Terms
              </h3>
              <p>
                We may update these Terms from time to time. Any changes will be
                effective when posted on our website or communicated directly to
                you.
              </p>

              <h3 className="font-semibold text-xl mt-6">9. Governing Law</h3>
              <p>
                These Terms shall be governed by and construed in accordance
                with the laws of [Insert Jurisdiction].
              </p>

              <h3 className="font-semibold text-xl mt-6">10. Contact Us</h3>
              <p>
                If you have any questions regarding these Terms, please contact
                us:
              </p>
              <p>
                <strong>[Your Company Name]</strong> <br />
                [Your Company Address] <br />
                [Your Company Email] <br />
                [Your Company Phone]
              </p>
            </DialogDescription>
          </div>

          <DialogFooter>
            <Button
              className="bg-blue-600 hover:bg-blue-700 text-white"
              onClick={() => setOpenTerms(false)}
            >
              Close
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
}
