type Phrases = {
	[key: string]: Record<string, string>;
};

type LanguageOptions = {
	code: string;
	name: string;
};

interface Language {
	[key: string]: LanguageOptions;
}
