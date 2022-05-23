import { useContext, useEffect, useState } from 'react';
import LocaleContext from '../contexts/Context';
import { languages } from '../contexts/Languagues';
import { useTranslate } from 'react-polyglot';

import enSVG from '../flags/en.svg';
import esSVG from '../flags/es.svg';
import frSVG from '../flags/fr.svg';

const Footer = () => {
	const { locale } = useContext(LocaleContext);
	const [src, setSrc] = useState('');
	const t = useTranslate();

	useEffect(() => {
		switch (locale) {
			case languages.en.code:
				setSrc(enSVG);
				break;
			case languages.es.code:
				setSrc(esSVG);
				break;
			case languages.fr.code:
				setSrc(frSVG);
				break;
			default:
				setSrc(enSVG);
		}
	}, [locale]);

	return (
		<>
			<h2>{t('test')}</h2>
			<footer>
				&copy; Whenever.{' '}
				<img src={src} alt={`Flag of ${locale}`} width="15px" />
			</footer>
		</>
	);
};

export default Footer;
