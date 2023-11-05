import { Button, Card } from 'flowbite-react'
import Section from '../../../components/Section'
import RecentDocTable from './components/RecentDocTable'
import { HiOutlineArrowRight } from 'react-icons/hi'
import { useSelector } from 'react-redux'
import PageTitle from '../../../components/PageTitle'
import { useNavigate } from 'react-router-dom'
import Loading from '../../../components/Loading'

const UserHome = () => {
  const { loading, user } = useSelector((store) => store.user)
  const navigate = useNavigate()
  const { doc } = useSelector((store) => store.doc)

  const myDoc = doc?.filter((data) => {
    data?.user?._id === user?._id
  })

  return (
    <Section>
      <PageTitle title={'Home'} />
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className="md:flex justify-around p-2">
            <Card className="text-center text-gray-700 w-full md:mx-4 md:mb-0 mb-4">
              <h5 className="text-2xl font-bold tracking-tight">
                <p>Recently Added Documents</p>
              </h5>
              <p className="font-bold text-3xl text-gray-700 dark:text-gray-400 text-center">
                <span>{myDoc?.length}</span>
              </p>
              <Button onClick={() => navigate('/documents')}>
                <p>Go to Documents</p>
              </Button>
            </Card>
          </div>
          <RecentDocTable />
          <Button onClick={() => navigate('/documents')} className="mt-4">
            <p>Show More</p>
            <HiOutlineArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </>
      )}
    </Section>
  )
}

export default UserHome
