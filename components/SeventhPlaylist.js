import useSWR from "swr";

import fetcher from "../middleware/utilities";
import Playlist from "../components/Playlist";

export default function SeventhPlaylist() {
  const { data } = useSWR("/api/top-tracks", fetcher);

  if (!data) {
    return null;
  }

  return data.playlists.map((playlist, index) => (
    <Playlist key={playlist.songUrl} {...playlist} />
  ));
}
