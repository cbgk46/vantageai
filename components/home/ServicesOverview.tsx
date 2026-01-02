"use client";

import { GraduationCap, Compass, Cog, BarChart3, Code } from "lucide-react";
import ServiceCard from "@/components/shared/ServiceCard";

const services = [
  {
    icon: GraduationCap,
    title: "AI Training & Enablement",
    description: "Equip your leadership and teams with practical AI knowledge to drive informed decisions and faster adoption.",
    href: "/services/training"
  },
  {
    icon: Compass,
    title: "AI Strategy & Planning",
    description: "Transform AI from buzzword to business advantage with clear, actionable strategic roadmaps and executive workshops.",
    href: "/services/strategy"
  },
  {
    icon: Cog,
    title: "AI Process Automation",
    description: "Free your team from repetitive work to focus on high-value client relationships and revenue growth.",
    href: "/services/automation"
  },
  {
    icon: BarChart3,
    title: "AI Business Intelligence",
    description: "Make faster, data-informed decisions with AI-powered insights tailored to your business metrics.",
    href: "/services/intelligence"
  },
  {
    icon: Code,
    title: "Custom AI Solutions & Support",
    description: "Get AI solutions built specifically for your unique business processes, with continuous support as you scale.",
    href: "/services/custom"
  }
];

export default function ServicesOverview() {
  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="mb-4">How We Help You Win With AI</h2>
          <p className="text-xl text-primary-600 max-w-3xl mx-auto">
            Five focused service areas designed to turn AI potential into measurable business advantage.
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
              href={service.href}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
