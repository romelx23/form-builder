# PageForm

basado en el video de Youtube de [CodeWithKilton](https://youtu.be/QGXUUXy0AMw?si=MXotxCO4HQaV2IN9)

En este proyecto se implementa un formulario de arrastrar y soltar con Nextjs 14 y Dnd-kit. El formulario se puede compartir y se puede ver un resumen de las visitas y envíos.:

- Nextjs 14 with AppRouter
- Dnd-kit library
- ServerActions
- Typescript
- Tailwindcss / Shadcn UI
- Vercel PostgreSQL
- Prisma as ORM

## Features:

- Responsive
- Create forms with a stunning drag and drop designer
- Layout fields: Title, SubTitle, Spacer, Separator, Paragraph
- Form fields: Text, Number, Select, Date, Checkbox, Textarea
  Is easy to add and customize new fields
- Form preview dialog
- Share form url
- Form submission/validation
- Form stats: visits and submissions

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Start docker

```bash
docker-compose up -d
```

## Config Prisma

```bash
npx prisma generate
```

## Start prisma studio

```bash
npx prisma studio
```

## Start prisma migrate

```bash
npx prisma migrate dev --name init
```

## Start prisma seed

```bash
npx prisma db seed
```

## Start prisma reset

```bash
npx prisma db reset
```
