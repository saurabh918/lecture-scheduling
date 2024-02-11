import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import RouterComponent from './components/Router';
import Wrapper from './components/Wrapper';

function App() {
  return (
    <>
      <Header />
        <main>
          <Wrapper>
            <RouterComponent />
          </Wrapper>
        </main>
      <Footer />
    </>
  );
}

export default App;
