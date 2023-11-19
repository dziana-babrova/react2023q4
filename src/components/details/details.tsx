import './details.scss';
import { Loader } from 'components/loader/loader';
import { ErrorMessage } from 'components/error-message/error-message';
import { Link } from 'react-router-dom';
import { URL_SEARCH_PARAMS } from 'consts/consts';
import { useSelector } from 'react-redux';
import { RootState } from 'store-manager/store';
import { selectItems } from 'store-manager/slices/items-slice';
import { selectPage } from 'store-manager/slices/page-slice';
import { selectSearch } from 'store-manager/slices/search-slice';
import { useDetailedInfo } from 'hooks/useDetailedInfo';

export const Details = () => {
  const limit = useSelector<RootState, string>(selectItems);
  const page = useSelector<RootState, string>(selectPage);
  const search = useSelector<RootState, string>(selectSearch);
  const { data, loading, error } = useDetailedInfo();

  return (
    <div className="details" data-testid="details-component">
      <Link
        to={`/?${URL_SEARCH_PARAMS.page.name}=${page}&${URL_SEARCH_PARAMS.limit_per_page.name}=${limit}&${URL_SEARCH_PARAMS.search_query.name}=${search}`}
        className="overlay"
      ></Link>
      <div className="details-content">
        {loading && <Loader></Loader>}
        {error && (
          <ErrorMessage text="Oops... An error occurred. Please try again later"></ErrorMessage>
        )}
        {data?.result && (
          <>
            <img className="details-image" src={data.result.image}></img>
            <p className="details-title">{data.result.title}</p>
            <div className="details-info">
              <div className="details-info-item">
                Country:{' '}
                <p className="details-info-content">{data.result.country}</p>
              </div>
              <div className="details-info-item">
                Description:{' '}
                <p className="details-info-content">
                  {data.result.description}
                </p>
              </div>
              <div className="details-info-item">
                Year: <p className="details-info-content">{data.result.year}</p>
              </div>
              <div className="details-info-item">
                Status:{' '}
                <p className="details-info-content">{data.result.status}</p>
              </div>
              <div className="details-info-item">
                Imdb rating:{' '}
                <p className="details-info-content">{data.result.imdbRating}</p>
              </div>
            </div>
            <Link
              className="close-button"
              to={`/?${URL_SEARCH_PARAMS.page.name}=${page}&${URL_SEARCH_PARAMS.limit_per_page.name}=${limit}&${URL_SEARCH_PARAMS.search_query.name}=${search}`}
              data-testid="close-button"
            ></Link>
          </>
        )}
      </div>
    </div>
  );
};
