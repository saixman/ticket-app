import { MAX_FIRE_ICONS, TicketPriority } from "@/app/(models)/ticket-priority";
import { faFire } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PriorityDisplay = ({ priority }) => {
  const colorMap = {
    [TicketPriority.HIGH]: "text-red-500",
    [TicketPriority.MEDIUM]: "text-yellow-500",
    [TicketPriority.LOW]: "text-gray-500",
  };

  let getColor = (level) => {
    const actualPriority = Math.max(priority, level);
    return colorMap[actualPriority];
  };

  return (
    <div className='flex justify-start align-baseline'>
      {Array.from({ length: MAX_FIRE_ICONS }).map((_, index) => (
        <FontAwesomeIcon
          key={index}
          icon={faFire}
          className={getColor(index + 1)}
        />
      ))}
    </div>
  );
};

export default PriorityDisplay;
