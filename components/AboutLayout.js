import React, { useEffect, useState } from "react";
import Head from "next/head";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import AboutNav from "../components/AboutNav";
const baseUrl = "https://staging-api.seventhave.io";

const AboutLayout = ({
  children,
  pageTitle,
  description,
  previewImage,
  ...props
}) => {
  return (
    <div className="overscroll-x-none">
      <Head>
        <title>{pageTitle}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content={description} />
        <meta property="og:description" content={description} key="ogdesc" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <header>
        {" "}
        <AboutNav transparent={true} />{" "}
      </header>
      <main
      // style={{
      //   backgroundImage: "url('/about-pattern.png')",
      //   backgroundRepeat: "no-repeat",
      //   backgroundPosition: "right top%",
      //   backgroundSize: "contain",
      //   // background:
      //   // "linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(5, 59, 62, 0.99)), url('/discover.jpg') center center / cover no-repeat"
      // }}
      >
        {children}
      </main>
      <Footer />
      {/* <SelectionCard /> */}
    </div>
  );
};

export default AboutLayout;
