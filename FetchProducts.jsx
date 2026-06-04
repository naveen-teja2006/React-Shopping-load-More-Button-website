import React from "react";
import "./FetchProducts.css";
function FetchProducts() {
    let [product, setProduct] = React.useState([]);
    let [loading, setLoading] = React.useState(false);
    let [limit, setLimit] = React.useState(0);
    React.useEffect(() => {
        async function fetchData() {
            setLoading(true);
            let skipCalculation = limit - 10;
            let response = await fetch(`https://dummyjson.com/products?limit=10&skip=${skipCalculation}`);
            let data = await response.json();
            setProduct((prevProducts) => [...prevProducts, ...data.products]);
            setLoading(false);
            // console.log(data.products);
        }
        fetchData();
    }, [limit]);
    return (
        <div className="container">
            <div className="product-container">
                {loading ? (
                    <p className="loading"></p>
                ) : (
                    product.map((item) => (
                        <div key={item.id} className="product-item">
                            <img src={item.thumbnail} alt={item.title} className="product-image" />
                            <h3 className="product-title">{item.title}</h3>
                            <p className="product-description">{item.description}</p>
                            <p className="product-price">${item.price.toFixed(2)}</p>
                        </div>
                    )))}
            </div>
            <div className="btn-container">
                <button className="load-more-btn" onClick={() => { setLimit(limit + 10) }}>Load More Products</button>
            </div>
        </div>
    )
}
export default FetchProducts;
