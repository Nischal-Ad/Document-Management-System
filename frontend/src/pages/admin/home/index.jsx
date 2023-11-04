import AdminSection from '../../../components/AdminSection'
import PageTitle from '../../../components/PageTitle'
import RecentUserTable from '../home/components/RecentUserTable'
const index = () => {
  return (
    <AdminSection>
      <>
        <PageTitle title="Admin Home" />
        <RecentUserTable />
      </>
    </AdminSection>
  )
}

export default index
