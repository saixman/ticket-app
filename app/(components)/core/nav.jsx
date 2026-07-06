import { faHome, faTicket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const Nav = () => {
  return (
    <nav className='flex justify-between bg-nav p-4'>
      <div className='flex space-x-4'>
        <Link href='/'>
          <FontAwesomeIcon icon={faHome} className='icon'></FontAwesomeIcon>
        </Link>

        <Link href='/ticket-page/new'>
          <FontAwesomeIcon icon={faTicket} className='icon'></FontAwesomeIcon>
        </Link>
      </div>

      <div>
        <p className='white'>placeholder@gmail.com</p>
      </div>
    </nav>
  );
};

export default Nav;
