import React from 'react'
import { useSelector } from 'react-redux'

export default function QuestioningBar() {
    const language = useSelector(state => state.OutputReducer.language)
    
  return (
    <div
    className='questioning-bar-container'
    >
    <input
    className='questioning-bar-text-input'
    type='text'
    placeholder="Ask something you didn't understand"
    disabled={language ? false : true}
    />
    <button
    className='questioning-bar-submit-button'
    >
        ask
        </button>
    </div>
  )
}
