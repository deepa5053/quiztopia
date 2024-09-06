import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Login from './components/Login';
import Register from './components/Register';
import CreateQuiz from './components/CreateQuiz';
import AddQuestion from './components/AddQuestion';
import QuizList from './components/QuizList';
import Navbar from './components/Navbar';
import MapView from './components/MapView';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/create-quiz" component={CreateQuiz} />
        <Route path="/add-question/:quizId" component={AddQuestion} />
        <Route path="/quizzes" component={QuizList} />
        <Route path="/map" component={MapView} />
      </Routes>
    </Router>
  );
}

export default App;
