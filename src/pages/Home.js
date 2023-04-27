import React from 'react';
import CodeInput from '../components/CodeInput';
import CodeOutput from '../components/CodeOutput';
import '../styles/home.css'
import ExplainButton from '../components/ExplainButton';
import Logo from '../components/Logo';
import { SocialIcon } from 'react-social-icons';
import Header from '../components/Header';
import HireMe from '../components/HireMe';

function CodeExplainer() {

  
  return (
    <div className="app">
    <Header />
    
    <main className="main">
      <section className="code-input-section">
        <h2>Input</h2>
        <CodeInput />
      </section>
      <section className="code-output-section">
        <h2>Output</h2>
        <CodeOutput />
      </section>
      <section className='explain-button-section'>
      <ExplainButton />
      </section>
    </main>
    <HireMe />
  </div>
  );
}

export default CodeExplainer;
