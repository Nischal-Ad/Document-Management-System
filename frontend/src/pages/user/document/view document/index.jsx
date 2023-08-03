import React from 'react';
import { Button, Table } from 'flowbite-react';
import { Pagination } from 'flowbite-react';
import { IoMdAdd } from 'react-icons/io';
import { Link } from 'react-router-dom';

const index = () => {
	return (
		<>
			<div className='flex justify-between items-center mx-4'>
				<p class='text-4xl font-extrabold text-gray-900 mt-8 mb-4'>All Doc</p>
				<Button>
					<p>Add</p>
					<IoMdAdd className='ml-2 h-5 w-5' />
				</Button>
			</div>
			<Table className=''>
				<Table.Head>
					<Table.HeadCell>File Name</Table.HeadCell>
					<Table.HeadCell>Upload By</Table.HeadCell>
					<Table.HeadCell>Department</Table.HeadCell>
					<Table.HeadCell>Cattegories</Table.HeadCell>
					<Table.HeadCell>Upload Date</Table.HeadCell>
					<Table.HeadCell>Action</Table.HeadCell>
					<Table.HeadCell></Table.HeadCell>
				</Table.Head>
				<Table.Body className='divide-y'>
					<Table.Row className='bg-white dark:border-gray-700 dark:bg-gray-800'>
						<Table.Cell className='whitespace-nowrap font-medium text-gray-900 dark:text-white'>chidori</Table.Cell>
						<Table.Cell>Oppa</Table.Cell>
						<Table.Cell>Oppa Dept</Table.Cell>
						<Table.Cell>Oppalal</Table.Cell>
						<Table.Cell>Feb 24</Table.Cell>

						<Table.Cell className='flex items-start justify-start gap-4'>
							<p className='font-medium text-cyan-600 hover:underline'>View</p>
							<a className='font-medium text-green-600 hover:underline'>
								<p>Edit</p>
							</a>{' '}
							<a className='font-medium text-red-600 hover:underline'>
								<p>Delete</p>
							</a>
						</Table.Cell>
					</Table.Row>{' '}
					<Table.Row className='bg-white dark:border-gray-700'>
						<Table.Cell className='whitespace-nowrap font-medium text-gray-900 dark:text-white'>Oppa ko file</Table.Cell>
						<Table.Cell>Oppa</Table.Cell>
						<Table.Cell>Oppa Dept</Table.Cell>
						<Table.Cell>Oppalal</Table.Cell>
						<Table.Cell>Feb 24</Table.Cell>

						<Table.Cell className='flex items-start justify-start gap-4'>
							<a className='font-medium text-cyan-600 hover:underline'>
								<p>View</p>
							</a>
							<a className='font-medium text-green-600 hover:underline'>
								<p>Edit</p>
							</a>{' '}
							<a className='font-medium text-red-600 hover:underline'>
								<p>Delete</p>
							</a>
						</Table.Cell>
					</Table.Row>{' '}
					<Table.Row className='bg-white dark:border-gray-700'>
						<Table.Cell className='whitespace-nowrap font-medium text-gray-900 dark:text-white'>Oppa ko file</Table.Cell>
						<Table.Cell>Oppa</Table.Cell>
						<Table.Cell>Oppa Dept</Table.Cell>
						<Table.Cell>Oppalal</Table.Cell>
						<Table.Cell>Feb 24</Table.Cell>

						<Table.Cell className='flex items-start justify-start gap-4'>
							<a className='font-medium text-cyan-600 hover:underline'>
								<p>View</p>
							</a>
							<a className='font-medium text-green-600 hover:underline'>
								<p>Edit</p>
							</a>{' '}
							<a className='font-medium text-red-600 hover:underline'>
								<p>Delete</p>
							</a>
						</Table.Cell>
					</Table.Row>{' '}
					<Table.Row className='bg-white dark:border-gray-700'>
						<Table.Cell className='whitespace-nowrap font-medium text-gray-900 dark:text-white'>Oppa ko file</Table.Cell>
						<Table.Cell>Oppa</Table.Cell>
						<Table.Cell>Oppa Dept</Table.Cell>
						<Table.Cell>Oppalal</Table.Cell>
						<Table.Cell>Feb 24</Table.Cell>

						<Table.Cell className='flex items-start justify-start gap-4'>
							<a className='font-medium text-cyan-600 hover:underline'>
								<p>View</p>
							</a>
							<a className='font-medium text-green-600 hover:underline'>
								<p>Edit</p>
							</a>{' '}
							<a className='font-medium text-red-600 hover:underline'>
								<p>Delete</p>
							</a>
						</Table.Cell>
					</Table.Row>{' '}
					<Table.Row className='bg-white dark:border-gray-700'>
						<Table.Cell className='whitespace-nowrap font-medium text-gray-900 dark:text-white'>Oppa ko file</Table.Cell>
						<Table.Cell>Oppa</Table.Cell>
						<Table.Cell>Oppa Dept</Table.Cell>
						<Table.Cell>Oppalal</Table.Cell>
						<Table.Cell>Feb 24</Table.Cell>

						<Table.Cell className='flex items-start justify-start gap-4'>
							<Link to={'/documents/hjkzgf'} className='font-medium text-cyan-600 hover:underline'>
								<p>View</p>
							</Link>
							<a className='font-medium text-green-600 hover:underline'>
								<p>Edit</p>
							</a>{' '}
							<a className='font-medium text-red-600 hover:underline'>
								<p>Delete</p>
							</a>
						</Table.Cell>
					</Table.Row>
				</Table.Body>
			</Table>
			<Pagination className='mt-4 flex justify-end mr-4' currentPage={1} totalPages={100} />
		</>
	);
};

export default index;
