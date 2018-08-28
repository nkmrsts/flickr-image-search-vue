import axios from 'axios'
import { API_KEY } from './config.js'
export default {
  fetchPhotos (text, page) {
    return this.fetchFlickr({
      method: 'flickr.photos.search',
      api_key: `${API_KEY}`,
      text: text,
      extras: 'description,date_taken,owner_name,icon_server,url_m,tags,views,url_o',
      per_page: 16,
      page: page,
      format: 'json',
      nojsoncallback: 1
    })
  },
  fetchFlickr (params) {
    return axios
      .get('https://api.flickr.com/services/rest/', { params })
      .then(response => {
        if (response.data.stat !== 'ok') {
          throw new Error(`${response.data.code}: ${response.data.message}`)
        }
        return response.data
      })
      .catch(error => {
        throw new Error(`エラーが発生しました (${error})`)
      })
  }
}
