import React, { useRef } from 'react'
import Banner from '../images/banner4.png'
import AnimeCalendar from './AnimeCalendar'
import useMediaQuery from '../hooks/useMediaQuery'
import AnimeCalendarMobile from './AnimeCalendarMobile'

type HeaderProps = {
  animeWatchlist: any
}

export default function Header({ animeWatchlist }: HeaderProps) {

  const isMobile = useMediaQuery('(max-width: 655px)')

  console.log(isMobile)
  return (
    <div>
      <header className="text-6xl border-b-2 border-black border-opacity-50 h-36 pt-12 pl-12 myHeader text-white font-bold font-custom bg-sky-800">
        Anime-DB
      </header>
      {isMobile ? <AnimeCalendarMobile /> : <AnimeCalendar animeWatchlist={animeWatchlist} />}
      
    </div>
  )
}
