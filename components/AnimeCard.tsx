import React, { useEffect, useState } from 'react'

type CardProps = {
  anime: any
  sortValue: string
  dropValue: string
  animeWatchlist: string[]
  setAnimeWatchlist: React.Dispatch<React.SetStateAction<any | null>>
  watching: any
  setWatching: React.Dispatch<React.SetStateAction<boolean | null>>
}

export default function AnimeCard({
  anime,
  sortValue,
  dropValue,
  watching,
  setWatching,
}: CardProps) {
  function handleClick(e: MouseEvent) {
    //@ts-ignore
    const name = e?.target?.name
    //@ts-ignore
    const day = e?.target?.id

    localStorage.setItem(name, day)

    setWatching(!watching)
  }

  function handleClickRemove(e: MouseEvent) {
    //@ts-ignore
    const name = e?.target?.name

    localStorage.removeItem(name)

    setWatching(!watching)
  }

  return (
    <div
      className={`p-2 flex-3 pb-8 flex  flex-col items-center  min-w-[320px] sm:min-w-[288px] text-white font-['Signika_Negative'] bg-[#07020f7a] rounded-lg`}
    >
      <div className="outlineText pb-4">
        {sortValue === 'Score'
          ? anime.score
          : dropValue === 'Top Anime'
          ? `#${anime.rank}`
          : ''}
      </div>
      <a
        key={anime.mal_id}
        href={anime.url}
        target="_blank"
        rel="noreferrer"
        className=""
      >
        <figure className="flex justify-center transform duration-200 hover:scale-[1.03] pb-4">
          <img
            src={anime.images.webp.image_url}
            alt={anime.mal_id}
            className="rounded-md shadow-xl sm:h-96"
          />
        </figure>
      </a>

      <div className=" flex flex-col w-full items-center text-center h-full">
        <h1 className="font-medium max-w-[288px] outlineText text-lg">{anime.title}</h1>
        <button
          id={anime.broadcast.day}
          aria-label="add/remove from watchlist button"
          name={anime.title}
          onClick={
            anime.title in localStorage
              ? () => handleClickRemove(event as MouseEvent)
              : () => handleClick(event as MouseEvent)
          }
          className="flex text-sm mt-auto"
        >
          {anime.airing
            ? anime.title in localStorage
              ? 'Remove from Watchlist'
              : 'Add to Watchlist'
            : ''}
        </button>
      </div>
    </div>
  )
}
