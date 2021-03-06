import React from "react";
import Head from "next/head";
import SignupNav from "../components/SignupNav";
import Footer from "../components/Footer";

const SignupLayout = ({
	children,
	pageTitle,
	description,
	image,
	card,
	title,
	website,
	...props
}) => {
	return (
		<div className="bg-[#f1f5f8]">
			<Head>
				<title>{title}</title>
				<meta charSet="utf-8" />
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<meta name="description" content={description} />
				<meta property="og:type" content={website} />
				<meta property="og:description" content={description} key="ogdesc" />
				<meta property="og:image" content={image} key="ogimage" />
				<meta name="twitter:card" content={card} />

				<meta name="twitter:title" content={title} />
				<meta name="twitter:description" content={description} />
				<meta name="twitter:image" content={image} />
				<link
					href="https://fonts.googleapis.com/css2?family=Poppins:wght@500;600&display=swap"
					rel="stylesheet"
				/>
			</Head>

			<header>
				<SignupNav transparent={true} />
			</header>
			<main>{children}</main>
			<Footer />
		</div>
	);
};

export default SignupLayout;
