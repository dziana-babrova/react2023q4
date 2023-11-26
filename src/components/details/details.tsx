import { useRouter } from 'next/router';
import styles from './details.module.scss';
import { SingleShowApiResponse } from '@/types/api-types';
// import { Loader } from '@/components/loader/loader';
// import { ErrorMessage } from '@/components/error-message/error-message';
// import { Link } from 'react-router-dom';
// import { URL_SEARCH_PARAMS } from '@/consts/consts';
// import { useSelector } from 'react-redux';
// import { RootState } from 'store-manager/store';
// import { selectItems } from 'store-manager/slices/items-slice';
// import { selectPage } from 'store-manager/slices/page-slice';
// import { selectSearch } from 'store-manager/slices/search-slice';
// import { useDetailedInfo } from 'hooks/useDetailedInfo';

type DetailsProps = {
  card: SingleShowApiResponse;
};

export const Details = ({ card }: DetailsProps) => {
  const router = useRouter();

  const closeModal = () => {
    const { query } = router;
    const params = {};
    for (const param in query) {
      if (param !== 'cardId') {
        Object.assign(params, param, {
          value: query[param],
        });
      }
    }
    router.replace({ query: { ...params } });
  };

  return (
    <div className={styles.details} data-testid="details-component">
      <div onClick={closeModal} className={styles.overlay}></div>
      <div className={styles['details-content']}>
        {/* {loading && <Loader></Loader>}
        {error && (
          <ErrorMessage text="Oops... An error occurred. Please try again later"></ErrorMessage>
        )} */}
        {card?.result && (
          <>
            <img
              className={styles['details-image']}
              src={card.result.image}
            ></img>
            <p className={styles['details-title']}>{card.result.title}</p>
            <div className={styles['details-info']}>
              <div className={styles['details-info-item']}>
                Country:{' '}
                <p className={styles['details-info-content']}>
                  {card.result.country}
                </p>
              </div>
              <div className={styles['details-info-item']}>
                Description:{' '}
                <p className={styles['details-info-content']}>
                  {card.result.description}
                </p>
              </div>
              <div className={styles['details-info-item']}>
                Year:{' '}
                <p className={styles['details-info-content']}>
                  {card.result.year}
                </p>
              </div>
              <div className={styles['details-info-item']}>
                Status:{' '}
                <p className={styles['details-info-content']}>
                  {card.result.status}
                </p>
              </div>
              <div className={styles['details-info-item']}>
                Imdb rating:{' '}
                <p className={styles['details-info-content']}>
                  {card.result.imdbRating}
                </p>
              </div>
            </div>
            <div
              className={styles['close-button']}
              onClick={closeModal}
              data-testid="close-button"
            ></div>
          </>
        )}
      </div>
    </div>
  );
};
