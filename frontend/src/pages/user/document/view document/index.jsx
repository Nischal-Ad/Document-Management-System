import { Button, Table } from 'flowbite-react';
import { Pagination } from 'flowbite-react';
import { IoMdAdd } from 'react-icons/io';
import { useSelector, useDispatch } from 'react-redux';
import { delDoc, allDoc } from '../../../../store/action/document';
import Detail from './Detail';
import { useState } from 'react';

const Index = () => {
	const [isOpen, setIsOpen] = useState(false);
	const { doc } = useSelector((store) => store.doc);
	const dispatch = useDispatch();

	return (
		<>
			<div className='flex justify-between items-center mx-4'>
				<p className='text-4xl font-extrabold text-gray-900 mt-8 mb-4'>All Doc</p>
				<Button>
					<p>Add</p>
					<IoMdAdd className='ml-2 h-5 w-5' />
				</Button>
			</div>
			<div className='overflow-y-auto'>
				<Table>
					<Table.Head>
						<Table.HeadCell>S.N</Table.HeadCell> <Table.HeadCell>File Name</Table.HeadCell>
						<Table.HeadCell>Upload By</Table.HeadCell>
						<Table.HeadCell>Department</Table.HeadCell>
						<Table.HeadCell>Cattegories</Table.HeadCell>
						<Table.HeadCell>Upload Date</Table.HeadCell>
						<Table.HeadCell>Action</Table.HeadCell>
						<Table.HeadCell></Table.HeadCell>
					</Table.Head>
					<Table.Body className='divide-y'>
						{doc?.map((data, i) => {
							return (
								<Table.Row key={i} className='bg-white dark:border-gray-700 dark:bg-gray-800'>
									<Table.Cell>{i + 1}</Table.Cell>
									<Table.Cell className='whitespace-nowrap font-medium text-gray-900 dark:text-white'>{data?.name}</Table.Cell>
									<Table.Cell>{data?.user?.name}</Table.Cell>
									<Table.Cell>{data?.department}</Table.Cell>
									<Table.Cell>{data?.category}</Table.Cell>
									<Table.Cell>{data?.createdAt}</Table.Cell>

									<Table.Cell className='flex items-start justify-start gap-4'>
										<p className='font-medium text-cyan-600 hover:underline cursor-pointer' onClick={() => setIsOpen(true)}>
											View
										</p>
										<a className='font-medium text-green-600 hover:underline cursor-pointer'>
											<p>Edit</p>
										</a>{' '}
										<p
											className='font-medium text-red-600 hover:underline cursor-pointer'
											onClick={async () => {
												await dispatch(delDoc(data?._id));
												dispatch(allDoc());
											}}
										>
											Delete
										</p>
										<Detail open={isOpen} close={() => setIsOpen(false)} data={data} />
									</Table.Cell>
								</Table.Row>
							);
						})}
					</Table.Body>
				</Table>
			</div>

			<Pagination className='mt-4 flex justify-end mr-4' currentPage={1} totalPages={100} />
		</>
	);
};

export default Index;
