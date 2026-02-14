import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./components/Layout/Layout"
import NotFound from "./pages/PageNotFound/NotFound"
import HomePage from "./pages/HomePage/HomePage"

const App = ()=> {

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<HomePage/>}/>
        </Routes>
    </Layout>
    </BrowserRouter>
  )
}

export default App
