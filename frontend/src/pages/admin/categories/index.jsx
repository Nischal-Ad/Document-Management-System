import { Button, Label, Modal, TextInput } from 'flowbite-react'
import { useState, useRef } from 'react'
import AdminSection from '../../../components/AdminSection'
export default function FormElements() {
  const [openModal, setOpenModal] = useState()
  const emailInputRef = useRef(null)
  const props = { openModal, setOpenModal, emailInputRef }

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
          <div className="space-y-6">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">Add Categories</h3>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="category" value="Category Name" />
              </div>
              <TextInput id="category" />
            </div>
          </div>
          <Button type="submit" className="mt-5">
            Add
          </Button>
        </Modal.Body>
      </Modal>
    </AdminSection>
  )
}
