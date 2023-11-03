import Header from "./components/Header"
import FooterMenubar from "./components/FooterMenubar"
import { Outlet } from 'react-router-dom'


function App() {

  return (
    <>
      <Header />
      <Outlet />
      <FooterMenubar />
    </>
  )
}

export default App
