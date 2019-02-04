import React, {Component} from 'react';
import UdiliaService from '../../services/UdiliaService';
import Loading from '../common/Loading';
import Error from "../common/Error";
import renderPercentChange24h from '../../services/Render24hChange';


class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coin: {},
      loading: false,
      error: null,
    }
  }


  componentDidMount() {

    this.setState({ loading: true });

    const udiliaService = new UdiliaService();

    const coinId = this.props.match.params.id;

    udiliaService.getCoin(coinId)
      .then((coin) => {

        this.setState({
          coin,
          error: null,
          loading: false,
        });
      })
      .catch((error) => {
        this.setState({
          error: error.errorMessage,
          loading: false,
        })
      });

  }

  render() {

    const { loading, error, coin } = this.state;

    if (loading) {
      return (
        <Loading/>
      )
    }

    if (error) {
      return <Error error={error} />
    }



    return (
      <table className="table">
        <thead className="thead-dark">
        <tr>
          <th scope="col" colSpan="2">{coin.name} ({coin.symbol})</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>Rank</td>
          <td>{coin.rank}</td>
        </tr>
        <tr>
          <td>Price</td>
          <td>${coin.price}</td>
        </tr>
        <tr>
          <td>Volume 24H</td>
          <td>${coin.volume24h}</td>
        </tr>
        <tr>
          <td>Market Cap</td>
          <td>${coin.marketCap}</td>
        </tr>
        <tr>
          <td>Total Supply</td>
          <td>{coin.totalSupply}</td>
        </tr>
        <tr>
          <td>Percent Change 24H</td>
          {renderPercentChange24h(coin.percentChange24h)}
        </tr>
        </tbody>
      </table>
    );
  }
}

export default Detail;

//       <div className="list-group">
//         <button type="button" className="list-group-item list-group-item-action bg-info">
//           {coin.name} ({coin.symbol})
//         </button>
//         <button type="button" className="list-group-item list-group-item-action">Rank {coin.rank}</button>
//         <button type="button" className="list-group-item list-group-item-action">Price {coin.price}</button>
//         <button type="button" className="list-group-item list-group-item-action">Volume 24H {coin.volume24h}</button>
//         <button type="button" className="list-group-item list-group-item-action">Market Cap {coin.marketCap}</button>
//         <button type="button" className="list-group-item list-group-item-action">Total Supply {coin.totalSupply}</button>
//         <button type="button" className="list-group-item list-group-item-action">Percent Change 24H {renderPercentChange24h(coin.percentChange24h)}</button>
//       </div>