'use client'

import ReactPlayer from 'react-player'

interface VideoCardProps {
  url: string
  title?: string
  aspectRatio?: string
}

export default function VideoCard({
  url,
  title,
  aspectRatio = 'aspect-video',
}: VideoCardProps) {
  return (
    <div
      className={`${aspectRatio} overflow-hidden rounded-3xl shadow-2xl`}
    >
      <ReactPlayer
        url={url}
        width="100%"
        height="100%"
        controls
      />
    </div>
  )
}