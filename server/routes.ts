import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertInquirySchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Create inquiry endpoint
  app.post("/api/inquiries", async (req, res) => {
    try {
      const inquiry = insertInquirySchema.parse(req.body);
      const createdInquiry = await storage.createInquiry(inquiry);
      res.status(201).json(createdInquiry);
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ message: "Invalid inquiry data", errors: error.errors });
      } else {
        res.status(500).json({ message: "Failed to create inquiry" });
      }
    }
  });

  // Get all inquiries endpoint (for potential admin use)
  app.get("/api/inquiries", async (req, res) => {
    try {
      const inquiries = await storage.getInquiries();
      res.json(inquiries);
    } catch (error) {
      res.status(500).json({ message: "Failed to retrieve inquiries" });
    }
  });

  // Get specific inquiry endpoint
  app.get("/api/inquiries/:id", async (req, res) => {
    try {
      const inquiry = await storage.getInquiry(req.params.id);
      if (!inquiry) {
        res.status(404).json({ message: "Inquiry not found" });
        return;
      }
      res.json(inquiry);
    } catch (error) {
      res.status(500).json({ message: "Failed to retrieve inquiry" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
