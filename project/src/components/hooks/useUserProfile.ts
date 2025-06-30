import { useQuery } from '@tanstack/react-query';
import { mockUserProfile, UserProfile } from '@/data/accountData';
import { mockProgressPhotos, ProgressPhoto } from '@/data/accountData';
import { mockBodyMetrics, BodyMetrics } from '@/data/accountData';

const fetchUserProfile = async (): Promise<UserProfile> => {
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 500));
  return mockUserProfile;
};

export const useUserProfile = () => {
  return useQuery({
    queryKey: ['userProfile'],
    queryFn: fetchUserProfile,
  });
};



const fetchProgressPhotos = async (): Promise<ProgressPhoto[]> => {
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 500));
  return mockProgressPhotos;
};

export const useProgressPhotos = () => {
  return useQuery({
    queryKey: ['progressPhotos'],
    queryFn: fetchProgressPhotos,
  });
};


const fetchBodyMetrics = async (): Promise<BodyMetrics> => {
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 500));
  return mockBodyMetrics;
};

export const useBodyMetrics = () => {
  return useQuery({
    queryKey: ['bodyMetrics'],
    queryFn: fetchBodyMetrics,
  });
};
