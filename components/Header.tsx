import React from 'react'
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
      <header className="text-3xl sm:text-3xl border-b-2 h-20  text-white font-bold font-['Signika_Negative'] bg-[#1d3557] pt-8 sm:pl-4 text-center sm:text-left shadow-xl mb-8 textShadow">
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
