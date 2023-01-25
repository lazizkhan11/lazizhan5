import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './companents/header/Header';
import Footer from './companents/footer/Footer';
import Statia from './companents/pages/statia/Statia';
import Kontakt from './companents/pages/kontakt/Kontakt';
import Metropolitia from './companents/pages/metropolitia/Metropolitia';

function App() {
return(
  <div className='wrapper'>
<BrowserRouter>
<Header/>
<Routes>
<Route path='/metropolitia' element={<Metropolitia/>} />
  <Route path='/statia' element={<Statia/>} />
  <Route path='/kontakt' element={<Kontakt/>} />
</Routes>
<Footer/>
</BrowserRouter>

  </div>
);
}

export default App;
