
import  Stepper  from "../Stepper/StepperProductPage";
import Comments from "../Comments/Comments";
import ProductMain from "../ProductMain/ProductMain";
function ProductPage(){

    return(
        <>
        <Stepper />
        <ProductMain />
        <Comments />
        </>
    );
}
export default ProductPage;