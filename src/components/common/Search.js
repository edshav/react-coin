import React, {Component} from 'react';
import UdiliaService from '../../services/UdiliaService';
import Loading from '../common/Loading';
import './Search.css';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      input: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.fetchCoin = this.fetchCoin.bind(this);
  }

  handleChange(e) {
    const input = e.target.value;
    this.setState({ input, }, () =>{
      if (!this.state.input) {
        return '';
      } else {
        this.fetchCoin(this.state.input);
      }
    });
    


  }

  fetchCoin(searchQuery) {
    this.setState({ loading: true })

    const udiliaService = new UdiliaService();

    udiliaService.findCoin(searchQuery)
      .then((data) => {
        this.setState({ loading: false })
      console.log('Success', data);
    })
      .catch((error) => {
        console.log('Error', error);
      });

  }

  render() {

    const { loading } = this.state;
    return (
      <div className="Search">
        <div className="input-group">
          <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1"><i className="fas fa-search"/></span>
          </div>
          <input type="text" className="form-control" placeholder="Coin" aria-label="Search"
                 aria-describedby="basic-addon1"value={this.state.input} onChange={this.handleChange}/>
        </div>

        {loading && <div className="SearchLoading">
          <Loading />
        </div>}
      </div>
    );
  }
}

export default Search;