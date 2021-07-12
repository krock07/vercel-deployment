import React from "react";
import { FiShare2 } from "react-icons/fi";

export default function Playlist(playlist) {
  return (
    <div className="flex flex-col  px-6 md:p-0  md:mb-6">
      <img
        className="xl:w-[300px] object-cover xl:h-[300px] rounded-[20px] md:w-[200px] md:h-[200px]"
        src={playlist.imageUrl}
        alt=""
      />
      <i class="fab fa-spotify relative bottom-[35px] left-[1rem] object-center xl:bottom-8 xl:left-3 text-[#1DB954] text-xl"></i>
      <div className="flex justify-between xl:justify-between xl:items-center">
        <a className="cursor-pointer" href={playlist.songUrl}>
          <p
            className="text-base font-semibold overflow-ellipsis truncate max-w-[250px] md:max-w-[180px] xl:max-w-[250px]"
            key={playlist.songUrl}
          >
            {playlist.title}
          </p>
        </a>

        <a href={playlist.songUrl}>
          <FiShare2 />
        </a>
      </div>

      <small className=" pb-14 xl:p-0 xl:text-[13px] max-w-[250px] max-h-[50px] truncate overflow-ellipsis ">
        {playlist.total} Tracks
      </small>
    </div>
  );
}
