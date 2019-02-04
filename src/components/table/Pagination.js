import React from 'react';
import PropTypes from "prop-types";

const Pagination = (props) => {

  const { page, totalPages, handlePagination } = props;

  return (
    <div className="d-flex justify-content-center align-items-center" role="group" aria-label="Pagination">
      <button
        type="button"
        className="btn btn-outline-dark"
        onClick={() => handlePagination(-1)}
        disabled={page <= 1}
      >
        <i className="fas fa-arrow-left"/>
      </button>
      <span className="text-dark font-weight-bold pl-3 pr-3"> page {page} of {totalPages} </span>
      <button
        type="button"
        className="btn btn-outline-dark"
        onClick={() => handlePagination(1)}
        disabled={page >= totalPages}
      >
        <i className="fas fa-arrow-right"/>
      </button>
    </div>
  );
};

Pagination.propTypes = {
  page: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  handlePagination: PropTypes.func.isRequired,
};

export default Pagination;
