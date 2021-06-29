import "tailwindcss/tailwind.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import React, { useState, useEffect } from "react";
const baseUrl = "https://staging-api.seventhave.io";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
