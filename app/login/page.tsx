import type { Metadata } from 'next';
import LoginForm from '@/app/ui/login-form';

export const metadata: Metadata = {
  title: 'Login',
};

export default function LoginPage() {
  return (
    <main className="bg-gray-50 min-h-screen flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 w-full max-w-[450px]">
        <LoginForm />
      </div>
    </main>
  );
}
