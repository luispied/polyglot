import { translate } from 'react-polyglot';

interface Props {
	name: string;
	t: any;
}

const Greeter = ({ name, t }: Props) => {
	return <h3>{t('hello_name', { name })}</h3>;
};

export default translate()(Greeter);
