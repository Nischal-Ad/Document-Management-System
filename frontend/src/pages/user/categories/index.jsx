import React from "react";

import { Button, Checkbox, Label, Modal, TextInput } from "flowbite-react";

export default function FormElements() {
  const [openModal, setOpenModal] = useState("");
  const [email, setEmail] = useState("");
  const props = { openModal, setOpenModal, email, setEmail };

  return (
    <>
      <Button onClick={() => props.setOpenModal("form-elements")}>
        Add Category
      </Button>
      <Modal
        show={props.openModal === "form-elements"}
        size="md"
        popup
        onClose={() => props.setOpenModal(undefined)}
      >
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6">
            <div>
              <div className="mb-2 block">
                <Label htmlFor="category" value="Add Category" />
              </div>
              <TextInput id="category" required />
            </div>

            <div className="w-full">
              <Button>Add</Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
