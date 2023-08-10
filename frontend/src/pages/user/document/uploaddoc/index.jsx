import { Label, TextInput } from 'flowbite-react';
import { Card } from 'flowbite-react';
import { Button } from 'flowbite-react';
import Section from '../../../../components/Section';

const index = () => {
	return (
		<Section>
			<Card className='max-w-md mx-auto mt-4' href='#'>
				<div className='flex max-w-md flex-col gap-4'>
					<div>
						<div className='mb-2 block'>
							<Label htmlFor='small' value='File Name' />
						</div>
						<TextInput id='small' sizing='sm' type='text' />
					</div>
					<div>
						<div className='mb-2 block'>
							<Label htmlFor='base' value='Categories' />
						</div>
						<TextInput id='base' sizing='md' type='text' />
					</div>

					<div>
						<div className='mb-2 block'>
							<Label htmlFor='base' value='Description' />
						</div>
						<textarea
							id='message'
							rows='4'
							className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
						></textarea>
					</div>
					<div className='flex items-center justify-center w-full'>
						<label
							htmlFor='dropzone-file'
							className='flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600'
						>
							<div className='flex flex-col items-center justify-center pt-5 pb-6'>
								<svg className='w-8 h-8 mb-4 text-gray-500 dark:text-gray-400' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 16'>
									<path
										stroke='currentColor'
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth='2'
										d='M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2'
									/>
								</svg>
								<p className='mb-2 text-sm text-gray-500 dark:text-gray-400'>
									<span className='font-semibold'>Click to upload</span> or drag and drop
								</p>
								<p className='text-xs text-gray-500 dark:text-gray-400'>SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
							</div>
							<input id='dropzone-file' type='file' className='hidden' />
						</label>
					</div>
				</div>
				<Button gradientMonochrome='cyan'>Upload</Button>
			</Card>
		</Section>
	);
};

export default index;
