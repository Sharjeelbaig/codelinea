import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setQuestion } from '../redux/question/Action';
import AskButton from './AskButton';

export default function QuestioningBar() {
    const language = useSelector(state => state.OutputReducer.language)
    const question = useSelector(state => state.QuestionReducer.question)
    
    
    const dispatch = useDispatch()
    
    const handleQuestionInputChange = (text) => {
      dispatch(setQuestion(text))
    }
  return (
    <div
    className='questioning-bar-container'
    >
    <input
    className='questioning-bar-text-input'
    type='text'
    placeholder="Ask something you didn't understand"
    disabled={language ? false : true}
    onChange={text => handleQuestionInputChange(text.target.value)}
    value={question}
    />
    <AskButton />
    </div>
  )
}
