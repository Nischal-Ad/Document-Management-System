import SignUp from './components/SignUp';
import Login from './components/Login';
import { useState } from 'react';
import logo from '../../assects/img/logo.png';

const Index = () => {
	const [isLogin, setIsLogin] = useState(true);
	return (
		<div className='Auth_Main row'>
			<div className='card col-12 col-md-4 col-sm-8 mx-auto'>
				<div className='card-body'>
					<div style={{ display: 'flex', justifyContent: 'center' }}>
						<img src={logo} alt='' />
					</div>
					<br />
					<div className=''>{isLogin ? <Login /> : <SignUp />}</div>
				</div>
				<p onClick={() => setIsLogin(!isLogin)}>{isLogin ? 'Create an alc? Sign up' : 'Already have an alc? Login in'}</p>
			</div>
		</div>
	);
};

export default Index;
