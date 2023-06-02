import { PrismaClient } from "@prisma/client";
import PreviousMap from "postcss/lib/previous-map";

const prisma = new PrismaClient({ log: ["query"] });

async function main() {
  const project1 = await prisma.project.upsert({
    where: { id: 1 },
    update: {},
    create: {
      id: 1,
      title: "Project1",
      stack: "Stack of Project 1",
      url: "https://shatynska.com",
      gitHubUrl: "https://github.com/shatynska/shatynska.com",
      image: "/projects/pigeons.svg",
    },
  });

  const design = await prisma.role.upsert({
    where: { id: 1 },
    update: {},
    create: {
      id: 1,
      title: "design",
    },
  });

  const backend = await prisma.role.upsert({
    where: { id: 2 },
    update: {},
    create: {
      id: 2,
      title: "backend",
    },
  });

  const frontend = await prisma.role.upsert({
    where: { id: 3 },
    update: {},
    create: {
      id: 3,
      title: "frontend",
    },
  });

  const website = await prisma.type.upsert({
    where: { id: 1 },
    update: {},
    create: {
      id: 1,
      title: "website",
    },
  });

  const application = await prisma.type.upsert({
    where: { id: 2 },
    update: {},
    create: {
      id: 2,
      title: "web application",
    },
  });

  const cms = await prisma.type.upsert({
    where: { id: 3 },
    update: {},
    create: {
      id: 3,
      title: "cms",
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
