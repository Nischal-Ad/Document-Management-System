import React from 'react';
import Section from '../../../components/Section';
import { Button } from 'flowbite-react';
import logo from '../../../assects/img/logo.png';

const Login = () => {
	return (
		<Section>
			<div className='flex justify-center mb-5'>
				<img src={logo} alt='' />
			</div>
			<div>
				<label htmlFor='input-group-1' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
					Email *
				</label>
				<div className='relative mb-6'>
					<div className='absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none'>
						<svg className='w-4 h-4 text-gray-500 dark:text-gray-400' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='currentColor' viewBox='0 0 20 16'>
							<path d='m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z' />
							<path d='M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z' />
						</svg>
					</div>
					<input
						type='text'
						id='input-group-1'
						className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
						placeholder='Email'
						required
					/>
				</div>

				<label htmlFor='input-group-2' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
					Password *
				</label>
				<div className='relative mb-6'>
					<div className='absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none'>
						<svg className='w-4 h-4 text-gray-500 dark:text-gray-400' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='currentColor' viewBox='0 0 16 20'>
							<path d='M14 7h-1.5V4.5a4.5 4.5 0 1 0-9 0V7H2a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2Zm-5 8a1 1 0 1 1-2 0v-3a1 1 0 1 1 2 0v3Zm1.5-8h-5V4.5a2.5 2.5 0 1 1 5 0V7Z' />
						</svg>
					</div>
					<input
						type='text'
						id='input-group-2'
						className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
						placeholder='Password'
						required
					/>
				</div>
				<Button gradientMonochrome='info'>Login</Button>
			</div>
		</Section>
	);
};

export default Login;
