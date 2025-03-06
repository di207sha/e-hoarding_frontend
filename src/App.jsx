import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignIn from '../component/SignIn';
import SignUp from '../component/SignUp';
import AppTheme from "../component/AppTheme";

function App() {
  return (
    <AppTheme> {/* ✅ Wrap the entire router inside AppTheme */}
      <Router>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Router>
    </AppTheme>
  );
}

export default App;
