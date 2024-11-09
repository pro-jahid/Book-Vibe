import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
import Route from './Route/Route';
import BookDetails from './components/Home/BookDetails/BookDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children:[
      {
        path:'/',
        element:<Route></Route>
      },
      {
        path: 'book/:bookDetails',
        element:<BookDetails></BookDetails>,
        loader:()=> fetch('/book.json')
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
