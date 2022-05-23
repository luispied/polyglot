import ReactDOM from 'react-dom';

import { Provider } from './contexts/LanguageProvider';
import phrases from './translations';
import Message from './components/message';
import Header from './components/header';
import Footer from './components/footer';

const App = () => {
	return (
		<Provider phrases={phrases}>
			<Header />
			<Message name="CodeSandbox" messageCount={10} />
			<Footer />
		</Provider>
	);
};

const root = document.getElementById('root');
ReactDOM.render(<App />, root);
