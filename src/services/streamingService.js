import axios from 'axios'
const baseUrl = 'https://api.tvmaze.com/'
/*
 *  Fetch list of the top 50 stories
 *  returns stories[].
*/
export async function getTopStories () {
  let stories = []
  console.log('making an api call')
  const response = await axios.get(`${baseUrl}/schedule`)
  stories = response.data
  return stories
}

/*
 *  Sorts the result based on the property score;
 *  returns a sorted array.
*/
export function sortByScore (a, b) {
  if (a.score < b.score) {
    // a comes before b in the sorted order
    return -1
  } else if (a.score > b.score) {
    // a comes before b in the sorted order
    return 1
  } else {
    // a and b are the same
    return 0
  }
}
