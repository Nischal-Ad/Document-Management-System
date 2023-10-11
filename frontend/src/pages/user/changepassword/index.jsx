import { Button, Label, TextInput, Card } from 'flowbite-react'
import { useState } from 'react'
import { changePassword } from '../../../store/action/user'
import { useDispatch } from 'react-redux'

export default function ShadowInputs() {
  const [pass, setPass] = useState('')
  const [newPass, setNewPass] = useState('')
  const [cNewPass, setCNewPass] = useState('')
  const dispatch = useDispatch()

  const handlePasswordChange = (e) => {
    e.preventDefault()
    dispatch(changePassword(pass, newPass, cNewPass))
  }

  return (
    <Card className="max-w-sm" href="#">
      <form className="flex flex-col gap-4 " onSubmit={handlePasswordChange}>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password" value="Old password" />
          </div>
          <TextInput
            id="password"
            required
            shadow
            type="password"
            value={pass}
            onChange={(e) => {
              setPass(e.target.value)
            }}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password1" value="New Password" />
          </div>
          <TextInput
            id="password1"
            required
            shadow
            type="password"
            value={newPass}
            onChange={(e) => {
              setNewPass(e.target.value)
            }}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password2" value="Confirm New Password" />
          </div>
          <TextInput
            id="password2"
            required
            shadow
            type="password"
            value={cNewPass}
            onChange={(e) => {
              setCNewPass(e.target.value)
            }}
          />
        </div>

        <Button type="submit">Change Password</Button>
      </form>
    </Card>
  )
}
