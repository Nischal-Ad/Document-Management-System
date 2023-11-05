import { Button, Table } from 'flowbite-react'

const index = () => {
  return (
    <>
      <p className="text-4xl font-extrabold text-gray-900 mt-8 mb-4">Recently Added Users</p>
      <Table>
        <Table.Head>
          <Table.HeadCell>File Name</Table.HeadCell>
          <Table.HeadCell>Uploaded By</Table.HeadCell>
          <Table.HeadCell>Department</Table.HeadCell>
          <Table.HeadCell>Cattegories</Table.HeadCell>
          <Table.HeadCell>Upload Date</Table.HeadCell>
          <Table.HeadCell>Action</Table.HeadCell>
          <Table.HeadCell></Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          <Table.Row className="bg-white dark:border-gray-700">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              Oppa ko file
            </Table.Cell>
            <Table.Cell>Oppa</Table.Cell>
            <Table.Cell>Oppa Dept</Table.Cell>
            <Table.Cell>Oppalal</Table.Cell>
            <Table.Cell>Feb 24</Table.Cell>

            <Table.Cell className="flex items-start justify-start gap-4">
              <Button gradientMonochrome="info">View</Button>

              <Button gradientMonochrome="failure">Delete</Button>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </>
  )
}

export default index
