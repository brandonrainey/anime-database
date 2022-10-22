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

  return (
    <div>
      <header className="text-5xl sm:text-6xl border-b-2 border-black border-opacity-50 h-36 pt-12  text-black font-bold font-['Signika_Negative'] bg-[#f1faee] text-center">
        Anime Database
      </header>
      {isMobile ? (
        <AnimeCalendarMobile animeWatchlist={animeWatchlist} />
      ) : (
        <AnimeCalendar animeWatchlist={animeWatchlist} />
      )}
    </div>
  )
}
