import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/scss/style.scss'
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Mainpage from './components/MainPage';
import Home from './components/Home';
import About from './components/About';
import Howtobuy from './components/How_to_buy';
import Tokenomics from './components/Tokenomics';
import Chart from './components/Chart';
import Faq from './components/Faq';
import Contact from './components/Contact';



const router = createBrowserRouter([
  {
    path: "/",
    element:<Mainpage/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/about",
        element:<About/>
      },
      {
        path:"/howtobuy",
        element:<Howtobuy/>
      },
      {
        path:"/contact",
        element:<Contact/>
      },
      {
        path:"/chart",
        element:<Chart/>
      },
      {
        path:"/faq",
        element:<Faq/>
      },
      {
        path:"/tokenomics",
        element:<Tokenomics/>
      },
    ]
  
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>,
)
