import { NextPage } from 'next';
import Script from 'next/script';
import { BaseLayout } from '~/components/layouts/BaseLayout';

const LSPage: NextPage = () => {
	return (
		<>
			<Script src='https://cdn.botpress.cloud/webchat/v1/inject.js' />
			<Script src='https://mediafiles.botpress.cloud/0b4e1760-3807-451b-862d-8a5b601a157e/webchat/config.js' defer />
			<BaseLayout>
				<div className='text-2xl m-8'>Cloture LS Chatbot Demo</div>
			</BaseLayout>
		</>
	);
};

export default LSPage;
