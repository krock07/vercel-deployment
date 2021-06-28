import React from "react";

const AUTH_URL =
  "https://accounts.spotify.com/authorize?client_id=ic1jxo78uihuoe96dclcauhmz&response_type=code&redirect_uri=http://localhost:3000&scope=playlist-read-collaborative%playlist-read-private";

function spotifyLogin() {
  return (
    <div>
      <button>Login</button>
    </div>
  );
}

export default spotifyLogin;
