import React from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setAnswer } from '../redux/answer/Action';

export default function AskButton() {
    const dispatch = useDispatch()
    const code = useSelector(state => state.InputReducer.input)
    const question = useSelector(state => state.QuestionReducer.question)
    const [loading, setLoading] = useState(false)
    const handleSubmit = async (event) => {
      event.preventDefault();
      setLoading(true);
      try {
        await dispatch(setAnswer(question,code));
      } catch {
        console.log("error while fetching the api");
      } finally {
        setLoading(false);
      }
    };
  return (
    <button
    className='questioning-bar-submit-button'
    onClick={handleSubmit}
    >
        ask
        </button>
  )
}
