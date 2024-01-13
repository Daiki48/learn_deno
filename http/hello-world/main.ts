function handler(_req: Request): Response {
  return new Response("Hello, World! This is http example");
}

Deno.serve(handler);
