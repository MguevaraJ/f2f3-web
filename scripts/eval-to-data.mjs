// Turns the output of the app's `npm run eval:dataset` into src/data/eval.json.
//   node scripts/eval-to-data.mjs <eval-out.json> <resolution>
import { readFileSync, writeFileSync } from 'node:fs'

const [input, resolution] = process.argv.slice(2)
const { summary, rows } = JSON.parse(readFileSync(input, 'utf8'))
const short = (id) => id.replace('minecraft:', '')

function group(set, truth, guess) {
  const by = new Map()
  for (const r of set) {
    const id = short(truth(r))
    const g = by.get(id) ?? { id, total: 0, correct: 0, wrong: 0 }
    g.total++
    if (guess(r) !== null) guess(r) === truth(r) ? g.correct++ : g.wrong++
    by.set(id, g)
  }
  return [...by.values()].sort((a, b) => a.id.localeCompare(b.id))
}

const biomeRows = rows.filter((r) => r.mob === null)
const data = {
  resolution,
  summary,
  byBiome: group(
    biomeRows.filter((r) => r.biomeKnown),
    (r) => r.biome,
    (r) => r.biomeGuess
  ),
  byMob: group(
    rows.filter((r) => r.mob !== null),
    (r) => r.mob,
    (r) => r.mobGuess
  )
}
writeFileSync(new URL('../src/data/eval.json', import.meta.url), JSON.stringify(data, null, 2) + '\n')
console.log(JSON.stringify(data.summary))
