import Login from './components/Login'
import PageTitle from '../../components/PageTitle'
import Section from '../../components/Section'
import { Card } from 'flowbite-react'

const index = () => {
  return (
    <>
      <PageTitle title="Login" />
      <Section>
        <div className="grid place-content-center h-[100dvh]">
          <Card className="sm:w-[30rem] w-[90dvw] hover:bg-white  mx-auto" href="#">
            <Login />
          </Card>
        </div>
      </Section>
    </>
  )
}

export default index
