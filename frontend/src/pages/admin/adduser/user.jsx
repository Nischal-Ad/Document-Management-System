import { useEffect, useState } from 'react'
import { Button, Table, Modal, Pagination, Label, TextInput, Select } from 'flowbite-react'
import AdminSection from '../../../components/AdminSection'
import { useDispatch, useSelector } from 'react-redux'
import { register, allUsers } from '../../../store/action/user'

const User = () => {
  const [openModal, setOpenModal] = useState()
  const dispatch = useDispatch()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole] = useState('')
  const [department, setDepartment] = useState('')
  const [cpassword, setCpassword] = useState('')
  const { user } = useSelector((store) => store.users)
  const { department: Department } = useSelector((store) => store.department)

  const handleRegister = (e) => {
    e.preventDefault()
    dispatch(register(name, email, password, cpassword, role, department))
  }

  useEffect(() => {
    if (openModal === 'default') {
      setName('')
      setEmail('')
      setPassword('')
      setRole('')
      setDepartment('')
      setCpassword('')
    }

    dispatch(allUsers())
  }, [openModal, dispatch])
  return (
    <AdminSection>
      <div className="flex justify-between items-center mx-4">
        <p className="text-4xl font-extrabold text-gray-900 mt-8 mb-4">All Users</p>
        <Button onClick={() => setOpenModal('default')}>Add User</Button>
        <Modal show={openModal === 'default'} onClose={() => setOpenModal(undefined)}>
          <Modal.Header>Add Users</Modal.Header>
          <form onSubmit={handleRegister}>
            <Modal.Body>
              <div className="mb-2">
                <Label htmlFor="name" value="Name" />
                <TextInput
                  id="name"
                  required
                  type="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="mb-2">
                <Label htmlFor="email" value="Email" />
                <TextInput
                  id="email"
                  required
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="mb-2">
                <Label htmlFor="countries" value="Role" />
                <Select id="roles" required value={role} onChange={(e) => setRole(e.target.value)}>
                  <option value={''}>Select user role</option>
                  <option value={'admin'}>Admin</option>
                  <option value={'user'}>User</option>
                </Select>
              </div>

              <div>
                <div className="mb-2 block">
                  <label
                    htmlFor="category"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Department
                  </label>
                  <select
                    value={department}
                    onChange={(e) => setDepartment(e.target.value)}
                    id="category"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option selected>Choose a department</option>
                    {Department?.map((item, i) => (
                      <option key={i} value={item?.name}>
                        {item?.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="mb-2">
                <Label htmlFor="password" value="Password" />
                <TextInput
                  id="password"
                  required
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className="mb-2">
                <Label htmlFor="confirmpassword" value="Confirm Password" />
                <TextInput
                  id="confirmpassword"
                  required
                  type="confirmpassword"
                  value={cpassword}
                  onChange={(e) => setCpassword(e.target.value)}
                />
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button type="submit">Add</Button>
              <Button color="gray" onClick={() => setOpenModal(undefined)}>
                Cancel
              </Button>
            </Modal.Footer>
          </form>
        </Modal>
      </div>

      <Table className="">
        <Table.Head>
          <Table.HeadCell>Name</Table.HeadCell>
          <Table.HeadCell>Email</Table.HeadCell>
          <Table.HeadCell>Department</Table.HeadCell>
          <Table.HeadCell>Role</Table.HeadCell>
          <Table.HeadCell>Action</Table.HeadCell>
          <Table.HeadCell></Table.HeadCell>
        </Table.Head>

        <Table.Body className="divide-y">
          {user?.users?.map((data) => (
            <>
              <Table.Row className="bg-white dark:border-gray-700">
                <Table.Cell>{data?.name}</Table.Cell>
                <Table.Cell>{data?.email}</Table.Cell>
                <Table.Cell>{data?.department}</Table.Cell>
                <Table.Cell>{data?.role}</Table.Cell>

                <Table.Cell className="flex items-start justify-start gap-4">
                  <Button gradientMonochrome="info">View</Button>
                  <Button gradientMonochrome="success">Edit</Button>
                  <Button gradientMonochrome="failure">Delete</Button>
                </Table.Cell>
              </Table.Row>{' '}
            </>
          ))}
        </Table.Body>
      </Table>
      <Pagination className="mt-4 flex justify-end mr-4" currentPage={1} totalPages={100} />
    </AdminSection>
  )
}

export default User
