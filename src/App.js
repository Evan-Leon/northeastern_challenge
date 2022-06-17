import React, {useState} from 'react';
import Editor from 'react-simple-code-editor';
import { highlight} from 'prismjs/components/prism-core';
import Prism from 'prismjs'
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism.css'; 
import './App.css'

Prism.languages.news = {
  'keyword': /\b(or|and|OR|AND)\b/,
  'negation': /\b(not|NOT)\b/,
  'operator': /\*|\~/,
  'punctuation': /"|\(|\)/
};

Prism.languages.reddit = {
  'keyword': /\+|\|/,
  'negation': /\-/,
  'punctuation': /"|\(|\)/
};

Prism.languages.twitter = {
  'keyword': /\b(or|OR)\b/,
  'operator': /#/,
  'negation': /\-/,
  'punctuation': /\(|\)|"/,
};
Prism.languages.youtube = {
  'keyword': /\|/,
  'negation': /\-/,
};
export default function App() {
  const [query, setQuery] = useState(
    `
      ((murder* OR homicide* OR femicide OR feminicide OR murdered OR dead OR
      death* OR killed OR murdered OR shot OR stabbed OR struck OR strangled OR
      "life-less") AND (police* OR officer* OR custody) AND NOT (covid* OR
      vaccin*) AND (women OR woman OR girl* OR transgender OR trans OR nonbinary
      OR non-binary OR sayhername OR blm OR blacklivesmatter OR "black lives
      matter"))
      `
  );
  const [platform, setPlatform] = useState("news")
  
  const setLanguage = (platform) => {
    if (platform === 'news'){
      return Prism.languages.news
    } else if (platform === 'reddit'){
      return Prism.languages.reddit
    } else if (platform === 'twitter') {
      return Prism.languages.twitter
    } else if (platform === 'youtube') {
      return Prism.languages.youtube
    } 
  }

  return (
    <div>
      <h2>Northeastern Media Cloud Web App Dev Technical Challenge</h2>
      <h3>Evan Leon</h3>
      <p>Dear Rahul and the Media Cloud Team,</p>
      <p>Thank you for your consideration for the position of Web Developer and the opportunity to complete this technical challenge</p>
      <p>Please find a full write up in the README.md file</p>
      <p>The following prototype was implemented utilizing the npm packages of create-react-app, react-simple-code-editor and the prismjs
        library </p>

      <h3>First choose a platform to query</h3>
      <label htmlFor="platforms">Choose a platform:</label>

      <select name="platforms" id="platforms" onChange={e => setPlatform(e.target.value)}>
        <option value="news">Online News</option>
        <option value="reddit">Reddit</option>
        <option value="twitter">Twitter</option>
        <option value="youtube">Youtube</option>
      </select>
      <br />

      <h3>Enter query below</h3>
      <div>
        <Editor
          value={query}
          onValueChange={query => setQuery(query)}
          highlight={query => highlight(query, setLanguage(platform))}
          textareaClassName={"text-edit"}
          padding={10}
          style={{
            fontFamily: '"Fira code", "Fira Mono", monospace',
            fontSize: 12
          }}
        />
      </div>
      <br/>
      <h3>Raw text of query, to be sent to API</h3>
      <p>{query}</p>
    </div>
  );
}
