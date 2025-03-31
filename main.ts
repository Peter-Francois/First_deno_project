import { serve } from "https://deno.land/std/http/server.ts";

const PORT = 8000;
console.log(`Serveur en cours d'exécution sur http://localhost:${PORT}`);

serve((req) => new Response("Hello, API!"), { port: PORT });
