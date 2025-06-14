import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const newKurs = await prisma.kurs.create({
    data: {
      title: 'Curso de Node.js con Prisma',
      description: 'Aprende a usar Prisma con Node.js de forma práctica.',
      isClassroom: true,
      isOnline: false,
      startDate: new Date('2025-07-01T09:00:00Z'),
      endDate: new Date('2025-07-15T17:00:00Z'),
      duration: '2 semanas',
      minParticipants: 5,
      maxParticipants: 20,
      price: 150,
      book: 'Manual oficial de Prisma',
    },
  })

  console.log('Curso creado:', newKurs)
}

main()
  .catch((e) => {
    console.error(e)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })

