import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SGame from "./page/SeconGame";
function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <SGame />
        }>
        </Route>
      </Routes>
    </Router>
  )
}

export default App
