import React from 'react';
import {BrowserRouter as Router, Navigate, Route, Routes, useParams} from 'react-router-dom';
import Kanbas from "./Kanbas";
import Dashboard from "./Kanbas/Dashboard";
import {Navigation} from "./Kanbas/Navigation";
import Courses from './Kanbas/Courses/index'
import {Course} from './Kanbas/Courses/CoursePage'
import './App.css'
import {CourseNavigation} from "./Kanbas/Courses/CourseNavigation";
import Modules from "./Kanbas/Courses/Modules";




function App() {
  return (
      <Router>
          <div className="App">
              <Navigation />
              <div className="content">
                  <Routes>
                      <Route path="/Kanbas/Courses" element={<Courses />} />
                      <Route path="/Kanbas/Courses/:courseId/*" element={<Course />} />
                      {/*<Route path="Dashboard" element={<Dashboard />} />*/}
                      {/*<Route path="Courses/:courseId/*" element={<Courses2 />} />*/}
                      {/*<Route path="Courses/:courseId/*" element={<Courses />} />*/}
                  </Routes>

              </div>
        </div>
      </Router>
  );
}

export default App;