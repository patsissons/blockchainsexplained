import orderBy from 'lodash/orderBy'
import mapKeys from 'lodash/mapKeys'
import mapValues from 'lodash/mapValues'
import values from 'lodash/values'
import { parseTopicMarkdown } from '$lib/topic'
import type { Topic } from '$lib/types/topic'
import metadata from './metadata.json'

function topicDate(fileName: string) {
  if (fileName in metadata) {
    return (metadata as Record<string, string>)[fileName]
  }

  // this shouldn't really ever happen since we generate the metadata.json file
  // automatically, but it's possible in local dev for the file to be missing or
  // have gone stale.
  throw new Error('Topic metadata not found: ' + fileName)
}

export const topics = orderBy(
  values(
    mapKeys(
      mapValues(
        import.meta.glob('../../../../static/topics/*.md', {
          as: 'raw',
          eager: true,
        }),
        (markdown, path) => {
          const fileName = path.slice(path.lastIndexOf('/') + 1)
          return {
            slug: fileName.slice(0, -'.md'.length),
            date: topicDate(fileName),
            ...parseTopicMarkdown(markdown),
          } as Topic
        },
      ),
      ({ slug }) => slug,
    ),
  ),
  'date',
  'desc',
)
