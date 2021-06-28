import querystring from "querystring";
const SpotifyWebApi = require("spotify-web-api-node");

const { SPOTIFY_CLIENT_SECRET, SPOTIFY_REFRESH_TOKEN, SPOTIFY_CLIENT_ID } =
  process.env;

const basic = Buffer.from(
  `${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`
).toString("base64");
const GET_PLAYLIST_ENDPOINT =
  "https://api.spotify.com/v1/users/ic1jxo78uihuoe96dclcauhmz/playlists";
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

const getAccessToken = async () => {
  const response = await fetch(TOKEN_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: querystring.stringify({
      grant_type: "refresh_token",
      refresh_token: SPOTIFY_REFRESH_TOKEN,
    }),
  });

  return response.json();
};

export const getPlaylist = async () => {
  const { access_token } = await getAccessToken();
  console.log(access_token);

  return fetch(GET_PLAYLIST_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};

export default async (_, res) => {
  const response = await getPlaylist();
  console.log(response);
  const { items } = await response.json();
  console.log(items);

  //   const title = playlist.items.collaborative;

  const playlists = items.map((playlist) => ({
    songUrl: playlist.external_urls.spotify,
    title: playlist.name,
    imageUrl: playlist.images[0].url,
    total: playlist.tracks.total,
  }));

  return res.status(200).json({ playlists });
};
