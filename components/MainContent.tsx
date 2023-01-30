import React, { useEffect, useState } from 'react'
import AnimeCard from './AnimeCard'
import LoadingScreen from './LoadingScreen'

type MainProps = {
  anime: any
  setAnime: React.Dispatch<React.SetStateAction<never[]>>
  search: string
  setSearch: React.Dispatch<React.SetStateAction<string>>
  HandleSearch: (e: any) => void
  animeList: string[]
  loading: boolean
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
  displayTitle: string
  setDisplayTitle: React.Dispatch<React.SetStateAction<string>>
  getTopAnime: () => void
  dropValue: string
  setDropValue: React.Dispatch<React.SetStateAction<string>>
  getSeasonalAnime: () => void
  getUpcomingAnime: () => void
  sort: string
  setSort: React.Dispatch<React.SetStateAction<string>>
  sortValue: string
  setSortValue: React.Dispatch<React.SetStateAction<string>>
  acending: string
  setAcending: React.Dispatch<React.SetStateAction<string>>
  acendingValue: string
  setAcendingValue: React.Dispatch<React.SetStateAction<string>>
  setPage: React.Dispatch<React.SetStateAction<number>>
  animeWatchlist: string[]
  setAnimeWatchlist: React.Dispatch<React.SetStateAction<any | null>>
  watching: any
  setWatching: React.Dispatch<React.SetStateAction<boolean | null>>
}

export default function MainContent(props: MainProps) {
  const [closeButton, setCloseButton] = useState(true)

  const checkDropdown = (e: any) => {
    props.setDropValue(e.target.value)
    if (e.target.value === 'Top Anime') {
      props.setPage(1)
      props.getTopAnime()
    } else if (e.target.value === 'Seasonal Anime') {
      props.setPage(1)
      props.getSeasonalAnime()
    } else if (e.target.value === 'Upcoming Anime') {
      props.setPage(1)
      props.getUpcomingAnime()
    }
    console.log(props.dropValue)
  }

  const checkSort = (e: any) => {
    console.log(e.target.value)
    props.setSortValue(e.target.value)
    if (e.target.value === 'Score') {
      sortByValue()
    }
    if (e.target.value === 'Name') {
      sortByName()
    }
    if (e.target.value === 'Episodes') {
      sortByEpisode()
    }
    if (e.target.value === 'Date') {
      sortByDate()
    }
  }

  const checkAcending = (e: any) => {
    props.setAcendingValue(e.target.value)
  }

  const sortByValue = () => {
    if (props.acendingValue === 'Acending') {
      props.animeList.sort((a: any, b: any) => {
        return b.score - a.score
      })
    } else if (props.acendingValue === 'Decending') {
      props.animeList.sort((a: any, b: any) => {
        return a.score - b.score
      })
    }

    console.log(props.animeList)
  }

  const sortByEpisode = () => {
    if (props.acendingValue === 'Acending') {
      props.animeList.sort((a: any, b: any) => {
        return b.episodes - a.episodes
      })
    } else if (props.acendingValue === 'Decending') {
      props.animeList.sort((a: any, b: any) => {
        return a.episodes - b.episodes
      })
    }

    console.log(props.animeList)
  }

  const sortByName = () => {
    props.animeList.sort((a: any, b: any) => {
      let nameA = a.title.toUpperCase()
      let nameB = b.title.toUpperCase()

      if (props.acendingValue === 'Acending') {
        if (nameA < nameB) {
          return -1
        }
        if (nameA > nameB) {
          return 1
        }

        return 0
      }

      if (props.acendingValue === 'Decending') {
        if (nameA < nameB) {
          return 1
        }
        if (nameA > nameB) {
          return -1
        }

        return 0
      }

      return 0
    })
  }

  const sortByDate = () => {
    props.animeList.sort((a: any, b: any) => {
      let nameA = a.aired.from.toUpperCase()
      let nameB = b.aired.from.toUpperCase()

      if (props.acendingValue === 'Acending') {
        if (nameA < nameB) {
          return -1
        }
        if (nameA > nameB) {
          return 1
        }

        return 0
      }

      if (props.acendingValue === 'Decending') {
        if (nameA < nameB) {
          return 1
        }
        if (nameA > nameB) {
          return -1
        }

        return 0
      }

      return 0
    })
  }

  useEffect(() => {
    if (props.acendingValue === 'Acending') {
      props.setAcending('Acending')
    } else if (props.acendingValue === 'Decending') {
      props.setAcending('Decending')
    }

    if (props.sortValue === 'Score') {
      sortByValue()
    }

    if (props.sortValue === 'Name') {
      sortByName()
    }

    if (props.sortValue === 'Episodes') {
      sortByEpisode()
    }

    if (props.sortValue === 'Date') {
      sortByDate()
    }
  }, [props.acendingValue, props.sortValue])

  useEffect(() => {
    if (props.search != '') {
      setCloseButton(false)
    } else {
      setCloseButton(true)
    }
  }, [props.search])

  return (
    <div className="bg-[#1d3557]">
      <div className="flex mb-12 topContainer">
        <div className="search-box mt-4">
          <form className="mt-6 ml-8 searchForm" onSubmit={props.HandleSearch}>
            <button
              className="btn-search"
              aria-label="search button icon"
              disabled={closeButton}
            >
              <i className="flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </i>
            </button>
            <input
              type="search"
              placeholder="Search anime..."
              className="input-search text-[#457b9d]"
              value={props.search}
              onChange={(e) => props.setSearch(e.target.value)}
            />
          </form>
        </div>
        <div className="ml-auto mt-auto pr-12 outline-none myCategory">
          <select
            className="sm:w-40 w-44 p-1 rounded shadow font-semibold"
            onChange={checkDropdown}
            value={props.dropValue}
          >
            <option value="Select..." hidden>
              Category...
            </option>
            <option value="Top Anime" className="">
              Top Anime
            </option>
            <option value="Seasonal Anime">Seasonal Anime</option>
            <option value="Upcoming Anime">Upcoming Anime</option>
          </select>
        </div>
      </div>

      <div className="flex justify-center items-center flex-col mb-4">
        <h1 className="flex text-center text-3xl mb-6 sm:w-68 w-72 bg-gray-100 rounded-xl h-10 shadow-lg font-semibold  justify-center pt-1  font-['Signika_Negative'] ">
          {props.displayTitle}
        </h1>
        <div className="flex ml-auto mr-12 sortBar">
          <div className="ml-auto mt-auto pr-4 outline-none font-semibold  ">
            <select
              className="w-28 p-1 rounded shadow"
              onChange={checkAcending}
              value={props.acending}
            >
              <option value="Select..." className="options" hidden>
                Sort by...
              </option>
              <option value="Acending">Acending</option>
              <option value="Decending">Decending</option>
            </select>
          </div>
          <div className="ml-auto mt-auto pr-12 outline-none w-24 sort2 font-semibold">
            <select
              className="w-28 p-1 rounded shadow"
              onChange={checkSort}
              value={props.sortValue}
            >
              <option value="Select..." hidden>
                Sort by...
              </option>
              <option value="Score">Score</option>
              <option value="Name">Name</option>
              <option value="Episodes">Episodes</option>
              <option value="Date">Date</option>
            </select>
          </div>
        </div>
      </div>

      <div className="flex justify-center bg-grey-400 cardCont">
        <LoadingScreen loading={props.loading} />

        <main
          className={`flex flex-wrap justify-center flex-row w-7/8 cardz gap-8 ${
            props.loading ? 'hidden' : ''
          }`}
        >
          {props.animeList.map((item: any) => (
            <AnimeCard
              anime={item}
              key={item.mal_id}
              sortValue={props.sortValue}
              dropValue={props.dropValue}
              animeWatchlist={props.animeWatchlist}
              setAnimeWatchlist={props.setAnimeWatchlist}
              watching={props.watching}
              setWatching={props.setWatching}
            />
          ))}
        </main>
      </div>
    </div>
  )
}
