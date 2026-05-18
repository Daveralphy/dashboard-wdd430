## Next.js App Router Course - Starter

This is the starter template for the Next.js App Router Course. It contains the starting code for the dashboard application.

For more information, see the [course curriculum](https://nextjs.org/learn) on the Next.js Website.

## Test Credentials

Use the following credentials to log in:

- **Email**: `user@nextmail.com`
- **Password**: `123456`

## Deployment on Vercel

This application is ready for deployment on Vercel. Make sure to set the following environment variables in your Vercel project settings:

- `POSTGRES_URL` - Your PostgreSQL database connection string
- `DATABASE_URL` - Same as POSTGRES_URL (for backward compatibility)
- `AUTH_SECRET` - A 32-character secret key for session encryption

### Steps to Deploy

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com/new) and import this repository
3. Add the environment variables listed above
4. Click "Deploy"
5. Seed the database by visiting `/api/seed` once the deployment is live

## Features

- 🔐 NextAuth.js authentication with PostgreSQL
- 📊 Revenue charts and dashboard analytics
- 🔍 Live customer search and filtering
- 📱 Responsive design with Tailwind CSS
- ⚡ Built with Next.js 16 and Turbopack
- 🎨 Modern UI with Lusitana font and smooth transitions
