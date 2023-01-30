import type { NextPage } from 'next'
import Head from 'next/head'
import React, { useState, useEffect, useRef } from 'react'
import Axios from 'axios'
import Header from '../components/Header'
import MainContent from '../components/MainContent'
import Pagination from '../components/Pagination'

const Home: NextPage = () => {
  const [anime, setAnime] = useState<{}>([])
  const [search, setSearch] = useState<string>('')
  const [animeList, setAnimeList] = useState<[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [displayTitle, setDisplayTitle] = useState<string>('Top Anime')
  const [dropValue, setDropValue] = useState<string>('')
  const [sort, setSort] = useState<string>('')
  const [sortValue, setSortValue] = useState<string>('')
  const [acendingValue, setAcendingValue] = useState<string>('')
  const [acending, setAcending] = useState<string>('')
  const [page, setPage] = useState<number>(1)
  const topRef = useRef<HTMLDivElement>(null)
  const [animeWatchlist, setAnimeWatchlist] = useState<any | null>(null)
  const [watching, setWatching] = useState<boolean | null>(null)

  const scrollToTop = () => {
    topRef.current?.scrollIntoView({ block: 'start' })
  }

  const getTopAnime = async () => {
    setLoading(true)

    setDisplayTitle('Top Anime')
    setSortValue('Order by...')
    await Axios.get(
      `https://api.jikan.moe/v4/top/anime?page=${page}&bypopularity`
    )
      .then((response) => {
        setAnimeList(response.data.data)
        setLoading(false)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const getSeasonalAnime = async () => {
    setAnimeList([])
    setLoading(true)
    setDisplayTitle('Seasonal Anime')
    setSortValue('Order by...')
    await Axios.get(`https://api.jikan.moe/v4/seasons/now?page=${page}`).then(
      (response) => {
        setAnimeList(response.data.data)
        setLoading(false)
      }
    )
  }

  const getUpcomingAnime = async () => {
    setAnimeList([])
    setLoading(true)
    setDisplayTitle('Upcoming Anime')
    setSortValue('Order by...')
    await Axios.get(
      `https://api.jikan.moe/v4/seasons/upcoming?page=${page}`
    ).then((response) => {
      setAnimeList(response.data.data)
      setLoading(false)
    })
  }

  const HandleSearch = (e: any) => {
    e.preventDefault()

    FetchAnime(search)
  }

  const FetchAnime = async (query?: any) => {
    setAnimeList([])
    setDropValue(search)
    setLoading(true)
    setSortValue('Order by...')
    await Axios.get(
      `https://api.jikan.moe/v4/anime?q=${query}&order_by=popularity&sort=asc&limit=50&page=${page}&sfw`
    )
      .then((response) => {
        setAnimeList(response.data.data)
        setDisplayTitle(`Search Results`)
        setLoading(false)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  useEffect(() => {
    if (displayTitle === 'Top Anime') {
      getTopAnime()
      return
    }
    if (search) {
      FetchAnime()
    }
  }, [page])

  useEffect(() => {
    setPage(1)
  }, [search])

  useEffect(() => {
    setAnimeWatchlist([Object.entries(localStorage)])

    if (typeof window != undefined) {
      setAnimeWatchlist([Object.entries(localStorage)])
    }
    console.log('runs')
  }, [watching])

  

  return (
    <div ref={topRef} className="bg-[#1d3557]">
      <Head>
        <title>anime database</title>
        <meta name='description' content='anime database using MAL API'/>
      </Head>
      <Header animeWatchlist={animeWatchlist} />
      <MainContent
        anime={anime}
        setAnime={setAnime}
        search={search}
        setSearch={setSearch}
        HandleSearch={HandleSearch}
        animeList={animeList}
        loading={loading}
        setLoading={setLoading}
        displayTitle={displayTitle}
        setDisplayTitle={setDisplayTitle}
        getTopAnime={getTopAnime}
        dropValue={dropValue}
        setDropValue={setDropValue}
        getSeasonalAnime={getSeasonalAnime}
        getUpcomingAnime={getUpcomingAnime}
        sort={sort}
        setSort={setSort}
        sortValue={sortValue}
        setSortValue={setSortValue}
        acending={acending}
        setAcending={setAcending}
        acendingValue={acendingValue}
        setAcendingValue={setAcendingValue}
        setPage={setPage}
        animeWatchlist={animeWatchlist}
        setAnimeWatchlist={setAnimeWatchlist}
        watching={watching}
        setWatching={setWatching}
      />
      <Pagination
        page={page}
        setPage={setPage}
        animeList={animeList}
        scrollToTop={scrollToTop}
      />
    </div>
  )
}

export default Home
