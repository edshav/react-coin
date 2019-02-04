import React from 'react';
import PropTypes from 'prop-types';

const Row = (props) => {

  const { marketCap, name, percentChange24h, price, rank } = props.coin;

  const renderPercentChange24h = (percent) => {
    if (percent > 0) {
      return (<td className="text-success">{percent}% &uarr;</td>)
    } else if (percent < 0) {
      return (<td className="text-danger">{percent}% &darr;</td>)
    } else {
      return (<td>{percent}%</td>)
    }
  };

  return (
    <tr>
      <th scope="row"><span>{rank}</span><span>{name}</span></th>
      <td>${price}</td>
      <td>${marketCap}</td>
      {renderPercentChange24h(percentChange24h)}
    </tr>
  );
};

Row.propTypes = {
  coin: PropTypes.object.isRequired,
};

export default Row;