import React from 'react';
import PropTypes from 'prop-types';
import renderPercentChange24h from '../../services/Render24hChange';

const Row = (props) => {

  const { marketCap, name, percentChange24h, price, rank } = props.coin;

  const { routing } = props;


  const padding = 'pr-' + (5 - ('' + rank).length);

  return (
    <tr className="Row" onClick={routing}>
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