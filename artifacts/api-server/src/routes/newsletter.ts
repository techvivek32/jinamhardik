import { Router, type IRouter } from "express";
import { db, newsletterTable } from "@workspace/db";
import { SubscribeNewsletterBody } from "@workspace/api-zod";
import { eq } from "drizzle-orm";

const router: IRouter = Router();

router.post("/newsletter", async (req, res): Promise<void> => {
  const parsed = SubscribeNewsletterBody.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: parsed.error.message });
    return;
  }

  const existing = await db
    .select()
    .from(newsletterTable)
    .where(eq(newsletterTable.email, parsed.data.email))
    .limit(1);

  if (existing.length > 0) {
    res.status(409).json({ error: "This email is already subscribed." });
    return;
  }

  await db.insert(newsletterTable).values({
    email: parsed.data.email,
    name: parsed.data.name ?? null,
  });

  req.log.info({ email: parsed.data.email }, "Newsletter subscription added");

  res.status(201).json({
    message: "You've been successfully subscribed to our newsletter!",
  });
});

export default router;
