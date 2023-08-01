import _ from "lodash";

const Pagination = ({ items, pageSize, currentPage, onPageChange, next, prev }:any) => {
  const pageCount = items.length / pageSize;
  if (Math.ceil(pageCount) === 1) return null;
  const pages = _.range(1, pageCount + 1);
  const offset = 3;

  return (
    <>

{/* <nav aria-label="Page navigation">
  <ul class="inline-flex">
    <li><button class="h-10 px-5 text-indigo-600 transition-colors duration-150 bg-white rounded-l-lg focus:shadow-outline hover:bg-indigo-100">Prev</button></li>
    <li><button class="h-10 px-5 text-white transition-colors duration-150 bg-indigo-600 focus:shadow-outline">1</button></li>
    <li><button class="h-10 px-5 text-indigo-600 transition-colors duration-150 bg-white focus:shadow-outline hover:bg-indigo-100">2</button></li>
    <li><button class="h-10 px-5 text-indigo-600 transition-colors duration-150 bg-white focus:shadow-outline hover:bg-indigo-100">3</button></li>
    <li><button class="h-10 px-5 text-indigo-600 transition-colors duration-150 bg-white rounded-r-lg focus:shadow-outline hover:bg-indigo-100">Next</button></li>
  </ul>
</nav> */}
      <nav className="flex  flex-col items-center justify-between p-10">
        <ul className="inline-flex">
       
       {currentPage === 1 ?null: <li><button className="h-10 px-5 text-indigo-600 transition-colors duration-150 bg-white rounded-l-lg focus:shadow-outline hover:bg-indigo-100"
         onClick={() => prev()}
        >{'<< Prev'} </button></li>}

          {pages.filter((page) => {
            return page <= currentPage+3 && page >= currentPage-3;
          }).map((page) => (
            <li
              key={page}
              className={
                page === currentPage ? "page-item active" : "page-item"
              }
            >
              <button
                style={{ cursor: "pointer" }}
                onClick={() => onPageChange(page)}
                className={`h-10 px-5 text-gray transition-colors duration-150 ${page === currentPage ? 'bg-indigo-600' : 'bg-light-600'} focus:shadow-outline`}
              >
                {page}
              </button>
            </li>
          ))}
       { currentPage == items.length / pageSize ? null :  <li><button className="h-10 px-5 text-indigo-600 transition-colors duration-150 bg-white rounded-r-lg focus:shadow-outline hover:bg-indigo-100"
            onClick={() => next()}
          >{"Next >>"}</button></li>}
        </ul>
      </nav>
    </>
  );
};

export default Pagination;