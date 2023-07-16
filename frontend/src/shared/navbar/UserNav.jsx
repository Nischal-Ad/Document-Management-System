import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';

function CollapsibleExample() {
	const [open, setOpen] = useState(false);
	return (
		<>
			<Navbar collapseOnSelect expand='lg' className='bg-body-tertiary'>
				<Container>
					<Navbar.Brand href='#home'>React-Bootstrap</Navbar.Brand>
					<Navbar.Toggle aria-controls='responsive-navbar-nav' />
					<Navbar.Collapse id='responsive-navbar-nav'>
						<Nav className='me-auto'>
							<Nav.Link href='#features'></Nav.Link>
							<Nav.Link href='#home'>Home</Nav.Link>
							<NavDropdown title='Document' id='collasible-nav-dropdown'>
								<NavDropdown.Item href='#action/3.1'>Uploaddoc</NavDropdown.Item>
								<NavDropdown.Item href='#action/3.3'>View</NavDropdown.Item>
							</NavDropdown>
						</Nav>
						<Nav>
							<Nav.Link href='#deets' onClick={() => setOpen(!open)}>
								profile
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
			{open && (
				<Card style={{ width: '18rem', position: 'absolute', right: '5px' }}>
					<Card.Body>
						<Card.Title>
							<div style={{ textAlign: 'center' }}>
								<p>hira lal</p>
								<p>hira@gmail.com</p>
								<p>logout</p>
							</div>
						</Card.Title>
					</Card.Body>
				</Card>
			)}
		</>
	);
}

export default CollapsibleExample;
