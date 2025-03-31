import { Application, Router } from "https://deno.land/x/oak/mod.ts";

// Création du routeur
const router = new Router();
router.get("/", (context) => {
  context.response.body = `
    <html>
      <head>
        <title>Compteur en Deno</title>
      </head>
      <body>
        <h1>Compteur : <span id="count">0</span></h1>
        <button onclick="increment()">+1</button>

        <script>
          function increment() {
            let countElement = document.getElementById("count");
            let count = parseInt(countElement.innerText);
            countElement.innerText = count + 1;
          }
        </script>
      </body>
    </html>
  `;
});

// Création de l'application
const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());

// Démarrage du serveur sur le port 8000
console.log("Serveur démarré sur http://localhost:8000");
await app.listen({ port: 8000 });
