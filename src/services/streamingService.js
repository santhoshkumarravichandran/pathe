import axios from 'axios'
const baseUrl = 'https://api.tvmaze.com/'
const showsPath = 'shows'
/*
 *  Fetch list of the all movies streaming now
 *  returns
*/
export async function getAllStreamingsNow () {
  const { data = null } = await axios.get(`${baseUrl}${showsPath}`)
  return data
}

export async function getShowInformation (id) {
  const { data = null } = await axios.get(`${baseUrl}${showsPath}/${id}`)
  return data
}
