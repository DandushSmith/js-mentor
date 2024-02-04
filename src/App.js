import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.scss";
import Lobby from "./pages/Lobby/Lobby";
import CodeBlock from "./pages/CodeBlock/CodeBlock";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setCodeBlocks } from "./redux/reducers";
import axios from "axios";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        `${process.env.REACT_APP_SERVER_URL}/codeBlock`
      );
      dispatch(setCodeBlocks(res.data));
    };

    fetchData();
  }, [dispatch]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Lobby />} />
        <Route path="/codeBlock/:index" element={<CodeBlock />} />
      </Routes>
    </Router>
  );
}

export default App;
