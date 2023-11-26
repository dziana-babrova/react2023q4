import './App.scss';
import ErrorBoundary from '@/components/error-boundary/error-boundary';
import { Routes, Route } from 'react-router-dom';
import { NotFoundPage } from '@/pages/not-found/not-found';
import { Layout } from '@/components/layout/layout';
import { Details } from '@/components/details/details';

function App() {
  return (
    <ErrorBoundary>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="details/:id" element={<Details />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </ErrorBoundary>
  );
}

export default App;
