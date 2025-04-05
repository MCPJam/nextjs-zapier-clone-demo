# Zapier-Style OAuth Starter (Next.js)

This is a starter template for creating a Next.js app that supports OAuth integrations (Slack, Asana, etc.) and stores access tokens securely.

## Features

- Slack, Asana, and Spotify OAuth integrations
- Prisma database schema
- Tokens printed to console (hook up DB as next step)

## Setup

1. Copy `.env.local.example` to `.env.local` and fill in credentials
2. Run `npm install`
3. Run `npx prisma generate && npx prisma migrate dev`
4. Run `npm run dev`

Open [http://localhost:3000/integrations](http://localhost:3000/integrations)# nextjs-zapier-clone-demo
