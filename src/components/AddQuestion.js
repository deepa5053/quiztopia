import React, { useState } from 'react';
import { addQuestion } from '../services/api';
import { useParams } from 'react-router-dom';
import MapView from './MapView';

const AddQuestion = () => {
  const { quizId } = useParams();
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [coordinates, setCoordinates] = useState({ lat: 0, lng: 0 });

  const handleAddQuestion = async (e) => {
    e.preventDefault();
    try {
      await addQuestion(quizId, {
        question,
        answer,
        coordinates,
      });
      // Clear form or redirect
    } catch (error) {
      console.error('Add question error', error);
    }
  };

  return (
    <div>
      <MapView setCoordinates={setCoordinates} />
      <form onSubmit={handleAddQuestion}>
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Question"
          required
        />
        <input
          type="text"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          placeholder="Answer"
          required
        />
        <button type="submit">Add Question</button>
      </form>
    </div>
  );
};

export default AddQuestion;
