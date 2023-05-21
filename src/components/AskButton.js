import React from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setChat } from '../redux/chat/Action';
import ReactLoading from "react-loading";

export default function AskButton() {
    const dispatch = useDispatch()
    const code = useSelector(state => state.InputReducer.input)
    const question = useSelector(state => state.QuestionReducer.question)
    const [loading, setLoading] = useState(false)
    const handleSubmit = async (event) => {
      event.preventDefault();
      setLoading(true);
      try {
        await dispatch(setChat(question,code));
      } catch {
        console.log("error while fetching the api");
      } finally {
        setLoading(false);
      }
    };
  return (<>
  {loading ? 
        <ReactLoading
          type="cylon"
          color="#757575"
          height={"20%"}
          width={"20%"}
          className="loading-overlay"
        />
       :
    <button
    className='questioning-bar-submit-button'
    onClick={handleSubmit}
    >
        ask
        </button>
}
        </>
  )
}
