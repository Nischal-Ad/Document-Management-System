import { Button, Label, Modal, Select } from 'flowbite-react'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateUser } from '../../../store/action/user'
import { allUsers } from '../../../store/action/user'

const Edit = ({ open, close, data }) => {
  const dispatch = useDispatch()

  const [role, setRole] = useState(data?.role)
  const [department, setDepartment] = useState(data?.department)
  const { department: Department } = useSelector((store) => store.department)

  useEffect(() => {
    setRole(data?.role)
    setDepartment(data?.department)
  }, [data])

  const handleSubmit = async (e) => {
    e.preventDefault()

    await dispatch(updateUser(data?._id, role, department))
    dispatch(allUsers(1))
    close()
  }
  return (
    <>
      <Modal show={open} onClose={() => close()}>
        <Modal.Header>Update User</Modal.Header>
        {data ? (
          <form onSubmit={handleSubmit}>
            <Modal.Body>
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
            </Modal.Body>
            <Modal.Footer>
              <Button type="submit">Update</Button>
              <Button color="gray" onClick={() => close()}>
                Cancel
              </Button>
            </Modal.Footer>
          </form>
        ) : (
          'loading'
        )}
      </Modal>
    </>
  )
}

export default Edit
