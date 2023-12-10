import { readdirSync, readFileSync } from 'fs'
import { join } from 'path'

export function validate(
  basePath: string,
  validator: (markdown: string) => unknown
) {
  return readdirSync(basePath)
    .filter((name) => name.endsWith('.md'))
    .map((name) => {
      const path = join(basePath, name)
      try {
        const buffer = readFileSync(path)
        const markdown = String(buffer)
        validator(markdown)
        return true
      } catch (error) {
        console.error(path, error instanceof Error ? error.message : error)
        return false
      }
    })
    .every(Boolean)
}
