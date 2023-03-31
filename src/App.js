import { Provider } from "react-redux";
import "./App.css";
import DisplayData from "./Components/DisplayData";
import Buttons from "./Components/Buttons";
import { store } from "./Components/Redux/store";

function App() {
  return (
    <div className="main">
      <Provider store={store}>
        <DisplayData />
        <Buttons />
      </Provider>
    </div>
    );
}
export default App;
