import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: "2023-10-16",
});

export async function POST(request: NextRequest) {
  try {
    const { amount } = await request.json();

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: "Your Product Name",
            },
            unit_amount: amount, // amount in cents
          },
          quantity: 1,
        },
      ],
      success_url: `${process.env.NEXT_PUBLIC_BASE_MY_URL}/checkout`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_MY_URL}/checkout`,
    });
    // /payment-success?amount=${amount}

    return NextResponse.json({ url: session.url });
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}
