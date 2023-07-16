import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';

function Example() {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<>
			<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '0.5rem 0', padding: '0 0.5rem' }}>
				<h1>All Documents</h1>
				<Button variant='primary' onClick={handleShow}>
					Add Document
				</Button>
			</div>
			<Table striped bordered hover>
				<thead>
					<tr>
						<th>#</th>
						<th>First Name</th>
						<th>Last Name</th>
						<th>Username</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>1</td>
						<td>Mark</td>
						<td>Otto</td>
						<td>@mdo</td>
					</tr>
					<tr>
						<td>2</td>
						<td>Jacob</td>
						<td>Thornton</td>
						<td>@fat</td>
					</tr>
					<tr>
						<td>3</td>
						<td colSpan={2}>Larry the Bird</td>
						<td>@twitter</td>
					</tr>
				</tbody>
			</Table>
			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Add Document</Modal.Title>
				</Modal.Header>
				<form>
					<Modal.Body>
						<div className='form-outline mb-4'>
							<label className='form-label' htmlFor='form4Example1'>
								Doc Title
							</label>
							<input type='text' id='form4Example1' className='form-control' />
						</div>

						<div className='form-outline mb-4'>
							<label className='form-label' htmlFor='form4Example2'>
								Doc Category
							</label>
							<Form.Select aria-label='Default select example'>
								<option>Open this select menu</option>
								<option value='1'>One</option>
								<option value='2'>Two</option>
								<option value='3'>Three</option>
							</Form.Select>
						</div>

						<div className='form-outline mb-4'>
							<label className='form-label' htmlFor='form4Example3'>
								Description
							</label>
							<textarea className='form-control' id='form4Example3' rows='4'></textarea>
						</div>

						<div className='form-outline mb-4'>
							<label className='form-label' htmlFor='customFile'>
								Upload Doc
							</label>
							<input type='file' className='form-control' id='customFile' />
						</div>
					</Modal.Body>
					<Modal.Footer>
						<Button variant='secondary' onClick={handleClose}>
							Close
						</Button>
						<Button variant='primary' onClick={handleClose}>
							Save Changes
						</Button>
					</Modal.Footer>
				</form>
			</Modal>
		</>
	);
}

export default Example;
