import { Button } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import CartCard from "../CartCard/Cartcard";
import CustomLink from "../components/CustomLink";

export default function CartMain(){
    
    const location = useLocation();
    if (location === null) return;
    const img = location.state.img;
    const price = location.state.newPrice;
    const title = location.state.title;
    const prevPrice = location.state.prevPrice;
    const score = location.state.score;

    const routeState = {
        img : img,
        price : price,
        title : title,
        prevPrice : prevPrice,
        score : score,
    }

    function getPrice(){
        return price;
    }
    
    return(
        <>
        <div className="container mt-8">
            <div className="row">
                <p className='text-5xl subpixel-antialiased'>Your Cart item :</p>
            </div>
            <div className="row mt-12">
                <div className="col-md-6">
                    <div className="row">
                        <CartCard
                        img = {img}
                        title = {title}
                        price = {price}
                        prevPrice={prevPrice}
                        score = {score}
                        />
                    </div>
                </div>
                <div className="col-md-6">
                <div className="row">
                <p className='text-3xl subpixel-antialiased text-center'>Total price : {getPrice()}</p>
                </div>
                <div className="row mt-10 text-center justify-content-center ">
                    <CustomLink to ="/CheckoutPage" style={{width:"auto"}} state={routeState}><Button variant="danger">Go to checkout</Button></CustomLink>
                </div>
                </div>
            </div>
        </div>
        </>
    );
}



