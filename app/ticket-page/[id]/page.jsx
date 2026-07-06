import TicketForm from "@/app/(components)/data-handling/edit-ticket-form";

const PageViewType = {
  CREATE: "CREATE",
  EDIT: "EDIT",
};

const getTicketById = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/tickets/${id}`, {
      method: "GET",
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to get ticket");
    }

    return res.json();
  } catch (error) {
    console.error("Failed");
  }
};

const TicketPage = async ({ params }) => {
  const { id } = await params;

  const pageView = id == "new" ? PageViewType.CREATE : PageViewType.EDIT;
  let updateTicket = {};

  const isEditMode = pageView == PageViewType.EDIT;

  if (isEditMode) {
    const { content } = await getTicketById(id);
    updateTicket = content;
  } else {
    updateTicket = {
      _id: "new",
    };
  }

  return <TicketForm ticket={updateTicket} isEditMode={isEditMode} />;
};

export default TicketPage;
