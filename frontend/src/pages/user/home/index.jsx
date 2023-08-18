import { Button, Card } from 'flowbite-react';
import Section from '../../../components/Section';
import RecentDocTable from './components/RecentDocTable';
import { HiOutlineArrowRight } from 'react-icons/hi';
import { useSelector } from 'react-redux';

const UserHome = () => {
	const { loading } = useSelector((store) => store.user);
	return (
		<Section>
			{loading ? (
				'loading...'
			) : (
				<>
					<div className='md:flex justify-around p-2'>
						<Card className='text-center text-gray-700 w-full md:mx-4 md:mb-0 mb-4'>
							<h5 className='text-2xl font-bold tracking-tight'>
								<p>Total Documents</p>
							</h5>
							<p className='font-bold text-3xl text-gray-700 dark:text-gray-400 text-center'>
								<span>2</span>
							</p>
							<Button>
								<p>Go to Documents</p>
							</Button>
						</Card>

						<Card className='text-center text-gray-700 w-full md:mx-4 md:mb-0 mb-4'>
							<h5 className='text-2xl font-bold tracking-tight '>
								<p>Total Categories</p>
							</h5>
							<p className='font-bold text-3xl text-gray-700 dark:text-gray-400 text-center'>
								<span>5</span>
							</p>
							<Button>
								<p>Go To Categories</p>
							</Button>
						</Card>
					</div>
					<RecentDocTable />
					<Button className='mt-4'>
						<p>Show More</p>
						<HiOutlineArrowRight className='ml-2 h-5 w-5' />
					</Button>
				</>
			)}
		</Section>
	);
};

export default UserHome;
