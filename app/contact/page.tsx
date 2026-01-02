import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MultiStepForm from "@/components/contact/MultiStepForm";
import { Check } from "lucide-react";

export const metadata = {
  title: "Contact Us | Schedule Your AI Strategy Call",
  description: "Book a free consultation to discuss how AI can transform your business. No obligation, just actionable insights.",
};

const engagementSteps = [
  {
    number: 1,
    title: "Discovery & Assessment",
    description: "We start with a strategy session to understand your business, identify AI opportunities, and define clear success metrics. No commitment required."
  },
  {
    number: 2,
    title: "Design & Pilot",
    description: "We build and test a focused AI solution — an agent, dashboard, or automation — to prove value before scaling. You see results in weeks, not months."
  },
  {
    number: 3,
    title: "Rollout & Ongoing Leadership",
    description: "We help you implement the solution across your organization and provide ongoing fCAIO support to ensure continuous improvement and strategic alignment."
  }
];

const expectations = [
  {
    title: "Free, no-obligation consultation",
    description: "to understand your business and challenges"
  },
  {
    title: "Honest assessment",
    description: "of whether AI is a good fit for your situation"
  },
  {
    title: "Specific recommendations",
    description: "for high-ROI opportunities in your organization"
  },
  {
    title: "Clear next steps",
    description: "if you decide to move forward"
  }
];

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary-50 via-white to-primary-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="mb-6">Start a Conversation</h1>
            <p className="text-xl text-primary-600 leading-relaxed">
              Let's discuss where AI can create the most value for your organization — and how to get there with clarity and confidence.
            </p>
          </div>
        </div>
      </section>

      {/* How Our Engagement Works */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="mb-4">How Our Engagement Works</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {engagementSteps.map((step) => (
              <div key={step.number} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-accent-400 to-accent-500 text-white text-2xl font-bold mb-6">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-primary-900">
                  {step.title}
                </h3>
                <p className="text-primary-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Multi-Step Form Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-white">
        <div className="container-custom">
          <MultiStepForm />
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-center mb-12">What to Expect</h2>

            <div className="grid md:grid-cols-2 gap-8">
              {expectations.map((item, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center">
                      <Check className="h-5 w-5 text-teal-600" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-900 mb-1">
                      {item.title}
                    </h4>
                    <p className="text-primary-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Contact Info */}
            <div className="mt-16 p-8 bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl">
              <h3 className="text-2xl font-semibold mb-6 text-primary-900">
                Prefer to Schedule Directly?
              </h3>

              <div className="space-y-4 text-primary-700">
                <div>
                  <p className="font-semibold mb-1">Email:</p>
                  <a href="mailto:krishnaa.gokul@gmail.com" className="text-accent-500 hover:text-accent-600">
                    krishnaa.gokul@gmail.com
                  </a>
                </div>

                <div>
                  <p className="font-semibold mb-1">Location:</p>
                  <p>Singapore-based, Serving APAC & Global</p>
                </div>

                <div>
                  <p className="font-semibold mb-1">Response Time:</p>
                  <p>We typically respond to inquiries within 24 hours during business days.</p>
                </div>
              </div>

              <div className="mt-6">
                <a
                  href="https://calendly.com/krishnaa-gokul/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-block"
                >
                  Book Directly on Calendly
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
