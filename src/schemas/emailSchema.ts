import { z } from "zod";

// Email object schema (used for storing emails in the database)
export const emailSchema = z.object({
	id: z.string(),
	from_address: z.string(),
	to_address: z.string(),
	subject: z.string().nullable(),
	received_at: z.number(),
	html_content: z.string().nullable(),
	text_content: z.string().nullable(),
});

export type Email = z.infer<typeof emailSchema>;

// Email summary object schema (used for listing emails)
const emailSummarySchema = z.object({
	id: z.string(),
	from_address: z.string(),
	to_address: z.string(),
	subject: z.string().nullable(),
	received_at: z.number(),
});

export type EmailSummary = z.infer<typeof emailSummarySchema>;
