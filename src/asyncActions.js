require('isomorphic-fetch');

const asyncActions = {
  url: `http://localhost:3005/comments`,
  fetchData(url){
    return fetch(url)
      .then(response => response.json())
      .catch(error => error)
  },
  fetchOneComment(url) {
    return fetch(url)
      .then(response => response.json())
      .catch(error => error)
  },
  fetchAndStore(url){
    return this.fetchData(url)
      .then(this.saveToLocalStorage)
      .catch(error => error);
  },
  saveToLocalStorage(data){
    localStorage.setItem('comments', JSON.stringify(data));
  }
}

module.exports = asyncActions;