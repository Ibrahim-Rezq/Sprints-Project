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
    
    
} from './Pages'
import { Header, Footer, ProductsGridVeiw, ProductReviews } from './Components'
import PaymentConfirmationPage from './Pages/PaymentConfirmationPage'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/About' element={<About />}></Route>
                <Route path='/accounts' element={<Accounts />}></Route>
                <Route path='/orders' element={<Orders />}></Route>
                <Route path='/cart' element={<Cart />}></Route>
                <Route path='/SingleProduct' element={<SingleProduct />}></Route>
                <Route path='/ProductsGridVeiw' element={<ProductsGridVeiw/>}></Route>
                <Route path='/ProductReviews' element={<ProductReviews/>}></Route>
            
                <Route
                    path='/AdminDashboard/*'
                    element={<AdminDashboard />}
                ></Route>
                <Route path='/*' element={<ErrorPage />}></Route>
               
         
            
                <Route path='/checkout' element={<CheckOut />} />
                <Route
                    path='/confirmation'
                    element={<PaymentConfirmationPage />}
                />
                <Route path='/AdminDashboard/*' element={<AdminDashboard />} />
                <Route path='/*' element={<ErrorPage />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default App
