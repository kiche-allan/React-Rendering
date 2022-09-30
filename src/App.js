// import ObjectUseState from "./components/Immutable State/ObjectUseState";
// import UseReducer from "./components/UseReducer/UseReducer";
// import UseState from "./components/UseState/UseState";

// import { GrandParent } from "./components/Optimization/GrandParent";
import ParentFour from "./components/Incorrect Optimization/ParentFour";
import ParentThree from "./components/Incorrect Optimization/ParentThree";
import ParentTwo from "./components/Optimization/ParentTwo";
// import { ParentOne } from "./components/Optimization/ParentOne";
// import ChildOne from "./components/Parent Child/Child";
// import { ParentChild } from "./components/Parent Child/ParentChild";


function App() {
  return (
    <div className="App">
      {/* <UseState/> */}
      {/* <UseReducer/> */}
      {/* <ObjectUseState/> */}
      {/* <ParentOne>
        <ChildOne/>
      </ParentOne> */}
      {/* <GrandParent/> */}
      {/* <ParentThree/> */}
      <ParentFour/>
    </div>
  );
}

export default App;
