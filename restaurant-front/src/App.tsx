import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./components/Layout/Layout"
import NotFound from "./pages/PageNotFound/NotFound"
import HomePage from "./pages/HomePage/HomePage"
import ContactPage from "./pages/ContactPage/ContactPage"
import MenuPage from "./pages/MenuPage/MenuPage"
import ScrollToTop from "./components/ScrollToTop/ScrollToTop"

const App = ()=> {

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<HomePage/>}/>
          <Route path="/menu" element={<MenuPage/>}/>
          <Route path="/contact" element={<ContactPage/>}/>
        </Routes>
    </Layout>
    </BrowserRouter>
  )
}

export default App
