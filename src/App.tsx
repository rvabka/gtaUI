import { Route, Routes } from "react-router-dom";
import "./index.css";
import Layout from "./Layout";
import Home from "./components/Home";
import WorldEditor from "./components/WorldEditor";
import Debugger from "./components/Debugger";
import Pet from "./components/Pet";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/sth" element={<Home />} />
        <Route path="/worldEditor" element={<WorldEditor />} />
        <Route path="/debugger" element={<Debugger />} />
        <Route path="/pet" element={<Pet />} />
      </Route>
    </Routes>
  );
}

export default App;
