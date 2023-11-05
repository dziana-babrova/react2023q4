import { useDetailedInfo } from 'hooks/useDetailedInfo';
import './details.scss';
import { Loader } from 'components/loader/loader';
import { ErrorMessage } from 'components/error-message/error-message';
import { Link, useOutletContext } from 'react-router-dom';

export type OutletContext = {
  limit: string;
  searchQuery: string;
};

export const Details = () => {
  const context = useOutletContext<OutletContext>();
  const [data, isLoading, hasError] = useDetailedInfo(
    context.limit,
    context.searchQuery
  );

  return (
    <div className="details">
      <Link to="/" className="overlay"></Link>
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
            <Link className="close-button" to="/"></Link>
          </>
        )}
      </div>
    </div>
  );
};
