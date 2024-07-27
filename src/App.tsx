import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./page";
import { Header, Footer } from "./components"
import { AuthProvider } from "./context";

function App() {

  return (
    <AuthProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </Router>
    </AuthProvider>
  )
}

export default App
