import React from "react";

export default function Playlist(playlist) {
  return (
    <div className=" mt-20 md:m-0 md:flex md:mx-auto md:w-9/12 md:justify-around md:flex-wrap">
      <div className="flex flex-col  px-6 md:p-0  md:mb-6">
        <img
          className="xl:w-[300px] object-cover xl:h-[300px] rounded-[20px] md:w-[200px] md:h-[200px]"
          src={playlist.images[0].url}
          alt=""
        />
        <i class="fab fa-spotify relative bottom-[35px] left-[1rem] object-center xl:bottom-8 xl:left-3 text-[#1DB954] text-xl"></i>
        <div className="flex justify-between xl:justify-between xl:items-center">
          <a className="cursor-pointer" href={playlist.external_urls.spotify}>
            <p
              className="text-base font-semibold overflow-ellipsis truncate max-w-[250px] md:max-w-[180px] xl:max-w-[250px]"
              key={key}
            >
              {playlist.name}
            </p>
          </a>

          <a href={item.external_urls.spotify}>
            <FiShare2 />
          </a>
        </div>

        <small className=" pb-14 xl:p-0 xl:text-[13px] max-w-[250px] max-h-[50px] truncate overflow-ellipsis ">
          {item.tracks.total} Tracks
        </small>
      </div>
    </div>
  );
}
