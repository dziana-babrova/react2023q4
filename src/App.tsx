import './App.scss';
import { Header } from 'components/header/header';
import { Footer } from 'components/footer/footer';
import { MainPage } from 'pages/main';
import ErrorBoundary from 'components/error-boundary/error-boundary';

function App() {
  return (
    <ErrorBoundary>
      <Header></Header>
      <main className="app-content app-wrapper">
        <MainPage></MainPage>
      </main>
      <Footer></Footer>
    </ErrorBoundary>
  );
}

export default App;
