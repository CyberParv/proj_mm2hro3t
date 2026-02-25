import { z } from "zod";

export const reservationSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email().max(200),
  phone: z.string().min(7).max(30),
  date: z.string().min(1).max(20),
  time: z.enum([
    "5:00 PM",
    "5:30 PM",
    "6:00 PM",
    "6:30 PM",
    "7:00 PM",
    "7:30 PM",
    "8:00 PM",
    "8:30 PM",
    "9:00 PM",
  ]),
  guests: z.enum(["1", "2", "3", "4", "5", "6", "7", "8+"]),
  occasion: z.enum(["None", "Birthday", "Anniversary", "Business Dinner", "Date Night", "Other"]).optional(),
  requests: z.string().max(1000).optional(),
});

export const contactSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email().max(200),
  subject: z.enum([
    "General Inquiry",
    "Reservation Question",
    "Catering Inquiry",
    "Feedback",
    "Other",
  ]),
  message: z.string().min(5).max(2000),
});

export const cateringSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email().max(200),
  phone: z.string().min(7).max(30),
  eventType: z.enum(["Corporate Event", "Wedding", "Private Party", "Holiday Gathering", "Other"]),
  date: z.string().min(1).max(20),
  guests: z.number().int().min(1).max(1000),
  details: z.string().max(2000).optional(),
});

export type ReservationInput = z.infer<typeof reservationSchema>;
export type ContactInput = z.infer<typeof contactSchema>;
export type CateringInput = z.infer<typeof cateringSchema>;
