import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Tous les champs obligatoires doivent être remplis." },
        { status: 400 }
      );
    }

    // Admin-ready: brancher ici un service e-mail (Resend, SendGrid, etc.)
    console.log("[Contact]", { name, email, subject, message, phone: body.phone });

    return NextResponse.json(
      { success: true, message: "Message reçu avec succès." },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { error: "Erreur lors du traitement de la demande." },
      { status: 500 }
    );
  }
}
