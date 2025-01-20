import { Product } from "../../api/Api";
import rasim1 from "./../../assets/minimal-49-512.webp";

const Cart = () => {
  const cart = JSON.parse(localStorage.getItem("cart") || "[]");

  const handleRemove = (productId: string) => {
    const updatedCart = cart.filter((item: Product) => item.id !== productId);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    window.location.reload();
  };

  return (
    <div className="contianer">
      <div>
        {cart.length === 0 ? (
          <div className="flex justify-center">
            <img src={rasim1} alt="" />
          </div>
        ) : (
          cart.map((product: Product) => (
            <div key={product.id} className="cart-item">
              <img src={product.urls[0]} alt={product.name} />
              <div>
                <h3>{product.name}</h3>
                <p>Price: ${product.desprice}</p>
                <button onClick={() => handleRemove(product.id)}>Remove</button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Cart;
