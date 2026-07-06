import { TicketStatus } from "@/app/(models)/ticket-status";

const StatusDisplay = ({ status }) => {
  const colorMap = {
    [TicketStatus.DONE]: "bg-green-500",
    [TicketStatus.STARTED]: "bg-yellow-500",
    [TicketStatus.NOT_STARTED]: "bg-red-500",
  };

  const getColor = () => colorMap[status.toLowerCase()];

  return (
    <span
      className={`inline-block rounded-full px-2 py-1 text-xs font-semibold text-amber-100 ${getColor()}`}
    >
      {status}
    </span>
  );
};

export default StatusDisplay;
