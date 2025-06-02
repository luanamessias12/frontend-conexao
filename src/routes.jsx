import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FirebaseTeste from './pages/FirebaseTeste';
// outros imports...

function App() {
  return (
    <Router>
      <Routes>
        {/* outras rotas */}
        <Route path="/firebase-teste" element={<FirebaseTeste />} />
      </Routes>
    </Router>
  );
}

export default App;
