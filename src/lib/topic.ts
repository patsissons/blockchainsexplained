import omitBy from 'lodash/omitBy'
import isNil from 'lodash/isNil'
import parseMD from 'parse-md'
import type { TopicMetadata } from './types/topic'

export class TopicMetadataError extends Error {
  constructor(field: unknown, name?: string) {
    super(
      `Invalid ${name ? `${name} ` : ''}metadata: ${JSON.stringify(
        field || 'NULL',
      )}`,
    )
  }
}

export function validateMetadata(metadata: unknown): TopicMetadata {
  if (!metadata || typeof metadata !== 'object') {
    throw new TopicMetadataError(metadata)
  }

  const { title, labels, draft } = metadata as Record<string, unknown>

  if (!title || typeof title !== 'string')
    throw new TopicMetadataError(title, 'title')
  if (!validateLabelsMetadata(labels))
    throw new TopicMetadataError(labels, 'labels')
  if (draft !== undefined && typeof draft !== 'boolean')
    throw new TopicMetadataError(draft, 'draft')

  const result: TopicMetadata = {
    title,
    labels,
    draft,
  }

  return omitBy(result, isNil) as TopicMetadata

  function validateLabelsMetadata(
    labels?: unknown,
  ): labels is string[] | undefined {
    if (!labels) return true
    if (!Array.isArray(labels)) return false
    if (labels.length === 0) return true
    if (labels.some((label) => typeof label !== 'string')) return false

    return true
  }
}

export function parseTopicMarkdown(markdown: string) {
  const { metadata, content } = parseMD(markdown)

  return { metadata: validateMetadata(metadata), markdown: content.trim() }
}
