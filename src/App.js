import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Auth from './views/Auth';
import SearchList from './views/SearchList';
import JobItemsLayer from './views/JobItemsLayer';
import ProfileUser from './views/ProfileUser';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='*' element={<Auth></Auth>}/>
        <Route path='/search' element={<SearchList></SearchList>}/>
        <Route path='/items' element={<JobItemsLayer></JobItemsLayer>}/>
        <Route path='/profile' element={<ProfileUser></ProfileUser>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
