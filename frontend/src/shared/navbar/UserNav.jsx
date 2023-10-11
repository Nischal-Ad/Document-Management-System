import { Avatar, Dropdown, Navbar } from "flowbite-react";
import logo from "../../assects/img/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store/action/user";

export const Profile = () => {
  const { user } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(logout());
    navigate("/", { replace: true });
  };
  return (
    <>
      <div className="flex md:order-2 text-center">
        <Dropdown inline label={<Avatar rounded />}>
          <Dropdown.Header className="text-center">
            <span className="block font-bold text-sm">{user?.name}</span>
            <span className="block truncate text-sm font-medium">
              {user?.email}
            </span>
          </Dropdown.Header>

          <svg
            class="w-6 h-6 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 16 20"
          >
            <path d="M14 7h-1.5V4.5a4.5 4.5 0 1 0-9 0V7H2a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2Zm-5 8a1 1 0 1 1-2 0v-3a1 1 0 1 1 2 0v3Zm1.5-8h-5V4.5a2.5 2.5 0 1 1 5 0V7Z" />
          </svg>
          <Link
            to={"/ChangePassword"}
            className="px-6  py-2 curso cursor-pointer"
          >
            Change Password
          </Link>
          <Dropdown.Divider />
          <svg
            class="w-6 h-6 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 16 16"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 8h11m0 0-4-4m4 4-4 4m-5 3H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h3"
            />
          </svg>
          <p className="py-1 cursor-pointer" onClick={handleLogout}>
            Logout
          </p>
        </Dropdown>

        <Navbar.Toggle className="text-white" />
      </div>
    </>
  );
};

const UserNav = () => {
  return (
    <main className="bg-blue-800 mb-3">
      <Navbar
        className="container mx-auto bg-transparent text-white"
        fluid
        rounded
      >
        <Link to={"/"}>
          <div className="flex">
            <img alt="Logo" className="mr-3 h-9 sm:h-9" src={logo} />
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
              DMS
            </span>
          </div>
        </Link>
        <Profile />

        <Navbar.Collapse className="text-center">
          <Link className="p-2" to={"/home"}>
            Home
          </Link>
          <Link className="p-2" to={"/add/document"}>
            Add Doc
          </Link>{" "}
          <Link className="p-2" to={"/documents"}>
            View Doc
          </Link>
          <Link className="p-2" to={"/addcategory"}>
            Categories
          </Link>
        </Navbar.Collapse>
      </Navbar>
    </main>
  );
};

export default UserNav;
