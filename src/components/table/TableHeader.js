import React from 'react';

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th scope="col">Coin</th>
        <th scope="col">Price</th>
        <th scope="col">Market Cap</th>
        <th scope="col">24H Change</th>
      </tr>
    </thead>
  );
};

export default TableHeader;