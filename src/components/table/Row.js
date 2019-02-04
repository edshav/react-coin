import React from 'react';

const Row = (props) => {

  const { marketCap, name, percentChange24h, price, rank } = props.coin;

  return (
    <tr>
      <th scope="row"><span>{rank}</span><span>{name}</span></th>
      <td>{price}</td>
      <td>{marketCap}</td>
      <td>{percentChange24h}</td>
    </tr>
  );
};

export default Row;