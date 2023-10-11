import React from "react";
import AdminSection from "../../../components/AdminSection";
import { Pagination, Button, Table } from "flowbite-react";

export default function Index() {
  return (
    <AdminSection>
      <div className="flex justify-between items-center mx-4">
        <p className="text-4xl font-extrabold text-gray-900 mt-8 mb-4">
          Departments
        </p>
      </div>

      <Table hoverable>
        <Table.Head>
          <Table.HeadCell>S.N.</Table.HeadCell>
          <Table.HeadCell>Department name</Table.HeadCell>
          <Table.HeadCell>Action</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              1
            </Table.Cell>
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              Information Technology
            </Table.Cell>

            <Table.Cell className="flex items-start justify-start gap-4">
              <Button gradientMonochrome="info">View</Button>
              <Button gradientMonochrome="success">Edit</Button>
              <Button gradientMonochrome="failure">Delete</Button>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>

      <Pagination
        className="mt-4 flex justify-end mr-4"
        currentPage={1}
        totalPages={100}
      />
    </AdminSection>
  );
}
