import React from 'react';

interface contextProps {
	locale: string;
	setLocale: any;
}

const LocaleContext = React.createContext({} as contextProps);

export default LocaleContext;
