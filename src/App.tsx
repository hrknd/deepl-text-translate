import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import deepl from './deepl';


function App() {
  const [translatedtext, setTranslatedText] = useState<string>('')
  const default_text = '検非違使に問われたる木樵りの物語'
  const deepl_key = '*****'
  const target_lang = 'EN'
  
  const fetchTranslatedText = () => {
    deepl.translate(default_text, deepl_key, target_lang)
    .then(response => { 
      console.log(response)
      setTranslatedText(response.data.translations[0].text)
    })
    .catch(e => {
        console.log(e)
    });
  }

  useEffect(() => {
    fetchTranslatedText()
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {default_text}
        </p>
        {translatedtext && <p>{translatedtext}</p>}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
