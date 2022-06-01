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
            {/* <SideBarNav /> */}
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/About' element={<About />}></Route>
                <Route path='/accounts' element={<Accounts />}></Route>
                <Route path='/orders' element={<Orders />}></Route>
                <Route path='/cart' element={<Cart />}></Route>
                <Route path='/SingleProduct' element={<SingleProduct />}></Route>
                <Route path='/checkout' element={<CheckOut />}></Route>
                <Route path='/checkout' element={<CheckOut />}></Route>
                <Route path='/confirmation' element={<PaymentConfirmationPage/>}></Route>


                
                <Route
                    path='/AdminDashboard'
                    element={<AdminDashboard />}
                ></Route>
                <Route path='/*' element={<ErrorPage />}></Route>
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default App
