const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

(async function main() {
    try {
        const woopa = await prisma.explorer.upsert({
            where: { name: "Woopa" },
            update: {},
            create: {
                name: "Woopa",
                username: "ajolonauta",
                mission: "Node"
            },
        });

        const woopa1 = await prisma.explorer.upsert({
            where: { name: "Woopa1" },
            update: {},
            create: {
                name: "Woopa1",
                username: "ajolonauta1",
                mission: "Node"
            },
        });

        const woopa2 = await prisma.explorer.upsert({
            where: { name: "Woopa 2" },
            update: {},
            create: {
                name: "Woopa 2",
                username: "ajolonauta2",
                mission: "Java"
            },
        });

        const woopa3 = await prisma.explorer.upsert({
            where: { name: "Woopa 3" },
            update: {},
            create: {
                name: "Woopa 3",
                username: "ajolonauta3",
                mission: "Node"
            },
        });

        const abraham = await prisma.explorer.upsert({
            where: { name: "Abraham Ariel" },
            update: {},
            create: {
                name: "Abraham Ariel",
                username: "xian145",
                mission: "Node"
            },
        });

        const estudiante1 = await prisma.Estudiante.upsert({
            where: {name: "Luis Perez"},
            update: {},
            create: {
                name: "Luis Perez",
                lang: "spanish",
                missionCommander: "Carlo",
                enrollments: 2,
                hasCertification: true,
            }
        });

        const estudiante2 = await prisma.Estudiante.upsert({
            where: {name: "Horacio Parra"},
            update: {},
            create: {
                name: "Horacio Parra",
                lang: "english",
                missionCommander: "Fernanda",
                enrollments: 5,
                hasCertification: true,
            }
        });

        const estudiante3 = await prisma.Estudiante.upsert({
            where: {name: "Abraham Arizmendi"},
            update: {},
            create: {
                name: "Abraham Arizmendi",
                lang: "spanish",
                missionCommander: "Carlo",
                enrollments: 3,
                hasCertification: true,
            }
        });

        const commander1 = await prisma.missionCommander.upsert({
            where: {name: "Carlo"},
            update: {},
            create: {
                name: "Carlo",
                username: "CarloGilmar",
                mainStack: "node"
            }
        });

        console.log("Create 4 explorers");
    } catch(e) {
        console.error(e);
        process.exit(1);
    } finally {
        await prisma.$disconnect();
    }
})();