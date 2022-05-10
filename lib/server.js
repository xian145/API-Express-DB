const express = require("express");
const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;
// Require para usar Prisma
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
//CORS
const cors = require("cors");
const corsOptions = {
    origin: "http://localhost:8081"
};
app.use(cors(corsOptions));

app.get("/", (req, res) => {
    res.json({message: "alive"});
});

app.get("/explorers", async (req, res) => {
    const allExplorers =  await prisma.explorer.findMany({});
    res.json(allExplorers);
});

app.get("/explorers/:id", async (req, res) => {
    const id = req.params.id;
    const explorer = await prisma.explorer.findUnique({where: {id: parseInt(id)}});
    res.json(explorer);
});

app.post("/explorers", async (req, res) => {
    const explorer = {
        name: req.body.name,
        username: req.body.username,
        mission: req.body.mission
    };
    const message = "Explorer creado.";
    await prisma.explorer.create({data: explorer});
    return res.json({message});
});

app.put("/explorers/:id", async (req, res) => {
    const id = parseInt(req.params.id);

    await prisma.explorer.update({
        where: {
            id: id
        },
        data: {
            mission: req.body.mission
        }
    });

    return res.json({message: "Actualizado correctamente"});
});

app.delete("/explorers/:id", async (req, res) => {
    const id = parseInt(req.params.id);
    await prisma.explorer.delete({where: {id: id}});
    return res.json({message: "Eliminado correctamente"});
});

//Endpoinst para la DB relacionada al modelo estudiantes

app.get("/students", async (req, res) => {
    const allStudents =  await prisma.estudiante.findMany({}); //find many, para encontrar todos los de la lista
    res.json(allStudents);
});

app.get("/students/:id", async (req, res) => {
    const id = req.params.id;
    const student = await prisma.estudiante.findUnique({where: {id: parseInt(id)}}); //encunetra eal unico estudiante que tiene el id:
    res.json(student);
});

app.post("/students", async (req, res) => {
    const student = { //parametros con los que se creara
        name: req.body.name,
        language: req.body.lang,
        missionCommander: req.body.missionCommander,
        certification: req.body.hasCertification
    };
    const message = "Student creado.";
    await prisma.estudiante.create({data: student}); //creacion del estudiante
    return res.json({message});
});

app.put("/students/:id", async (req, res) => {
    const id = parseInt(req.params.id);
    await prisma.estudiante.update({ //actualizar donde se encuetre el id proporcionado con la finromacion dentro de data
        where: {
            id: id
        },
        data: {
            mission: req.body.mission
        }
    });
    return res.json({message: "Actualizado correctamente"});
});

app.delete("/students/:id", async (req, res) => {
    const id = parseInt(req.params.id);
    await prisma.estudiante.delete({where: {id: id}}); //elimina al estudiante con el id que se proporciona
    return res.json({message: "Eliminado correctamente"});
});

//Endpoints para el modelo de mission commander

app.listen(port, () => {
    console.log(`Listening to requests on port ${port}`);
});