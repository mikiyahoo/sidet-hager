import Link from 'next/link'

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-backgroundLight px-6 py-24 md:px-12">
      <div className="mx-auto max-w-5xl">
        <h1 className="heading-font text-4xl font-bold text-primary">
          Admin Dashboard
        </h1>
        <div className="mt-3 h-1 w-16 bg-secondary" />

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <Link
            href="/admin/episodes"
            className="rounded-3xl bg-white p-10 shadow-xl transition hover:scale-[1.02]"
          >
            <h2 className="heading-font text-2xl font-bold text-primary">
              Episodes Manager
            </h2>
            <p className="mt-3 text-gray-600">
              Create, edit, and manage episodes. Upload thumbnails, add video
              URLs, and organize by category.
            </p>
          </Link>

          <Link
            href="/admin/team"
            className="rounded-3xl bg-white p-10 shadow-xl transition hover:scale-[1.02]"
          >
            <h2 className="heading-font text-2xl font-bold text-primary">
              Team Manager
            </h2>
            <p className="mt-3 text-gray-600">
              Manage team members, upload images, change roles, and reorder
              display positions.
            </p>
          </Link>
        </div>
      </div>
    </div>
  )
}