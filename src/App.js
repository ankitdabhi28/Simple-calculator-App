import { Provider } from "react-redux";
import "./App.css";
import DisplayData from "./Components/DisplayData";
import Buttons from "./Components/Buttons";
import { store } from "./Components/Redux/store";

function App() {
  return (
    <div className="main mt-5  container">
      <div className="card col-4 bg-secondary text-white rds p-3">
      <h6>My-Calculator</h6>
      <Provider store={store}>
        <DisplayData />
        <Buttons className="boss"/> 
      </Provider>
      </div>
    </div>
    );
}
export default App;
