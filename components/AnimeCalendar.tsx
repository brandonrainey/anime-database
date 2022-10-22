import React from 'react'

type CalendarProps = {
  animeWatchlist: any
}

export default function AnimeCalendar({ animeWatchlist }: CalendarProps) {
  const date = new Date()

  const day = date.getDay()

  return (
    <div className="flex flex-nowrap sm:flex-wrap w-full justify-center gap-8 p-2 overflow-auto mt-4">
      <div
        className={`flex flex-col gap-1 w-44 h-48 rounded-lg bg-[#f1faee] shadow p-1 ${
          day == 0
            ? 'outline-8 outline-[#457b9d] outline bg-[#457b9d] text-white'
            : ''
        } overflow-y-auto scrollbar shrink-0 ${day != 0 ? '' : ''}`}
      >
        <p className="text-center font-bold text-lg">Sunday</p>
        {animeWatchlist
          ? animeWatchlist[0].map((item: any) => {
              if (item[1] == 'Sundays') {
                return (
                  <p
                    className="text-xs font-semibold bg-[#e63946] text-white shadow rounded-xl p-1 pl-2"
                    key={item[0]}
                  >
                    {item[0]}
                  </p>
                )
              }
            })
          : null}
      </div>
      <div
        className={`flex flex-col gap-1 w-44 h-48 rounded-lg bg-[#f1faee] shadow p-1 ${
          day == 1
            ? 'outline-8 outline-[#457b9d] outline bg-[#457b9d] text-white'
            : ''
        } overflow-y-auto scrollbar shrink-0`}
      >
        <p className="text-center font-bold text-lg">Monday</p>
        {animeWatchlist
          ? animeWatchlist[0].map((item: any) => {
              if (item[1] == 'Mondays') {
                return (
                  <p
                    className="text-xs font-semibold bg-[#e63946] text-white shadow rounded-xl p-1 pl-2"
                    key={item[0]}
                  >
                    {item[0]}
                  </p>
                )
              }
            })
          : null}
      </div>
      <div
        className={`flex flex-col gap-1 w-44 h-48 rounded-lg bg-[#f1faee] shadow p-1 ${
          day == 2
            ? 'outline-8 outline-[#457b9d] outline bg-[#457b9d] text-white'
            : ''
        } overflow-y-auto scrollbar shrink-0`}
      >
        <p className="text-center font-bold text-lg">Tuesday</p>
        {animeWatchlist
          ? animeWatchlist[0].map((item: any) => {
              if (item[1] == 'Tuesdays') {
                return (
                  <p
                    className="text-xs font-semibold bg-[#e63946] text-white shadow rounded-xl p-1 pl-2"
                    key={item[0]}
                  >
                    {item[0]}
                  </p>
                )
              }
            })
          : null}
      </div>
      <div
        className={`flex flex-col gap-1 w-44 h-48 rounded-lg bg-[#f1faee] shadow p-1 ${
          day == 3
            ? 'outline-8 outline-[#457b9d] outline bg-[#457b9d] text-white'
            : ''
        } overflow-y-auto scrollbar shrink-0`}
      >
        <p className="text-center font-bold text-lg">Wednesday</p>
        {animeWatchlist
          ? animeWatchlist[0].map((item: any) => {
              if (item[1] == 'Wednesdays') {
                return (
                  <p
                    className="text-xs font-semibold bg-[#e63946] text-white shadow rounded-xl p-1 pl-2"
                    key={item[0]}
                  >
                    {item[0]}
                  </p>
                )
              }
            })
          : null}
      </div>
      <div
        className={`flex flex-col gap-1 w-44 h-48 rounded-lg bg-[#f1faee] shadow p-1 ${
          day == 4
            ? 'outline-8 outline-[#457b9d] outline bg-[#457b9d] text-white'
            : ''
        } overflow-y-auto scrollbar shrink-0`}
      >
        <p className="text-center font-bold text-lg">Thursday</p>
        {animeWatchlist
          ? animeWatchlist[0].map((item: any) => {
              if (item[1] == 'Thursdays') {
                return (
                  <p
                    className="text-xs font-semibold bg-[#e63946] text-white shadow rounded-xl p-1 pl-2"
                    key={item[0]}
                  >
                    {item[0]}
                  </p>
                )
              }
            })
          : null}
      </div>
      <div
        className={`flex flex-col gap-1 w-44 h-48 rounded-lg bg-[#f1faee] shadow p-1 ${
          day == 5
            ? 'outline-8 outline-[#457b9d] outline bg-[#457b9d] text-white'
            : ''
        } overflow-y-auto scrollbar shrink-0`}
      >
        <p className="text-center font-bold text-lg">Friday</p>
        {animeWatchlist
          ? animeWatchlist[0].map((item: any) => {
              if (item[1] == 'Fridays') {
                return (
                  <p
                    className="text-xs font-semibold bg-[#e63946] text-white shadow rounded-xl p-1 pl-2"
                    key={item[0]}
                  >
                    {item[0]}
                  </p>
                )
              }
            })
          : null}
      </div>
      <div
        className={`flex flex-col gap-1 w-44 h-48 rounded-lg bg-[#f1faee] shadow p-1 ${
          day == 6
            ? 'outline-8 outline-[#457b9d] outline bg-[#457b9d] text-white'
            : ''
        } overflow-y-auto scrollbar shrink-0`}
      >
        <p className="text-center font-bold text-lg">Saturday</p>
        {animeWatchlist
          ? animeWatchlist[0].map((item: any) => {
              if (item[1] == 'Saturdays') {
                return (
                  <p
                    className="text-xs font-semibold bg-[#e63946] text-white shadow rounded-xl p-1 pl-2"
                    key={item[0]}
                  >
                    {item[0]}
                  </p>
                )
              }
            })
          : null}
      </div>
    </div>
  )
}
