import React from 'react'

type CalendarProps = {
  animeWatchlist: any
}

export default function AnimeCalendar({ animeWatchlist }: CalendarProps) {

  const date = new Date()

  const day = date.getDay()

  console.log(animeWatchlist)
  return (
    <div className='flex flex-nowrap sm:flex-wrap w-full justify-center gap-6 p-2 overflow-auto'>
      <div className={`flex flex-col gap-1 w-40 h-44 rounded-lg bg-cyan-600 shadow p-1 ${day == 0 ? 'border-blue-800 border-4' : ''} overflow-y-auto scrollbar shrink-0 ${day != 0 ? '' : ''}`}>
        <p className='text-center font-bold'>Sunday</p>
        {animeWatchlist ? animeWatchlist[0].map((item: any) => {
          
          if(item[1] == 'Sundays') {
            return <p className='text-xs font-semibold bg-purple-400 shadow rounded-xl p-1'>{item[0]}</p>
          }
        }) : null}
      </div> 
      <div className={`flex flex-col gap-1 w-40 h-44 rounded-lg bg-cyan-600 shadow p-1 ${day == 1 ? 'border-blue-800 border-4' : ''} overflow-y-auto scrollbar shrink-0`}>
        <p className='text-center font-bold'>Monday</p>
        {animeWatchlist ? animeWatchlist[0].map((item: any) => {
          
          if(item[1] == 'Mondays') {
            return <p className='text-xs font-semibold bg-purple-400 shadow rounded-xl p-1'>{item[0]}</p>
          }
        }) : null}
      </div>
      <div className={`flex flex-col gap-1 w-40 h-44 rounded-lg bg-cyan-600 shadow p-1 ${day == 2 ? 'border-blue-800 border-4' : ''} overflow-y-auto scrollbar shrink-0`}>
        <p className='text-center font-bold'>Tuesday</p>
        {animeWatchlist ? animeWatchlist[0].map((item: any) => {
          
          if(item[1] == 'Tuesdays') {
            return <p className='text-xs font-semibold bg-purple-400 shadow rounded-xl p-1'>{item[0]}</p>
          }
        }) : null}
      </div>
      <div className={`flex flex-col gap-1 w-40 h-44 rounded-lg bg-cyan-600 shadow p-1 ${day == 3 ? 'border-blue-800 border-4' : ''} overflow-y-auto scrollbar shrink-0`}>
        <p className='text-center font-bold'>Wednesday</p>
        {animeWatchlist ? animeWatchlist[0].map((item: any) => {
          
          if(item[1] == 'Wednesdays') {
            return <p className='text-xs font-semibold bg-purple-400 shadow rounded-xl p-1'>{item[0]}</p>
          }
        }) : null}
      </div>
      <div className={`flex flex-col gap-1 w-40 h-44 rounded-lg bg-cyan-600 shadow p-1 ${day == 4 ? 'border-blue-800 border-4' : ''} overflow-y-auto scrollbar shrink-0`}>
        <p className='text-center font-bold'>Thursday</p>
        {animeWatchlist ? animeWatchlist[0].map((item: any) => {
          
          if(item[1] == 'Thursdays') {
            return <p className='text-xs font-semibold bg-purple-400 shadow rounded-xl p-1'>{item[0]}</p>
          }
        }) : null}
      </div>
      <div className={`flex flex-col gap-1 w-40 h-44 rounded-lg bg-cyan-600 shadow p-1 ${day == 5 ? 'border-blue-800 border-4' : ''} overflow-y-auto scrollbar shrink-0`}>
        <p className='text-center font-bold'>Friday</p>
        {animeWatchlist ? animeWatchlist[0].map((item: any) => {
          
          if(item[1] == 'Fridays') {
            return <p className='text-xs font-semibold bg-purple-400 shadow rounded-xl p-1'>{item[0]}</p>
          }
        }) : null}
      </div>
      <div className={`flex flex-col gap-1 w-40 h-44 rounded-lg bg-cyan-600 shadow p-1 ${day == 6 ? 'border-blue-800 border-4' : ''} overflow-y-auto scrollbar shrink-0`}>
        <p className='text-center font-bold'>Saturday</p>
        {animeWatchlist ? animeWatchlist[0].map((item: any) => {
          
          if(item[1] == 'Saturdays') {
            return <p className='text-xs font-semibold bg-purple-400 shadow rounded-xl p-1'>{item[0]}</p>
          }
        }) : null}
      </div>
    </div>
  )
}
