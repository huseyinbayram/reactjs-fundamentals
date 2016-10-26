import axios from 'axios'

const id = '';
const sec = '';
const param = '?client_id='+id+'&client_secret='+sec

const getUserInfo = (username) => {
  return axios.get('http://api.github.com/users/' + username + param)
}


const helpers = {
  getPlayersInfo: (players) => {
    return axios.all(players.map((username) => getUserInfo(username)))
      .then((info) => info.map((user) => user.data))
      .catch((err) => console.warn('Error in getPlayersInfo', err))
  }
}

export default helpers
