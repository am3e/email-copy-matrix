import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

class Input extends React.Component {
render () {
  return (
    <div className="main">
      <div className="inputField">
        <div>This will be where the input field it</div>
      </div>

    </div>
  )

}

}

ReactDOM.render(
  <React.StrictMode>
    <Input />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
