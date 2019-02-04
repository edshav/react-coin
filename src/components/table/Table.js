import React, {Component} from 'react';
import PropTypes from 'prop-types';
import UdiliaService from '../../services/UdiliaService';
import TableHeader from './TableHeader';
import Row from './Row';
import Loading from "../common/Loading";
import Pagination from './Pagination';

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      currencies: [],
      error: null,
      totalPages: 0,
      page: 1,
    };
    this.handlePagination = this.handlePagination.bind(this);
    this.fetchData = this.fetchData.bind(this);
    this.routing = this.routing.bind(this);
  }

  fetchData() {
    this.setState({ loading: true });

    const { page } = this.state;

    const udiliaService = new UdiliaService();

    udiliaService.getData(page)
      .then((data) => {

        const { currencies, totalPages } = data;

        this.setState({
          totalPages,
          currencies,
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

  handlePagination(direction) {
    this.setState({
      page: this.state.page + direction,
    }, () => this.fetchData());
  }

  componentDidMount() {
    this.fetchData();
  }

  routing(path) {
    this.props.history.push(`/currency/${path}`);
  }

  render() {

    const {loading, error, currencies, page, totalPages } = this.state;

    // render only loading component if loading state is set to true
    if (loading) {
      return <Loading />;
    }

    // render only error message, if error occurred while fetching data
    if (error) {
      return (
        <div className="alert alert-danger text-center" role="alert">
          {error}
        </div>
      );
    }

    const rows = currencies.map((coin) => {
      return (
        <Row
          key={coin.id}
          coin={coin}
          routing={() => this.routing(coin.id)}
        />
      )
    });

    return (
      <div>
        <table className="table table-primary table-hover">
          <TableHeader />
          <tbody>
          {rows}
          </tbody>
        </table>
        <Pagination
          page={page}
          totalPages={totalPages}
          handlePagination={this.handlePagination}
        />
      </div>
    );
  }
}

Table.propTypes = {
  history: PropTypes.object.isRequired,
};


export default Table;