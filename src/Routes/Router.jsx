
import Main from '../LayOut/Main';
import {
  createBrowserRouter,
} from "react-router-dom";
import Home from '../Page/home/Home/Home';


export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [{
        path : '/',
        element: <Home></Home>
      }]
    },
  ]);