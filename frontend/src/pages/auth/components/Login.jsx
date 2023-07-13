import { Box, Button, Stack, TextField } from '@mui/material';
const Login = () => {
	return (
		<Stack width={{ md: '30%', sm: '60%', xs: '100%' }} spacing={3}>
			<TextField type='email' label='email' variant='standard' />
			<TextField type='password' label='password' variant='standard' />
			<Box display={'flex'} justifyContent={'center'}>
				<Button
					variant='contained'
					sx={{
						width: '14rem',
					}}
				>
					Login
				</Button>
			</Box>
		</Stack>
	);
};

export default Login;
