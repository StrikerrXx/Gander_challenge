# Aircraft Dashboard

A simple single-page application built with **Next.js** and **Tailwind CSS** that helps dispatchers quickly answer:

“How many of my aircraft are ready to fly right now, and which ones are they?”

## Features

- View a list of aircraft with status and location
- Filter by tail number, model, and status
- Inline status editing with dropdowns
- Persist status changes using `localStorage`
- Interactive map of aircraft locations with Leaflet
- Clean, responsive UI styled with Tailwind

## Tech Stack

- Next.js (App Router)
- Tailwind CSS
- TypeScript
- Leaflet (via react-leaflet)
- LocalStorage for state persistence

## How to Run Locally

```bash
git clone https://github.com/StrikerXx/aircraft-dashboard.git
cd aircraft-dashboard
npm install
npm run dev
