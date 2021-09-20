import type { NextApiRequest, NextApiResponse } from 'next';
import { withSentry } from '@sentry/nextjs';

interface Data {
	name: string;
}

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
	res.status(200).json({ name: 'John Doe' });
};

// export default withSentry(handler);
export default handler;
