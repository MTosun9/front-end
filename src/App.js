import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from './components/header';
import Body from './components/body';
import BuyTicket from './components/BuyTicket';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Body />
        <Routes>
          <Route path="/buyTicket" element={<BuyTicket />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
