import axios from 'axios'

export default function fetchFlickr (params) {
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
