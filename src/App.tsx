import './App.scss';
import { MainPage } from 'pages/main';
import ErrorBoundary from 'components/error-boundary/error-boundary';
import { Routes, Route } from 'react-router-dom';
import { NotFoundPage } from 'pages/not-found';
import { Layout } from 'components/layout/layout';

function App() {
  return (
    <ErrorBoundary>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </ErrorBoundary>
  );
}

export default App;
