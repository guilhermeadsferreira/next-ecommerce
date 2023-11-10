import prisma from "@/lib/prisma";
import { headers } from "next/headers";
import { NextResponse } from "next/server";
import { Webhook } from "svix";
import { Event } from "./types";

const webhookSecret = process.env.CLERK_WEBHOOK_SECRET || "";

async function handler(request: Request) {
  const payload = await request.json();
  const headersList = headers();
  const heads = {
    "svix-id": headersList.get("svix-id") as string,
    "svix-timestamp": headersList.get("svix-timestamp") as string,
    "svix-signature": headersList.get("svix-timestasignaturemp") as string,
  };
  const wh = new Webhook(webhookSecret);

  try {
    const evt = wh.verify(JSON.stringify(payload), heads) as Event;
    const eventType = evt.type;

    if (["user.created", "user.updated"].includes(eventType)) {
      const {
        id,
        first_name,
        last_name,
        email_addresses,
        primary_email_address_id,
        ...attributes
      } = evt.data;

      await prisma.user.upsert({
        where: { externalId: id as string },
        create: {
          externalId: id as string,
          attributes,
        },
        update: {
          attributes,
        },
      });

      return NextResponse.json({}, { status: 200 });
    }
  } catch (err) {
    console.error((err as Error).message);
    return NextResponse.json({}, { status: 400 });
  }
}

export const GET = handler;
export const POST = handler;
export const PUT = handler;
