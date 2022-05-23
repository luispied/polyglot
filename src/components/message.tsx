import { translate } from 'react-polyglot';

interface Props {
	name: string;
	messageCount: number;
	t: any;
}

const Message = ({ t, name, messageCount }: Props) => (
	<section>
		<h1>{t('welcomeMessage', { name })}</h1>
		<p>{t('notification', messageCount)}</p>
		<small
			dangerouslySetInnerHTML={{
				__html: t('meet', {
					a: '<a href="#">',
					a_end: '</a>',
				}),
			}}
		></small>
	</section>
);

export default translate()(Message);
