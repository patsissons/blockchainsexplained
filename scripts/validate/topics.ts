import { exit } from 'process'
import { parseTopicMarkdown } from '../../src/lib/topic'
import { validate } from './markdown'

if (!validate('src/lib/server/topics', parseTopicMarkdown)) exit(-1)
