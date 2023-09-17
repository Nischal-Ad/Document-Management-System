import { Modal } from 'flowbite-react';

const Detail = ({ open, close, data }) => {
	const parts = data?.doc?.url?.split('.');
	const lastWord = parts[parts.length - 1].toLowerCase();
	const imageExtensions = ['jpg', 'jpeg', 'png', 'gif', 'bmp', 'webp', 'jfif'];
	return (
		<Modal show={open} onClose={() => close()}>
			<Modal.Header>{data?.name}</Modal.Header>
			<Modal.Body style={{ overflow: 'auto' }}>
				{imageExtensions.includes(lastWord) ? (
					<img src={data?.doc?.url} className='w-[100%] object-none' />
				) : (
					<iframe src={`https://docs.google.com/gview?url=${data?.doc?.url}&embedded=true`} className='w-[100%]' style={{ height: '90dvh' }} />
				)}
			</Modal.Body>
			<Modal.Footer>{data?.desc}</Modal.Footer>
		</Modal>
	);
};

export default Detail;
