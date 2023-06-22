import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Cart from './pages/Cart';
import {
  Outlet,
  createBrowserRouter,
  RouterProvider,
  ScrollRestoration,
} from 'react-router-dom';
import { productLoader, productsData } from './api/Api';
import Product from './pages/Product';
const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
      <ScrollRestoration />
    </>
  );
};
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
        loader: productsData,
      },
      {
        path: '/product/:id',
        element: <Product />,
        loader: productLoader,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
    ],
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
