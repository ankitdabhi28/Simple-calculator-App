import { useSelector } from "react-redux";

function DisplayData() {
  const display = useSelector((state) => state.Display.Display);
  console.log(display, "display");
  const expression = useSelector((state) => state.Display.Expression);
  console.log(expression, "expression");

  return (
    <div className="disdata">  
    <table >
      <tr> 
        <td className="fst">{expression}</td>
      </tr>
      <tr>
        <td className="fst ans"><h1> {display} </h1></td>
      </tr>
    </table>
    </div>
  );
}
export default DisplayData;
