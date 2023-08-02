import './assects/css/index.css';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import store from './store/store.jsx';
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root')).render(
	<Provider store={store}>
		<App />
	</Provider>
);
