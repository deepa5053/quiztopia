import React, { useEffect, useState } from 'react';
import { getQuizzes } from '../services/api';
import { Link } from 'react-router-dom';

const QuizList = () => {
  const [quizzes, setQuizzes] = useState([]);

  useEffect(() => {
    const fetchQuizzes = async () => {
      try {
        const response = await getQuizzes();
        setQuizzes(response.data);
      } catch (error) {
        console.error('Fetch quizzes error', error);
      }
    };

    fetchQuizzes();
  }, []);

  return (
    <div>
      <h2>Available Quizzes</h2>
      <ul>
        {quizzes.map((quiz) => (
          <li key={quiz.id}>
            <Link to={`/quizzes/${quiz.id}`}>{quiz.name}</Link> - Created by {quiz.creator}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuizList;
