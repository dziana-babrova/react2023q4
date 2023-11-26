import styles from './loader.module.scss';

export const Loader = () => {
  return (
    <div>
      <div className={styles['app-loader']}></div>
      <div>Loading...</div>
    </div>
  );
};
