import { PrismaClient } from "@prisma/client";


export const members = [
    {
      name: 'Giang',
    },
    {
      name: 'Le',
    },
    {
      name: 'tung',
    },
  ];

const prisma = new PrismaClient();

async function main() {
  for (let member of members) {
    // await prisma.member.create({
    //   data: member,
    // });
    // await prisma.user.create({
    //     data: member,
    //   });
    await prisma.test.create({
        data: member,
      });
  }

}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });