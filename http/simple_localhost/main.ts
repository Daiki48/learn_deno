const server = Deno.listen({ port: 8000 });

console.log("http://localhost:8000/");

for await (const conn of server) {
  (async () => {
    const httpConn = Deno.serveHttp(conn);
    for await (const requestEvent of httpConn) {
      requestEvent.respondWith(
        new Response("Hello World Localhost", {
          status: 200,
        })
      );
    }
  })();
}
