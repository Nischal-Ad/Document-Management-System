import React, { useState } from 'react';
import { Button, Table, Modal, Pagination, Label, TextInput } from 'flowbite-react';
import { IoMdAdd } from 'react-icons/io';
import { Link } from 'react-router-dom';

const user = () => {
	const [openModal, setOpenModal] = useState();
	const props = { openModal, setOpenModal };
	return (
		<>
			<div className='flex justify-between items-center mx-4'>
				<p class='text-4xl font-extrabold text-gray-900 mt-8 mb-4'>All Users</p>
				<Button onClick={() => props.setOpenModal('default')}>Add User</Button>
				<Modal show={props.openModal === 'default'} onClose={() => props.setOpenModal(undefined)}>
					<Modal.Header>Terms of Service</Modal.Header>
					<Modal.Body>
						<div>
							<div className='mb-2 block'>
								<Label htmlFor='name' value='Name' />
							</div>
							<TextInput id='name' required type='name' />
						</div>

						<div>
							<div className='mb-2 block'>
								<Label htmlFor='email1' value='Email' />
							</div>
							<TextInput id='email1' required type='email' />
						</div>

						<div>
							<div className='mb-2 block'>
								<Label htmlFor='department' value='Department' />
							</div>
							<TextInput id='department' required type='department' />
						</div>

						<div>
							<div className='mb-2 block'>
								<Label htmlFor='password' value='Password' />
							</div>
							<TextInput id='password' required type='password' />
						</div>

						<div>
							<div className='mb-2 block'>
								<Label htmlFor='confirmpassword' value='Confirm Password' />
							</div>
							<TextInput id='confirmpassword' required type='confirmpassword' />
						</div>
					</Modal.Body>
					<Modal.Footer>
						<Button onClick={() => props.setOpenModal(undefined)}>Add</Button>
						<Button color='gray' onClick={() => props.setOpenModal(undefined)}>
							Decline
						</Button>
					</Modal.Footer>
				</Modal>
			</div>
			<Table className=''>
				<Table.Head>
					<Table.HeadCell>Name</Table.HeadCell>
					<Table.HeadCell>Email</Table.HeadCell>

					<Table.HeadCell>Department</Table.HeadCell>
					<Table.HeadCell>Action</Table.HeadCell>
					<Table.HeadCell></Table.HeadCell>
				</Table.Head>
				<Table.Body className='divide-y'>
					<Table.Row className='bg-white dark:border-gray-700'></Table.Row>{' '}
					<Table.Row className='bg-white dark:border-gray-700'>
						<Table.Cell className='whitespace-nowrap font-medium text-gray-900 dark:text-white'>Oppa ko file</Table.Cell>
						<Table.Cell>Oppa</Table.Cell>
						<Table.Cell>Oppa Dept</Table.Cell>
						<Table.Cell>Oppalal</Table.Cell>

						<Table.Cell className='flex items-start justify-start gap-4'>
							<Button gradientMonochrome='info'>View</Button>
							<Button gradientMonochrome='success'>Edit</Button>
							<Button gradientMonochrome='failure'>Delete</Button>
						</Table.Cell>
					</Table.Row>{' '}
				</Table.Body>
			</Table>
			<Pagination className='mt-4 flex justify-end mr-4' currentPage={1} totalPages={100} />
		</>
	);
};

export default user;
