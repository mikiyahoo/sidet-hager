import { Episode } from '@/types/episode'

export const mockEpisodes: Episode[] = [
  {
    id: '1',
    title: 'The Leap: Decisions That Changed a Lifetime',
    category: 'Migration Journeys',
    publishDate: '2026-05-01',
    videoUrl: 'https://www.youtube.com/watch?v=d7sUWwHugg8',
    shortDetail:
      'An intimate exploration of emotional, professional, and practical decisions that forced individuals to balance two worlds.',
    isFeatured: true,
  },
  {
    id: '2',
    title: 'Reinvented Abroad',
    category: 'Lost & Living Dreams',
    publishDate: '2026-04-15',
    videoUrl: 'https://www.youtube.com/watch?v=mPQBcb9wf8Q',
    shortDetail:
      'How diaspora Ethiopians are reinventing themselves across continents.',
    isFeatured: false,
  },
  {
    id: '3',
    title: 'Misassumptions About Life Abroad',
    category: 'Misassumptions',
    publishDate: '2026-04-01',
    videoUrl: 'https://www.youtube.com/watch?v=4qykb6jKXdo',
    shortDetail:
      'Challenging common misconceptions about life outside Ethiopia.',
    isFeatured: false,
  },
  {
    id: '4',
    title: 'Finding Identity Between Two Worlds',
    category: 'Identity',
    publishDate: '2026-03-15',
    videoUrl: 'https://www.youtube.com/watch?v=GOqEl4ADyVk',
    shortDetail:
      'Exploring the dual identity of Ethiopians living abroad.',
    isFeatured: false,
  },
  {
    id: '5',
    title: 'Reflections on Home',
    category: 'Reflections',
    publishDate: '2026-03-01',
    videoUrl: 'https://www.youtube.com/watch?v=ZjIRYn7x8sk',
    shortDetail:
      'A heartfelt look back at the homeland through diaspora eyes.',
    isFeatured: false,
  },
]