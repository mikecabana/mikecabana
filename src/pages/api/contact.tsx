import type { NextApiRequest, NextApiResponse } from 'next';

interface Data {
	name: string;
	email: string;
	phone: string;
	message: string;
	robot: string;
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	const { name, email, phone, message, robot } = req.body as Data;

	// honeypot
	if (!robot || robot === '') {
		// send the message
	}
	res.status(200).json('OK');
};

export default handler;
