import React from 'react'

type loadingProps = {
  loading: any
}

export default function LoadingScreen({ loading }: loadingProps) {
  if (loading === true) {
    return (
      <div className="flex justify-center items-center my-32">
        <div
          className="spinner-border animate-spin inline-block w-32 h-32 border-8 rounded-full text-blue-200"
          role="status"
        >
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    )
  } else return null
}
