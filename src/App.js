
import './App.css';
import Body from './componet/Body';
const data = require('./componet/Film.json');
function App() {
  return (
    <div className="App">
     <Body prop={data}/>
    </div>
  );
}

export default App;
