import { readdirSync } from 'fs'
import { execSync } from 'child_process'
import { resolve } from 'path'

const basePath = './static/topics'

console.log(
  JSON.stringify(
    Object.fromEntries(
      readdirSync(basePath)
        .filter((fileName) => fileName.endsWith('.md'))
        .map((fileName) => [
          fileName,
          new Date(
            execSync(
              `git log -1 --pretty="format:%cI" -- ${resolve(
                basePath,
                fileName,
              )}`,
            )
              .toString()
              .trim() || new Date().toISOString(),
          ).toISOString(),
        ]),
    ),
    null,
    2,
  ),
)
