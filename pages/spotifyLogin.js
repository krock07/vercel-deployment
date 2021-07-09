import React from "react";

const AUTH_URL =
  "https://accounts.spotify.com/authorize?client_id=ic1jxo78uihuoe96dclcauhmz&response_type=code&redirect_uri=http://localhost:3000&scope=playlist-read-collaborative%playlist-read-private";

const STAGING_AUTH_URL =
  "https://accounts.spotify.com/authorize?client_id=6eb21b0156484d46b73a000f2113c546&response_type=code&redirect_uri=https://webstaging.herokuapp.com&scope=playlist-read-collaborative%20playlist-read-private";
function spotifyLogin() {
  return (
    <div>
      <a href={STAGING_AUTH_URL}>Login</a>
    </div>
  );
}

export default spotifyLogin;
