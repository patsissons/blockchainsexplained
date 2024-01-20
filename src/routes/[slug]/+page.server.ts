import { topics } from '$lib/server/topics'
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = ({ params }) => {
  const selectedTopic = topics.find(({ slug }) => slug === params.slug)
  return { topics, selectedTopic }
}
