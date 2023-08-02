import { Footer } from 'flowbite-react';
import Section from '../../components/Section';

export default function DefaultFooter() {
	return (
		<Footer className='bg-blue-500 py-4 mt-4'>
			<Section>
				<Footer.Copyright by='Sujit Shrestha' className='text-white font-bold' year={2023} />
			</Section>
		</Footer>
	);
}
