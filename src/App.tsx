import './App.css';
import Header from './components/header/header';
import { Footer } from './components/footer/footer';
import { Wrapper } from './components/wrapper/wrapper';

function App() {
  return (
    <>
      <Wrapper>
        <Header></Header>
      </Wrapper>
      <Wrapper>
        <Footer></Footer>
      </Wrapper>
    </>
  );
}

export default App;
