import { useState } from 'react';
import Navbar from './Navbar';
import Sidebar from './SideNav';

const Index = () => {
	const [open, setOpen] = useState(false);
	return (
		<div className='container mx-auto '>
			<Navbar handleOpen={() => setOpen(!open)} />
			<Sidebar open={open} />
		</div>
	);
};

export default Index;
