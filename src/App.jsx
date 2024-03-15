
import {

  Route,
  Link,
  RouterProvider,
  createBrowserRouter
} from "react-router-dom";

import HomePage from './routes/homePage/HomePage.jsx';

import ListPage from "./routes/listPage/ListPage.jsx";

import Layout from "./routes/layout/Layout.jsx";

function App() {
  const router= createBrowserRouter([
    {
      path:"/",
      element:(<Layout/>),
      children:[
        {
          path:"/",
          element:<HomePage/>
        },
        {
          path:"/list",
          element:<ListPage/>
        }
      ]
    },
  ]);
  return (
  

    <RouterProvider router={router}/>
  )
}

export default App