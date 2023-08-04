import React from "react";
import { Button, Table } from "flowbite-react";
import { Pagination } from "flowbite-react";
import { IoMdAdd } from "react-icons/io";
import { Link } from "react-router-dom";

const user = () => {
  return (
    <>
      <div className="flex justify-between items-center mx-4">
        <p class="text-4xl font-extrabold text-gray-900 mt-8 mb-4">All Users</p>
        <Button>
          <p>Add User</p>
          <IoMdAdd className="ml-2 h-5 w-5" />
        </Button>
      </div>
      <Table className="">
        <Table.Head>
          <Table.HeadCell>Name</Table.HeadCell>
          <Table.HeadCell>Email</Table.HeadCell>
          <Table.HeadCell>Address</Table.HeadCell>
          <Table.HeadCell>Department</Table.HeadCell>
          <Table.HeadCell>Action</Table.HeadCell>
          <Table.HeadCell></Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          <Table.Row className="bg-white dark:border-gray-700"></Table.Row>{" "}
          <Table.Row className="bg-white dark:border-gray-700">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              Oppa ko file
            </Table.Cell>
            <Table.Cell>Oppa</Table.Cell>
            <Table.Cell>Oppa Dept</Table.Cell>
            <Table.Cell>Oppalal</Table.Cell>

            <Table.Cell className="flex items-start justify-start gap-4">
              <Button gradientMonochrome="info">View</Button>
              <Button gradientMonochrome="success">Edit</Button>
              <Button gradientMonochrome="failure">Delete</Button>
            </Table.Cell>
          </Table.Row>{" "}
        </Table.Body>
      </Table>
      <Pagination
        className="mt-4 flex justify-end mr-4"
        currentPage={1}
        totalPages={100}
      />
    </>
  );
};

export default user;
