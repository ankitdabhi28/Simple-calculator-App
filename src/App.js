import { Provider } from "react-redux";
import "./App.css";
import FrontDis from "./Components/FrontDis";
import { store } from "./Components/Redux/store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <FrontDis />
      </Provider>
    </div>
    );
}
export default App;
