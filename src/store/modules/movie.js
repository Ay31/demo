import axios from 'axios'

const state = {
  movie: {},
  movieList: {
    title: '',
    total: 0,
    subjects: []
  }

}

const getters = {
  movieList: state => state.movieList,
  movie: state => state.movie
}

const mutations = {
  addList (state, list) {
    state.movieList.title = list.title
    state.movieList.total = list.total
    state.movieList.subjects = list.subjects
  },
  addMovie (state, data) {
    state.movie = data
  }
}
const actions = {
  async addList ({ commit }) {
    const response = await axios.get('api/v2/movie/in_theaters?count=10')
    commit('addList', response.data)
  },
  async getMovieMsg ({ commit }, id) {
    const response = await axios.get(`api/v2/movie/subject/${id}`)
    commit('addMovie', response.data)
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
