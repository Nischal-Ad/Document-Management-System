import { useSelector } from 'react-redux'

const Section = ({ children }) => {
  const { user } = useSelector((store) => store.user)

  return (
    <section className={user?.role === 'admin' ? 'p-4 pt-[80px] sm:ml-64' : 'container mx-auto'}>
      {children}
    </section>
  )
}

export default Section
