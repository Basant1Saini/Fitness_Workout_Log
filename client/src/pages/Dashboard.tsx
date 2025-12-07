import { useQuery } from '@tanstack/react-query';
import { useAuthStore } from '../store/authStore';
import api from '../services/api';

export default function Dashboard() {
  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);

  const { data: workouts } = useQuery({
    queryKey: ['workouts'],
    queryFn: async () => {
      const response = await api.get('/workouts');
      return response.data;
    }
  });

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Welcome, {user?.name}</h1>
          <button onClick={logout} className="bg-red-500 text-white px-4 py-2 rounded">Logout</button>
        </div>
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-2xl font-bold mb-4">Your Workouts</h2>
          {workouts?.length === 0 ? (
            <p>No workouts yet. Start logging!</p>
          ) : (
            <div className="space-y-4">
              {workouts?.map((workout: any) => (
                <div key={workout._id} className="border p-4 rounded">
                  <h3 className="font-bold">{workout.name}</h3>
                  <p>Duration: {workout.duration} minutes</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
