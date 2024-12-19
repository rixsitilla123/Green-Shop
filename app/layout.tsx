import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/Header";
import ReactQueryProvider from "@/query/ReactQueryProvider";
import { AuthContext } from "@/context/AuthContext";
import "./globals.css";
import Footer from "@/components/Footer";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Green Shop",
	description: "Green Shop is a biggest market. It contains more and more plants. This web-site created by Rixsitilla and with his teacher.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="en">
			<head>
				<link rel="icon" href="/Logo.svg" />
			</head>
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
				<ReactQueryProvider>
					<AuthContext>
						<Header />
						{children}
						<Footer />
					</AuthContext>
				</ReactQueryProvider>
			</body>
		</html>
	);
}