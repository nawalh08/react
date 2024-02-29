import {createBrowserRouter} from "react-router-dom"
import App from "./App"
import BookDetails from "./components/BookDetails"


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },

  {
    path : "/detail/:id",
    element: <BookDetails/>
  }
  
])

export default router