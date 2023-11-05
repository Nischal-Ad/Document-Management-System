import { Table } from 'flowbite-react'
import { Fragment } from 'react'
import { AiFillFileExcel, AiFillFileImage, AiFillFilePdf, AiFillFilePpt } from 'react-icons/ai'
import { BsFiletypeDocx } from 'react-icons/bs'
import { useSelector } from 'react-redux'
import Loading from '../../../../components/Loading'

const Index = () => {
  const { doc } = useSelector((store) => store.doc)

  return (
    <>
      <p className="text-4xl font-extrabold text-gray-900 mt-8 mb-4">Recently Added Documents</p>
      <div className="overflow-y-auto">
        {Array.isArray(doc) ? (
          doc.length === 0 ? (
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
                <Table.HeadCell></Table.HeadCell>
              </Table.Head>
              <Table.Body className="divide-y">
                {doc?.map((data, i) => {
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
    </>
  )
}

export default Index
