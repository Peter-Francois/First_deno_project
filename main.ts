import { Application, Router } from "oak";

// Création du routeur
const router = new Router();
let counter = 0;
router.get("/", (context) => {
  context.response.body = { count: counter };
});

router.post("/increment", (ctx) => {
  counter++;
  ctx.response.body = { count: counter };
});

// Création de l'application
const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());

// Démarrage du serveur sur le port 8000
console.log("Serveur démarré sur http://0.0.0.0:8000");
await app.listen({ port: 8000, hostname: "0.0.0.0" });
