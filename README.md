# Portfolio - Next.js + PostgreSQL + Vercel

Base inicial para tu portfolio con:

- `Node.js` + `Next.js` (App Router)
- `PostgreSQL` con `Prisma ORM`
- Deploy en `Vercel`

## 1) Requisitos

- Node.js 20+
- PostgreSQL local o remoto

## 2) Variables de entorno

1. Copia `.env.example` a `.env`
2. Ajusta `DATABASE_URL` con tu conexion real de PostgreSQL

Ejemplo:

```env
DATABASE_URL="postgresql://usuario:password@localhost:5432/portfolio?schema=public"
```

## 3) Iniciar base de datos y Prisma

```bash
npm install
npm run prisma:generate
npm run prisma:migrate -- --name init
```

## 4) Levantar el proyecto

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## 5) Endpoints disponibles

- `GET /api/projects` -> devuelve proyectos ordenados por destacados y fecha.

## 6) Estructura principal

- `src/app/page.tsx`: home del portfolio (lee proyectos desde PostgreSQL).
- `src/app/api/projects/route.ts`: API de proyectos.
- `src/lib/prisma.ts`: cliente Prisma compartido.
- `prisma/schema.prisma`: modelos `Profile` y `Project`.

## 7) Deploy en Vercel

1. Sube el repositorio a GitHub.
2. Importa el repo en [Vercel](https://vercel.com/new).
3. En `Project Settings -> Environment Variables`, agrega:
   - `DATABASE_URL` (la de produccion)
4. Ejecuta migraciones antes o durante el deploy:
   - opcion simple: correrlas en tu entorno y apuntar a DB de produccion
   - opcion automatizada: agregar paso de migracion en pipeline
5. Deploy.

## Siguientes pasos recomendados

- Agregar panel admin para crear/editar proyectos.
- Cargar seccion "Sobre mi", experiencia y contacto desde DB.
- Agregar tests y CI basico.
