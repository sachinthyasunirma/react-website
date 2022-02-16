
import './App.css';

import HomeLayouthoc from './HOC/Home.hoc';

import HomePage from './pages/HomePage';

function App() {
  return (
    <>
      <HomeLayouthoc component={HomePage} path="/"/>
    </>
  );
}

export default App;
