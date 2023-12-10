import { topics } from '$lib/server/topics'
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = () => {
  return { topics }
}
