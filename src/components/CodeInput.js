import React from 'react';
import MonacoEditor from 'react-monaco-editor';
import { useDispatch, useSelector } from 'react-redux';
import { setInput } from '../redux/input/Action';

function CodeInput() {
  const editorDidMount = (editor, monaco) => {
    console.log('Editor mounted');
  };
  const input = useSelector((state) => state.InputReducer.input)
  const dispatch = useDispatch();
  return (
    <MonacoEditor
      height='370px'
      className='code-input'
      language="javascript"
      theme="vs-dark"
      value={input}
      options={{
        automaticLayout: true,
        fontSize: 16,
        fontFamily: 'Fira Code',
        wordWrap: 'on',
        wrappingIndent: 'indent',
        scrollbar: {
          alwaysConsumeMouseWheel: false,
        },
      }}
      onChange={value => dispatch(setInput(value))}
      editorDidMount={editorDidMount}
    />
  );
}

export default CodeInput;
