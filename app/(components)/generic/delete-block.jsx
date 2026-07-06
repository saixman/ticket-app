"use client";

import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";

const DeleteBlock = ({ id }) => {
  const router = useRouter();

  const deleteTicket = async () => {
    const res = await fetch(`/api/tickets/${id}`, {
      method: "DELETE",
    });

    if (!res.ok) {
      throw new Error("Failed to delete ticket.");
    }

    router.refresh();
  };

  return (
    <FontAwesomeIcon
      icon={faX}
      className='text-red-500 hover:text-red-950'
      onClick={deleteTicket}
    ></FontAwesomeIcon>
  );
};

export default DeleteBlock;
