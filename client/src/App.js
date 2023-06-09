import {Route ,Routes} from 'react-router-dom'
import Navbar from './components/navbar';
import HomePage from './pages/HomePage';
function App() {

  return (
    <div>
      <Navbar/>
      <Routes>
          <Route path="/" element={<HomePage/>}/>
      </Routes>
    </div>
  );
}

export default App;
