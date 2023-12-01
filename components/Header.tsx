import React from 'react'
import AnimeCalendar from './AnimeCalendar'
import useMediaQuery from '../hooks/useMediaQuery'
import AnimeCalendarMobile from './AnimeCalendarMobile'
import CalendarDropdown from './CalendarDropdown'

type HeaderProps = {
  animeWatchlist: any
}

export default function Header({ animeWatchlist }: HeaderProps) {
  const isMobile = useMediaQuery('(max-width: 655px)')

  return (
    <div>
      <header className="text-4xl sm:text-5xl border-b-2 h-20  text-white font-bold font-['Signika_Negative'] bg-[#284d81] pt-8 sm:pl-4 text-center sm:text-left shadow-xl mb-8 textShadow">
        Anime Database
      </header>
      <CalendarDropdown animeWatchlist={animeWatchlist} isMobile={isMobile} />
      {/* {isMobile && (
        <AnimeCalendarMobile animeWatchlist={animeWatchlist} />
      ) } */}
    </div>
  )
}
