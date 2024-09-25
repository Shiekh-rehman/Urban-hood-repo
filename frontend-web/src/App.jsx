import Home from "./Pages/Home"
import NotFound from "./Pages/NotFound"
import Contact from "./Pages/Contact"
import Outletroute from "./Components/Outletroute"

import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import Cart from "./Pages/Cart";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Outletroute/>}>
      <Route path="/Home" element={<Home />} />
      <Route path="/Cart" element={<Cart/>} />
      <Route path="*" element={<NotFound/>} />
      <Route path="/Contact" element={<Contact/>} />
    </Route>
  )
);


function App() {

  return (
    <>
    
      <RouterProvider router={router} />
    </>
  )
}

export default App
