import { useState } from 'react';
import { Button, Table, Modal, Pagination, Label, TextInput } from 'flowbite-react';
import AdminSection from '../../../components/AdminSection';

const User = () => {
	const [openModal, setOpenModal] = useState();

	return (
		<AdminSection>
			<div className='flex justify-between items-center mx-4'>
				<p className='text-4xl font-extrabold text-gray-900 mt-8 mb-4'>All Users</p>
				<Button onClick={() => setOpenModal('default')}>Add User</Button>
				<Modal show={openModal === 'default'} onClose={() => setOpenModal(undefined)}>
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
								<Label htmlFor='email' value='Email' />
							</div>
							<TextInput id='email' required type='email' />
						</div>

						<div>
							<div className='mb-2 block'>
								<Label htmlFor='role' value='Role' />
							</div>

							<button
								id='dropdownHoverButton'
								data-dropdown-toggle='dropdownHover'
								data-dropdown-trigger='hover'
								class='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
								type='button'
							>
								Dropdown hover{' '}
								<svg class='w-2.5 h-2.5 ml-2.5' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 10 6'>
									<path stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m1 1 4 4 4-4' />
								</svg>
							</button>

							<div id='dropdownHover' class='z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700'>
								<ul class='py-2 text-sm text-gray-700 dark:text-gray-200' aria-labelledby='dropdownHoverButton'>
									<li>
										<a href='#' class='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'>
											Dashboard
										</a>
									</li>
									<li>
										<a href='#' class='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'>
											Settings
										</a>
									</li>
								</ul>
							</div>
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
						<Button onClick={() => setOpenModal(undefined)}>Add</Button>
						<Button color='gray' onClick={() => setOpenModal(undefined)}>
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
						<Table.Cell>Oppa</Table.Cell>
						<Table.Cell>Oppa</Table.Cell>
						<Table.Cell>Oppa Dept</Table.Cell>

						<Table.Cell className='flex items-start justify-start gap-4'>
							<Button gradientMonochrome='info'>View</Button>
							<Button gradientMonochrome='success'>Edit</Button>
							<Button gradientMonochrome='failure'>Delete</Button>
						</Table.Cell>
					</Table.Row>{' '}
				</Table.Body>
			</Table>
			<Pagination className='mt-4 flex justify-end mr-4' currentPage={1} totalPages={100} />
		</AdminSection>
	);
};

export default User;
