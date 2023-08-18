import './assects/css/index.css';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { SnackbarProvider } from 'notistack';
import store from './store/store.jsx';
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root')).render(
	<Provider store={store}>
		<SnackbarProvider
			maxSnack={1}
			autoHideDuration={4000}
			anchorOrigin={{
				vertical: 'top',
				horizontal: 'right',
			}}
		>
			<App />
		</SnackbarProvider>
	</Provider>
);
