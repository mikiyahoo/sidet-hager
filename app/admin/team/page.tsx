'use client'

import { useState } from 'react'
import { mockTeam } from '@/lib/data/mockTeam'

export default function AdminTeam() {
  const [team] = useState(mockTeam)

  return (
    <div className="min-h-screen bg-backgroundLight px-6 py-24 md:px-12">
      <div className="mx-auto max-w-5xl">
        <h1 className="heading-font text-4xl font-bold text-primary">
          Team Manager
        </h1>
        <div className="mt-3 h-1 w-16 bg-secondary" />

        <div className="mt-8 flex justify-end">
          <button className="rounded-xl bg-primary px-6 py-3 font-bold text-white transition hover:bg-primaryLight">
            + Add Team Member
          </button>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {team.map((member) => (
            <div
              key={member.id}
              className="flex items-center gap-6 rounded-2xl bg-white p-6 shadow-lg"
            >
              <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-full bg-gray-200">
                <div className="flex h-full w-full items-center justify-center text-gray-400">
                  {member.fullName.charAt(0)}
                </div>
              </div>

              <div className="flex-1">
                <h3 className="heading-font text-lg font-bold text-primary">
                  {member.fullName}
                </h3>
                <p className="text-sm text-primaryLight">{member.roleTitle}</p>
                <p className="mt-1 text-xs text-gray-400">
                  Order: {member.displayOrder}
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <button className="rounded-lg bg-gray-100 px-4 py-2 text-sm font-semibold text-primary transition hover:bg-gray-200">
                  Edit
                </button>
                <button className="rounded-lg bg-red-50 px-4 py-2 text-sm font-semibold text-red-500 transition hover:bg-red-100">
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}