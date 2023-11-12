import { useDetailedInfo } from 'hooks/useDetailedInfo';
import './details.scss';
import { Loader } from 'components/loader/loader';
import { ErrorMessage } from 'components/error-message/error-message';
import { Link, useOutletContext } from 'react-router-dom';
import { URL_SEARCH_PARAMS } from 'consts/consts';

export type OutletContext = {
  limit: string;
  searchQuery: string;
  page: string;
};

export const Details = () => {
  const { limit, searchQuery, page } = useOutletContext<OutletContext>();
  const [data, isLoading, hasError] = useDetailedInfo();

  return (
    <div className="details">
      <Link
        to={`/?${URL_SEARCH_PARAMS.page.name}=${page}&${URL_SEARCH_PARAMS.limit_per_page.name}=${limit}&${URL_SEARCH_PARAMS.search_query.name}=${searchQuery}`}
        className="overlay"
      ></Link>
      <div className="details-content">
        {isLoading && <Loader></Loader>}
        {hasError && (
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
              to={`/?${URL_SEARCH_PARAMS.page.name}=${page}&${URL_SEARCH_PARAMS.limit_per_page.name}=${limit}&${URL_SEARCH_PARAMS.search_query.name}=${searchQuery}`}
            ></Link>
          </>
        )}
      </div>
    </div>
  );
};
