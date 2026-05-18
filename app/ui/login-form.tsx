'use client';

import { useActionState } from 'react';
import { lusitana } from '@/app/ui/fonts';
import {
  AtSymbolIcon,
  KeyIcon,
  ExclamationCircleIcon,
} from '@heroicons/react/24/outline';
import { ArrowRightIcon } from '@heroicons/react/20/solid';
import { Button } from './button';
import { authenticate } from '@/app/lib/actions';

export default function LoginForm() {
  const [errorMessage, formAction, isPending] = useActionState(
    authenticate,
    undefined,
  );

  return (
    <form action={formAction} className="space-y-6">
      <div>
        <h1 className={`${lusitana.className} mb-6 text-3xl font-bold text-gray-900`}>
          Welcome Back
        </h1>
        <p className="text-gray-600 text-sm mb-6">Enter your credentials to access the dashboard</p>
      </div>
      <div className="w-full">
        <div>
          <label
            className="mb-2 block text-sm font-medium text-gray-900"
            htmlFor="email"
          >
            Email
          </label>
          <div className="relative">
            <input
              className="peer block w-full rounded-lg border border-gray-300 py-3 pl-11 text-sm outline-none transition-all focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder:text-gray-400"
              id="email"
              type="email"
              name="email"
              placeholder="name@example.com"
              required
            />
            <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-blue-600 transition-colors" />
          </div>
        </div>
        <div className="mt-5">
          <label
            className="mb-2 block text-sm font-medium text-gray-900"
            htmlFor="password"
          >
            Password
          </label>
          <div className="relative">
            <input
              className="peer block w-full rounded-lg border border-gray-300 py-3 pl-11 text-sm outline-none transition-all focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder:text-gray-400"
              id="password"
              type="password"
              name="password"
              placeholder="••••••••"
              required
              minLength={6}
            />
            <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-blue-600 transition-colors" />
          </div>
        </div>
      </div>
      <Button className="mt-6 w-full" aria-disabled={isPending}>
        Log in <ArrowRightIcon className="ml-auto h-5 w-5 text-gray-50" />
      </Button>
      <div className="flex h-8 items-end space-x-1">
        {errorMessage && (
          <>
            <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
            <p className="text-sm text-red-500">{errorMessage}</p>
          </>
        )}
      </div>
    </form>
  );
}
