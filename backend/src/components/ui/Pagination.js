import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
const pages = (cnt, size) => Math.floor(cnt / size) + (cnt % size !== 0 && 1 || 0);

const PageStyleNext = (pageCount, totalCount) => {
    if (pageCount === totalCount) {
        return "disabled";
    }
    else {
        return "enabled";
    }
}

const PageStylePrev = (pageCount) => {
    if (pageCount === 1) {
        return "disabled";
    }
    else {
        return "enabled";
    }
}

const Pagination = ({ type, total, currentPage, size = 25 }) => {
    console.log(type, total, currentPage, size);
    const totalPages = pages(total, size);
    const prev = currentPage > 1 ? currentPage - 1 : currentPage;
    const next = currentPage < totalPages ? +currentPage + 1 : currentPage;
    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination">
                <li className="page-item"><Link className="page-link" to={`/${type}?page=1&size=${size}`}>First</Link></li>
                <li className={`page-item ${PageStylePrev(+currentPage)}`}><Link className="page-link" to={`/${type}?page=${prev}&size=${size}`}>Previous</Link></li>
                <li className={`page-item ${PageStyleNext(+currentPage, +totalPages)}`}><Link className="page-link" to={`/${type}?page=${next}&size=${size}`}>Next</Link></li>
                <li className="page-item"><Link className="page-link" to={`/${type}?page=${totalPages}&size=${size}`}>Last</Link></li>
            </ul>
        </nav>
    )
}

export default Pagination