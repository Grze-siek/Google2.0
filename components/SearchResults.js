import PaginationButtons from './PaginationButtons';

function SearchResults({ results }) {
  return (
    <div className="mx-auto w-full px-3 sm:pl-[5%] md:pl-[14%] lg:pl-52">
      {Object.keys(results) != 0 ? (
        <p className="text-gray-600 text-sm mb-5 mt-3">
          About {results.searchInformation.formattedTotalResults} results (
          {results.searchInformation.formattedSearchTime} s)
        </p>
      ) : (
        ''
      )}

      {results.items?.map((result) => (
        <div key={result.chacheId} className="max-w-xl mb-8">
          <div className="group">
            <a href={result.link} className="text-sml">
              {result.formattedUrl}
            </a>
            <a href={result.link}>
              <h2 className="text-xl text-blue-800 truncate font-medium group-hover:underline">
                {result.title}
              </h2>
            </a>
          </div>
          <p className="line-clamp-2 text-gray-600">{result.snippet}</p>
        </div>
      ))}

      <PaginationButtons />
    </div>
  );
}

export default SearchResults;
