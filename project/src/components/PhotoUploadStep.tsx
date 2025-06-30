import React from "react";
import { Upload } from "lucide-react";
import { FormData } from "./types";
import f1 from "../assets/m1.jpg";
import f2 from "../assets/m2.jpg";
import f3 from "../assets/m3.jpg";
import m1 from "../assets/f1.jpg";
import m2 from "../assets/f2.jpg";
import m3 from "../assets/f3.jpg";

interface PhotoUploadStepProps {
  formData: FormData;
  handleFileUpload: (
    photoType: "frontPhoto" | "sidePhoto" | "backPhoto",
    file: File
  ) => void;
}

const PhotoUploadStep: React.FC<PhotoUploadStepProps> = ({
  formData,
  handleFileUpload,
}) => {
  const photoTypes = [
    {
      key: "frontPhoto",
      label: "Front",
      img: formData.gender === "female" ? f1 : m1,
    },
    {
      key: "sidePhoto",
      label: "Side",
      img: formData.gender === "female" ? f2 : m2,
    },
    {
      key: "backPhoto",
      label: "Back",
      img: formData.gender === "female" ? f3 : m3,
    },
  ];

  return (
    <div className="px-2 sm:px-4">
      <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4 text-center">
        Track Your Progress Visually
      </h2>
      <p className="text-sm sm:text-base text-gray-600 text-center mb-6 sm:mb-8 leading-relaxed">
        Upload your "Day 1" photo to keep a powerful record of your
        transformation journey. You'll thank yourself later when you see how far
        you've come!
      </p>

      <div className="grid grid-cols-3 gap-3 sm:gap-6">
        {photoTypes.map(({ key, label, img }) => (
          <div key={key} className="text-center">
            <div className="border-2 border-purple-300 rounded-lg overflow-hidden hover:border-purple-400 transition-colors flex flex-col h-full">
              {/* Top: Image Preview Area */}
              <div className="flex-grow flex items-center justify-center p-2 sm:p-4 md:p-6 bg-white">
                {formData[key as keyof FormData] ? (
                  <img
                    src={URL.createObjectURL(
                      formData[key as keyof FormData] as File
                    )}
                    alt={`${label} preview`}
                    className="max-h-32 sm:max-h-40 md:max-h-48 object-contain"
                  />
                ) : (
                  <img
                    src={img}
                    alt={`${label} silhouette`}
                    className="max-h-32 sm:max-h-40 md:max-h-48 object-contain opacity-50"
                  />
                )}
              </div>

              {/* Bottom: Full-width Label Upload Area */}
              <div className="relative">
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) {
                      handleFileUpload(
                        key as "frontPhoto" | "sidePhoto" | "backPhoto",
                        file
                      );
                    }
                  }}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                />

                <div className="bg-purple-100 text-purple-600 py-1 sm:py-2 px-2 sm:px-4 w-full text-center text-xs sm:text-sm font-medium hover:bg-purple-200 transition-colors cursor-pointer z-0 border-t border-purple-300">
                  <div className="flex items-center justify-center gap-1 sm:gap-2">
                    <Upload className="w-3 h-3 sm:w-4 sm:h-4" />
                    {label}
                  </div>
                </div>
              </div>

              {/* Optional: Upload confirmation */}
              {formData[key as keyof FormData] && (
                <p className="text-green-600 text-xs sm:text-sm mt-1 mb-1 sm:mb-2 font-medium">
                  ✓ Photo uploaded
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoUploadStep;