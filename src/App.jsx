import Navbar from './components/Navbar/Navbar'
import './layout.scss'
import HomePage from "./routes/homePage/HomePage.jsx";

function App() {
  return (
    <div className="layout">
      <div className="navbar">
      <Navbar/>
      </div>
      <div className="content">
      <HomePage/>
      </div>
    </div>
  )
}

export default App