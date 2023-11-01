import { Avatar, Dropdown, Navbar } from 'flowbite-react'
import logo from '../../assects/img/logo.png'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../store/action/user'
import { IoLogOut } from 'react-icons/io5'
import { RiLockPasswordFill } from 'react-icons/ri'

export const Profile = () => {
  const { user } = useSelector((store) => store.user)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleLogout = () => {
    dispatch(logout())
    navigate('/', { replace: true })
  }
  return (
    <>
      <div className="flex md:order-2">
        <Dropdown className=" px-2" inline label={<Avatar rounded />}>
          <Dropdown.Header className="text-center">
            <span className="block font-bold text-sm">{user?.name}</span>
            <span className="block truncate text-sm font-medium">{user?.email}</span>
          </Dropdown.Header>

          <Link to={'/ChangePassword'} className=" cursor-pointer">
            <div className="py-2 flex items-center">
              <RiLockPasswordFill className="text-2xl" />
              <span className="px-3">Change Password</span>
            </div>
          </Link>
          <Dropdown.Divider />

          <div onClick={handleLogout} className="py-2 flex items-center cursor-pointer">
            <IoLogOut className="text-2xl" />
            <p className="px-3">Logout</p>
          </div>
        </Dropdown>

        <Navbar.Toggle className="text-white" />
      </div>
    </>
  )
}

const UserNav = () => {
  return (
    <main className="bg-blue-800 mb-3">
      <Navbar className="container mx-auto bg-transparent text-white" fluid rounded>
        <Link to={'/'}>
          <div className="flex">
            <img alt="Logo" className="mr-3 h-9 sm:h-9" src={logo} />
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
              DMS
            </span>
          </div>
        </Link>
        <Profile />

        <Navbar.Collapse className="text-center">
          <Link className="p-2" to={'/home'}>
            Home
          </Link>
          <Link className="p-2" to={'/add/document'}>
            Add Doc
          </Link>{' '}
          <Link className="p-2" to={'/documents'}>
            View Doc
          </Link>
        </Navbar.Collapse>
      </Navbar>
    </main>
  )
}

export default UserNav
