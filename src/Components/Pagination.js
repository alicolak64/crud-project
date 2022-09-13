
const Pagintaion = ({ pages, currentPage, setCurrentPage , currentEmployeesLength , sortedEmployeesLength }) => {


    const numOfPages = []

    for (let i = 1; i <= pages; i++) {
        numOfPages.push(i)
    }

    return (
        <div className="clearfix">
            <div className="hint-text">Showing <b>{currentEmployeesLength}</b> out of <b>{sortedEmployeesLength}</b> entries</div>
            <ul className="pagination">
                {currentPage !== 1 &&
                    <li className="page-item">
                        <a
                            href="#!"
                            className="page-link"
                            onClick={() => setCurrentPage(currentPage - 1)}>
                            Previous
                        </a>
                    </li>
                }

                {numOfPages.map((page, index) => (
                    <li
                        key={index}
                        className={`${currentPage === page ? 'page-item active' : 'page-item'}`}
                    >
                        <a
                            href="#!"
                            className="page-link"
                            onClick={() => setCurrentPage(page)}
                        >
                            {page}
                        </a>
                    </li>
                ))}

                {currentPage !== numOfPages.length &&
                    <li className="page-item">
                        <a
                            href="#!"
                            className="page-link"
                            onClick={() => setCurrentPage((prev) => prev === numOfPages.length ? prev : prev + 1)}
                        >
                            Next
                        </a>
                    </li>
                }

            </ul>
        </div>
    )

}

export default Pagintaion