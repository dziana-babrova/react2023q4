import './App.scss';
import Header from 'components/header/header';
import { Footer } from 'components/footer/footer';
import { MainPage } from 'pages/main';

function App() {
  return (
    <>
      <Header></Header>
      <main className="app-content app-wrapper">
        <MainPage></MainPage>
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;
