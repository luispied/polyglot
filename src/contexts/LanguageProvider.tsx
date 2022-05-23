import { useEffect, useState } from 'react';
import LocaleContext from './Context';
import { I18n } from 'react-polyglot';
import { languages } from '../contexts/Languagues';

export interface ProviderProps {
	children: React.ReactNode;
	phrases: Phrases;
}
console.log(languages);
export const Provider = ({ children, phrases }: ProviderProps) => {
	const [locale, setLocale] = useState(languages.en.name);

	// set default messages for first load
	const [messages, setMessages] = useState(phrases.en);

	useEffect(() => {
		switch (locale) {
			case languages.en.code:
				setMessages(phrases.en);
				break;
			case languages.es.code:
				setMessages(phrases.es);
				break;
			case languages.fr.code:
				setMessages(phrases.fr);
				break;
			default:
				setMessages(phrases.en);
		}
	}, [locale]);

	return (
		<LocaleContext.Provider value={{ locale, setLocale }}>
			<I18n locale={locale} messages={messages}>
				<>{children}</>
			</I18n>
		</LocaleContext.Provider>
	);
};
