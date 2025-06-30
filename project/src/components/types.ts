export interface FormData {
    // Step 1: Personal Details
    gender: "male" | "female" | "";
    dateOfBirth: string;
    phoneNumber: string;
    countryCode: string;
  
    // Step 2: Health & Fitness Metrics
    height: string;
    weight: string;
    chest: string;
    waist: string;
    hips: string;
    shoulders: string;
  
    // Step 3: Photo uploads
    frontPhoto: File | null;
    sidePhoto: File | null;
    backPhoto: File | null;
  }
  
  export interface ValidationErrors {
    [key: string]: string;
  }
  
  export const countryCodes = [
    { code: "+91", name: "India", flag: "🇮🇳" },
    { code: "+1", name: "USA", flag: "🇺🇸" },
    { code: "+44", name: "UK", flag: "🇬🇧" },
    { code: "+61", name: "Australia", flag: "🇦🇺" },
    { code: "+971", name: "UAE", flag: "🇦🇪" },
  ];