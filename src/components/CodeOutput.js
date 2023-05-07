import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import LanguageLogo from './LanguageLogo';
import QuestioningBar from './QuestioningBar';
import ChatBox from './ChatBox'

function CodeOutput() {

  const explanation = useSelector(state => state.OutputReducer.explanation)
  
  const sample = useSelector(state => state.OutputReducer.sample)
  const depthExplanation = useSelector(state => state.OutputReducer.depthExplanation)
  const sampleExplanation = useSelector(state => state.OutputReducer.sampleExplanation)
  const speak = () => {
    const speach = new SpeechSynthesisUtterance()
    speach.text = explanation;
    window.speechSynthesis.speak(speach)
  };

  useEffect(() => {
    speak()
  }, [explanation])

  return (    
    <div className='code-output'>
    <button onClick={speak}>
    🔊
    </button>
    <br />
    <LanguageLogo />
        {explanation && <>
        <h3><u>Explanation:</u></h3>
        <p>{explanation}</p>
        
        <h5>{depthExplanation}</h5>
        <code>
        <h6>Sample Example</h6>
          {sample}
        </code>
        <h6>{sampleExplanation}</h6>
        </>
        }
        {
          explanation && <>
        <ChatBox />
<QuestioningBar />        
</>
}
        </div>
  );
}

export default CodeOutput;
