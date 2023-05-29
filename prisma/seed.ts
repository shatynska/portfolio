import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
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


  console.log({ design, backend });
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
