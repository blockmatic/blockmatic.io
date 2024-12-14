import type { Metadata } from "next";

import "./globals.css";

import { Nunito } from "next/font/google";

const nunito = Nunito({
	subsets: ["latin"],
	variable: "--font-nunito",
});

export const metadata: Metadata = {
	title: "Blockmatic Labs",
	description:
		"We build cutting-edge solutions with crypto and AI",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${nunito.variable}`}>{children}</body>
		</html>
	);
}
