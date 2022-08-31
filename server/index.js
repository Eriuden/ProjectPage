/* Voyons ensemble ce nouveau projet
Il s'agirait de permettre à chaque utilisateur d'avoir une page répertoriant ses projets
On pourrait stocker ses projets en BDD ou en localstorage, à voir mais je préfère BDD 
Il pourrait lui donner un nom, une image de présentation, un lien vers une page, etc etc

Pour l'user, bon, j'ai un back qui fait l'affaire, on ne change pas une équipe qui gagne, on reste sur une base solide 

Au jour du 31 aout 2022

Les models sont faits et l'auth middleware également,
il faudra s'occuper des routes et controllers ultérieurement
puis les utils 

*/

const express = require("express")
const bodyParser = require("body-parser")
const cookieParser = require("cookie-parser")
const usersRoutes = require("./routes/users.routes")
const projectsRoutes = require("./routes/projects.routes")
require("dotenv").config({path:"./config/.env"})
const {requireAuth, checkUser} = require("./middleware/auth.middleware")
require("./config/db")
const cors = require("cors")
const app = express()

app.use(cors({ origin: process.env.CLIENT_URL}))

const corsOptions = {
    origin: process.env.CLIENT_URL,
    credentials: true,
    allowedHeaders: ["sessionId", "Content-Type"],
    exposedHeaders: ["sessionId"],
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
};

app.use(cors(corsOptions))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(cookieParser())

app.get("*", checkUser)
app.get("jwtid", requireAuth, (req,res) => {
    res.status(200).send(res.locals.user_id);
});

app.use("/api/users", usersRoutes);
app.use("/api/projects", projectsRoutes);

app.listen(process.env.PORT, () => {
    console.log(`branché sur le port ${process.env.PORT}`);
})

