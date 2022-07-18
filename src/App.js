import './App.scss';
import {Routes, Route, Navigate} from 'react-router-dom';
import Register from './Page/Register/Register';
import TodoPage from './Page/TodoPage/TodoPage';

function App() {
  return (
    <Routes>
      <Route path='/register' element={<Register />} />
      <Route path='/todo' element={<TodoPage />} />
    </Routes>
  );
}

export default App;
