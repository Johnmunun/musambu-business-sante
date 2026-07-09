import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email } = body;

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Adresse e-mail invalide." },
        { status: 400 }
      );
    }

    // Admin-ready: brancher ici un service newsletter (Mailchimp, Brevo, etc.)
    console.log("[Newsletter]", { email });

    return NextResponse.json(
      { success: true, message: "Inscription réussie." },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { error: "Erreur lors de l'inscription." },
      { status: 500 }
    );
  }
}
