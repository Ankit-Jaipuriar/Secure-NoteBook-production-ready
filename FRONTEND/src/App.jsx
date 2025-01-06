import './App.css';
import { ThemeProvider, useTheme } from './context/ThemeContext'; // Ensure ThemeContext is working
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from './components/HomePage'; 
import Create from './components/Create'; 
import Login from './components/Login';
import Register from './components/Register';
import ViewNote from './components/viewNote'; // Corrected import
import { useEffect } from 'react'; 

function App() {
  const { isDark } = useTheme(); // Use theme context

  // Dynamically apply theme based on isDark
  useEffect(() => {
    document.body.setAttribute("data-theme", isDark ? "dark" : "light");
  }, [isDark]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Register />} /> {/* Register page route */}
        <Route path="/create" element={<Create />} /> {/* Create page route */}
        <Route path="/login" element={<Login />} /> {/* Login page route */}
        <Route path="/Home" element={<HomePage />} /> {/* Home page route */}
        <Route path="/view/:fileId" element={<ViewNote />} /> {/* ViewNote page route */}
      </Routes>
    </Router>
  );
}

export default function MainApp() {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
}
