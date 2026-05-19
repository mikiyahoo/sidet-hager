export interface Episode {
  id: string
  title: string
  category:
    | 'Migration Journeys'
    | 'Lost & Living Dreams'
    | 'Misassumptions'
    | 'Identity'
    | 'Reflections'

  publishDate: string
  videoUrl: string
  shortDetail: string
  isFeatured: boolean
}