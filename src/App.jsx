import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignIn from '../component/SignIn';
import SignUp from '../component/SignUp';
import AppTheme from "../component/AppTheme";
import Home from '../component/Home';


function App() {
  return ( 
    <AppTheme> {/* ✅ Wrap the entire router inside AppTheme */}
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn/>}></Route>
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Router>
    </AppTheme>
  );
}

export default App;
