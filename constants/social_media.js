import { BsFillEnvelopeOpenFill, BsGithub, BsLinkedin } from "react-icons/bs";

export const SOCIAL_MEDIA = [
	{
		id: "linkedin",
		icon: <BsLinkedin />,
		title: "Visit LinkedIn profile",
		url: "https://www.linkedin.com/in/ali-nazery-8b6642205/"
	},
	{
		id: "github",
		icon: <BsGithub />,
		title: "Visit Github profile",
		url: "https://github.com/AliNazery"
	},
	{
		id: "mail",
		icon: <BsFillEnvelopeOpenFill />,
		title: "Send me an email",
		url: "mailto://alinazery@yahoo.com"
	}
];
