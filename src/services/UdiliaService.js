export default class UdiliaService {
  constructor(props) {
    this.apiRoot = 'https://api.udilia.com/coins/v1';

  }

  getData() {
    return fetch(`${this.apiRoot}/cryptocurrencies?page=1&perPage=20`)
      .then(response => {
        return response.json().then(json => {
          return response.ok ? json : Promise.reject(json);
        });
      })
  }
}