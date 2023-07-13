import { TextField, Typography, Stack } from '@mui/material';
const Login = () => {
	return (
		<>
			<Typography variant='h1' textAlign={'center'}>
				Login
			</Typography>
			<Stack spacing={5} justifyContent={'center'} alignItems={'center'}>
				<Stack spacing={3}>
					<TextField type='email' label='email' variant='outlined' />
					<TextField type='password' label='password' variant='standard' />
				</Stack>
			</Stack>
		</>
	);
};

export default Login;
