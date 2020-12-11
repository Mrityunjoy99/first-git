import logo from './logo.svg';
import './App.css';
import Greet from './component/Greet'
import Welcome from './component/Welcome'
import Hello from './component/Hello'
import StyleSheet from './component/Stylesheet'
import inline from './component/inline';
import './appStyles.css'
import styles from './appStyles.module.css'
import Form from './component/Form';
function App() {
  return (
    <div className="App">
      <Form />
      {/* <h1 className='error'>Error</h1>
      <h1 className = {styles.success}>Success</h1> */}
      {/* <Greet /> */}
      {/* <Welcome /> */}
      {/* <Hello name = 'Mrityunjoy' heroName="BatMan">
        <p>This is the best</p>
      </Hello>
      <Hello name = 'Suman' heroName="SuperMan">
        <button>Hero Time</button>
      </Hello> */}
      {/* <StyleSheet primary={true} /> */}
      {/* <inline /> */}
    </div>
  );
}

export default App;
