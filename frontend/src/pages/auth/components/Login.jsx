const Login = () => {
	return (
		<>
			<h3 className='text-center' style={{ fontWeight: '700' }}>
				Login
			</h3>
			<div className='mb-3'>
				<label htmlFor='exampleFormControlInput1' className='form-label'>
					Email :
				</label>
				<input type='email' className='form-control' id='example' />
				<br />
				<label htmlFor='Password' className='form-label'>
					Password:
				</label>
				<input type='password' id='password' className='form-control' aria-labelledby='password' />
				<br />
				<button type='button' className='btn btn-outline-primary'>
					Login
				</button>
			</div>
		</>
	);
};

export default Login;
