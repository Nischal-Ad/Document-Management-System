import { Stack, Typography } from '@mui/material';
import Login from './components/Login';
import SignUp from './components/SignUp';
import { useState } from 'react';

const Index = () => {
	const [isLogin, setIsLogin] = useState(true);
	return (
		<>
			<Stack alignItems={'center'} spacing={3}>
				<>
					<Typography variant='h3' textAlign={'center'}>
						Hey Welcome to my Website
					</Typography>
					<img
						src='https://imgv3.fotor.com/images/cover-photo-image/a-beautiful-girl-with-gray-hair-and-lucxy-neckless-generated-by-Fotor-AI.jpg'
						alt=''
						style={{
							height: '10rem',
							width: '10rem',
							borderRadius: '5rem',
						}}
					/>
					<Typography variant='h3' textAlign={'center'}>
						{isLogin ? 'Login' : 'Sign Up'}
					</Typography>
					{isLogin ? <Login /> : <SignUp />}
					<Typography
						onClick={() => setIsLogin(!isLogin)}
						variant='body1'
						mt={2}
						color={'blueviolet'}
						sx={{
							cursor: 'pointer',
						}}
					>
						{isLogin ? "Don't have Alc? Sign Up" : 'Already have an Alc? Login'}
					</Typography>
				</>
			</Stack>
		</>
	);
};

export default Index;
