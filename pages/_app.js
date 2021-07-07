import "tailwindcss/tailwind.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import React from "react";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
