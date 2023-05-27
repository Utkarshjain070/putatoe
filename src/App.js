import Home from './components/Home'
import {Routes, Route, BrowserRouter as Router} from 'react-router-dom'

function App() {
  return (
   <Router basename={process.env.PUBLIC_URL}>
    <Routes>
      <Route exact path="/" element={<Home/>} />
    </Routes>
   </Router>
  );
}

export default App;
