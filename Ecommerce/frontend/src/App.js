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
    PaymentConfirmation,
    Products,
} from './Pages'
import { Header, Footer, ProtectedLinks } from './Components/Global'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/About' element={<About />}></Route>
                <Route path='/cart' element={<Cart />}></Route>
                <Route path='/Products' element={<Products />}></Route>
                <Route path='/product/:id' element={<SingleProduct />}></Route>
                <Route path='/accounts/*' element={<Accounts />}></Route>
                <Route
                    path='/Profile'
                    element={
                        <ProtectedLinks>
                            <UserProfile />
                        </ProtectedLinks>
                    }
                ></Route>

                <Route
                    path='/checkout/*'
                    element={
                        <ProtectedLinks>
                            <CheckOut />
                        </ProtectedLinks>
                    }
                />
                <Route path='/*' element={<ErrorPage />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default App
