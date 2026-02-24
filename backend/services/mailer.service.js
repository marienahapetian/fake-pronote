import { BrevoClient, logging } from "@getbrevo/brevo";
import "dotenv/config";

export async function sendMail(to, link) {
	const client = new BrevoClient({
		apiKey: process.env.BREVO_SMTP_KEY,
		logging: {
			level: logging.LogLevel.Debug,
			logger: new logging.ConsoleLogger(),
			silent: false,
		},
	});
	const { data, rawResponse } = await client.transactionalEmails
		.sendTransacEmail({
			templateId: 1, // 👈 replace with your real template ID
			params: {
				confirmationLink: link,
			},
			sender: {
				email: process.env.BREVO_SMTP_MAIL,
				name: "Fake ProNote",
			},
			subject: "Confirm your account",
			to: [
				{
					email: to,
				},
			],
		})
		.withRawResponse();

	console.log(rawResponse.headers["X-My-Header"]);
}
