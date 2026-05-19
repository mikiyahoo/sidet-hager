import { Youtube } from 'lucide-react'

interface YouTubeSubscribersProps {
  subscriberCount?: string
  channelUrl?: string
}

export default function YouTubeSubscribers({
  subscriberCount = '142,500',
  channelUrl = 'https://youtube.com',
}: YouTubeSubscribersProps) {
  return (
    <a
      href={channelUrl}
      target="_blank"
      className="rounded-3xl bg-red-600 p-8 transition hover:scale-[1.02] block"
    >
      <div className="flex items-center gap-4">
        <Youtube size={36} />

        <div>
          <div className="text-xl font-bold">{subscriberCount}</div>
          <div className="text-sm opacity-80">Subscribers</div>
        </div>
      </div>
    </a>
  )
}