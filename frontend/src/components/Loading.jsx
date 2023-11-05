import CircleLoader from 'react-spinners/CircleLoader'

const Loading = () => {
  return (
    <CircleLoader
      color={'#192A56'}
      loading={true}
      size={150}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  )
}

export default Loading
