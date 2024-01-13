import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { increaseCount, decreaseCount } from "./redux/counterSlice";

function App() {
  const dispatch = useDispatch();

  const count = useSelector((state) => state.counter.count);

  return (
    <div className="App">
      <button onClick={() => dispatch(decreaseCount())}>-</button>
      <h1>{count}</h1>
      <button onClick={() => dispatch(increaseCount())}>+</button>
    </div>
  );
}

export default App;
