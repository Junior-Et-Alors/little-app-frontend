import './App.css';
import {Routes, Route, Navigate} from 'react-router-dom';
import Register from './Page/Register/Register';

function App() {
  return (
    <Routes>
      <Route path='/register' element={<Register />} />
    </Routes>
  );
}

export default App;
