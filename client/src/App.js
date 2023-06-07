import { createBrowserRouter, RouterProvider, Route, Outlet } from "react-router-dom";
import Register from './pages/Register';
import Home from './pages/Home';
import Login from './pages/Login';
import Write from './pages/Write';
import Single from './pages/Single';
import Navbar from './components/Navbar';
// import Footer from './components/Footer';
import OurStory from './pages/OurStory';
import Help from './pages/Help';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
const Layout = () =>{
  return(
    <>
      <Navbar/>
      <Outlet/>
      {/* <Footer/> */}
    </>
    
  );
};
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path:"/",
        element:<Home/>,
      },
      {
        path:"/post/:id",
        element:<Single/>,
      },
      {
        path: "/write",
        element:<Write/>,
      },
      {
        path: "/Story",
        element:<OurStory/>,
      },
      {
        path: "/Help",
        element:<Help/>,
      },
      {
        path: "/Terms",
        element:<Terms/>,
      },
      {
        path: "/Privacy",
        element:<Privacy/>,
      },
      
    ],
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login/>,
  },
 
]);

function App() {
  return (
    <div className="app">
    <div className="container">
      <RouterProvider router={router} />
      </div>
    </div>
  );
}



export default App;
