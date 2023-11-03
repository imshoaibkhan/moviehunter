import React, { useEffect, useState } from "react";
import "../styles/Trending.css";

const Pagination = ({ page, setPage, totalPages }) => {
  const pageNumbers = [];
  const visiblePages = 6;
  const middlePage = Math.ceil(visiblePages / 2);

  let startPage = page - middlePage;
  let endPage = page + middlePage;

  if (startPage < 1) {
    startPage = 1;
    endPage = visiblePages;
  }

  if (endPage > totalPages) {
    endPage = totalPages;
    startPage = totalPages - visiblePages + 1;
  }

  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  if (startPage >= middlePage + 1) {
    if (!isNaN(pageNumbers[0])) {
      pageNumbers.unshift("...");
    } else {
      return;
    }
  }

  if (endPage < totalPages) {
    pageNumbers.push("...");
  }

  const onPageChange = (pageNumber) => {
    if (pageNumber === "...") return;
    setPage(pageNumber);
  };

  return (
    <div className="pagination-container">
      <ul className="pagination">
        {pageNumbers.map((number, index) => (
          <li
            key={index}
            className={`page-item ${page === number ? "active" : ""}`}
          >
            <button onClick={() => onPageChange(number)} className="page-link">
              {number}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
