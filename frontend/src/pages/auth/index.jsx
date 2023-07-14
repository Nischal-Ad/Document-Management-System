import { Box, Card, CardContent, CardMedia, Stack, Typography } from '@mui/material';
import Login from './components/Login';
import SignUp from './components/SignUp';
import { useState } from 'react';
import logo from '../../assects/img/logo.png';

const Index = () => {
	const [isLogin, setIsLogin] = useState(true);
	return (
		<Box
			height={'100%'}
			width={'100dvw'}
			display={'grid'}
			bgColor='green'
			sx={{
				placeItems: 'center',
			}}
		>
			<>
				<Stack alignItems={'center'} spacing={3}>
					<Card>
						<CardContent>
							<Typography variant='h3' fontWeight={600} color='teal' textAlign={'center'}>
								Welcome! To DMS
							</Typography>
							<CardMedia component={'img'} sx={{ height: 140, objectFit: 'contain', mb: 2 }} image={logo} />
							<Typography variant='h3' fontWeight={'bold'} color='Highlight' textAlign={'center'}>
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
						</CardContent>
					</Card>
				</Stack>
			</>
		</Box>
	);
};

export default Index;
