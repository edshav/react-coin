import React from 'react';

const Error = (props) => {
  return (
    <div className="alert alert-danger text-center" role="alert">
      {props.error}
    </div>
  );
};

export default Error;