import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./components/Layout/Layout"
import NotFound from "./pages/PageNotFound/NotFound"

const App = ()=> {

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="*" element={<NotFound />} />
        </Routes>
    </Layout>
    </BrowserRouter>
  )
}

export default App
