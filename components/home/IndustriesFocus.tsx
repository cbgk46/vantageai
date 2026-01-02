"use client";

import { Building2, Stethoscope, Calculator } from "lucide-react";
import IndustryCard from "@/components/shared/IndustryCard";

const industries = [
  {
    icon: Building2,
    title: "Boutique Real Estate Brokerages",
    preview: "Founder-led agencies in competitive markets need every edge. We help you automate lead qualification, enhance property matching, and give your agents AI-powered tools to close more deals.",
    href: "/industries/real-estate"
  },
  {
    icon: Stethoscope,
    title: "Multi-Clinic Specialty Practices",
    preview: "Growing medical practices face scheduling chaos, documentation burdens, and operational complexity. We bring clarity through intelligent automation and practice analytics.",
    href: "/industries/healthcare"
  },
  {
    icon: Calculator,
    title: "Independent Accounting Firms",
    preview: "Accounting firms are drowning in document processing and compliance tracking. We help you reclaim time through smart automation while maintaining the precision your clients expect.",
    href: "/industries/accounting"
  }
];

export default function IndustriesFocus() {
  return (
    <section className="section-padding bg-gradient-to-br from-primary-50 to-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="mb-4">Industry-Specific Expertise</h2>
          <p className="text-xl text-primary-600 max-w-3xl mx-auto mb-8">
            We've chosen to specialize deeply in three high-opportunity sectors where AI can create immediate, measurable impact.
          </p>
          <p className="text-lg text-primary-600 max-w-4xl mx-auto leading-relaxed">
            Generic AI consulting delivers generic results. We focus exclusively on understanding the unique operational realities, competitive pressures, and growth opportunities in real estate, healthcare, and professional services — so our solutions actually work in your world.
          </p>
        </div>

        {/* Industry Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mt-12">
          {industries.map((industry, index) => (
            <IndustryCard
              key={industry.title}
              icon={industry.icon}
              title={industry.title}
              preview={industry.preview}
              href={industry.href}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
