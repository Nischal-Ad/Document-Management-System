import Helmet from 'react-helmet'

const PageTitle = ({ title }) => {
  return (
    <Helmet>
      <title>{title} - DMS</title>
    </Helmet>
  )
}

export default PageTitle
