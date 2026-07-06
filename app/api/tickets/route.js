import Ticket from "@/app/(models)/ticket";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();
    const ticketData = body.formData;

    await Ticket.create(ticketData);

    return NextResponse.json({ message: "Ticket created" }, { status: 201 });
  } catch (error) {
    return _throwError500("Ticket create failed", error);
  }
}

export async function GET() {
  try {
    const tickets = await Ticket.find();
    return NextResponse.json({ content: tickets }, { status: 200 });
  } catch (error) {
    _throwError500("Tickets not reached", error);
  }
}

function _throwError500(message, error) {
  return NextResponse.json({ message, error }, { status: 500 });
}
