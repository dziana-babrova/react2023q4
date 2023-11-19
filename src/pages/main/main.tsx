import { SearchBar } from 'components/search/search';
import { CardsList } from 'components/cards/cards-list';
import { Loader } from 'components/loader/loader';
import { ErrorMessage } from 'components/error-message/error-message';
import { Pagination } from 'components/pagination/pagination';
import { Outlet } from 'react-router-dom';
import { useParams } from 'hooks/useParams';
import { useGetShowsQuery } from 'store-manager/slices/api-slice';
import { useSelector } from 'react-redux';
import { RootState } from 'store-manager/store';
import { ShowsState } from 'store-manager/slices/shows-slice';

export const MainPage = () => {
  const [search, limit, page] = useParams();

  useGetShowsQuery({ search, limit, page });

  const { loading, error, shows } = useSelector<RootState, ShowsState>(
    (state) => state.shows
  );

  return (
    <>
      <div className="content-list">
        <div className="page-header">
          <SearchBar></SearchBar>
        </div>
        {loading && <Loader></Loader>}
        {error && (
          <ErrorMessage text="Oops... An error occurred. Please try again later"></ErrorMessage>
        )}
        {!loading && shows?.result && Boolean(shows?.result.length) && (
          <>
            <CardsList></CardsList>
            <Pagination></Pagination>
          </>
        )}
        {!loading && !error && !Boolean(shows?.result.length) && (
          <div>
            <ErrorMessage text="No results found. Remove the search term and try again"></ErrorMessage>
          </div>
        )}
      </div>
      <Outlet context={{ limit, searchQuery: search }}></Outlet>
    </>
  );
};
