import React, { useState } from 'react'
import AnimeCalendar from './AnimeCalendar'
import AnimeCalendarMobile from './AnimeCalendarMobile'

type DropdownProps = {
  animeWatchlist: any
  isMobile: any
}

export default function CalendarDropdown({
  animeWatchlist,
  isMobile,
}: DropdownProps) {
  const [openDropdown, setOpenDropdown] = useState(false)

  return (
    <div className="flex flex-col items-center">
      <div
        className={`w-fit px-2 h-[30px] text-lg shadow-xl text-center font-semibold rounded bg-[#295087] text-white font-['Signika_Negative'] ${
          isMobile ? 'hidden' : ''
        }`}
        onClick={() => setOpenDropdown(!openDropdown)}
      >
        {openDropdown ? 'Hide' : 'Show'} Calendar
      </div>

      {isMobile ? (
        <AnimeCalendarMobile
          animeWatchlist={animeWatchlist}
          openDropdown={openDropdown}
        />
      ) : (
        <AnimeCalendar
          animeWatchlist={animeWatchlist}
          openDropdown={openDropdown}
        />
      )}
    </div>
  )
}
