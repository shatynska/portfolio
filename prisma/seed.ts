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
      title: "Backend developer",
    },
  });

  await prisma.role.upsert({
    where: { id: 3 },
    update: {},
    create: {
      id: 3,
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
          {
            role: {
              connect: { id: 3 },
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
      image: "/projects/psy.svg",
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
          {
            role: {
              connect: { id: 3 },
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
