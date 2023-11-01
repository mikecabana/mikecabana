import type { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';

interface Data {
	name: string;
	email: string;
	phone: string;
	message: string;
	robot: string;
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	const resend = new Resend(process.env.RESEND_API_KEY);
	const { name, email, phone, message, robot } = req.body as Data;

	try {
		// honeypot
		if (robot) {
			return res.status(200).json('OK');
		}

		const resendRes = await resend.emails.send({
			from: `${process.env.FROM_EMAIL_ADDRESS}`,
			reply_to: `${name} <${email}>`,
			to: `${process.env.TO_EMAIL_ADDRESS}`,
			subject: `Contact request from ${name} via mikecabana.com`,
			text: `${message}
			\n
			\n
			${name}
			${email}
			${phone}
			`,
		});

		return res.status(200).json('OK');
	} catch (e) {
		console.log(e);
		return res.status(400).json('Bad request');
	}
};

export default handler;
