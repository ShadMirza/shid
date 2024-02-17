import React from 'react';
import './App.css';
import Courses from './Componets/Pages/Courses';
import CourseDetalis from './Componets/Pages/CourseDetalis';
import HomePage from './Componets/Pages/HomePage';
import NotFound from './Componets/Pages/NotFound';
import Auth from './Componets/Pages/Auth';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/output.css'

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route>
            <Route
              path="/"
              element={<Auth />}
            />
            <Route
              path="/Courses"
              element={<Courses />}
            />
            <Route
              path="/CourseDetalis"
              element={<CourseDetalis />}
            />            
            <Route
              path="/*"
              element={<NotFound />}
            />
            <Route
              path="/HomePage"
              element={<HomePage />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
