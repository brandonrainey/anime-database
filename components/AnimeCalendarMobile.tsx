import React, { useState, useEffect } from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

type CalendarProps = {
  animeWatchlist: any
}

export default function AnimeCalendarMobile({ animeWatchlist }: CalendarProps) {
  const date = new Date()

  const day = date.getDay()

  const [trackingAnime, setTrackingAnime] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ])

  function sortFunction() {
    const copy = slides
    const cut2 = copy.slice(day)
    const cut1 = copy.slice(0, day)

    const newArray = cut2.concat(cut1)

    setSlides(newArray)
  }

  const [slides, setSlides] = useState([
    {
      id: 0,
      key: 0,
      element: (
        <div
          className={`flex flex-col gap-1 w-full px-16 h-48  bg-[#f1faee] shadow p-1 ${
            day == 0
              ? 'outline-8 outline-[#457b9d] outline bg-[#457b9d] text-white'
              : ''
          } overflow-y-auto scrollbar shrink-0 ${day != 0 ? '' : ''}`}
          key={0}
        >
          <p className="text-center font-bold text-lg">Sunday</p>
          {animeWatchlist
            ? animeWatchlist[0].map((item: any) => {
                if (item[1] == 'Sundays') {
                  return (
                    <p
                      className="text-xs font-semibold bg-[#e63946] text-white shadow rounded-xl p-2 sm:p-1 pl-2"
                      key={item[0]}
                    >
                      {item[0]}
                    </p>
                  )
                }
              })
            : null}
        </div>
      ),
    },
    {
      id: 1,
      key: 1,
      element: (
        <div
          className={`flex flex-col gap-1 w-full px-16 h-48  bg-[#f1faee] shadow p-1 ${
            day == 1
              ? 'outline-8 outline-[#457b9d] outline bg-[#457b9d] text-white'
              : ''
          } overflow-y-auto scrollbar shrink-0`}
          key={1}
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
      ),
    },
    {
      id: 2,
      key: 2,
      element: (
        <div
          className={`flex flex-col gap-1 w-full px-16 h-48  bg-[#f1faee] shadow p-1 ${
            day == 2
              ? 'outline-8 outline-[#457b9d] outline bg-[#457b9d] text-white'
              : ''
          } overflow-y-auto scrollbar shrink-0`}
          key={2}
        >
          <p className="text-center font-bold text-lg">Tuesday</p>
          {animeWatchlist
            ? animeWatchlist[0].map((item: any) => {
                if (item[1] == 'Tuesdays') {
                  return (
                    <p
                      className="text-xs font-semibold bg-[#e63946] text-white shadow rounded-xl p-2 pl-2"
                      key={item[0]}
                    >
                      {item[0]}
                    </p>
                  )
                }
              })
            : null}
        </div>
      ),
    },
    {
      id: 3,
      key: 3,
      element: (
        <div
          className={`flex flex-col gap-1 w-full px-16 h-48  bg-[#f1faee] shadow p-1 ${
            day == 3
              ? 'outline-8 outline-[#457b9d] outline bg-[#457b9d] text-white'
              : ''
          } overflow-y-auto scrollbar shrink-0`}
          key={3}
        >
          <p className="text-center font-bold text-lg">Wednesday</p>
          {animeWatchlist
            ? animeWatchlist[0].map((item: any) => {
                if (item[1] == 'Wednesdays') {
                  return (
                    <p
                      className="text-xs font-semibold bg-[#e63946] text-white shadow rounded-xl p-2 pl-2"
                      key={item[0]}
                    >
                      {item[0]}
                    </p>
                  )
                }
              })
            : null}
        </div>
      ),
    },
    {
      id: 4,
      key: 4,
      element: (
        <div
          className={`flex flex-col gap-1 w-full px-16 h-48  bg-[#f1faee] shadow p-1 ${
            day == 4
              ? 'outline-8 outline-[#457b9d] outline bg-[#457b9d] text-white'
              : ''
          } overflow-y-auto scrollbar shrink-0`}
          key={4}
        >
          <p className="text-center font-bold text-lg">Thursday</p>
          {animeWatchlist
            ? animeWatchlist[0].map((item: any) => {
                if (item[1] == 'Thursdays') {
                  return (
                    <p
                      className="text-xs font-semibold bg-[#e63946] text-white shadow rounded-xl p-2 pl-2"
                      key={item[0]}
                    >
                      {item[0]}
                    </p>
                  )
                }
              })
            : null}
        </div>
      ),
    },
    {
      id: 5,
      key: 5,
      element: (
        <div
          className={`flex flex-col gap-1 w-full px-16 h-48  bg-[#f1faee] shadow p-1 ${
            day == 5
              ? 'outline-8 outline-[#457b9d] outline bg-[#457b9d] text-white'
              : ''
          } overflow-y-auto scrollbar shrink-0`}
          key={5}
        >
          <p className="text-center font-bold text-lg">Friday</p>
          {animeWatchlist
            ? animeWatchlist[0].map((item: any) => {
                if (item[1] == 'Fridays') {
                  return (
                    <p
                      className="text-xs font-semibold bg-[#e63946] text-white shadow rounded-xl p-2 pl-2"
                      key={item[0]}
                    >
                      {item[0]}
                    </p>
                  )
                }
              })
            : null}
        </div>
      ),
    },
    {
      id: 6,
      key: 6,
      element: (
        <div
          className={`flex flex-col gap-1 w-full px-16 h-48  bg-[#f1faee] shadow p-1 ${
            day == 6
              ? 'outline-8 outline-[#457b9d] outline bg-[#457b9d] text-white'
              : ''
          } overflow-y-auto scrollbar shrink-0`}
          key={6}
        >
          <p className="text-center font-bold text-lg">Saturday</p>
          {animeWatchlist
            ? animeWatchlist[0].map((item: any) => {
                if (item[1] == 'Saturdays') {
                  return (
                    <p
                      className="text-xs font-semibold bg-[#e63946] text-white shadow rounded-xl p-2 pl-2"
                      key={item[0]}
                    >
                      {item[0]}
                    </p>
                  )
                }
              })
            : null}
        </div>
      ),
    },
  ])

  useEffect(() => {
    sortFunction()
  }, [])

  return (
    <Carousel
      additionalTransfrom={0}
      arrows
      autoPlaySpeed={3000}
      centerMode={false}
      className=""
      containerClass="container"
      dotListClass=""
      draggable
      focusOnSelect={false}
      infinite
      itemClass="self-center"
      keyBoardControl
      minimumTouchDrag={80}
      pauseOnHover
      renderArrowsWhenDisabled={false}
      renderButtonGroupOutside={false}
      renderDotsOutside={false}
      responsive={{
        desktop: {
          breakpoint: {
            max: 3000,
            min: 1024,
          },
          items: 1,
        },
        mobile: {
          breakpoint: {
            max: 464,
            min: 0,
          },
          items: 1,
        },
        tablet: {
          breakpoint: {
            max: 1024,
            min: 464,
          },
          items: 1,
        },
      }}
      rewind={false}
      rewindWithAnimation={false}
      rtl={false}
      shouldResetAutoplay
      showDots
      sliderClass=""
      slidesToSlide={1}
      swipeable
    >
      {slides.map((item) => {
        return item.element
      })}
    </Carousel>
  )
}
