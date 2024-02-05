import React, { Suspense, useEffect, useState } from "react";
import { lazy } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
// import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter , RouterProvider , Outlet } from "react-router-dom";
import UserContext from "./utils/UserContext";


const About = lazy (()=> import('./components/About'))





const AppLayout = () => {
  const [userName , setUserName] = useState()

  useEffect(()=>{
    data={
     name:"Jeeva"
    };
    setUserName(data.name)
  },[])

  
  return (
    <UserContext.Provider value={{loggedInUser:userName , setUserName }}>
    <div className="App">
      <Header />
      <Outlet />
    </div>
    </UserContext.Provider>
  );
};


const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<AppLayout />,
    children:[
      {
        path:"/",
        element:<Body />
      },
      {
        path:"/about",
        element:<Suspense fallback={<h1>loading</h1>}><About /></Suspense>
      },
      {
        path:"/contact",
        element:<Contact />
      },
      {
        path:"/restaurant/:resId",
        element:<RestaurantMenu />
      }

    ],
    errorElement:<Error />
  }
  
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);

