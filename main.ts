
import { Application, Router } from "oak";

const router = new Router();

// Routes
router.get("/", (ctx) => {
  ctx.response.body = { message: "Bienvenue sur l'API" };
});

router.get("/api/hello", (ctx) => {
  ctx.response.body = { message: "Bonjour!" };
});

// Application
const app = new Application();

// Middleware pour logger les requêtes
app.use(async (ctx, next) => {
  console.log(`${ctx.request.method} ${ctx.request.url}`);
  await next();
});

// Utiliser le router
app.use(router.routes());
app.use(router.allowedMethods());

// Démarrer le serveur
console.log("Serveur démarré sur http://0.0.0.0:8000");
await app.listen({ port: 8000, hostname: "0.0.0.0" });
