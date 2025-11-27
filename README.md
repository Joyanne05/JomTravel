# JomTravel
View promotional video here: https://youtu.be/m2JOK6R1Vfg

## About

JomTravel is a trip-planning companion built to simplifying itinerary planning among travellers using AI. 

## Tech stack

- React Native Expo
- Firebase (Auth + Firestore)
- Google Places API
- Gemini 1.5 flash 

## Getting started

1. Prerequisites
- Node.js (LTS)
- npm or yarn
- Expo CLI (optional)

2. Clone and install

```powershell
git clone https://github.com/Joyanne05/JomTravel.git
cd jomtravel
npm install
```

3. Copy the variable names into a `.env` file (do NOT commit this file):

```text
API_KEY=<your-gemini-api-key>
GOOGLE_PLACE_API_KEY=<your-google-places-api-key>
```

4. Setup Firebase  
Create your own database and configurate in `FirebaseConfig.js`

5. Run the development server

```powershell
npm run start
# or
npx expo start
```

Run on a platform

```powershell
npm run android
npm run ios
npm run web
```

## Project structure (high level)

- `app/` — Expo Router app screens and routes
- `components/` — shared components
- `services/` — external API helpers (`GooglePlaceApi.jsx`)
- `configs/` — Firebase and AI config
- `assets/` — images and fonts
- `.env` — local environment values (DO NOT COMMIT)

## Contributing

1. Fork and clone the repo.
2. Create a feature branch: `git checkout -b feat/my-change`.
3. Make changes and run tests/lint.
4. Open a PR and describe your changes.
