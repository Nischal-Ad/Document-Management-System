const SignUp = () => {
	return (
		<div>
			<h3 className='text-center' style={{ fontWeight: '700' }}>
				Sign Up
			</h3>

			<div className='mb-3'>
				<label htmlFor='exampleFormControlInput1' className='form-label'>
					Username:
				</label>
				<input type='username' className='form-control' id='example' />
				<br />

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

				<label htmlFor='confirmpassword' className='form-label'>
					Confirm Password:
				</label>
				<input type='password' id='password' className='form-control' aria-labelledby='password' />
				<br />

				<label htmlFor='exampleFormControlInput1' className='form-label'>
					Address:
				</label>
				<input type='address' className='form-control' id='example' />
				<br />
				<button type='button' className='btn btn-outline-primary'>
					Sign In
				</button>
			</div>
		</div>
	);
};

export default SignUp;
