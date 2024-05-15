import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <div>
            This is the page
          </div>
        }>
        </Route>
      </Routes>
    </Router>
  )
}

export default App
