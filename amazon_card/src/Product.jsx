import "./Product.css";
import Price from "./Price";

function Product({ title, idx }) {
    let oldPrices = ["12,295", "11,900", "1,599", "599"];
    let newPrices = ["8,999", "9,199", "899", "278"];
    let descriptions = [
        ["8,000 DPI", "Programmable buttons"],
        ["intuitive surface","designed for iPad Pro"],
        ["designed for iPad Pro","intuitive surface"],
        ["wireless","optical orientation"],
    ];

    return (
        <div className="Product">
            <h4>{title}</h4>
            <p>{descriptions[idx][0]}</p>
            <p>{descriptions[idx][1]}</p>
            <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]} />
        </div>
    );
}

export default Product;


