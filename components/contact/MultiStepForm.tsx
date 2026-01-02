"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, Check } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  industry: string;
  challenges: string;
}

const industries = [
  "Real Estate",
  "Healthcare / Medical Practice",
  "Accounting / Professional Services",
  "Legal Services",
  "Financial Services",
  "Technology",
  "Consulting",
  "E-commerce / Retail",
  "Manufacturing",
  "Other"
];

export default function MultiStepForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    industry: "",
    challenges: ""
  });

  const steps = [
    {
      id: "name",
      question: "What's your name?",
      placeholder: "John Smith",
      type: "text",
      field: "name"
    },
    {
      id: "email",
      question: "What's your email address?",
      placeholder: "john@company.com",
      type: "email",
      field: "email"
    },
    {
      id: "phone",
      question: "What's your phone number?",
      placeholder: "+1 (555) 123-4567",
      type: "tel",
      field: "phone"
    },
    {
      id: "company",
      question: "What's your company name?",
      placeholder: "Acme Corp",
      type: "text",
      field: "company"
    },
    {
      id: "industry",
      question: "Which industry are you in?",
      type: "select",
      field: "industry",
      options: industries
    },
    {
      id: "challenges",
      question: "Tell us about your challenges or goals",
      placeholder: "We receive hundreds of customer questions each week and our team is overwhelmed, or we want to implement AI but don't know where to start...",
      type: "textarea",
      field: "challenges"
    }
  ];

  const currentStepData = steps[currentStep];
  const isLastStep = currentStep === steps.length - 1;
  const isFirstStep = currentStep === 0;

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleSubmit = async () => {
    try {
      // Save to Supabase
      const { insertEnquiry } = await import('@/lib/supabase');

      const enquiryData = {
        name: formData.name,
        email: formData.email || null,
        phone: formData.phone ? parseFloat(formData.phone) : null,
        company: formData.company || null,
        industry: formData.industry || null,
        challenges: formData.challenges || null
      };

      await insertEnquiry(enquiryData);
      console.log("Enquiry saved successfully!");

      // Redirect to Calendly
      window.location.href = "https://calendly.com/krishnaa-gokul/30min";
    } catch (error) {
      console.error("Error saving enquiry:", error);
      // Still redirect to Calendly even if database save fails
      window.location.href = "https://calendly.com/krishnaa-gokul/30min";
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && currentStepData.type !== "textarea") {
      e.preventDefault();
      if (isFieldValid()) {
        if (isLastStep) {
          handleSubmit();
        } else {
          handleNext();
        }
      }
    }
  };

  const isFieldValid = () => {
    const value = formData[currentStepData.field as keyof FormData];
    if (currentStepData.field === "email") {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    }
    return value.trim() !== "";
  };

  return (
    <div className="max-w-3xl mx-auto">
      {/* Progress Bar */}
      <div className="mb-12">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-primary-600">
            Step {currentStep + 1} of {steps.length}
          </span>
          <span className="text-sm text-primary-600">
            {Math.round(((currentStep + 1) / steps.length) * 100)}% Complete
          </span>
        </div>
        <div className="h-2 bg-primary-100 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-accent-400 to-accent-500"
            initial={{ width: "0%" }}
            animate={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      {/* Question */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
          className="mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-primary-900">
            {currentStepData.question}
          </h2>

          {/* Input Field */}
          {currentStepData.type === "select" ? (
            <div className="space-y-3">
              {currentStepData.options?.map((option) => (
                <button
                  key={option}
                  onClick={() => {
                    handleInputChange(currentStepData.field as keyof FormData, option);
                    setTimeout(handleNext, 300);
                  }}
                  className={`w-full text-left p-4 rounded-xl border-2 transition-all ${
                    formData[currentStepData.field as keyof FormData] === option
                      ? "border-accent-500 bg-accent-50"
                      : "border-primary-200 hover:border-accent-300 hover:bg-primary-50"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-lg text-primary-900">{option}</span>
                    {formData[currentStepData.field as keyof FormData] === option && (
                      <Check className="h-5 w-5 text-accent-500" />
                    )}
                  </div>
                </button>
              ))}
            </div>
          ) : currentStepData.type === "textarea" ? (
            <textarea
              value={formData[currentStepData.field as keyof FormData]}
              onChange={(e) => handleInputChange(currentStepData.field as keyof FormData, e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder={currentStepData.placeholder}
              rows={6}
              className="w-full px-6 py-4 text-lg border-2 border-primary-200 rounded-xl focus:border-accent-500 focus:outline-none transition-colors"
              autoFocus
            />
          ) : (
            <input
              type={currentStepData.type}
              value={formData[currentStepData.field as keyof FormData]}
              onChange={(e) => handleInputChange(currentStepData.field as keyof FormData, e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder={currentStepData.placeholder}
              className="w-full px-6 py-4 text-lg border-2 border-primary-200 rounded-xl focus:border-accent-500 focus:outline-none transition-colors"
              autoFocus
            />
          )}

          {currentStepData.type === "email" && formData.email && !isFieldValid() && (
            <p className="mt-2 text-sm text-red-500">Please enter a valid email address</p>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Navigation Buttons */}
      <div className="flex items-center justify-between mt-12">
        <button
          onClick={handleBack}
          disabled={isFirstStep}
          className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-semibold transition-all ${
            isFirstStep
              ? "text-primary-300 cursor-not-allowed"
              : "text-primary-600 hover:text-accent-500 hover:bg-primary-50"
          }`}
        >
          <ArrowLeft className="h-5 w-5" />
          <span>Back</span>
        </button>

        {currentStepData.type !== "select" && (
          <button
            onClick={isLastStep ? handleSubmit : handleNext}
            disabled={!isFieldValid()}
            className={`flex items-center space-x-2 px-8 py-4 rounded-xl font-semibold transition-all ${
              isFieldValid()
                ? "btn-primary"
                : "bg-primary-200 text-primary-400 cursor-not-allowed"
            }`}
          >
            <span>{isLastStep ? "Schedule My Call" : "Continue"}</span>
            <ArrowRight className="h-5 w-5" />
          </button>
        )}
      </div>

      {/* Hint */}
      <p className="text-center text-sm text-primary-500 mt-6">
        Press <kbd className="px-2 py-1 bg-primary-100 rounded">Enter ↵</kbd> to continue
      </p>
    </div>
  );
}
