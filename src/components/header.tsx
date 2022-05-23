import { useContext } from 'react';
import LocaleContext from '../contexts/Context';

const Header = () => {
	const { setLocale } = useContext(LocaleContext);

	return (
		<header>
			<select onChange={(e) => setLocale(e.target.value)}>
				<option value="en">English</option>
				<option value="es">Spanish</option>
				<option value="fr">French</option>
			</select>
		</header>
	);
};

export default Header;
