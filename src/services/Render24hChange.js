import React from 'react';

const renderPercentChange24h = (percent) => {
  if (percent > 0) {
    return (<td className="text-success">{percent}% &uarr;</td>)
  } else if (percent < 0) {
    return (<td className="text-danger">{percent}% &darr;</td>)
  } else {
    return (<td>{percent}%</td>)
  }
};

export default renderPercentChange24h;