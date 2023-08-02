import { Avatar, Dropdown, Navbar } from 'flowbite-react';
import logo from '../../assects/img/logo.png';
import Section from '../../components/Section';
import React from 'react';
import { Link } from 'react-router-dom';

const UserNav = () => {
	return (
		<main className='bg-blue-800'>
			<Navbar className='container mx-auto bg-transparent text-white' fluid rounded>
				<Link to={'/'}>
					<div className='flex'>
						<img alt='Logo' className='mr-3 h-9 sm:h-9' src={logo} />
						<span className='self-center whitespace-nowrap text-xl font-semibold dark:text-white'>DMS</span>
					</div>
				</Link>
				<div className='flex md:order-2 text-center'>
					<Dropdown inline label={<Avatar rounded />}>
						<Dropdown.Header className='text-center'>
							<span className='block font-bold text-sm'>Bonnie Green</span>
							<span className='block truncate text-sm font-medium'>name@flowbite.com</span>
						</Dropdown.Header>
						<p className='px-6  py-2 curso cursor-pointer'>Change Passsword</p>
						<Dropdown.Divider />
						<p className='py-1 cursor-pointer'>Logout</p>
					</Dropdown>
					<Navbar.Toggle className='text-white' />
				</div>
				<Navbar.Collapse className='text-center'>
					<Link className='p-2' to={'/home'}>
						Home
					</Link>
					<Link className='p-2' to={'/add/document'}>
						Add Doc
					</Link>{' '}
					<Link className='p-2' to={'/documents'}>
						View Doc
					</Link>
				</Navbar.Collapse>
			</Navbar>
		</main>
	);
};

export default UserNav;
