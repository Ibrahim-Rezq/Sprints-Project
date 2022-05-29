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
import './Style/index.css'

function App() {
    return (
        <BrowserRouter>
            <Header />
            {/* <SideBarNav /> */}
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/About' element={<About />}></Route>
                <Route path='/accounts' element={<Accounts />}></Route>
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
