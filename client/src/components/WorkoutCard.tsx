import { Workout } from '../types';

interface WorkoutCardProps {
  workout: Workout;
}

export default function WorkoutCard({ workout }: WorkoutCardProps) {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h3 className="text-xl font-bold mb-2">{workout.name}</h3>
      <p className="text-gray-600">Duration: {workout.duration} minutes</p>
      <p className="text-gray-600">Exercises: {workout.exercises.length}</p>
      {workout.notes && <p className="text-gray-500 mt-2">{workout.notes}</p>}
    </div>
  );
}
