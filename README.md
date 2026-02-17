# Massaryk-project: jak spustit

## Backend
1. Pro spuštění Docker kontejneru pro backendovou část použijte následující příkazy:
- ve Windows: `docker-compose up --build`
- na Macu: `docker compose up --build`

Přístup: http://localhost:8080/api/nodes

## Frontend
1. Otevřete nový terminál a přejděte do složky `/frontend` pomocí příkazu:
`cd frontend`

2. Nainstalujte závislosti:
`npm install`

3. Spusťte frontendový server:
`npm run dev`

Přístup (funguje pouze se spuštěným backendem): http://localhost:5173
