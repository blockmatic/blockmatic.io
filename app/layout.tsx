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
			<head>
			<link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%2210 0 100 100%22><text y=%22.90em%22 font-size=%2290%22>💎</text></svg>"/>
			</head>
			<body className={`${nunito.variable}`}>{children}</body>
		</html>
	);
}
