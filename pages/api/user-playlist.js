// import { getPlaylist } from "../../components/spotify";

// export default async function handler(_, res) {
//   const response = await getPlaylist();
//   console.log(response);
//   const { items } = await response.json();
//   console.log(items);

//   //   const title = playlist.items.collaborative;

//   const playlists = items.map((playlist) => ({
//     songUrl: playlist.external_urls.spotify,
//     title: playlist.name,
//     imageUrl: playlist.images[0].url,
//     total: playlist.tracks.total,
//   }));
//   res.setHeader(
//     "Cache-Control",
//     "public, s-maxage=86400, stale-while-revalidate=43200"
//   );

//   return res.status(200).json({ playlists });
// }
