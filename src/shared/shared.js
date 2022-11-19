export default {
  getGenreList (showList = []) {
    const allGenereList = []
    showList.map((movie) => {
      movie.genres.map((gene) => {
        allGenereList.push(gene)
      })
    })
    return [...new Set(allGenereList)]
  }
}
