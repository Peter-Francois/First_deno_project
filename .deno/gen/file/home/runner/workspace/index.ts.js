import * as expressive from "https://raw.githubusercontent.com/NMathar/deno-express/master/mod.ts";
const port = 3000;
const app = new expressive.App();
app.get("/", (_req, res)=>{
  res.send("Hello from Replit\r\n");
});
const server = await app.listen(port, "0.0.0.0");
console.log("app listening on port " + server.port);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vaG9tZS9ydW5uZXIvd29ya3NwYWNlL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGV4cHJlc3NpdmUgZnJvbSBcImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9OTWF0aGFyL2Rlbm8tZXhwcmVzcy9tYXN0ZXIvbW9kLnRzXCI7XG5cbmNvbnN0IHBvcnQgPSAzMDAwO1xuY29uc3QgYXBwID0gbmV3IGV4cHJlc3NpdmUuQXBwKCk7XG5hcHAuZ2V0KFwiL1wiLCAoX3JlcSwgcmVzKSA9PiB7XG4gIHJlcy5zZW5kKFwiSGVsbG8gZnJvbSBSZXBsaXRcXHJcXG5cIik7XG59KTtcbmNvbnN0IHNlcnZlciA9IGF3YWl0IGFwcC5saXN0ZW4ocG9ydCwgXCIwLjAuMC4wXCIpO1xuY29uc29sZS5sb2coXCJhcHAgbGlzdGVuaW5nIG9uIHBvcnQgXCIgKyBzZXJ2ZXIucG9ydCk7Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksZ0JBQWdCLHVFQUF1RTtBQUVuRyxNQUFNLE9BQU87QUFDYixNQUFNLE1BQU0sSUFBSSxXQUFXLEdBQUc7QUFDOUIsSUFBSSxHQUFHLENBQUMsS0FBSyxDQUFDLE1BQU07RUFDbEIsSUFBSSxJQUFJLENBQUM7QUFDWDtBQUNBLE1BQU0sU0FBUyxNQUFNLElBQUksTUFBTSxDQUFDLE1BQU07QUFDdEMsUUFBUSxHQUFHLENBQUMsMkJBQTJCLE9BQU8sSUFBSSJ9