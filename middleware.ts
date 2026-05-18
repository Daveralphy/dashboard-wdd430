import NextAuth from 'next-auth';
import { authConfig } from './auth.config';

export default NextAuth(authConfig).auth;

export const config = {
  // Matcher rules to protect dashboard assets while ignoring standard media paths
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};
