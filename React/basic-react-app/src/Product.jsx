import './Product.css';
import Price from './Price';

function Product({ title, idx }) {
    let oldPrices = ["12,495", "11,900", "1,599", "500"];
    let newPrices = ["8,999", "9,199", "899", "299"];
    let descriptions = [
        ["8,000 DPI", "5 Programmable buttons"],
        ["Designed for iPad Pro", "8,000 DPI" ],
        ["Intuitive Surface", "Wireless"],
        ["Wireless", "Intuitive Surface"],
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