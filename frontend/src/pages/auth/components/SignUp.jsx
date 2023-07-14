import { Box, Button, Stack, TextField } from '@mui/material';
const SignUp = () => {
	return (
		<Stack width={{ md: '100%', sm: '100%', xs: '100%' }} spacing={3}>
			<TextField type='text' label='username' variant='standard' />
			<TextField type='email' label='email' variant='standard' />
			<TextField type='text' label='address' variant='standard' />
			<TextField type='password' label='password' variant='standard' />
			<TextField type='password' label='confirm password' variant='standard' />
			<Box display={'flex'} justifyContent={'center'}>
				<Button
					variant='contained'
					sx={{
						width: '10rem',
					}}
				>
					Sign Up
				</Button>
			</Box>
		</Stack>
	);
};

export default SignUp;
