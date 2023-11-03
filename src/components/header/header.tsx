import { ErrorButton } from 'components/error-button/error-button';
import './header.scss';

export const Header = () => {
  return (
    <header className="app-header app-wrapper">
      <h1 className="app-title">Products</h1>
      <ErrorButton />
    </header>
  );
};
