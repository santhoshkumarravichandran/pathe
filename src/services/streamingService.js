import axios from 'axios'
import { showsPath, baseUrl, singleSearchPath, episodesPath } from './constants'

/*
 * A function to get all available shows
 * returns a list of shows
*/
export async function getAllStreamingsNow() {
    const { data = null } = await axios.get(`${baseUrl}${showsPath}`)
    return data
}
/**
 * A function to get information about Sepecific show based on the id
 * return an object with show information
 * @param {number} id
 */
export async function getShowInformation(id) {
    const { data = null } = await axios.get(`${baseUrl}${showsPath}/${id}`)
    return data
}

/**
 * A function to search for list of shows matching the keyword
 * returns a list of shows matching the keyword
 * @param {string} keyword
 */
export async function searchShow(keyword = '') {
    const { data = null } = await axios.get(`${baseUrl}${showsPath}?q=${keyword}`)
    return data
}

/**
 * A function to return a spefic show matching a keyword (title)
 * returns a spefic show information
 * @param {string} keyword
 */
export async function singleSearch(keyword = '') {
    const { data = null } = await axios.get(`${baseUrl}${singleSearchPath}${showsPath}?q=${keyword}`)
    return data
}

/**
 * A function to get the list of episodes of a show by its id
 * returns a list of episodes of a show
 * @param {number} showId
 */
export async function getEpisodeInformation(showId) {
    const { data = null } = await axios.get(`${baseUrl}${showsPath}/${showId}/${episodesPath}`)
    return data
}
