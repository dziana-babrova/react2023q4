import { Show } from '@/types/api-types';
import styles from './cards-list.module.scss';
import { useRouter } from 'next/router';

type CardProps = Pick<Show, 'image' | 'title' | 'status' | 'id'>;

export const Card = ({ image, title, status, id }: CardProps) => {
  const router = useRouter();

  const openCard = () => {
    router.replace({
      query: {
        ...router.query,
        cardId: id,
      },
    });
  };

  return (
    <li className={styles['cards-item']}>
      <div className={styles['card-container']} onClick={openCard}>
        <img className={styles['card-image']} src={image} alt={title}></img>
        <div className={styles['card-info']}>
          <p className={styles['card-name']}>{title}</p>
          <p className={styles['card-species']}>{status}</p>
        </div>
      </div>
    </li>
  );
};
