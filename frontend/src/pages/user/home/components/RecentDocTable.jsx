import { Table } from 'flowbite-react';

const index = () => {
	return (
		<>
			<p className='text-4xl font-extrabold text-gray-900 mt-8 mb-4'>Recent Documents</p>
			<div className='overflow-y-auto'>
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
					<Table.Body className='divide-y'>
						<Table.Row className='bg-white dark:border-gray-700'>
							<Table.Cell className='whitespace-nowrap font-medium text-gray-900 dark:text-white'>Oppa ko file</Table.Cell>
							<Table.Cell>Oppa</Table.Cell>
							<Table.Cell>Oppa Dept</Table.Cell>
							<Table.Cell>Oppalal</Table.Cell>
							<Table.Cell>Feb 24</Table.Cell>

							<Table.Cell>
								<span className='font-medium text-cyan-600 hover:underline'>View</span>
							</Table.Cell>
						</Table.Row>
						<Table.Row className='bg-white dark:border-gray-700'>
							<Table.Cell className='whitespace-nowrap font-medium text-gray-900 dark:text-white'>Oppa ko file</Table.Cell>
							<Table.Cell>Oppa</Table.Cell>
							<Table.Cell>Oppa Dept</Table.Cell>
							<Table.Cell>Oppalal</Table.Cell>
							<Table.Cell>Feb 24</Table.Cell>

							<Table.Cell>
								<span className='font-medium text-cyan-600 hover:underline'>
									<>View</>
								</span>
							</Table.Cell>
						</Table.Row>
					</Table.Body>
				</Table>
			</div>
		</>
	);
};

export default index;
