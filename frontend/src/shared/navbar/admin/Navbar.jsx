import logo from '../../../assects/img/logo.png'
import { Navbar } from 'flowbite-react'
import { FaBars } from 'react-icons/fa'
import { RxCross1 } from 'react-icons/rx'
import { Profile } from '../UserNav'

const AdminNavbar = ({ handleOpen, isopen }) => {
  return (
    <Navbar fluid className="fixed w-full z-10 ">
      <Navbar.Brand href="/">
        <img alt="Flowbite React Logo" className="mr-3 h-6 sm:h-9" src={logo} />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          DMS
        </span>
      </Navbar.Brand>

      <div className="flex items-center ">
        <Profile />
        <div className="md:hidden">
          {isopen ? (
            <RxCross1 className="text-[2rem]" onClick={() => handleOpen()} />
          ) : (
            <FaBars className="text-[2rem]" onClick={() => handleOpen()} />
          )}
        </div>
      </div>
    </Navbar>
  )
}

export default AdminNavbar
