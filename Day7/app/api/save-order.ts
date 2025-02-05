import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { client } from "@/sanity/lib/client";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

export async function POST(request: NextRequest) {
    try {
        const { sessionId } = await request.json();
        const session = await stripe.checkout.sessions.retrieve(sessionId);

        const orderData = {
            _type: "order",
            email: session.customer_email,
            total: session.amount_total ,
            orderDate: new Date().toISOString(),
        };

        await client.create(orderData);

        return NextResponse.json({ message: "Order saved successfully!" });
    } catch (error) {
        return NextResponse.json({ error: "error.message "}, { status: 500 });
    }
}
