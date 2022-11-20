export default {
    /**
     * A function to retrieve the unique genere from the list of shows
     * returns a list of string (genre list)
     * @param {[]} showList
     */
    getGenreList(showList = []) {
        const allGenereList = []
        showList.map((movie) => {
            movie.genres.map((gene) => {
                allGenereList.push(gene)
            })
        })
        // to make the list unique
        return [...new Set(allGenereList)]
    },
    /**
     *
     * @param {string} inputstring
     * @param {number} character
     */
    trimText(inputstring = '', character = 0, delimiter = '...') {
        return inputstring.length > character ? inputstring.substring(0, character) + delimiter : inputstring
    },
    /**
     * A function to join an array based on delimiter
     * @param {*} inputString
     * @param {*} delimiter
     */
    joinArray(inputArray = [], delimiter = '') {
        return inputArray.join(delimiter)
    }
}
