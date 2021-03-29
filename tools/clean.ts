import { globFiles } from 'aria-fs'
import { promises, existsSync } from 'fs'

(async function() {
  const BASE_DIR = './node_modules/@angular'

  const directories = await promises.readdir(BASE_DIR)

  const maps = directories.reduce((prev, cur) => {
    const folder = `${BASE_DIR}/${cur}/fesm2015`
    const dir = `${folder}/**/*.js.map`
    if (existsSync(folder)) {
      prev.push(dir)
    }
    return prev
  }, [])

  const files = await globFiles(maps, true)

  await Promise.all(files.map(async file => {
    await promises.unlink(file)
  }))
})()