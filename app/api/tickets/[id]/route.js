import Ticket from "@/app/(models)/ticket";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  try {
    const { id } = await params;
    const foundTicket = await Ticket.findOne({ _id: id });

    return NextResponse.json({ content: foundTicket }, { status: 200 });
  } catch (error) {
    return _throwError500("Failed to get ticket ", error);
  }
}

export async function PUT(request, { params }) {
  try {
    const { id } = await params;
    const body = await request.json();
    const ticketData = body.formData;

    const updatedTicket = await Ticket.findByIdAndUpdate(id, { ...ticketData });

    return NextResponse.json({ content: updatedTicket }, { status: 200 });
  } catch (error) {
    return _throwError500("Failed to update ticket ", error);
  }
}

export async function DELETE(request, { params }) {
  try {
    const { id } = await params;
    await Ticket.findByIdAndDelete(id);

    return NextResponse.json({ message: "Ticket deleted" }, { status: 200 });
  } catch (error) {
    return _throwError500("Ticket delete failed", error);
  }
}

function _throwError500(message, error) {
  return NextResponse.json({ message, error }, { status: 500 });
}
