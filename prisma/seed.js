const { PrismaClient } = require('@prisma/client')
const bcrypt = require('bcryptjs')

const prisma = new PrismaClient()

async function main() {
  const hashedPassword = bcrypt.hashSync('admin123', 12)

  const user = await prisma.user.upsert({
    where: { email: 'admin@sidetenaher.com' },
    update: {},
    create: {
      email: 'admin@sidetenaher.com',
      name: 'Admin',
      password: hashedPassword,
      role: 'admin',
    },
  })

  console.log('✅ Admin user created:', user.email)
  console.log('   Password: admin123')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })