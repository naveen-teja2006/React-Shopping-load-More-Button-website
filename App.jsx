import ReactDOM from 'react-dom/client';    
import react from "react";
import Navbar from './Navbar.jsx';
import "./Navbar.css";
import FetchProducts from './FetchProducts.jsx';
import Footer from './Footer.jsx';
const root = ReactDOM.createRoot(document.getElementById('root'));
function App(){
    return(
        <div>
            <Navbar />
            <FetchProducts />
            <Footer />
        </div>
    )
}
root.render(<App />);
