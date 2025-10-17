# Comparative Analysis of React Server Components and Client Components

This project compares **React Server Components (RSC)** and **React Client Components (RCC)** in terms of performance, architecture, and developer experience.

It includes two functionally identical CRUD-based event management apps:

- **/rcc/** — Vite + React (Client Components with Axios & SWR)
- **/rsc/** — Next.js 13+ (Server Components with Prisma)
- **/back-end/** — Express.js + TypeScript + SQLite backend for the RCC app

## Tech Stack

- React, Next.js, Vite, TypeScript
- Prisma ORM, SQLite
- Tailwind CSS, shadcn/ui
- Axios, SWR
- Google Lighthouse (for benchmarking)

## How to Run

1. Install dependencies using **npm install**
2. Start the apps using **npm run dev** inside `/rcc` or `/rsc`
3. Run the backend using **npm start** inside `/back-end`

---

## More Information

All methodology, performance results, and conclusions are available in the included PDF: **Report.pdf**
