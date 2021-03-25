import axios from 'axios'

class IllustraramaApi {
  constructor (siteurl) {
    this.newsBase = `${siteurl}/news`
    this.showcaseBase = `${siteurl}/showcase`
    this.searchBase = `${siteurl}/search`
    this.providersBase = `${siteurl}/providers`
  }

  posts (page) {
    let url = ""
    if (page === undefined){
      url = this.newsBase
    }else{
      url = `${this.newsBase}?page=${page}`
    }
    return axios.get(url)
      .then(json => {
        return { posts: json.data }
      })
      .catch(e => {
        return { error: e }
      })
  }

  showcase (page) {
    let url = ""
    if (page === undefined){
      url = this.showcaseBase
    }else{
      url = `${this.showcaseBase}?page=${page}`
    }
    return axios.get(url)
      .then(json => {
        return { posts: json.data }
      })
      .catch(e => {
        return { error: e }
      })
  }

  postsPerTag(tag,page){
    let url = ""
    if (page === undefined){
      url = `${this.newsBase}?tag=${tag}`
    }else{
      url = `${this.newsBase}?page=${page}&tag=${tag}`
    }
    return axios.get(url)
      .then(json => {
        return { posts: json.data }
      })
      .catch(e => {
        return { error: e }
      })
  }

  tags () {
    return axios.get(`${this.providersBase}?page=1`)
      .then(json => {
        return { tags: json.data }
      })
      .catch(e => {
        return { error: e }
      })
  }

  search (search, page) {
    return axios.get(`${this.searchBase}?q=${search}&page=${page}`)
      .then(json => {
        return { results: json.data }
      })
      .catch(e => {
        return { error: e }
      })
  }

  provider (tag) {
    return axios.get(`${this.providersBase}?tag=${tag}`)
      .then(json => {
        return { provider: json.data }
      })
      .catch(e => {
        return { error: e }
      })
  }

  entry (id) {
    return axios.get(`${this.newsBase}/${id}`)
      .then(json => {
        return { post: json.data }
      })
      .catch(e => {
        return { error: e }
      })
  }
}

const api = new IllustraramaApi(process.env.API_URL || 'http://localhost:3000/api/v1')

export default api
