import { Show } from '@/types/api-types';
import Link from 'next/link';
import styles from './cards-list.module.scss';

type CardProps = Pick<Show, 'image' | 'title' | 'status' | 'id'>;

export const Card = ({ image, title, status, id }: CardProps) => {
  return (
    <li className={styles['cards-item']}>
      <Link href={`/details/${id}`} className={styles['card-container']}>
        <img className={styles['card-image']} src={image} alt={title}></img>
        <div className={styles['card-info']}>
          <p className={styles['card-name']}>{title}</p>
          <p className={styles['card-species']}>{status}</p>
        </div>
      </Link>
    </li>
  );
};
