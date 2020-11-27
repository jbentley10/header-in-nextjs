const space = process.env.SPACE
const accessToken = process.env.ACCESS_TOKEN

const client = require('contentful').createClient({
  space: space,
  accessToken: accessToken,
})

export async function fetchHomePage() {
  const entry = await client.getEntry('7MgQIrDcnS5ZQeFXaINZw3')
  if (entry.fields) return entry
  
  console.log(`Error getting Entry.`)
}

export async function fetchPUPage() {
  const entry = await client.getEntry('pU64S027Z9hivVdORROrB')
  if (entry.fields) return entry
  
  console.log(`Error getting Entry.`)
}

export async function fetchTripwirePage() {
  const entry = await client.getEntry('0GuRT1txgaH4U3913Vf92')
  if (entry.fields) return entry
  
  console.log(`Error getting Entry.`)
}

export async function fetchLineFriendsPage() {
  const entry = await client.getEntry('7BPqXHHcEuwYUqXDF9SyGY')
  if (entry.fields) return entry
  
  console.log(`Error getting Entry.`)
}

export async function fetchAboutMePage() {
  const entry = await client.getEntry('6fAJQES1fWZ5oHt12APEFf')
  if (entry.fields) return entry
  
  console.log(`Error getting Entry.`)
}

export async function fetchServicesPage() {
  const entry = await client.getEntry('4veTXV5BerWNtlzCVrJdT8')
  if (entry.fields) return entry
  
  console.log(`Error getting Entry.`)
}