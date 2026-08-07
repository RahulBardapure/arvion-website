# Arvion — Company Marketing Website

Marketing + product showcase site for **Arvion**, flagship product **Digital School** (School ERP + Parent Android App). Multi-product ready (Products dropdown / Coming Soon cards).

## Structure

```
Arvion/
├── frontend/          Vue 3 + TypeScript + Vite + Tailwind + Pinia + Vue Router
├── backend/           .NET 8 Clean Architecture Web API
│   └── src/
│       ├── Arvion.Domain
│       ├── Arvion.Application
│       ├── Arvion.Infrastructure
│       └── Arvion.WebAPI
└── README.md
```

## Brand tokens (v1 placeholders)

| Token | Value |
|--------|--------|
| Company | Arvion |
| Product | Digital School |
| Phone | +91 92261 93828 |
| Email | arvionsoftwares@gmail.com |
| Play Store | https://play.google.com/store/apps/details?id=com.kunjirschool.erp |
| Logo | `frontend/public/brand/arvion-logo.png` (+ SVG) |
| Primary | Deep ink `#0A1220` · Brand purple `#5B3CC4` · Indigo `#3D4FE0` |
| Accent | Soft cyan `#5BC8E8` · Lavender surfaces `#F4F2FB` |
| Fonts | Sora (display) + Plus Jakarta Sans (body) |

## Local development

### Prerequisites

- Node 20+ and npm
- .NET 8 SDK
- (Optional) Azure SQL for production-like DB — local default is **SQLite**

### Backend

```bash
cd backend/src/Arvion.WebAPI
dotnet run --launch-profile http
```

- API: http://localhost:5034  
- Swagger (Development): http://localhost:5034/swagger  
- SQLite file: `arvion-marketing.dev.db` (created via EF migrations on startup + seeded testimonials)

### Frontend

```bash
cd frontend
cp .env.example .env.development   # if needed
npm install
npm run dev
```

- App: http://localhost:5173  
- `VITE_API_URL=http://localhost:5034/api/v1`

### Demo form E2E

1. Start API, then frontend  
2. Open Home → fill **Request free demo** → submit  
3. Confirm `200` + toast; lead stored in SQLite (`DemoRequests`)  
4. List leads (requires JWT): `GET /api/v1/admin/leads` with Bearer token

### Environment variables

**Frontend**

| Variable | Purpose |
|----------|---------|
| `VITE_API_URL` | API base including `/api/v1` |
| `VITE_TURNSTILE_SITE_KEY` | Public Turnstile key (when captcha enabled) |

**Backend** (`appsettings` / App Service settings)

| Key | Purpose |
|-----|---------|
| `Database:Provider` | `Sqlite` (local) or `SqlServer` (Azure) |
| `ConnectionStrings:DefaultConnection` | DB connection |
| `Cors:Origins` | Allowed front-end origins |
| `Jwt:*` | Admin JWT |
| `Email:*` | SMTP / sales inbox (disabled locally) |
| `Captcha:*` | Turnstile/hCaptcha (`Enabled: false` locally) |

See `backend/src/Arvion.WebAPI/appsettings.Production.example.json` (no real secrets).

## API (v1)

| Method | Path | Auth |
|--------|------|------|
| POST | `/api/v1/leads/demo` | Anonymous + rate limit |
| POST | `/api/v1/leads/contact` | Anonymous + rate limit |
| GET | `/api/v1/testimonials` | Anonymous |
| GET | `/api/v1/health` | Anonymous |
| GET | `/api/v1/admin/leads` | JWT |

Envelope: `{ "success": true, "data": {}, "message": "..." }`

## Azure deploy outline

1. **Azure SQL** — create DB; set `Database:Provider=SqlServer` + connection string  
2. **App Service** — publish `Arvion.WebAPI`; configure Email, Captcha, Jwt, Cors  
3. **Static Web Apps** — build `frontend` (`npm run build`, `app_location=frontend`, `output_location=dist`); `public/staticwebapp.config.json` provides SPA fallback + security headers  
4. **Link API** — SWA ↔ App Service (or set `VITE_API_URL` to the App Service URL at build time)  
5. **Blob Storage** — logos, avatars, brochures (CDN/SAS URLs); wire in phase 2 CMS  

EF migrations only — applied on API startup via `Database.MigrateAsync()` (no `EnsureCreated`).

## Adding Product #2

1. Add entry to `frontend/src/content/site.ts` → `products` array  
2. Add route under `/products/{slug}` and nav dropdown (already data-driven)  
3. Optional: CMS entities for catalog (phase 2 TODO in backend)

## Phase 2 (stubs / TODOs)

- CMS for testimonials & blog  
- WhatsApp notify sales on new lead (`LeadService`)  
- GA4 / Clarity  
- Multi-product catalog CMS  
- Full Turnstile widget on `DemoForm.vue`

## Scripts quick reference

```bash
# Frontend build
cd frontend && npm run build

# New EF migration
cd backend
dotnet ef migrations add <Name> \
  --project src/Arvion.Infrastructure \
  --startup-project src/Arvion.WebAPI \
  --output-dir Persistence/Migrations
```
