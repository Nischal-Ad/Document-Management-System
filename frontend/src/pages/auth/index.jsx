import { Stack, Typography, Card, CardMedia, CardContent } from '@mui/material';
import Login from './components/Login';
import SignUp from './components/SignUp';
import { useState } from 'react';
import logo from '../../assects/img/logo.png';

const Index = () => {
	const [isLogin, setIsLogin] = useState(true);
	return (
		<>
			<Card sx={{ maxWidth: 345 }}>
				<Stack alignItems={'center'} spacing={3}>
					<Stack>
						<Typography variant='h4' fontStyle={'italic'} textAlign={'center'}>
							Hey Welcome
						</Typography>

						<CardMedia>
							<img
								src={logo}
								alt=''
								style={{
									height: '7rem',
									width: '7rem',
									borderRadius: '5rem',
								}}
							/>
						</CardMedia>
						<CardContent>
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
						</CardContent>
					</Stack>
				</Stack>
			</Card>
		</>
	);
};

export default Index;
