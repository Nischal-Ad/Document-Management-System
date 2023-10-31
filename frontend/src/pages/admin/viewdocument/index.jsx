import { Button, Pagination, Table } from 'flowbite-react'
import AdminSection from '../../../components/AdminSection'

export default function HoverState() {
  return (
    <AdminSection>
      <p className="text-4xl font-extrabold text-gray-900  ">All Doc</p>

      <Table hoverable>
        <Table.Head>
          <Table.HeadCell>File Name</Table.HeadCell>
          <Table.HeadCell>File Type</Table.HeadCell>
          <Table.HeadCell>Upload By</Table.HeadCell>
          <Table.HeadCell>Department</Table.HeadCell>
          <Table.HeadCell>Categories</Table.HeadCell>
          <Table.HeadCell>Upload Date</Table.HeadCell>
          <Table.HeadCell>Action</Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">Edit</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell>Sliver</Table.Cell>
            <Table.Cell>Laptop</Table.Cell>
            <Table.Cell>$2999</Table.Cell>
            <Table.Cell>Sliver</Table.Cell>
            <Table.Cell>Laptop</Table.Cell>
            <Table.Cell>$2999</Table.Cell>
            <Table.Cell>
              <a
                className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                href="/tables"
              >
                <p>Edit</p>
              </a>
            </Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell>White</Table.Cell>
            <Table.Cell>Laptop PC</Table.Cell>
            <Table.Cell>$1999</Table.Cell>
            <Table.Cell>Sliver</Table.Cell>
            <Table.Cell>Laptop</Table.Cell>
            <Table.Cell className="flex items-start justify-start gap-4">
              <Button gradientMonochrome="info">View</Button>
              <Button gradientMonochrome="success">Edit</Button>
              <Button gradientMonochrome="failure">Delete</Button>
            </Table.Cell>
            <Table.Cell>
              <a
                className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                href="/tables"
              >
                <p>Edit</p>
              </a>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
      <Pagination
        currentPage={1}
        onPageChange={(page) => {
          page()
        }}
        totalPages={100}
      />
    </AdminSection>
  )
}
