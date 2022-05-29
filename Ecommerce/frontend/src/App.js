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
                <Route path='/*' element={<ErrorPage />}></Route>
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default App
