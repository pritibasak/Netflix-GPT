import React from 'react'
import Login from './Login'
import Browse from './Browse'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const Body = () => {

 const appRouter=createBrowserRouter([
  {
    path:'/',
    element:<Login/>
  },
  {
    path:'/browse',/** it's an authenticated browse becuase only authenticated/registered users can route to this page */
    element:<Browse/>
  }
 ]
)

  return (
    <div>
     <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body
