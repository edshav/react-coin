import React, {Component} from 'react';
import TableHeader from './TableHeader';
import Row from './Row';
import UdiliaService from '../../services/UdiliaService';


class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      currencies: [],
      error: null,
    };
  }

  componentDidMount() {
    this.setState({ loading: true });

    const udiliaService = new UdiliaService();
    udiliaService.getData()
      .then((data) => {
        this.setState({
          currencies: data.currencies,
          loading: false,
        })
      })
      .catch((error) => {
        this.setState({
          error: error.errorMessage,
          loading: false,
        })
      });
  }

  render() {
    if (this.state.loading) {
      return <div>Loading...</div>
    }

    const { currencies } = this.state;
    const rows = currencies.map((coin) => {
      return (
        <Row key={coin.id} coin={coin}/>
      )
    });

    return (
      <table className="table table-dark table-hover">
        <TableHeader />
        <tbody>
        {rows}
        </tbody>
      </table>
    );
  }
}

export default Table;