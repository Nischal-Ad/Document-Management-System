import logo from "../../../assects/img/logo.png";
import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { Profile } from "../UserNav";

const AdminNavbar = ({ handleOpen }) => {
  return (
    <Navbar fluid className="fixed w-full z-10">
      <Navbar.Brand href="/">
        <img alt="Flowbite React Logo" className="mr-3 h-6 sm:h-9" src={logo} />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          DMS
        </span>
      </Navbar.Brand>

      <div className="flex md:order-2 text-center">
        <Profile />
        <Navbar.Toggle className="text-white" />
      </div>
    </Navbar>
  );
};

export default AdminNavbar;
