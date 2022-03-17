const Pagination = ({ postsPerPage, totalPosts, paginate, setPostsPerPage }) => {

  const pageNumber = [];

  for (let i = 1; i <= Math.ceil(totalPosts.length / postsPerPage); i++) {
    pageNumber.push(i)
  }

  return (
    <>
      <div className="row justify-content-center">
        <div className="col-auto">
        <ul className='pagination'>
          { pageNumber.map( number => (
            <li className='page-item' key={number}>
              <a href="!#" className='page-link' onClick={() => paginate(number)}>
                {number}
              </a>
            </li>
          )) }
        </ul>
        </div>
        <div className="col-auto">
          <select className="form-select ml-3">
            <option value="10" onClick={() => setPostsPerPage(10)}>10</option>
            <option value="20" onClick={() => setPostsPerPage(20)}>20</option>
            <option value="50" onClick={() => setPostsPerPage(50)}>50</option>
          </select>
        </div>
      </div>
    </>
  )
}

export default Pagination;
