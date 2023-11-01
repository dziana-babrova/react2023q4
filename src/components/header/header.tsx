import './header.scss';
import { ErrorButton } from 'components/error-button/error-button';

export const Header = () => {
  return (
    <header className="app-header app-wrapper">
      <h1 className="app-title">Rick and Morty</h1>
      <ErrorButton></ErrorButton>
    </header>
  );
};
