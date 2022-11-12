import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Auth from './views/Auth';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='*' element={<Auth authRoute="login" />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
