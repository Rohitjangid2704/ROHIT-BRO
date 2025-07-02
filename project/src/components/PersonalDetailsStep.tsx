import React from "react";
import { Calendar, Phone, ChevronDown } from "lucide-react";
import { FormData, ValidationErrors, countryCodes } from "./types";

interface PersonalDetailsStepProps {
  formData: FormData;
  updateFormData: (field: keyof FormData, value: any) => void;
  errors: ValidationErrors;
  showCountryDropdown: boolean;
  setShowCountryDropdown: (show: boolean) => void;
}

const PersonalDetailsStep: React.FC<PersonalDetailsStepProps> = ({
  formData,
  updateFormData,
  errors,
  showCountryDropdown,
  setShowCountryDropdown,
}) => {
  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, "");

    if (value.length >= 2) {
      const month = parseInt(value.substring(0, 2));
      if (month > 12) {
        value = "12" + value.substring(2);
      }
      value = value.substring(0, 2) + "/" + value.substring(2);
    }

    if (value.length >= 5) {
      const day = parseInt(value.substring(3, 5));
      if (day > 31) {
        value = value.substring(0, 3) + "31" + value.substring(5);
      }
      value = value.substring(0, 5) + "/" + value.substring(5, 9);
    }

    updateFormData("dateOfBirth", value);
  };

  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "");
    updateFormData("phoneNumber", value);
  };

  const handleCountryCodeSelect = (code: string) => {
    updateFormData("countryCode", code);
    setShowCountryDropdown(false);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-10 text-center">
        Personal Details
      </h2>

      <div className="space-y-8">
        {/* Gender Selection */}
        <div>
          <label className="block text-xl font-medium text-gray-700 mb-3">
            Gender
          </label>
          <div className="flex gap-8">
  {["male", "female"].map((gender) => (
    <label key={gender} className="flex items-center cursor-pointer">
      <input
        type="checkbox"
        checked={formData.gender === gender}
        onChange={() => updateFormData("gender", gender)}
        className="sr-only"
      />
      <div
        className={`w-4 h-4 border-2 rounded-sm mr-3 transition-colors ${
          formData.gender === gender
            ? "bg-gray-800 border-gray-800"
            : "bg-transparent border-gray-400"
        }`}
      ></div>
      <span className="text-gray-700 capitalize font-medium">{gender}</span>
    </label>
  ))}
</div>

          {errors.gender && (
            <p className="text-red-500 text-sm mt-2">{errors.gender}</p>
          )}
        </div>

        {/* Date of Birth */}
        <div>
          <label className="block text-xl font-medium text-gray-700 mb-2">
            Date Of Birth
          </label>
          <div className="relative">
            <input
              type="text"
              value={formData.dateOfBirth}
              onChange={handleDateChange}
              placeholder="MM/DD/YYYY"
              maxLength={10}
              className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors ${
                errors.dateOfBirth ? "border-red-300" : "border-gray-300"
              }`}
            />
            <Calendar className="absolute right-4 top-3 w-5 h-5 text-gray-400" />
          </div>
          {errors.dateOfBirth && (
            <p className="text-red-500 text-sm mt-2">{errors.dateOfBirth}</p>
          )}
        </div>

        {/* Phone Number */}
        <div>
          <label className="block text-xl font-medium text-gray-700 mb-2">
            Phone Number
          </label>
          <div className="flex">
            {/* Country Code Dropdown */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setShowCountryDropdown(!showCountryDropdown)}
                className="h-full px-4 py-3 border-2 border-r-0 border-gray-300 rounded-l-lg flex items-center gap-2"
              >
                <span>{formData.countryCode}</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {showCountryDropdown && (
                <div className="absolute z-10 mt-1 w-48 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-auto">
                  {countryCodes.map((country) => (
                    <div
                      key={country.code}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-2"
                      onClick={() => handleCountryCodeSelect(country.code)}
                    >
                      <span>{country.flag}</span>
                      <span>{country.name}</span>
                      <span className="ml-auto">{country.code}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="relative flex-grow">
              <input
                type="tel"
                value={formData.phoneNumber}
                onChange={handlePhoneNumberChange}
                placeholder="Phone number"
                className={`w-full px-4 py-3 border-2 rounded-r-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors ${
                  errors.phoneNumber ? "border-red-300" : "border-gray-300"
                }`}
              />
              <Phone className="absolute right-4 top-3 w-5 h-5 text-gray-400" />
            </div>
          </div>
          {errors.phoneNumber && (
            <p className="text-red-500 text-sm mt-2">{errors.phoneNumber}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PersonalDetailsStep;
