import React, { useState } from 'react';
import { createQuiz } from '../services/api';
import { useNavigate } from 'react-router-dom';

const CreateQuiz = () => {
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const handleCreateQuiz = async (e) => {
    e.preventDefault();
    try {
      const response = await createQuiz({ name });
      navigate(`/add-question/${response.data.id}`);
    } catch (error) {
      console.error('Create quiz error', error);
    }
  };

  return (
    <form onSubmit={handleCreateQuiz}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Quiz Name"
        required
      />
      <button type="submit">Create Quiz</button>
    </form>
  );
};

export default CreateQuiz;
