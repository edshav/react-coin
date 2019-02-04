export default class UdiliaService {
  constructor(props) {
    this.apiRoot = 'https://api.udilia.com/coins/v1';

  }

  getTable = (page) => {
    return fetch(`${this.apiRoot}/cryptocurrencies?page=${page}&perPage=20`)
      .then(response => {
        return response.json().then(json => {
          return response.ok ? json : Promise.reject(json);
        });
      })
  };

  getCoin = (id) => {
    return fetch(`${this.apiRoot}/cryptocurrencies/${id}`)
      .then(response => {
        return response.json().then(json => {
          return response.ok ? json : Promise.reject(json);
        });
      })
  };

  findCoin = (searchQuery) => {
    return fetch(`${this.apiRoot}/autocomplete?searchQuery=${searchQuery}`)
      .then(response => {
        return response.json().then(json => {
          return response.ok ? json : Promise.reject(json);
        });
      })
  }
}