import React, {Component} from 'react';
import TableHeader from './TableHeader';
import Row from './Row';
import UdiliaService from '../../services/UdiliaService';
import Loading from "../common/Loading";


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

    const {loading, error, currencies } = this.state;

    // render only loading component if loading state is set to true
    if (loading) {
      return <Loading />
    }

    // render only error message, if error occurred while fetching data
    if (error) {
      return (<div className="alert alert-danger text-center" role="alert">
        {error}
      </div>)
    }

    const rows = currencies.map((coin) => {
      return (
        <Row key={coin.id} coin={coin}/>
      )
    });

    return (
      <table className="table table-light table-hover">
        <TableHeader />
        <tbody>
        {rows}
        </tbody>
      </table>
    );
  }
}

export default Table;