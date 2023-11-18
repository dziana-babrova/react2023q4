import { SearchBar } from 'components/search/search';
import { CardsList } from 'components/cards/cards-list';
import { Loader } from 'components/loader/loader';
import { ErrorMessage } from 'components/error-message/error-message';
import { Pagination } from 'components/pagination/pagination';
import { URL_SEARCH_PARAMS } from 'consts/consts';
import { Outlet } from 'react-router-dom';
import { useContext } from 'react';
import { Context } from 'context/app-context';
// import { useDispatch } from 'react-redux';
// import { AppDispatch } from 'src/redux/store';

export const MainPage = () => {
  const context = useContext(Context);
  // const dispatch = useDispatch<AppDispatch>();

  return (
    <>
      <div className="content-list">
        <div className="page-header">
          <SearchBar></SearchBar>
        </div>
        {context?.isLoading && <Loader></Loader>}
        {context?.hasError && (
          <ErrorMessage text="Oops... An error occurred. Please try again later"></ErrorMessage>
        )}
        {!context?.isLoading &&
          context?.data?.result &&
          Boolean(context?.data?.result.length) && (
            <>
              <CardsList></CardsList>
              <Pagination></Pagination>
            </>
          )}
        {!context?.isLoading &&
          !context?.hasError &&
          !context?.data?.result.length && (
            <div>
              <ErrorMessage text="No results found. Remove the search term and try again"></ErrorMessage>
              {Number(context?.page) > Number(context?.total) && (
                <button
                  onClick={() => {
                    context?.setPage(URL_SEARCH_PARAMS.page.default_value);
                  }}
                >
                  Reload the page
                </button>
              )}
            </div>
          )}
      </div>
      <Outlet
        context={{ limit: context?.limit, searchQuery: context?.searchQuery }}
      ></Outlet>
    </>
  );
};
