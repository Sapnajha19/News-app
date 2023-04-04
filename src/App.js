// import logo from './logo.svg';
import './App.css';

//commenting out functional based app component bcz we are learning class based component now
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


//rcc-->shortcut code snippet
import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';

export default class App extends Component {
  // c="Sapna";
  render() {
    return (
      <div>
        {/* Hello my first class based component {this.c} */}
        <Navbar/>
        <News pageSize={5} country="in" category="sports"/>
      </div>
    )
  }
}

