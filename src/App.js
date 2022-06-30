import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import CourseStructure from './components/CourseStructure';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          
          <Route path="/:coursename" element={<CourseStructure />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
