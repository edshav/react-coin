import React from 'react';
import PropTypes from 'prop-types';

const Row = (props) => {

  const { marketCap, name, percentChange24h, price, rank } = props.coin;

  const { routing } = props;

  const renderPercentChange24h = (percent) => {
    if (percent > 0) {
      return (<td className="text-success">{percent}% &uarr;</td>)
    } else if (percent < 0) {
      return (<td className="text-danger">{percent}% &darr;</td>)
    } else {
      return (<td>{percent}%</td>)
    }
  };

  const padding = 'pr-' + (5 - ('' + rank).length);

  return (
    <tr onClick={routing}>
      <td><span className={padding}>{rank}</span><span className="font-weight-bold">{name}</span></td>
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