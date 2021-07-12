
import './App.css';
import Getweather from './Components/Getweather';
import { Provider } from "react-redux";
import store from './Store/Store';

function App() {
  return (
    <Provider store={store}>
    <div className="App">

     <Getweather/>
    </div>
    </Provider>
  );
}

export default App;
