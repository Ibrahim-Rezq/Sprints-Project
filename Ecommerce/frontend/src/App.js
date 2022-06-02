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
import PaymentConfirmationPage from './Pages/PaymentConfirmationPage'
import { Header, Footer, SideBarNav } from './Components'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/About' element={<About />} />
                <Route path='/accounts/*' element={<Accounts />} />
                <Route path='/orders' element={<Orders />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/SingleProduct' element={<SingleProduct />} />
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
