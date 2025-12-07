import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';
import api from '../services/api';

interface RegisterForm {
  name: string;
  email: string;
  password: string;
}

export default function Register() {
  const { register, handleSubmit } = useForm<RegisterForm>();
  const navigate = useNavigate();
  const setUser = useAuthStore((state) => state.setUser);

  const onSubmit = async (data: RegisterForm) => {
    try {
      const response = await api.post('/auth/register', data);
      setUser(response.data);
      navigate('/dashboard');
    } catch (error) {
      console.error('Registration failed', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6">Register</h2>
        <input {...register('name')} placeholder="Name" className="w-full p-2 mb-4 border rounded" />
        <input {...register('email')} type="email" placeholder="Email" className="w-full p-2 mb-4 border rounded" />
        <input {...register('password')} type="password" placeholder="Password" className="w-full p-2 mb-4 border rounded" />
        <button type="submit" className="w-full bg-green-500 text-white p-2 rounded">Register</button>
      </form>
    </div>
  );
}
