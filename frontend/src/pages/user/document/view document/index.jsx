import { Table, TextInput } from 'flowbite-react'
import { BsFiletypeDocx } from 'react-icons/bs'
import { AiFillFilePdf, AiFillFileImage, AiFillFileExcel, AiFillFilePpt } from 'react-icons/ai'
import { Pagination } from 'flowbite-react'
import { IoMdAdd } from 'react-icons/io'
import { useSelector, useDispatch } from 'react-redux'
import { delDoc, allDoc } from '../../../../store/action/document'
import Detail from './Detail'
import { useEffect, useState } from 'react'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'

const Index = () => {
  const { doc, alldoc } = useSelector((store) => store.doc)
  const { user } = useSelector((store) => store.user)
  const [isOpen, setIsOpen] = useState(false)
  const [display, setDisplay] = useState([])
  const [search, setSearch] = useState('')
  const [page, setPage] = useState(alldoc?.page)
  const [params] = useSearchParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    const getParams = Array.from(params.keys())
    if (getParams.length === 0) {
      setSearch('')
    } else {
      setSearch(params.get('name') ? params.get('name') : '')
    }

    params.forEach((value) => {
      if (value === '') {
        navigate('/')
      }
    })
  }, [params, navigate])

  useEffect(() => {
    dispatch(allDoc(page))
  }, [dispatch, page])

  return (
    <div className={user?.role === 'admin' && 'p-4 pt-[80px] sm:ml-64'}>
      <div className="flex justify-between items-center mx-4 mb-3">
        <p className="text-4xl font-extrabold text-gray-900  ">All Doc</p>

        <TextInput
          id="small"
          sizing="sm"
          type="search"
          placeholder="Search..."
          value={search}
          onChange={(e) => {
            e.preventDefault()
            dispatch(allDoc(1, e.target.value))
            setSearch(e.target.value)
          }}
        />

        <Link
          to={'/add/document'}
          className="flex focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >
          <p>Add</p>
          <IoMdAdd className="ml-2 h-5 w-5" />
        </Link>
      </div>
      <div className="overflow-y-auto">
        <Table>
          <Table.Head>
            {' '}
            <Table.HeadCell>File Name</Table.HeadCell>
            <Table.HeadCell>File Type</Table.HeadCell>
            <Table.HeadCell>Upload By</Table.HeadCell>
            <Table.HeadCell>Department</Table.HeadCell>
            <Table.HeadCell>Categories</Table.HeadCell>
            <Table.HeadCell>Upload Date</Table.HeadCell>
            <Table.HeadCell>Action</Table.HeadCell>
            <Table.HeadCell></Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {doc?.map((data, i) => {
              let str = data?.doc?.public_id
              str = str.split('.')
              str = str[str.length - 1]
              return (
                <>
                  {' '}
                  <Table.Row key={i} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                      {data?.name}
                    </Table.Cell>
                    <Table.Cell>
                      {str === 'pdf' ? (
                        <AiFillFilePdf />
                      ) : str === 'docx' ? (
                        <BsFiletypeDocx />
                      ) : str === 'xlsx' ? (
                        <AiFillFileExcel />
                      ) : str === 'pptx' ? (
                        <AiFillFilePpt />
                      ) : (
                        <AiFillFileImage />
                      )}
                    </Table.Cell>
                    <Table.Cell>{data?.user?.name}</Table.Cell>
                    <Table.Cell>{data?.department}</Table.Cell>
                    <Table.Cell>{data?.category}</Table.Cell>
                    <Table.Cell>{data?.createdAt}</Table.Cell>

                    <Table.Cell className="flex items-start justify-start gap-4">
                      <p
                        className="font-medium text-cyan-600 hover:underline cursor-pointer"
                        onClick={() => {
                          setIsOpen(true)
                          setDisplay(data)
                        }}
                      >
                        View
                      </p>
                      <a className="font-medium text-green-600 hover:underline cursor-pointer">
                        <p>Edit</p>
                      </a>{' '}
                      <p
                        className="font-medium text-red-600 hover:underline cursor-pointer"
                        onClick={async () => {
                          await dispatch(delDoc(data?._id))
                          dispatch(allDoc())
                        }}
                      >
                        Delete
                      </p>
                      <Detail open={isOpen} close={() => setIsOpen(false)} data={display} />
                    </Table.Cell>
                  </Table.Row>
                </>
              )
            })}
          </Table.Body>
        </Table>
      </div>

      <Pagination
        className="mt-4 flex justify-end mr-4"
        currentPage={page ? page : 1}
        totalPages={alldoc?.totalPages ? alldoc?.totalPages : 1}
        onPageChange={(e) => setPage(e)}
      />
    </div>
  )
}

export default Index
