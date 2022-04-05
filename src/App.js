
import './App.css';
import Welcome from './components/welcome/welcome';
import First from './components/My-demo/first';
import WelcomeLambda from './components/welcome/welcome-lambda';

function App() {
  return (
    <div className="App">
      {
        <h1>HELLO LA TERRE </h1>
      }
        <Welcome 
        firstname="Ayan" 
        lastname="Abdi"
        number={123} />
       
       </div>
  );
}

export default App;
