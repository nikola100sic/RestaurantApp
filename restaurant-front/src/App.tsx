import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./components/Layout/Layout"
import NotFound from "./pages/PageNotFound/NotFound"
import HomePage from "./pages/HomePage/HomePage"
import ContactPage from "./pages/ContactPage/ContactPage"

const App = ()=> {

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<HomePage/>}/>
          <Route path="/contact" element={<ContactPage/>}/>
        </Routes>
    </Layout>
    </BrowserRouter>
  )
}

export default App
