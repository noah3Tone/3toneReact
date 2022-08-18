import "./Product.scss";
import scribble from "../../assets/img/asset-scribble.png";
//import cart from "../../assets/svg/cart.svg";

const Product = (props) => {

    const {id, name, price, isSubscription, isFeatured} = props;

    return(
        <a className="product" href={`cart/${id}`}>
            <div className="product__title-container">
                <h2 className="product__title-container__title">{name}</h2>
                {isFeatured ? <img className="product__title-container__scribble" src={scribble} alt="3toneMusic"></img> : ""}
            </div>
            <p className="product__price">{price}</p>{isSubscription ? <p className="product__subscription">/a year</p> : ""}
            <div className="product__add-to-cart">
				
				<span className="product__add-to-cart__text">Add to Cart</span>
			</div>
        </a>
    )
}
//<span>{cart}</span>

export default Product;