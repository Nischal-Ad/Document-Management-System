import Login from './components/Login';
import SignIn from './components/SignUp';
import UserNav from '../../shared/navbar/UserNav';
import Section from '../../components/Section';
import { Card } from 'flowbite-react';

const index = () => {
	return (
		<>
			<Section>
				<Card className='max-w-sm mx-auto mt-5' href='#'>
					<Login />
				</Card>
			</Section>
		</>
	);
};

export default index;
