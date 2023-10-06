import { useState } from 'react';
import Navbar from './Navbar';
import Sidebar from './SideNav';

const Index = () => {
	const [open, setOpen] = useState(false);
	return (
		<>
			<Navbar handleOpen={() => setOpen(!open)} />
			<Sidebar open={open} />
		</>
	);
};

export default Index;
