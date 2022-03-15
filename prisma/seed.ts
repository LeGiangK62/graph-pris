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

export const pets = [
  {
    name: 'piglet',
    type: 'pig'
  },
  {
    name: 'tom',
    type: 'cat'
  },
  {
    name: 'spike',
    type: 'dog'
  },
]

const prisma = new PrismaClient();

// async function main() {
//   for (let member of members) {
//     // await prisma.member.create({
//     //   data: member,
//     // });
//     // await prisma.user.create({
//     //     data: member,
//     //   });
//     await prisma.test.create({
//         data: member,
//       });
//   }

// }

async function main() {
  for (let pet of pets) {
    await prisma.pet.create({
        data: pet,
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