import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { useState } from "react";
import { changePassword } from "../../../store/action/user";
import { useDispatch } from "react-redux";

export default function ShadowInputs() {
  const [pass, setPass] = useState("");
  const [newPass, setNewPass] = useState("");
  const [cNewPass, setCNewPass] = useState("");
  const dispatch = useDispatch();

  const handlePasswordChange = (e) => {
    e.preventDefault();
    dispatch(changePassword(pass, newPass, cNewPass));
  };

  return (
    <form className="flex  flex-col gap-4 " onSubmit={handlePasswordChange}>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email" value="Your email" />
        </div>
        <TextInput
          id="email"
          required
          shadow
          type="email"
          value={pass}
          onChange={(e) => {
            setPass(e.target.value);
          }}
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="password" value="Old Password" />
        </div>
        <TextInput
          id="password"
          required
          shadow
          type="password"
          value={newPass}
          onChange={(e) => {
            setNewPass(e.target.value);
          }}
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="password" value="New Password" />
        </div>
        <TextInput
          id="password"
          required
          shadow
          type="password"
          value={cNewPass}
          onChange={(e) => {
            setCNewPass(e.target.value);
          }}
        />
      </div>

      <Button type="submit">Change Password</Button>
    </form>
  );
}
