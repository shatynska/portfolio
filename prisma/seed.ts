import { PrismaClient } from "@prisma/client";
import PreviousMap from "postcss/lib/previous-map";

const prisma = new PrismaClient({ log: ["query"] });

async function main() {
  await prisma.project.deleteMany();
  await prisma.role.deleteMany();
  
  await prisma.role.upsert({
    where: { id: 1 },
    update: {},
    create: {
      id: 1,
      title: "UI/UX designer",
    },
  });

  await prisma.role.upsert({
    where: { id: 2 },
    update: {},
    create: {
      id: 2,
      title: "Fullstack developer",
    },
  });

  await prisma.role.upsert({
    where: { id: 3 },
    update: {},
    create: {
      id: 3,
      title: "Backend developer",
    },
  });
  
  await prisma.role.upsert({
    where: { id: 4 },
    update: {},
    create: {
      id: 4,
      title: "Frontend developer",
    },
  });

  await prisma.project.upsert({
    where: { id: 1 },
    update: {},
    create: {
      id: 1,
      title: "Web Developer portfolio",
      type: "Portfolio website",
      stack: "TypeScript, React, Next.js, Postgresql, Prisma, Tailwind",
      url: "https://shatynska.com",
      gitHubUrl: "https://github.com/shatynska/shatynska.com",
      image: "/projects/pigeons.svg",
      roles: {
        create: [
          {
            role: {
              connect: { id: 1 },
            },
          },
          {
            role: {
              connect: { id: 2 },
            },
          },
        ],
      },
    },
  });

  await prisma.project.upsert({
    where: { id: 2 },
    update: {},
    create: {
      id: 2,
      title: 'Website for blacksmith "Steel Sky"',
      type: "Business website",
      stack: "HTML, CSS, JavaScript, SQLite, Docker",
      url: "https://shatynskyj.in.us",
      gitHubUrl: "https://github.com/shatynska/shatynskyj.in.ua",
      image: "/projects/blacksmith.svg",
      roles: {
        create: [
          {
            role: {
              connect: { id: 1 },
            },
          },
          {
            role: {
              connect: { id: 2 },
            },
          },
        ],
      },
    },
  });

  await prisma.project.upsert({
    where: { id: 3 },
    update: {},
    create: {
      id: 3,
      title: "Drohobych Psychotherapists Union",
      type: "CMS",
      stack: "PHP, Laravel, TypeScript, React, Inertia, Tailwind.",
      url: "https://my.dro.psypra.com",
      gitHubUrl: "https://github.com/shatynska/my.dro.psypra.com",
      image: "/projects/window.svg",
      roles: {
        create: [
          {
            role: {
              connect: { id: 1 },
            },
          },
          {
            role: {
              connect: { id: 2 },
            },
          },
        ],
      },
    },
  });

  await prisma.project.upsert({
    where: { id: 4 },
    update: {},
    create: {
      id: 4,
      title: "Private psychology practice",
      type: "Web application",
      stack: "PHP, Laravel, TypeScript, React, Next.js, Tailwind.",
      url: "https://shatynska.in.ua",
      gitHubUrl: "https://github.com/shatynska/shatynska.in.ua",
      image: "/projects/pigeons.svg",
      roles: {
        create: [
          {
            role: {
              connect: { id: 1 },
            },
          },
          {
            role: {
              connect: { id: 2 },
            },
          },
        ],
      },
    },
  });

  await prisma.project.upsert({
    where: { id: 5 },
    update: {},
    create: {
      id: 5,
      title: "Private psychology practice",
      type: "Web application",
      stack: "PHP, Laravel, TypeScript, React, Next.js, Tailwind.",
      url: "https://shatynska.in.ua",
      gitHubUrl: "https://github.com/shatynska/shatynska.in.ua",
      image: "/projects/pigeons.svg",
      roles: {
        create: [
          {
            role: {
              connect: { id: 1 },
            },
          },
          {
            role: {
              connect: { id: 2 },
            },
          },
        ],
      },
    },
  });

  await prisma.project.upsert({
    where: { id: 6 },
    update: {},
    create: {
      id: 6,
      title: "Private psychology practice",
      type: "Web application",
      stack: "PHP, Laravel, TypeScript, React, Next.js, Tailwind.",
      url: "https://shatynska.in.ua",
      gitHubUrl: "https://github.com/shatynska/shatynska.in.ua",
      image: "/projects/window.svg",
      roles: {
        create: [
          {
            role: {
              connect: { id: 1 },
            },
          },
          {
            role: {
              connect: { id: 2 },
            },
          },
        ],
      },
    },
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
