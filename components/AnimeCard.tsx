import React, { useEffect } from 'react'

type CardProps = {
  anime: any
  sortValue: any
  dropValue: any
  animeWatchlist: any,
  setAnimeWatchlist: any
}

export default function AnimeCard({ anime, sortValue, dropValue, animeWatchlist, setAnimeWatchlist }: CardProps) {
  const newTitle = anime.title.replace(/\s+/g, '-').toLowerCase()

  function handleClick(e: MouseEvent) {
    //@ts-ignore
    const name = e?.target?.name
    //@ts-ignore
    const id = e?.target?.id
    
      localStorage.setItem(name, id)
    
    
  }

  
  

  return (
    <div
      className={`p-2 flex-3  pb-8 flex myCard flex-col items-center  min-w-[288px] text-white font-['Signika_Negative']`}
    >
      <div className="cardNumber outlineText">
        {sortValue === 'Score'
          ? anime.score
          : dropValue === 'Top Anime' || dropValue === ''
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
            className="rounded-md shadow-xl h-96"
          />
        </figure>
      </a>

      <div className="mt-auto flex flex-col w-full items-center text-center">
        <h1 className="font-medium max-w-[288px] outlineText">{anime.title}</h1>
        <button
          id={anime.mal_id}
          name={anime.title}
          onClick={() => handleClick(event as MouseEvent)}
          className="flex text-sm"
        >
          Add to Watchlist
        </button>
      </div>
    </div>
  )
}
