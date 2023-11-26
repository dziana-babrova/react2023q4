import { ErrorButton } from '@/components/error-button/error-button';
import styles from './header.module.scss';

export const Header = () => {
  return (
    <header
      data-testid="header"
      className={`${styles['app-header']} app-wrapper`}
    >
      <h1 className={styles['app-title']}>TV Shows</h1>
      <ErrorButton />
    </header>
  );
};
