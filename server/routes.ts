import type { Express } from "express";
import { createServer, type Server } from "http";

export async function registerRoutes(app: Express): Promise<Server> {
  // This is a static website - no API routes needed

  const httpServer = createServer(app);

  return httpServer;
}
