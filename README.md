# VeinGuard Dashboard

ESP32 web dashboard for the VeinGuard therapy-belt prototype.

## Local run

```bash
npm install
npm start
```

Open http://localhost:10000

## API

POST `/api/data`

```json
{"pressure":650,"temperature":31.2,"vibration":true}
```

GET `/api/data` returns the latest data.

## GitHub

```bash
git init
git add .
git commit -m "Initial VeinGuard dashboard"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/veinguard-dashboard.git
git push -u origin main
```

## Render

Create a Render Web Service from the GitHub repository.

Build command: `npm install`

Start command: `npm start`
