import { useSelector } from 'react-redux'
import AdminSection from '../../../components/AdminSection'
import PageTitle from '../../../components/PageTitle'
import RecentUserTable from '../../user/home/components/RecentDocTable'
import { Button, Card } from 'flowbite-react'
import { useNavigate } from 'react-router-dom'
import { HiOutlineArrowRight } from 'react-icons/hi'
import { Doughnut } from 'react-chartjs-2'

const Index = () => {
  const { user } = useSelector((store) => store.users)
  const { category } = useSelector((store) => store.category)
  const { department } = useSelector((store) => store.department)
  const { doc } = useSelector((store) => store.doc)
  const navigate = useNavigate()

  const data = {
    labels: ['Total Users', 'Total Departments', 'Total Categories', 'Total Documents'],
    datasets: [
      {
        label: '# of Votes',
        data: [user?.total, department?.length, category?.length, doc?.total],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
        ],
        borderWidth: 5,
      },
    ],
  }

  return (
    <AdminSection>
      <>
        <PageTitle title="Admin Home" />
        <div className="md:flex justify-around p-2">
          <Card className="text-center text-gray-700 w-full md:mx-4 md:mb-0 mb-4">
            <h5 className="text-2xl font-bold tracking-tight">
              <p>Total Users</p>
            </h5>
            <p className="font-bold text-3xl text-gray-700 dark:text-gray-400 text-center">
              <span>{user?.total}</span>
            </p>

            <Button onClick={() => navigate('/add/user')}>Go to Users</Button>
          </Card>

          <Card className="text-center text-gray-700 w-full md:mx-4 md:mb-0 mb-4">
            <h5 className="text-2xl font-bold tracking-tight">
              <p>Total Departments</p>
            </h5>
            <p className="font-bold text-3xl text-gray-700 dark:text-gray-400 text-center">
              <span>{department?.length}</span>
            </p>
            <Button onClick={() => navigate('/admin/departments')}>Go to Departments</Button>
          </Card>

          <Card className="text-center text-gray-700 w-full md:mx-4 md:mb-0 mb-4">
            <h5 className="text-2xl font-bold tracking-tight ">
              <p>Total Categories</p>
            </h5>
            <p className="font-bold text-3xl text-gray-700 dark:text-gray-400 text-center">
              <span>{category?.length}</span>
            </p>
            <Button onClick={() => navigate('/admin/category')}>Go to Categories</Button>
          </Card>
        </div>
        <RecentUserTable />
        <Button onClick={() => navigate('/admin/documents')} className="mt-4">
          <p>Show More</p>
          <HiOutlineArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </>
      <p className="text-4xl font-extrabold text-gray-900 mt-8 mb-4">Chart</p>
      <div className="mx-auto w-1/2">
        <Doughnut data={data} />
      </div>
    </AdminSection>
  )
}

export default Index
