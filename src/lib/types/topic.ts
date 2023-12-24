export interface TopicMetadata {
  title: string
  labels?: string[]
  draft?: boolean
}

export interface Topic {
  slug: string
  date: string
  metadata: TopicMetadata
  markdown: string
}
