import Navbar from "./NavBar"
import ChatBot from "./chatbot/ChatBot"
import About from "./components/About"
import Products from "./components/Products"
import Shop from "./Shop/Shop"
import { Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import Book from './components/Book'
import ProductPage from "./ProductPage/ProductPage"
import CartPage from "./CartPage/CartPage"
import Checkout from "./Checkout/CheckoutPage"
import Card from './components/Card'
import FAQ from './FAQ/FAQ'


function App() {

  
  return (
    <>
      <Navbar />
      <ChatBot />
      <div className="container">
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/Book" element={<Book />} />
          <Route path="/ProductPage" element={<ProductPage />} />
          <Route path="/CartPage" element={<CartPage />} />
          <Route path="/CheckoutPage" element={<Checkout />} />
          <Route path="/Card" element={<Card />} />
          <Route path="/FAQ" element={<FAQ />} />
        </Routes>
      </div>
    </>
  )
}

export default App
