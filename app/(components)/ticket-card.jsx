import DeleteBlock from "./generic/delete-block";
import PriorityDisplay from "./display/priority-display";
import ProgressDisplay from "./display/progress-display";
import StatusDisplay from "./display/status-display";

const TicketCard = () => {
  return (
    <div className='flex flex-col bg-background p-3 m-2'>
      <div className='flex mb-3'>
        <PriorityDisplay />

        <div>
          <DeleteBlock />
        </div>
      </div>

      <h4>Ticket title</h4>

      <hr className='h-px border-0 mb-2' />

      <p>This is the ticket description! Please do a ticket</p>

      <div className='flex-grow'> </div>
      <ProgressDisplay />
      <StatusDisplay />
    </div>
  );
};

export default TicketCard;
