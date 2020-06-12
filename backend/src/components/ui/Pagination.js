import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
const pages = (cnt) => Math.floor(cnt / 25) + (cnt % 25 !== 0 && 1 || 0);

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

const Pagination = ({ type, total, currentPage }) => {
    const totalPages = pages(total);
    const prev = currentPage > 1 ? currentPage - 1 : currentPage;
    const next = currentPage < totalPages ? +currentPage + 1 : currentPage;
    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination">
                <li className="page-item"><Link className="page-link" to={`/${type}?page=1`}>First</Link></li>
                <li className={`page-item ${PageStylePrev(+currentPage)}`}><Link className="page-link" to={`/${type}?page=${prev}`}>Previous</Link></li>
                <li className={`page-item ${PageStyleNext(+currentPage, +totalPages)}`}><Link className="page-link" to={`/${type}?page=${next}`}>Next</Link></li>
                <li className="page-item"><Link className="page-link" to={`/${type}?page=${totalPages}`}>Last</Link></li>
            </ul>
        </nav>
    )
}

export default Pagination