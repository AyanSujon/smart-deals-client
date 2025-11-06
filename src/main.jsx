import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import RootLayout from './Layout/RootLayout.jsx';
import Home from './Components/Home/Home.jsx';
import AllProducts from './Components/AllProducts/AllProducts.jsx';
import AuthProvider from './contexts/AuthProvider.jsx';
import Register from './Components/Register/Register.jsx';
import MyProducts from './Components/MyProducts/MyProducts.jsx';
import MyBids from './Components/MyBids/MyBids.jsx';
import ProductDetails from './Components/ProductDetails/ProductDetails.jsx';
import CreateProduct from './Components/CreateProduct/CreateProduct.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children:[
      {
        index: true,
        Component: Home,
      },
      {
        path: "/allProducts",
        Component: AllProducts,
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/myProducts",
        element: <MyProducts></MyProducts>,
      },
      {
        path: "/myBids",
        element: <MyBids></MyBids>,
      },
      {
        path: "create-product",
        element: <CreateProduct/>,
      },
      {
        path: "/product-details/:id",
        loader: ({params})=> fetch(`http://localhost:3000/products/${params.id}`),
        element: <ProductDetails></ProductDetails>,
      },

    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
)
