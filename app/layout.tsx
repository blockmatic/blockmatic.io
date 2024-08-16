import type { Metadata } from "next";

import "./globals.css";

import { Manrope } from "next/font/google";

const manrope = Manrope({
	subsets: ["latin"],
	variable: "--font-manrope",
});

export const metadata: Metadata = {
	title: "Blockmatic Labs",
	description:
		"Blockmatic Labs: Innovating in blockchain, crypto, and AI. We build cutting-edge solutions for a decentralized, intelligent future.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${manrope.variable}`}>{children}</body>
		</html>
	);
}
