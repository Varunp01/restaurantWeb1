import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Menu from "./pages/Menu"
import Contact from "./pages/Contact"
import Layout from "./components/Layout"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/savoria-restaurant/*" element={<Layout/>}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="menu" element={<Menu />} />
          <Route path="contact" element={<Contact />} />
        </Route>
        {/* <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </Router>
  )
}

export default App

