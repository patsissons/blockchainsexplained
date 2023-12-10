export interface TopicMetadata {
  title: string
  labels?: string[]
}

export interface Topic {
  slug: string
  date: string
  metadata: TopicMetadata
  markdown: string
}
