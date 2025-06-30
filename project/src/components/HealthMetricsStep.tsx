import React from "react";
import { Ruler, Weight } from "lucide-react";
import { FormData, ValidationErrors } from "./types";

interface HealthMetricsStepProps {
  formData: FormData;
  updateFormData: (field: keyof FormData, value: any) => void;
  errors: ValidationErrors;
}

const HealthMetricsStep: React.FC<HealthMetricsStepProps> = ({
  formData,
  updateFormData,
  errors,
}) => {
  const metrics = [
    { key: "height", label: "Height", icon: Ruler },
    { key: "weight", label: "Weight", icon: Weight },
    { key: "chest", label: "Chest", icon: Ruler },
    { key: "waist", label: "Waist", icon: Ruler },
    { key: "hips", label: "Hips", icon: Ruler },
    { key: "shoulders", label: "Shoulders", icon: Ruler },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        Health & Fitness Metrics
      </h2>

      <div className="grid grid-cols-2 gap-4 sm:gap-6">
        {metrics.map(({ key, label, icon: Icon }) => (
          <div key={key}>
            <label className="block text-lg sm:text-xl font-medium text-gray-700 mb-2">
              {label}
            </label>
            <div className="relative">
              <input
                type="text"
                value={formData[key as keyof FormData] as string}
                onChange={(e) =>
                  updateFormData(key as keyof FormData, e.target.value)
                }
                placeholder="159cm"
                className={`w-full px-3 py-2 sm:px-4 sm:py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors ${
                  errors[key] ? "border-red-300" : "border-gray-300"
                }`}
              />
              <Icon className="absolute right-3 top-2 sm:right-4 sm:top-3 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
            </div>
            {errors[key] && (
              <p className="text-red-500 text-xs sm:text-sm mt-1 sm:mt-2">{errors[key]}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HealthMetricsStep;