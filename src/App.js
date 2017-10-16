import React, { Component } from 'react';
import './App.css';

class App extends Component {
  //constructor(props) {
  //  super(props);
  //};

  render() {
    return (
      <div>
        <input 
          type="text"
          style={{ width: 350 }} 
        />
        <form>
          <textarea id="noter-text-area" 
          name="textarea" 
          style={{ width: 350,
                  height: 250 }}>                                                                 
            Make a Blog. 
          </textarea>
        </form>
        <Button />
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
      </div>
    )
  }
}

class Button extends Component {
  render() {
    return (
      <div> 
        <button type="submit">
          Submit
        </button>
      </div> 
    )
  }
}




export default App;
