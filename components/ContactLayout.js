import React from "react";
import Head from "next/head";
import ContactNav from "../components/ContactNav";
import Footer from "../components/Footer";

const ContactLayout = ({
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
    <div>
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
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@500;wght@600&display=swap"
          rel="stylesheet"
        />
      </Head>

      <header>
        <ContactNav />
      </header>
      <main>{children}</main>
      <Footer />
      {/* <SelectionCard /> */}
    </div>
  );
};

export default ContactLayout;
