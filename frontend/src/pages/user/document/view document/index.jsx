import { Table, TextInput, Pagination } from 'flowbite-react'
import { BsFiletypeDocx } from 'react-icons/bs'
import { AiFillFilePdf, AiFillFileImage, AiFillFileExcel, AiFillFilePpt } from 'react-icons/ai'
import { IoMdAdd } from 'react-icons/io'
import { useSelector, useDispatch } from 'react-redux'
import { delDoc, allDoc } from '../../../../store/action/document'
import Detail from './Detail'
import Edit from '../uploaddoc/edit'
import { Fragment, useEffect, useState } from 'react'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import PageTitle from '../../../../components/PageTitle'
import Loading from '../../../../components/Loading'

// Merge sort function
function mergeSort(arr, compareFn) {
  if (arr.length <= 1) {
    return arr
  }

  const middle = Math.floor(arr.length / 2)
  const left = arr.slice(0, middle)
  const right = arr.slice(middle)

  return merge(mergeSort(left, compareFn), mergeSort(right, compareFn), compareFn)
}

function merge(left, right, compareFn) {
  let result = []
  let leftIndex = 0
  let rightIndex = 0

  while (leftIndex < left.length && rightIndex < right.length) {
    if (compareFn(left[leftIndex], right[rightIndex]) <= 0) {
      result.push(left[leftIndex])
      leftIndex++
    } else {
      result.push(right[rightIndex])
      rightIndex++
    }
  }

  return result.concat(left.slice(leftIndex), right.slice(rightIndex))
}

// Compare functions
function compareDocumentsByFileName(a, b) {
  return a.name.localeCompare(b.name)
}

function compareDocumentsByFileType(a, b) {
  return a.doc.public_id.split('.').pop().localeCompare(b.doc.public_id.split('.').pop())
}

function compareDocumentsByUploadDate(a, b) {
  return a.createdAt - b.createdAt
}
const Index = () => {
  const { doc, alldoc } = useSelector((store) => store.doc)
  const { user } = useSelector((store) => store.user)
  const [isOpen, setIsOpen] = useState(false)
  const [isEditOpen, setIsEditOpen] = useState(false)
  const [display, setDisplay] = useState([])
  const [search, setSearch] = useState('')
  const [searchCriteria, setSearchCriteria] = useState('name') // Initial criteria: name
  const [page, setPage] = useState(alldoc?.page)
  const [params] = useSearchParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [sortCriteria, setSortCriteria] = useState('name')

  const handleSortChange = (criteria) => {
    setSortCriteria(criteria)
  }

  // Utility function to search based on criteria
  // Utility function to search based on criteria
  const searchDocuments = (criteria, searchTerm) => {
    if (!doc) {
      return []
    }

    if (criteria === 'name') {
      return doc.filter((data) => data.name.toLowerCase().includes(searchTerm.toLowerCase()))
    } else if (criteria === 'uploadBy') {
      return doc.filter((data) => data.user?.name.toLowerCase().includes(searchTerm.toLowerCase()))
    } else if (criteria === 'department') {
      return doc.filter((data) => data.department.toLowerCase().includes(searchTerm.toLowerCase()))
    } else {
      return doc
    }
  }

  useEffect(() => {
    const getParams = Array.from(params.keys())
    if (getParams.length === 0) {
      setSearch('')
    } else {
      setSearch(params.get(searchCriteria) || '')
    }

    params.forEach((value) => {
      if (value === '') {
        navigate('/')
      }
    })
  }, [params, navigate, searchCriteria])

  useEffect(() => {
    dispatch(allDoc(page))
  }, [dispatch, page])

  const filteredDocuments = searchDocuments(searchCriteria, search)

  return (
    <>
      <PageTitle title="Documents" />
      <div className={user?.role === 'admin' && 'p-4 pt-[80px] sm:ml-64'}>
        <div className="flex justify-between items-center mx-4 mb-3">
          <div>
            <p className="text-4xl font-extrabold text-gray-900">All Doc</p>
            <div className="flex space-x-2">
              <TextInput
                id="small"
                sizing="sm"
                type="search"
                placeholder="Search..."
                value={search}
                onChange={(e) => {
                  e.preventDefault()
                  setSearch(e.target.value)
                }}
              />

              {/* Search criteria dropdown */}
              <select
                className="border rounded py-1 px-2"
                onChange={(e) => setSearchCriteria(e.target.value)}
                value={searchCriteria}
              >
                <option value="name">File Name</option>
                <option value="uploadBy">Upload By</option>
                <option value="department">Department</option>
              </select>
            </div>
          </div>

          <Link
            to={user?.role === 'user' ? '/add/document' : '/admin/add/document'}
            className="flex focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-green-600 dark:hover-bg-green-700 dark:focus:ring-green-800"
          >
            <p>Add</p>
            <IoMdAdd className="ml-2 h-5 w-5" />
          </Link>
        </div>

        <div className="overflow-y-auto">
          {Array.isArray(doc) ? (
            filteredDocuments.length === 0 ? (
              <p className="text-center font-extrabold text-5xl text-gray-400">No Document</p>
            ) : (
              <Table>
                <Table.Head>
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
                  {mergeSort(
                    filteredDocuments,
                    sortCriteria === 'name'
                      ? compareDocumentsByFileName
                      : sortCriteria === 'fileType'
                      ? compareDocumentsByFileType
                      : compareDocumentsByUploadDate
                  ).map((data, i) => {
                    let str = data?.doc?.public_id
                    str = str.split('.')
                    str = str[str.length - 1]

                    const timeStamp = data?.createdAt
                    const date = new Date(timeStamp)
                    return (
                      <Fragment key={i}>
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
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
                          <Table.Cell>{date.toDateString()}</Table.Cell>
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
                            <p
                              className="font-medium text-green-600 hover:underline cursor-pointer"
                              onClick={() => {
                                setIsEditOpen(true)
                                setDisplay(data)
                              }}
                            >
                              Edit
                            </p>
                            <p
                              className="font-medium text-red-600 hover:underline cursor-pointer"
                              onClick={async () => {
                                await dispatch(delDoc(data?._id))
                                dispatch(allDoc())
                              }}
                            >
                              Delete
                            </p>
                          </Table.Cell>
                        </Table.Row>
                      </Fragment>
                    )
                  })}
                </Table.Body>
              </Table>
            )
          ) : (
            <Loading />
          )}
        </div>
        <Detail open={isOpen} close={() => setIsOpen(false)} data={display} />
        <Edit open={isEditOpen} close={() => setIsEditOpen(false)} data={display} />
        <Pagination
          className="mt-4 flex justify-end mr-4"
          currentPage={page ? page : 1}
          totalPages={alldoc?.totalPages ? alldoc?.totalPages : 1}
          onPageChange={(e) => setPage(e)}
        />
      </div>
    </>
  )
}

export default Index
