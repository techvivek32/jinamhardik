import { Router, type IRouter } from "express";
import { db, contactsTable } from "@workspace/db";
import { SubmitContactBody } from "@workspace/api-zod";

const router: IRouter = Router();

router.post("/contact", async (req, res): Promise<void> => {
  const parsed = SubmitContactBody.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: parsed.error.message });
    return;
  }

  const [contact] = await db
    .insert(contactsTable)
    .values({
      name: parsed.data.name,
      email: parsed.data.email,
      phone: parsed.data.phone ?? null,
      company: parsed.data.company ?? null,
      service: parsed.data.service ?? null,
      message: parsed.data.message,
    })
    .returning();

  req.log.info({ contactId: contact.id }, "Contact inquiry submitted");

  res.status(201).json({
    id: contact.id,
    message: "Thank you for reaching out! We'll get back to you within 24 hours.",
  });
});

export default router;
