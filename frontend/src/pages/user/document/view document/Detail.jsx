import { Modal } from 'flowbite-react';

const Detail = ({ open, close, data }) => {
	return (
		<Modal show={open} onClose={() => close()}>
			<Modal.Header>{data?.name}</Modal.Header>
			<Modal.Body style={{ overflow: 'hidden' }}>
				<iframe src={`https://docs.google.com/gview?url=${data?.doc?.url}&embedded=true`} className='w-[100%]' style={{ height: '90dvh' }} />
			</Modal.Body>
			<Modal.Footer>{data?.desc}</Modal.Footer>
		</Modal>
	);
};

export default Detail;
