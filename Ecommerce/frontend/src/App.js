import {
  Home,
  CheckOut,
  Orders,
  Cart,
  UserProfile,
  Accounts,
  About,
  ErrorPage,
  SingleProduct,
  AdminDashboard,
} from './Pages';
import { Header, Footer, ProtectedLinks } from './Components/Global';
import PaymentConfirmationPage from './Pages/PaymentConfirmationPage';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductsPage from './Pages/ProductsPage';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/About' element={<About />}></Route>
        <Route path='/accounts/*' element={<Accounts />}></Route>
        <Route path='/orders' element={<Orders />}></Route>
        <Route path='/cart' element={<Cart />}></Route>

        <Route path='/product/:id' element={<SingleProduct />}></Route>
        <Route path='/Products' element={<ProductsPage />}></Route>
        <Route
          path='/checkout'
          element={
            <ProtectedLinks>
              <CheckOut />
            </ProtectedLinks>
          }
        />
        <Route
          path='/confirmation'
          element={
            <ProtectedLinks>
              <PaymentConfirmationPage />
            </ProtectedLinks>
          }
        />
        <Route
          path='/AdminDashboard/*'
          element={
            <ProtectedLinks>
              <AdminDashboard />
            </ProtectedLinks>
          }
        />
        <Route path='/*' element={<ErrorPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
