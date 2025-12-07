import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import api from '../services/api';
import { Workout } from '../types';

export const useWorkouts = () => {
  const queryClient = useQueryClient();

  const workouts = useQuery({
    queryKey: ['workouts'],
    queryFn: async () => {
      const response = await api.get<Workout[]>('/workouts');
      return response.data;
    }
  });

  const createWorkout = useMutation({
    mutationFn: async (workout: Partial<Workout>) => {
      const response = await api.post('/workouts', workout);
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['workouts'] });
    }
  });

  return { workouts, createWorkout };
};
