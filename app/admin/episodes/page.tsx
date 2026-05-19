'use client'

import { useState } from 'react'
import { mockEpisodes } from '@/lib/data/mockEpisodes'

export default function AdminEpisodes() {
  const [episodes] = useState(mockEpisodes)

  return (
    <div className="min-h-screen bg-backgroundLight px-6 py-24 md:px-12">
      <div className="mx-auto max-w-5xl">
        <h1 className="heading-font text-4xl font-bold text-primary">
          Episodes Manager
        </h1>
        <div className="mt-3 h-1 w-16 bg-secondary" />

        <div className="mt-8 flex justify-end">
          <button className="rounded-xl bg-primary px-6 py-3 font-bold text-white transition hover:bg-primaryLight">
            + Create Episode
          </button>
        </div>

        <div className="mt-8 overflow-hidden rounded-3xl bg-white shadow-xl">
          <table className="w-full text-left">
            <thead className="border-b bg-gray-50">
              <tr>
                <th className="px-6 py-4 text-sm font-semibold text-gray-600">
                  Title
                </th>
                <th className="px-6 py-4 text-sm font-semibold text-gray-600">
                  Category
                </th>
                <th className="px-6 py-4 text-sm font-semibold text-gray-600">
                  Date
                </th>
                <th className="px-6 py-4 text-sm font-semibold text-gray-600">
                  Featured
                </th>
                <th className="px-6 py-4 text-sm font-semibold text-gray-600">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {episodes.map((episode) => (
                <tr key={episode.id} className="border-b last:border-0">
                  <td className="px-6 py-4 font-medium text-primary">
                    {episode.title}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    {episode.category}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    {episode.publishDate}
                  </td>
                  <td className="px-6 py-4">
                    {episode.isFeatured ? (
                      <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-800">
                        Featured
                      </span>
                    ) : (
                      <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-600">
                        No
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex gap-3">
                      <button className="text-sm font-semibold text-primaryLight hover:text-primary">
                        Edit
                      </button>
                      <button className="text-sm font-semibold text-red-500 hover:text-red-700">
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}