import { useSelector } from "react-redux";

function DisplayData() {
  const display = useSelector((state) => state.Display.Display);
  console.log(display, "display");
  const expression = useSelector((state) => state.Expression.Expression);
  console.log(expression, "expression");

  return (
    <div>
    <table >
      <tr> 
        <td className="fst">{expression}</td>
      </tr>
      <tr>
        <td className="fst">{display}</td>
      </tr>
    </table>
    </div>
  );
}
export default DisplayData;
