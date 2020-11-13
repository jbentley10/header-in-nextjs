const space = process.env.SPACE
const accessToken = process.env.ACCESS_TOKEN

const client = require('contentful').createClient({
  space: space,
  accessToken: accessToken,
})

export async function fetchEntries() {
  const entry = await client.getEntry('7MgQIrDcnS5ZQeFXaINZw3')
  if (entry.fields) return entry
  console.log(`Error getting Entry.`)
}

export default { fetchEntries }