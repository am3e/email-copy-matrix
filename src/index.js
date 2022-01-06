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
          <div>Choose an email section</div>
        </div>

      </div>
    )
  }
}

//main divider of the page
//button to add email sections, require input - use default or create email sections
//add or delete sections

//add copy options for each of the email sections
//count of variations 

class EmailSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      emailSections: [],
      value: 'Choose a email template section'
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    // alert('An essay was submitted: ' + this.state.value);
    this.state.emailSections.push(this.state.value);
    this.setState(this.state)
    event.preventDefault();
  }

  render() {
    return (
      <>
      <form onSubmit={this.handleSubmit}>
        <label>
          <div>
            <Input />
          </div>
          Email Sections:
          <textarea value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
        {this.state.emailSections.map(section => { 
          return <div>
            {section}
          </div>
        })}
      </>
    );
  }
}


ReactDOM.render(
  <React.StrictMode>
    <EmailSection />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
