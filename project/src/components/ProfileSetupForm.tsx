import React, { useState } from "react";
import { CheckCircle } from "lucide-react";
import { Button } from "./ui/button";
import PersonalDetailsStep from "./PersonalDetailsStep";
import HealthMetricsStep from "./HealthMetricsStep";
import PhotoUploadStep from "./PhotoUploadStep";
import { FormData, ValidationErrors } from "./types";

const ProfileSetupForm: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    gender: "",
    dateOfBirth: "",
    phoneNumber: "",
    countryCode: "+91",
    height: "",
    weight: "",
    chest: "",
    waist: "",
    hips: "",
    shoulders: "",
    frontPhoto: null,
    sidePhoto: null,
    backPhoto: null,
  });
  const [errors, setErrors] = useState<ValidationErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);

  const updateFormData = (field: keyof FormData, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const validateStep1 = (): boolean => {
    const newErrors: ValidationErrors = {};

    if (!formData.gender) {
      newErrors.gender = "Please select your gender";
    }

    if (!formData.dateOfBirth) {
      newErrors.dateOfBirth = "Date of birth is required";
    } else if (!/^\d{2}\/\d{2}\/\d{4}$/.test(formData.dateOfBirth)) {
      newErrors.dateOfBirth = "Please use MM/DD/YYYY format";
    } else {
      const [month, day, year] = formData.dateOfBirth.split("/").map(Number);
      if (month < 1 || month > 12) {
        newErrors.dateOfBirth = "Month must be between 01 and 12";
      } else if (day < 1 || day > 31) {
        newErrors.dateOfBirth = "Day must be between 01 and 31";
      } else if (year < 1900 || year > new Date().getFullYear()) {
        newErrors.dateOfBirth = "Please enter a valid year";
      }
    }

    if (!formData.phoneNumber) {
      newErrors.phoneNumber = "Phone number is required";
    } else if (!/^\d{10,15}$/.test(formData.phoneNumber.replace(/\D/g, ""))) {
      newErrors.phoneNumber = "Please enter a valid phone number";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep2 = (): boolean => {
    const newErrors: ValidationErrors = {};
    const requiredFields = [
      "height",
      "weight",
      "chest",
      "waist",
      "hips",
      "shoulders",
    ];

    requiredFields.forEach((field) => {
      if (!formData[field as keyof FormData]) {
        newErrors[field] = `${
          field.charAt(0).toUpperCase() + field.slice(1)
        } is required`;
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    let isValid = false;

    if (currentStep === 1) {
      isValid = validateStep1();
    } else if (currentStep === 2) {
      isValid = validateStep2();
    } else {
      isValid = true;
    }

    if (isValid && currentStep < 3) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handleSkip = () => {
    if (currentStep === 2) {
      setErrors({});
      setCurrentStep(3);
    }
  };

  const handleStepClick = (step: number) => {
    setCurrentStep(step);
  };

  const handleComplete = () => {
    console.log("Form completed with data:", formData);
    setIsSubmitted(true);
  };

  const handleFileUpload = (
    photoType: "frontPhoto" | "sidePhoto" | "backPhoto",
    file: File
  ) => {
    updateFormData(photoType, file);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-white-100 to-pink-100 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center">
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Setup Complete!
          </h2>
          <p className="text-gray-600">
            Your profile has been successfully configured.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-white-100 to-pink-100">
      <div className="max-w-2xl mx-auto px-4 py-8 mt-6">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Let's Set Up Your Profile
          </h1>
          <p className="text-gray-600 text-base leading-relaxed max-w-xl mx-auto">
            You've taken the first step – now let's personalize your journey!
            Tell us a bit about you so we can tailor your workouts, track your
            progress, and give you the best possible coaching experience.
          </p>
        </div>

        {/* Step Indicator */}
        <div className="flex items-center justify-center mb-8">
          {[1, 2, 3].map((step, index) => (
            <React.Fragment key={step}>
              <button
                onClick={() => handleStepClick(step)}
                className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold cursor-pointer transition-colors ${
                  step === currentStep
                    ? "bg-gray-800 text-white"
                    : step < currentStep
                    ? "bg-gray-600 text-white"
                    : "bg-gray-300 text-gray-600"
                }`}
              >
                {step}
              </button>
              {index < 2 && (
                <div className="w-16 h-px mx-2 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-full border-t-2 border-dotted border-gray-400"></div>
                  </div>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Form Content */}
        <div className="p-6 md:p-8">
          {currentStep === 1 && (
            <PersonalDetailsStep
              formData={formData}
              updateFormData={updateFormData}
              errors={errors}
              showCountryDropdown={showCountryDropdown}
              setShowCountryDropdown={setShowCountryDropdown}
            />
          )}

          {currentStep === 2 && (
            <HealthMetricsStep
              formData={formData}
              updateFormData={updateFormData}
              errors={errors}
            />
          )}

          {currentStep === 3 && (
            <PhotoUploadStep
              formData={formData}
              handleFileUpload={handleFileUpload}
            />
          )}

          {/* Action Buttons */}
          <div className="mt-8 space-y-4">
            <Button
              onClick={currentStep === 3 ? handleComplete : handleNext}
              className="w-full px-8 lg:px-10 py-3 lg:py-4 bg-neutral-800 border-neutral-800 shadow-[4px_4px_0px_#b590e2] rounded-sm border border-solid font-semibold text-white text-base lg:text-lg tracking-[0] leading-[18px] hover:translate-y-1 hover:!text-white hover:!bg-[#222222] hover:shadow-[2px_2px_0px_#b590e2] transition-all"
              variant="outline"
              type="button"
            >
              {currentStep === 3 ? "Complete Setup" : "Next"}
            </Button>

            {currentStep === 2 && (
              <Button
                onClick={handleSkip}
                className="w-full px-8 lg:px-10 py-3 lg:py-4 bg-white border-neutral-800 shadow-[4px_4px_0px_#b590e2] rounded-sm border border-solid font-semibold text-black text-base lg:text-lg tracking-[0] leading-[18px] hover:translate-y-1 hover:!text-white hover:!bg-[#222222] hover:shadow-[2px_2px_0px_#b590e2] transition-all"
                variant="outline"
                type="button"
              >
                I will do this later
              </Button>
            )}

            {currentStep === 3 && (
              <Button
                onClick={handleComplete}
                className="w-full px-8 lg:px-10 py-3 lg:py-4 bg-white border-neutral-800 shadow-[4px_4px_0px_#b590e2] rounded-sm border border-solid font-semibold text-black text-base lg:text-lg tracking-[0] leading-[18px] hover:translate-y-1 hover:!text-white hover:!bg-[#222222] hover:shadow-[2px_2px_0px_#b590e2] transition-all"
                variant="outline"
                type="button"
              >
                I will do this later
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSetupForm;
