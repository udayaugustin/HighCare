import express from 'express';
import { createServer } from 'vite';

const app = express();

// Create Vite server in middleware mode
const vite = await createServer({
  server: { middlewareMode: true },
  appType: 'spa'
});

// Use vite's connect instance as middleware
app.use(vite.ssrFixStacktrace);
app.use(vite.middlewares);

const port = process.env.PORT ? Number(process.env.PORT) : 5000;

app.listen(port, '0.0.0.0', () => {
  console.log(`Development server running on http://0.0.0.0:${port}`);
});