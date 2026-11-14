# Canoe Stroke Counter

A mobile-first PWA designed to help canoe coaches track athlete stroke rate during training sessions in a simple and practical way.

## About the Project

This project was created to solve a real-world need from a canoe coach who required a fast and accessible way to count strokes during training sessions directly from a mobile device.

The application was designed with a mobile-first approach, prioritizing speed, simplicity, and ease of use during live training situations. The coach still uses the app today as part of their training workflow.

Beyond the technical implementation, this project helped me better understand how small focused products can deliver real value when they are built around practical user needs.

## Features

- Real-time stroke counting
- Mobile-first user experience
- Progressive Web App (PWA)
- Fast interaction flow
- Simple and lightweight interface
- Independent stopwatch with pause/resume and lap recording (split and total times)

The stroke counter remains the main control, with one-tap cycle selection and a large
start/stop button. Cycle selection is locked during a measurement. The interface
prioritizes one-handed use and a clear, high-contrast light theme.

Expand the stopwatch row below the counter to access its independent controls:
start it, mark laps while it is running, and pause to reset it. Paused time is excluded
from both the total and lap times. Times and laps stay available during the current
page session; reloading the page clears them.

## Tech Stack

App icons are exported from the editable vector source `public/icon.svg`.
Run `node scripts/generate-icons.mjs` to regenerate PNG sizes and the favicon.

- React
- TypeScript
- Progressive Web App (PWA)

## What I Learned

This project reinforced the importance of building focused products around real user problems. It also gave me practical experience designing lightweight mobile-first interfaces and delivering fast user interactions in a sports training context.

## Status

Personal project currently used in real training sessions.

## URL
https://cuentapaladas.vercel.app/
