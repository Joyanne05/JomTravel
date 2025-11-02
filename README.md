# JomTravel

A React Native app to discover places and generate travel plans using AI.

## Table of contents

- About
- Tech stack
- Getting started
- Environment variables
- Running the app
- Security & publishing checklist
- Project structure
- Contributing

## About

JomTravel is a trip-planning companion built with Expo and React Native. The app uses Google Places / Maps APIs, Firebase, and a generative AI helper (via `@google/generative-ai`) to generate trip itineraries.

## Tech stack

- Expo
- React Native
- Firebase (Auth + Firestore)
- Google Places / Maps API
- @google/generative-ai

## Getting started

Prerequisites
- Node.js (LTS)
- npm or yarn
- Expo CLI (optional)

Clone and install

```powershell
git clone <your-repo-url>
cd jomtravel
npm install
```

Create a local environment file

1. Copy the variable names into a `.env` file (do NOT commit this file):

```text
API_KEY=
GOOGLE_PLACE_API_KEY=
```

2. Populate the values with keys from your Google Cloud / Firebase project.

Tip: Add a `.env.example` (committed) with the variable names but no values so others know what to provide.

Example generation (PowerShell):

```powershell
# Create .env.example with variable names only
"API_KEY=" | Out-File -FilePath .env.example -Encoding utf8
"GOOGLE_PLACE_API_KEY=" | Out-File -FilePath .env.example -Encoding utf8 -Append
```

## Environment variables used

- `API_KEY` — used in `configs/FirebaseConfig.js` and `configs/AiModal.js` (Firebase and Generative AI).
- `GOOGLE_PLACE_API_KEY` — used for Google Places/Maps requests (several components and `services/GooglePlaceApi.jsx`).

This project uses `react-native-dotenv`-style imports (`@env`) — keep the actual `.env` file local and out of git.

## Running the app

Start the development server

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

Useful scripts
- `npm run reset-project` — moves starter code to `app-example` and creates a fresh `app` directory.
- `npm test` — run jest tests (if present)
- `npm run lint` — run linter

## Security & publishing checklist

Before publishing to GitHub, follow these steps:

1. Confirm `.env` is ignored and not tracked

```powershell
# run inside repo root
git ls-files --error-unmatch .env || echo ".env is not tracked"
git status --porcelain
```

If `.env` is tracked, remove it from the index and commit the removal:

```powershell
git rm --cached .env
git commit -m "Remove .env from tracking"
```

2. Ensure there are no literal secrets in tracked files

Search for common patterns locally (PowerShell):

```powershell
Select-String -Path .\**\* -Pattern "AIza|AIzaSy|API_KEY|client_secret|PRIVATE_KEY|access_token" -SimpleMatch -List
```

3. Rotate exposed keys

If any key was committed or pushed previously, assume compromise and revoke/rotate the keys in Google Cloud Console / Firebase. Create new keys and restrict them by referrer, package name/SHA-1, or IP where possible.

4. (Optional) Purge secrets from git history

If you previously pushed secrets and want to remove them from history, use `git filter-repo` or BFG Repo-Cleaner. This rewrites history and requires collaborators to re-clone. Example (BFG):

```powershell
# install BFG and then run (example)
# bfg --delete-files .env
# or use repo-specific patterns
```

5. Add automated checks

Consider adding a pre-commit hook (husky) and a secret scanner (git-secrets, detect-secrets) to prevent future leaks.

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
