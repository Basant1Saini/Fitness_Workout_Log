import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Fitness Workout Log</h1>
        <p className="text-xl mb-8">Track your fitness journey</p>
        <div className="space-x-4">
          <Link to="/login" className="bg-blue-500 text-white px-6 py-2 rounded">Login</Link>
          <Link to="/register" className="bg-green-500 text-white px-6 py-2 rounded">Register</Link>
        </div>
      </div>
    </div>
  );
}
