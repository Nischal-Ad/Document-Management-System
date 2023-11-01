import { Button, Label, Modal, TextInput } from 'flowbite-react'
import { useState, useRef } from 'react'
import AdminSection from '../../../components/AdminSection'
import { RxCross1 } from 'react-icons/rx'
import { useDispatch, useSelector } from 'react-redux'
import { allCategory, delCategory, addCategory } from '../../../store/action/category'
export default function FormElements() {
  const [openModal, setOpenModal] = useState()
  const [categoryName, setCategoryName] = useState('')
  const emailInputRef = useRef(null)
  const props = { openModal, setOpenModal, emailInputRef }
  const { category } = useSelector((store) => store.category)
  const dispatch = useDispatch()

  return (
    <AdminSection>
      <Button onClick={() => props.setOpenModal('initial-focus')}>Create Category</Button>
      <Modal
        show={props.openModal === 'initial-focus'}
        size="md"
        popup
        onClose={() => props.setOpenModal(undefined)}
        initialFocus={props.emailInputRef}
      >
        <Modal.Header />
        <Modal.Body>
          <form
            onSubmit={async (e) => {
              e.preventDefault()
              await dispatch(addCategory(categoryName))
              dispatch(allCategory())
              setCategoryName('')
              props.setOpenModal(undefined)
            }}
          >
            <div className="space-y-6">
              <h3 className="text-xl font-medium text-gray-900 dark:text-white">Add Categories</h3>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="category" value="Category Name" />
                </div>
                <TextInput
                  id="category"
                  value={categoryName}
                  onChange={(e) => setCategoryName(e.target.value)}
                />
              </div>
            </div>
            <Button type="submit" className="mt-5">
              Add
            </Button>
          </form>
        </Modal.Body>
      </Modal>

      {/* category display */}
      <div className="mt-4 grid grid-cols-2 md:grid-cols-4 grid-flow-row gap-4">
        {Array.isArray(category) ? (
          category.length === 0 ? (
            <p className="text-center font-extrabold text-5xl text-gray-400">No Category</p>
          ) : (
            category?.map((item, i) => (
              <div
                key={i}
                className="flex text-white items-center rounded-2xl bg-gray-400 w-fit px-4 py-2"
              >
                <p className="w-40">{item?.name}</p>
                <RxCross1
                  className="cursor-pointer"
                  onClick={async () => {
                    await dispatch(delCategory(item?._id))
                    dispatch(allCategory())
                  }}
                />
              </div>
            ))
          )
        ) : (
          'loading'
        )}
      </div>
    </AdminSection>
  )
}
