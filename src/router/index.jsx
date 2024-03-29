import '../styles/navbar.css'
import { Routes, Route } from "react-router-dom"
import Navbar from "../companent/navbar";
import Page1 from '../pages/page1';

export const Routers = ()=> {
    return(
        <>
            <Navbar/>
            <div className="max-container">
                <div className="container">
                    <Routes>
                        <Route path="/" element={<Page1/>}/>
                        <Route path="*" element={<h1>404 ERROR node fount</h1>}/>
                    </Routes>
                </div>
                <div className="footer">
                </div>
            </div>
        </>
    )
}

export default Routers;