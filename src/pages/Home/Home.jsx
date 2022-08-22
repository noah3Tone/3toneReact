import "./Home.scss";
import Collage from "../../components/Collage/Collage";
import img1 from "../../assets/img/Asset20n.png"
import img2 from "../../assets/img/Asset21n.png"
import img3 from "../../assets/img/Asset22n.png"
import img4 from "../../assets/img/Asset23n.png"
import img5 from "../../assets/img/Asset25n.png"
//import scribble from "../../assets/img/asset-scribble.png"
import Product from "../../components/Product/Product";
import Products from "../../components/Products/Products";

const Home = () => {

    
    return(
        <div className="homepage-container">
            <div className="homepage-top">
                <div className="homepage-top__title-container">
                    <h1 className="homepage-top__title-container__title">RELEASE <br></br>UNLIMITED <br></br>MUSIC <br></br>EVERYWHERE</h1>
                    <h4 className="homepage-top__title-container__subtitle">UNLIKE DISTRO AND DITTO, WE ACTUALLY MEAN <br></br>UNLIMITED AND EVERYWHERE</h4>
                </div>
                <Collage img1={img1} img2={img2} img3={img3} img4={img4} img5={img5} />
            </div>
            <div className="homepage-mid">
                <div className="homepage-mid__title-container">
                    <div className="homepage-mid__title-container__title">PRICING</div>
                </div>
                <div className="product-container">
                    <Products />
                </div>
                <div className="product-container">
                        <Product name="LITE" price="£24.99" isSubscription="true" />
                        <Product name="PLUS" price="£65.99" isSubscription="true" isFeatured="true"/>
                        <Product name="PRO" price="£129.99" isSubscription="true" />
                </div>
            </div>
            <div className="homepage-bottom">
                
            </div>
        </div>
    )
}

export default Home;